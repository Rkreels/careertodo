import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase, authHelpers } from '@/lib/supabase';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, metadata?: any) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<{ error: any }>;
  resetPassword: (email: string) => Promise<{ error: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [supabaseError, setSupabaseError] = useState(false);

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
    signUp,
    signIn,
    signOut,
    resetPassword,
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