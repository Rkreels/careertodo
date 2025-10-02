# CareerToDo Platform - Quick Start Guide

## 🚀 5-Minute Deployment

This guide will get your CareerToDo platform deployed on Vercel with Supabase in under 5 minutes.

## Prerequisites
- GitHub account
- Vercel account (sign up with GitHub)
- Supabase account (sign up with GitHub)

## Step 1: Create Supabase Project (2 minutes)

1. **Go to [supabase.com](https://supabase.com)**
2. **Click "Start your project"**
3. **Create new project:**
   - Name: `career-todo`
   - Database Password: Generate and save it
   - Region: Choose closest to your users

4. **Run SQL Migration:**
   - Go to SQL Editor
   - Copy this entire script and run it:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_paid BOOLEAN DEFAULT FALSE,
    payment_status VARCHAR(50) DEFAULT 'pending',
    role VARCHAR(50) DEFAULT 'user',
    referral_code VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Payments table
CREATE TABLE IF NOT EXISTS payments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    amount DECIMAL(10,2) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    bKash_transaction_id VARCHAR(100),
    verified_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Devices table
CREATE TABLE IF NOT EXISTS devices (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    device_id VARCHAR(255) NOT NULL,
    device_info TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    last_active TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User sessions table
CREATE TABLE IF NOT EXISTS user_sessions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    token VARCHAR(500) NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON payments(user_id);
CREATE INDEX IF NOT EXISTS idx_devices_user_id ON devices(user_id);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE devices ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own profile" ON users
    FOR SELECT USING (auth.uid()::text = id::text);

CREATE POLICY "Users can update own profile" ON users
    FOR UPDATE USING (auth.uid()::text = id::text);

CREATE POLICY "Users can view own payments" ON payments
    FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can insert own payments" ON payments
    FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Users can manage own devices" ON devices
    FOR ALL USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can manage own sessions" ON user_sessions
    FOR ALL USING (auth.uid()::text = user_id::text);
```

5. **Get Your Credentials:**
   - Go to Settings → API
   - Copy these 3 values:
     - Project URL
     - anon public key  
     - service_role key

## Step 2: Deploy to Vercel (3 minutes)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Add Environment Variables:**
   - After deployment, go to project settings
   - Add these environment variables:

   ```
   SUPABASE_URL=https://your-project-id.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   JWT_SECRET=your_random_secret_here
   NODE_ENV=production
   ```

4. **Redeploy:**
   - Go to "Deployments" tab
   - Click "Redeploy" or push a new commit

## Step 3: Test Your App (30 seconds)

1. **Visit your app:** `https://your-app-name.vercel.app`
2. **Test registration:** Create a new account
3. **Check database:** Go to Supabase → Table Editor → Users table

## 🎉 You're Live!

Your CareerToDo platform is now deployed and ready to use!

## Next Steps

### Custom Domain (Optional)
1. In Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS settings

### Monitor Performance
1. Vercel Analytics: Enable in dashboard
2. Supabase Logs: Monitor in Supabase dashboard

### Scale Up
1. Monitor usage in both dashboards
2. Upgrade plans as needed
3. Consider custom optimizations

## Troubleshooting

### If deployment fails:
- Check Vercel build logs
- Ensure all dependencies are installed
- Verify environment variables

### If database connection fails:
- Double-check Supabase URL and keys
- Ensure Supabase project is active
- Check RLS policies

### If users can't register:
- Check Auth settings in Supabase
- Verify email confirmation settings
- Test RLS policies

## Support

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Supabase Docs:** [supabase.com/docs](https://supabase.com/docs)
- **GitHub Issues:** Create an issue in your repository

## Quick Commands

```bash
# Check deployment status
vercel ls

# View logs
vercel logs

# Redeploy
vercel --prod
```

**Your platform is now live and ready to help users develop their career skills! 🚀**