// Create Admin User Script
// Run this script in the browser console or as a one-time setup

import { adminHelpers } from '../lib/supabase';

const DEFAULT_ADMIN = {
  email: 'admin@careertodo.com',
  password: 'Admin123!@#',
  name: 'System Administrator',
  phone: '01700000000'
};

// Function to create admin user
export async function createAdminUser() {
  console.log('🚀 Creating admin user...');
  
  try {
    const { user, error } = await adminHelpers.createAdminUser(
      DEFAULT_ADMIN.email,
      DEFAULT_ADMIN.password,
      DEFAULT_ADMIN.name,
      DEFAULT_ADMIN.phone
    );

    if (error) {
      if (error.message.includes('duplicate key') || error.message.includes('already registered')) {
        console.log('✅ Admin user already exists');
        console.log('📧 Email:', DEFAULT_ADMIN.email);
        console.log('🔑 Password:', DEFAULT_ADMIN.password);
        return { success: true, message: 'Admin user already exists' };
      } else {
        console.error('❌ Error creating admin:', error.message);
        return { success: false, error: error.message };
      }
    }

    console.log('✅ Admin user created successfully!');
    console.log('📧 Email:', DEFAULT_ADMIN.email);
    console.log('🔑 Password:', DEFAULT_ADMIN.password);
    console.log('🌐 Admin Login URL: http://localhost:3000/admin-login');
    
    return { success: true, user };
  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
    return { success: false, error: error.message };
  }
}

// Auto-execute for browser console usage
if (typeof window !== 'undefined') {
  window.createAdminUser = createAdminUser;
  console.log('💡 Admin creation function loaded. Run createAdminUser() in console to create admin account.');
}