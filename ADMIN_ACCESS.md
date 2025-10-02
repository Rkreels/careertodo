# 🔐 Admin Access - Security Guidelines

## ⚠️ **IMPORTANT SECURITY NOTICE**

Admin access is now **hidden from public view** for security reasons. Admin functionality can only be accessed through direct URLs.

---

## 🚀 **Admin Setup (One-Time)**

### **Option 1: Browser Console Method**
1. Open your application in browser
2. Open Developer Console (F12)
3. Run: `createAdminUser()`
4. Admin account will be created with default credentials

### **Option 2: Direct Database Method**
Run this SQL query in your Supabase SQL editor:

```sql
INSERT INTO users (id, email, name, phone, password, role, is_paid, payment_status)
VALUES (
  gen_random_uuid(),
  'admin@careertodo.com',
  'System Administrator',
  '01700000000',
  'Admin123!@#', -- In production, use hashed passwords
  'admin',
  true,
  'completed'
)
ON CONFLICT (email) DO NOTHING;
```

---

## 🔑 **Admin Login URLs**

### **Admin Login Page**
```
http://localhost:3000/admin-login
```

### **Admin Dashboard**
```
http://localhost:3000/admin
```

---

## 📋 **Default Admin Credentials**

```
Email: admin@careertodo.com
Password: Admin123!@#
```

---

## 🛡️ **Security Features**

### **✅ What's Removed**
- ❌ Admin buttons from login modal
- ❌ Admin setup from main navigation
- ❌ Public admin access points
- ❌ Admin UI elements in user interface

### **✅ What's Protected**
- ✅ Admin routes require authentication
- ✅ Role-based access control
- ✅ Automatic admin status verification
- ✅ Access denied for unauthorized users

---

## 🔧 **How Admin Authentication Works**

### **Database Schema**
The `users` table includes a `role` field:
```sql
role VARCHAR(50) DEFAULT 'user'
```

### **Authentication Flow**
1. User visits `/admin-login` (hidden URL)
2. Enters admin credentials
3. System checks `role = 'admin'` in database
4. If valid, redirects to `/admin` dashboard
5. All admin routes protected with `requireAdmin={true}`

### **Route Protection**
```typescript
<ProtectedRoute requireAdmin={true}>
  <AdminDashboard />
</ProtectedRoute>
```

---

## 🚨 **Security Best Practices**

### **Production Environment**
1. **Change Default Password**
   ```bash
   # Update admin password immediately
   ```

2. **Use Environment Variables**
   ```env
   ADMIN_EMAIL=your-admin@company.com
   ADMIN_PASSWORD=your-secure-password
   ```

3. **Implement Password Hashing**
   ```sql
   -- Use bcrypt or similar for password hashing
   ```

4. **Enable Audit Logging**
   ```sql
   -- Track admin login attempts and actions
   ```

### **Development Environment**
- ✅ Default credentials available for testing
- ✅ Admin login accessible via direct URL
- ✅ No public admin UI elements

---

## 🔍 **Testing Admin Access**

### **Step 1: Create Admin User**
```javascript
// In browser console
createAdminUser()
```

### **Step 2: Login as Admin**
1. Go to: `http://localhost:3000/admin-login`
2. Enter admin credentials
3. Verify redirect to admin dashboard

### **Step 3: Test Protection**
- Try accessing `/admin` without login → Should redirect
- Try accessing with regular user → Should show access denied
- Verify admin dashboard functionality

---

## 🐛 **Troubleshooting**

### **Admin Login Not Working**
1. **Check Database**
   ```sql
   SELECT email, role FROM users WHERE email = 'admin@careertodo.com';
   ```

2. **Verify Role Assignment**
   - Ensure `role = 'admin'` in database
   - Check `is_paid = true` for admin users

3. **Clear Browser Cache**
   - Clear localStorage and sessionStorage
   - Try login again

### **Access Denied Issues**
1. **Check AuthContext**
   - Verify `isAdmin` is true after login
   - Check browser console for errors

2. **Route Protection**
   - Ensure admin routes use `requireAdmin={true}`
   - Verify ProtectedRoute component is working

---

## 📞 **Support**

For admin access issues:
1. Check browser console for error messages
2. Verify database schema includes `role` field
3. Ensure admin user exists with correct role
4. Review this guide for troubleshooting steps

---

## ⚡ **Quick Reference**

| Task | URL/Command | Description |
|------|-------------|-------------|
| Create Admin | `createAdminUser()` | Run in browser console |
| Admin Login | `/admin-login` | Hidden admin login page |
| Admin Dashboard | `/admin` | Protected admin area |
| Check Role | `SELECT role FROM users WHERE email = 'admin@careertodo.com';` | Database query |

---

**🔐 Remember: Admin access is intentionally hidden for security. Only share these URLs with authorized personnel.**