import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables:');
  console.error('- VITE_SUPABASE_URL:', supabaseUrl || 'Missing');
  console.error('- VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Set' : 'Missing');
  
  // Don't throw error in production, just return null
  if (import.meta.env.PROD) {
    console.warn('Running in production without Supabase configuration');
  } else {
    throw new Error('Missing Supabase environment variables. Please check your .env file or Vercel environment variables.');
  }
}

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Auth helper functions
export const authHelpers = {
  // Sign up new user
  async signUp(email: string, password: string, metadata?: any) {
    if (!supabase) {
      return { error: new Error('Supabase not configured') };
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata
      }
    });
    return { data, error };
  },

  // Sign in user
  async signIn(email: string, password: string) {
    if (!supabase) {
      return { error: new Error('Supabase not configured') };
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return { data, error };
  },

  // Sign out user
  async signOut() {
    if (!supabase) {
      return { error: new Error('Supabase not configured') };
    }
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  // Get current user
  async getCurrentUser() {
    if (!supabase) {
      return { user: null, error: new Error('Supabase not configured') };
    }
    const { data: { user }, error } = await supabase.auth.getUser();
    return { user, error };
  },

  // Reset password
  async resetPassword(email: string) {
    if (!supabase) {
      return { error: new Error('Supabase not configured') };
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    return { error };
  },

  // Update user metadata
  async updateUserMetadata(metadata: any) {
    if (!supabase) {
      return { error: new Error('Supabase not configured') };
    }
    const { data, error } = await supabase.auth.updateUser({
      data: metadata
    });
    return { data, error };
  },

  // Listen to auth changes
  onAuthStateChange(callback: (event: string, session: any) => void) {
    if (!supabase) {
      return { data: { subscription: null } };
    }
    return supabase.auth.onAuthStateChange(callback);
  }
};

// Database helper functions
export const dbHelpers = {
  // Generic select function
  async select(table: string, options?: {
    columns?: string;
    filter?: Record<string, any>;
    orderBy?: { column: string; ascending?: boolean };
    limit?: number;
  }) {
    if (!supabase) {
      return { data: null, error: new Error('Supabase not configured') };
    }
    let query = supabase.from(table).select(options?.columns || '*');

    if (options?.filter) {
      Object.entries(options.filter).forEach(([key, value]) => {
        query = query.eq(key, value);
      });
    }

    if (options?.orderBy) {
      query = query.order(options.orderBy.column, { 
        ascending: options.orderBy.ascending ?? true 
      });
    }

    if (options?.limit) {
      query = query.limit(options.limit);
    }

    const { data, error } = await query;
    return { data, error };
  },

  // Generic insert function
  async insert(table: string, data: any) {
    if (!supabase) {
      return { data: null, error: new Error('Supabase not configured') };
    }
    const { data: result, error } = await supabase.from(table).insert(data).select();
    return { data: result, error };
  },

  // Generic update function
  async update(table: string, id: string, data: any) {
    if (!supabase) {
      return { data: null, error: new Error('Supabase not configured') };
    }
    const { data: result, error } = await supabase
      .from(table)
      .update(data)
      .eq('id', id)
      .select();
    return { data: result, error };
  },

  // Generic delete function
  async delete(table: string, id: string) {
    if (!supabase) {
      return { error: new Error('Supabase not configured') };
    }
    const { error } = await supabase.from(table).delete().eq('id', id);
    return { error };
  }
};

export default supabase;