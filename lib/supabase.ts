import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://demo.supabase.co'
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'demo-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Auth helpers
export const authHelpers = {
  signUp: async (email: string, password: string, metadata?: any) => {
    return await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata
      }
    })
  },

  signIn: async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({
      email,
      password
    })
  },

  signOut: async () => {
    return await supabase.auth.signOut()
  },

  resetPassword: async (email: string) => {
    return await supabase.auth.resetPasswordForEmail(email)
  },

  getCurrentUser: async () => {
    const { data: { user } } = await supabase.auth.getUser()
    return { user }
  }
}

// Admin helpers
export const adminHelpers = {
  createAdminUser: async (email: string, password: string, name: string, phone: string) => {
    // First create the user
    const { data, error } = await authHelpers.signUp(email, password, { name, phone, role: 'admin' })
    
    if (error) return { user: null, error }
    
    // Then create admin profile in database (if tables exist)
    try {
      const { error: profileError } = await supabase
        .from('admin_users')
        .insert([{
          user_id: data.user?.id,
          email,
          name,
          phone,
          role: 'admin',
          created_at: new Date().toISOString()
        }])
      
      // If table doesn't exist, we'll just return the user without admin profile
      if (profileError && !profileError.message.includes('relation "admin_users" does not exist')) {
        console.warn('Admin profile creation failed:', profileError)
      }
    } catch (err) {
      console.warn('Admin profile creation failed:', err)
    }
    
    return { user: data.user, error: null }
  },

  checkAdminRole: async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('role')
        .eq('user_id', userId)
        .single()
      
      if (error || !data) {
        // Check if user metadata has admin role
        const { data: { user } } = await supabase.auth.getUser()
        const isAdmin = user?.user_metadata?.role === 'admin' || user?.email === 'admin@careertodo.com'
        return { isAdmin: isAdmin || false }
      }
      
      return { isAdmin: data.role === 'admin' }
    } catch (err) {
      // Fallback to email check
      const { data: { user } } = await supabase.auth.getUser()
      const isAdmin = user?.email === 'admin@careertodo.com'
      return { isAdmin: isAdmin || false }
    }
  }
}

// Database helpers (for when database is available)
export const dbHelpers = {
  // User profiles
  createUserProfile: async (userId: string, profile: any) => {
    try {
      return await supabase
        .from('users')
        .insert([{ id: userId, ...profile, created_at: new Date().toISOString() }])
    } catch (err) {
      console.warn('User profile creation failed:', err)
      return { data: null, error: null }
    }
  },

  getUserProfile: async (userId: string) => {
    try {
      return await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single()
    } catch (err) {
      console.warn('User profile fetch failed:', err)
      return { data: null, error: null }
    }
  },

  updateUserProfile: async (userId: string, updates: any) => {
    try {
      return await supabase
        .from('users')
        .update(updates)
        .eq('id', userId)
    } catch (err) {
      console.warn('User profile update failed:', err)
      return { data: null, error: null }
    }
  }
}

export default supabase