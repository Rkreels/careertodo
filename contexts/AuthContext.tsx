import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase, authHelpers, adminHelpers } from '@/lib/supabase';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isAdmin: boolean;
  signUp: (email: string, password: string, metadata?: any) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<{ error: any }>;
  resetPassword: (email: string) => Promise<{ error: any }>;
  checkAdminStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [supabaseError, setSupabaseError] = useState(false);

  const checkAdminStatus = async () => {
    if (!user) {
      setIsAdmin(false);
      return;
    }

    try {
      const { isAdmin: isUserAdmin } = await adminHelpers.checkAdminRole(user.id);
      setIsAdmin(isUserAdmin);
    } catch (error) {
      console.error('Error checking admin status:', error);
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    // Check if Supabase is properly configured
    if (!supabase) {
      console.warn('Supabase not configured - running in demo mode');
      setSupabaseError(true);
      setLoading(false);
      return;
    }

    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setSession(session);
        setUser(session?.user ?? null);
      } catch (error) {
        console.warn('Supabase auth error - running in demo mode:', error);
        setSupabaseError(true);
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    // Listen for auth changes
    try {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          setSession(session);
          setUser(session?.user ?? null);
          setLoading(false);
        }
      );

      return () => subscription.unsubscribe();
    } catch (error) {
      console.warn('Supabase subscription error - running in demo mode:', error);
      setSupabaseError(true);
    }
  }, []);

  // Check admin status whenever user changes
  useEffect(() => {
    if (user && !supabaseError) {
      checkAdminStatus();
    } else {
      setIsAdmin(false);
    }
  }, [user, supabaseError]);

  const signUp = async (email: string, password: string, metadata?: any) => {
    if (supabaseError) {
      return { error: new Error('Demo mode - authentication not available') };
    }
    const { error } = await authHelpers.signUp(email, password, metadata);
    return { error };
  };

  const signIn = async (email: string, password: string) => {
    if (supabaseError) {
      return { error: new Error('Demo mode - authentication not available') };
    }
    const { error } = await authHelpers.signIn(email, password);
    return { error };
  };

  const signOut = async () => {
    if (supabaseError) {
      return { error: new Error('Demo mode - authentication not available') };
    }
    const { error } = await authHelpers.signOut();
    return { error };
  };

  const resetPassword = async (email: string) => {
    if (supabaseError) {
      return { error: new Error('Demo mode - authentication not available') };
    }
    const { error } = await authHelpers.resetPassword(email);
    return { error };
  };

  const value = {
    user,
    session,
    loading,
    isAdmin,
    signUp,
    signIn,
    signOut,
    resetPassword,
    checkAdminStatus,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const useAuthRedirect = () => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    if (user) {
      // User is logged in, check payment status
      if (!user.is_paid) {
        // User hasn't paid, redirect to payment
        window.location.href = '/payment';
      } else {
        // User has paid, redirect to dashboard
        window.location.href = '/dashboard';
      }
    }
  }, [user, loading]);

  return { user, loading };
};