// Admin Setup Script
// This script creates a default admin user for the CareerToDo platform

import { adminHelpers } from '../lib/supabase';

const DEFAULT_ADMIN = {
  email: 'admin@careertodo.com',
  password: 'Admin123!@#',
  name: 'System Administrator',
  phone: '01700000000'
};

async function setupAdmin() {
  console.log('🚀 Setting up default admin user...');
  console.log('📧 Email:', DEFAULT_ADMIN.email);
  console.log('👤 Name:', DEFAULT_ADMIN.name);
  
  try {
    const { user, error } = await adminHelpers.createAdminUser(
      DEFAULT_ADMIN.email,
      DEFAULT_ADMIN.password,
      DEFAULT_ADMIN.name,
      DEFAULT_ADMIN.phone
    );

    if (error) {
      console.error('❌ Error creating admin user:', error.message);
      
      // Check if admin already exists
      if (error.message.includes('duplicate key') || error.message.includes('already registered')) {
        console.log('ℹ️ Admin user already exists. You can login with:');
        console.log('   Email:', DEFAULT_ADMIN.email);
        console.log('   Password:', DEFAULT_ADMIN.password);
      }
      return;
    }

    console.log('✅ Admin user created successfully!');
    console.log('📋 Login Details:');
    console.log('   Email:', DEFAULT_ADMIN.email);
    console.log('   Password:', DEFAULT_ADMIN.password);
    console.log('   Role: Admin');
    console.log('');
    console.log('🔐 You can now login as admin by:');
    console.log('1. Opening the login modal');
    console.log('2. Clicking the "Admin" button');
    console.log('3. Entering the credentials above');
    console.log('');
    console.log('⚠️  IMPORTANT: Change the default password in production!');
    
  } catch (error: any) {
    console.error('❌ Unexpected error:', error.message);
  }
}

// Export for use in other files
export { setupAdmin, DEFAULT_ADMIN };

// Auto-run if this file is executed directly
if (typeof window === 'undefined' && require.main === module) {
  setupAdmin();
}