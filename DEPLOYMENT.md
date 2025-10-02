# CareerToDo Platform - Deployment Guide

## Overview
This guide will help you deploy the CareerToDo platform on Vercel with Supabase as the backend database.

## Prerequisites
- Node.js 18+ installed
- Git installed
- Vercel account
- Supabase account
- GitHub repository (recommended)

## Step 1: Set Up Supabase

### 1.1 Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up/login with GitHub
4. Create a new project:
   - Organization: Your organization name
   - Project Name: `career-todo-platform`
   - Database Password: Generate a strong password
   - Region: Choose nearest region to your users

### 1.2 Run Database Migrations
1. Go to your Supabase project dashboard
2. Click on "SQL Editor" in the sidebar
3. Copy and paste the contents of `supabase/migrations/001_initial_schema.sql`
4. Click "Run" to execute the migration

### 1.3 Get Supabase Credentials
From your Supabase project settings:
1. Go to Settings → API
2. Copy these values:
   - Project URL (SUPABASE_URL)
   - anon public key (SUPABASE_ANON_KEY)
   - service_role key (SUPABASE_SERVICE_ROLE_KEY)

## Step 2: Prepare Your Project

### 2.1 Install Dependencies
```bash
npm install
```

### 2.2 Update Environment Variables
1. Copy the environment example files:
```bash
cp .env.example .env
cp client/.env.example client/.env
```

2. Fill in your environment variables:
```bash
# .env (Server-side)
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
JWT_SECRET=your_jwt_secret_here

# client/.env (Client-side)
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_API_URL=https://your-app-name.vercel.app/api
```

### 2.3 Test Local Development
```bash
npm run dev
```
Verify the application works locally before deployment.

## Step 3: Deploy to Vercel

### 3.1 Install Vercel CLI
```bash
npm i -g vercel
```

### 3.2 Login to Vercel
```bash
vercel login
```

### 3.3 Deploy Your Project
```bash
vercel
```
Follow the prompts:
- Set up and deploy? → Yes
- Which scope? → Your Vercel account
- Link to existing project? → No
- Project name? → career-todo-platform (or your choice)
- In which directory is your code located? → ./
- Want to override the settings? → No

### 3.4 Configure Environment Variables in Vercel
1. Go to your Vercel project dashboard
2. Click on "Settings" → "Environment Variables"
3. Add the following environment variables:

**Production Environment Variables:**
```
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
JWT_SECRET=your_jwt_secret_here
NODE_ENV=production
```

### 3.5 Redeploy with Environment Variables
```bash
vercel --prod
```

## Step 4: Configure Custom Domain (Optional)

### 4.1 Add Custom Domain
1. In Vercel dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Follow the DNS configuration instructions

### 4.2 Update Environment Variables
Update `VITE_APP_URL` and `VITE_API_URL` in your environment variables to use your custom domain.

## Step 5: Post-Deployment Setup

### 5.1 Verify Database Connection
1. Visit `https://your-app-name.vercel.app/api/health`
2. You should see: `{"status":"ok","timestamp":"..."}`

### 5.2 Test User Registration
1. Visit your deployed app
2. Try to register a new user
3. Check if the user appears in your Supabase database

### 5.3 Configure Row Level Security (RLS)
1. In Supabase dashboard, go to "Authentication" → "Policies"
2. Verify RLS policies are enabled for all tables
3. Test that users can only access their own data

## Step 6: Monitoring and Maintenance

### 6.1 Set Up Monitoring
1. Vercel Analytics: Enable in Vercel dashboard
2. Supabase Logs: Monitor in Supabase dashboard
3. Error Tracking: Consider integrating Sentry

### 6.2 Database Backups
1. In Supabase dashboard, go to "Settings" → "Database"
2. Configure daily backups
3. Test backup restoration process

### 6.3 Performance Optimization
1. Monitor Vercel build times
2. Optimize images and assets
3. Enable caching headers
4. Monitor database query performance

## Troubleshooting

### Common Issues

#### 1. Database Connection Errors
**Problem:** `Error: getaddrinfo ENOTFOUND`
**Solution:** 
- Verify SUPABASE_URL is correct
- Check if Supabase project is active
- Ensure environment variables are set correctly

#### 2. CORS Errors
**Problem:** `Access-Control-Allow-Origin` errors
**Solution:**
- Add your domain to Supabase CORS settings
- Ensure API routes are properly configured

#### 3. Build Failures
**Problem:** Vercel build fails
**Solution:**
- Check build logs in Vercel dashboard
- Ensure all dependencies are installed
- Verify TypeScript configuration

#### 4. Authentication Issues
**Problem:** Users can't sign up/login
**Solution:**
- Check Supabase Auth settings
- Verify email confirmation settings
- Check RLS policies

### Debug Commands

#### Check Vercel Logs
```bash
vercel logs
```

#### Check Environment Variables
```bash
vercel env ls
```

#### Test API Endpoints
```bash
curl https://your-app-name.vercel.app/api/health
```

## Security Best Practices

### 1. Environment Variables
- Never commit `.env` files to Git
- Use different keys for development and production
- Rotate keys regularly

### 2. Database Security
- Enable Row Level Security (RLS)
- Use service role key only on server-side
- Implement proper user authentication

### 3. API Security
- Validate all input data
- Implement rate limiting
- Use HTTPS only

### 4. Monitoring
- Set up alerts for suspicious activity
- Monitor database usage
- Track error rates

## Scaling Considerations

### 1. Database Scaling
- Monitor Supabase usage limits
- Consider connection pooling
- Implement caching strategies

### 2. Frontend Optimization
- Implement code splitting
- Optimize bundle size
- Use CDN for static assets

### 3. Backend Scaling
- Consider serverless functions for heavy tasks
- Implement background job processing
- Use edge functions for global distribution

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team)

## Quick Checklist

Before going live, ensure:

- [ ] Supabase project is created and migrations applied
- [ ] All environment variables are configured
- [ ] Application builds successfully
- [ ] API endpoints are working
- [ ] User authentication is functional
- [ ] Database RLS policies are enabled
- [ ] Custom domain is configured (if applicable)
- [ ] Monitoring and logging are set up
- [ ] Backup strategy is in place
- [ ] Security best practices are implemented

Congratulations! Your CareerToDo platform is now deployed on Vercel with Supabase backend.