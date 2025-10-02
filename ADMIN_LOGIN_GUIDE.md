# Admin Login Guide - CareerToDo Platform

This guide explains how to set up and login as an administrator for the CareerToDo platform.

## 🚀 Quick Setup

### Step 1: Create Admin User

The easiest way to create an admin user is to use the built-in Admin Setup component:

1. Navigate to `/admin-setup` in your browser
2. Click "Create Admin User" 
3. The system will create a default admin account

### Default Admin Credentials

```
Email: admin@careertodo.com
Password: Admin123!@#
Name: System Administrator
Phone: 01700000000
```

## 🔐 How to Login as Admin

### Method 1: Through the Login Modal

1. **Open Login Modal**
   - Click any "Sign In" button on the main page
   - Or navigate to any protected page

2. **Switch to Admin Mode**
   - In the login modal, click the "Admin" button
   - You'll see the admin login form with a shield icon

3. **Enter Admin Credentials**
   - Email: `admin@careertodo.com`
   - Password: `Admin123!@#`

4. **Access Admin Dashboard**
   - After successful login, you'll be redirected to `/admin`
   - You'll see the full admin dashboard with user management, analytics, etc.

### Method 2: Direct Admin Login URL

You can also access admin login directly by going to:
```
/login?mode=admin
```

## 🛡️ Admin Features

Once logged in as admin, you have access to:

### Admin Dashboard (`/admin`)
- **User Management**: View all registered users, their payment status, and activity
- **Payment Monitoring**: Track bKash payments, verify transactions
- **Analytics**: User growth, revenue metrics, conversion rates
- **Platform Settings**: Configure system-wide settings

### Admin Privileges
- View all user data and statistics
- Manage payment verification
- Access platform analytics
- Configure system settings
- Export reports and data

## 🔧 Technical Implementation

### Admin Role System

The admin system is built on top of the existing authentication:

1. **Database Schema**: Users table has a `role` field (default: 'user', admin: 'admin')
2. **Auth Context**: Automatically checks admin status on login
3. **Protected Routes**: Admin routes use `requireAdmin` prop
4. **Route Protection**: Non-admin users are redirected with access denied message

### Key Components

- `AdminLoginForm.tsx`: Dedicated admin login interface
- `AuthContext.tsx`: Enhanced with admin role checking
- `ProtectedRoute.tsx`: Supports `requireAdmin` prop
- `AdminDashboard.tsx`: Full admin interface
- `adminHelpers.ts`: Database functions for admin operations

## 🔒 Security Considerations

### Development Environment
- Default credentials are provided for easy testing
- Admin setup page is accessible for initial configuration

### Production Environment
⚠️ **IMPORTANT**: For production deployment:

1. **Change Default Password**
   ```bash
   # Update the admin password immediately
   # Use a strong, unique password
   ```

2. **Environment Variables**
   ```env
   # Store admin credentials in environment variables
   ADMIN_EMAIL=your-admin@example.com
   ADMIN_PASSWORD=your-secure-password
   ```

3. **Remove Admin Setup Page**
   - Disable or remove `/admin-setup` route in production
   - Create admin users through database scripts instead

4. **Enable Row Level Security**
   - Ensure RLS policies are properly configured
   - Admin users should have bypass RLS privileges

## 🐛 Troubleshooting

### Admin Login Not Working

1. **Check User Role**
   ```sql
   SELECT email, role FROM users WHERE email = 'admin@careertodo.com';
   ```

2. **Verify Admin Status**
   - Check browser console for admin status logs
   - Ensure `isAdmin` is true in AuthContext

3. **Clear Browser Cache**
   - Clear localStorage and sessionStorage
   - Try logging in again

### Access Denied Errors

1. **Verify Role Assignment**
   - Make sure the user has `role = 'admin'` in the database
   - Check that `is_paid = true` for admin users

2. **Check Protected Routes**
   - Ensure admin routes use `requireAdmin={true}`
   - Verify route protection is working

### Admin Dashboard Not Loading

1. **Check Authentication**
   - Verify you're logged in as admin
   - Check browser network tab for API errors

2. **Database Connection**
   - Ensure Supabase is properly configured
   - Check environment variables

## 📝 API Reference

### Admin Helper Functions

```typescript
// Check if user is admin
const { isAdmin, error } = await adminHelpers.checkAdminRole(userId);

// Create admin user
const { user, error } = await adminHelpers.createAdminUser(
  email, password, name, phone
);

// Get user with role information
const { user, error } = await adminHelpers.getUserWithRole(email);
```

### Auth Context Admin Properties

```typescript
const { user, loading, isAdmin } = useAuth();
// isAdmin: boolean - true if current user has admin role
```

### Protected Route Admin Usage

```typescript
<ProtectedRoute requireAdmin={true}>
  <AdminDashboard />
</ProtectedRoute>
```

## 🎯 Next Steps

1. **Create Admin Account**: Use the admin setup page
2. **Test Admin Features**: Explore the dashboard and management tools
3. **Configure Production**: Update credentials and security settings
4. **Train Admin Users**: Document admin workflows and procedures

---

## 📞 Support

If you encounter issues with admin login:

1. Check the browser console for error messages
2. Verify Supabase connection and configuration
3. Ensure database schema includes the `role` field
4. Review this guide for common troubleshooting steps

For additional support, refer to the main project documentation or create an issue in the project repository.