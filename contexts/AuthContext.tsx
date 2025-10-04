import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase, authHelpers, adminHelpers } from '@/lib/supabase';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isAdmin: boolean;
  userProfile: any | null;
  signUp: (email: string, password: string, metadata?: any) => Promise<{ error: any; data?: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any; data?: any }>;
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
  const [userProfile, setUserProfile] = useState<any | null>(null);
  const [supabaseError, setSupabaseError] = useState(false);

  const fetchUserProfile = async (userId: string) => {
    if (!supabase || !userId) return null;
    
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (error) {
        console.error('Error fetching user profile:', error);
        return null;
      }
      
      return data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  };

  const checkAdminStatus = async () => {
    if (!user) {
      setIsAdmin(false);
      setUserProfile(null);
      return;
    }

    try {
      // Fetch user profile first
      const profile = await fetchUserProfile(user.id);
      setUserProfile(profile);
      
      // Check admin role
      const { isAdmin: isUserAdmin } = await adminHelpers.checkAdminRole(user.id);
      setIsAdmin(isUserAdmin);
    } catch (error) {
      console.error('Error checking admin status:', error);
      setIsAdmin(false);
      setUserProfile(null);
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
      setUserProfile(null);
    }
  }, [user, supabaseError]);

  // Handle automatic redirects after authentication - DISABLED FOR NOW
  /*
  useEffect(() => {
    if (user && userProfile && !loading) {
      // Only redirect if we're not already on a protected page
      const currentPath = window.location.pathname;
      const isProtectedPage = ['/dashboard', '/admin', '/payment'].includes(currentPath);
      
      if (!isProtectedPage) {
        // Check if user needs to pay
        if (!userProfile.is_paid) {
          console.log('Redirecting to payment page...');
          window.location.href = '/payment';
        } else {
          console.log('Redirecting to dashboard...');
          window.location.href = '/dashboard';
        }
      }
    }
  }, [user, userProfile, loading]);
  */

  const signUp = async (email: string, password: string, metadata?: any) => {
    if (supabaseError) {
      return { error: new Error('Demo mode - authentication not available') };
    }
    const result = await authHelpers.signUp(email, password, metadata);
    return { error: result.error, data: result.data };
  };

  const signIn = async (email: string, password: string) => {
    if (supabaseError) {
      return { error: new Error('Demo mode - authentication not available') };
    }
    const result = await authHelpers.signIn(email, password);
    return { error: result.error, data: result.data };
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
    userProfile,
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
  const { user, loading, userProfile } = useAuth();

  // DISABLED FOR NOW - Automatic redirects were causing blank screen issues
  /*
  useEffect(() => {
    if (loading) return;

    if (user && userProfile) {
      // User is logged in, check payment status
      if (!userProfile.is_paid) {
        // User hasn't paid, redirect to payment
        window.location.href = '/payment';
      } else {
        // User has paid, redirect to dashboard
        window.location.href = '/dashboard';
      }
    }
  }, [user, loading, userProfile]);
  */

  return { user, loading, userProfile };
};