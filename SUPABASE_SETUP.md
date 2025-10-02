# Supabase Configuration Guide

## Environment Variables Setup

For the authentication to work properly, you need to configure the following environment variables:

### Required Environment Variables

1. **VITE_SUPABASE_URL**
   - Your Supabase project URL
   - Format: `https://your-project-id.supabase.co`
   - Get this from your Supabase project dashboard → Settings → API

2. **VITE_SUPABASE_ANON_KEY**
   - Your Supabase anonymous/public key
   - Get this from your Supabase project dashboard → Settings → API
   - This key is safe to use in client-side code

### Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:
   - **Name**: `VITE_SUPABASE_URL`
   - **Value**: `https://your-project-id.supabase.co`
   - **Name**: `VITE_SUPABASE_ANON_KEY`
   - **Value**: `your-supabase-anon-key`

4. Make sure to select **Production**, **Preview**, and **Development** environments
5. Redeploy your application after adding the variables

### Local Development

Create a `.env` file in your project root:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here
```

### Troubleshooting

#### Error: `demo.supabase.co/auth/v1/token?grant_type=password`

This error indicates that the environment variables are not properly configured:

1. **Check Vercel Environment Variables**:
   - Ensure variables are spelled correctly: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
   - Make sure they're set for all environments (Production, Preview, Development)
   - Verify the values are correct (copy-paste from Supabase dashboard)

2. **Check Browser Console**:
   - Open browser dev tools
   - Look for "Supabase URL: Set/Not set" messages
   - This will tell you if the environment variables are being loaded

3. **Redeploy After Changes**:
   - Environment variable changes require a redeploy
   - Go to Vercel dashboard → Deployments → Redeploy

#### Common Issues

- **Missing VITE_ prefix**: In Vite, all client-side environment variables must be prefixed with `VITE_`
- **Wrong environment**: Make sure you're setting variables for the correct environment in Vercel
- **Cache issues**: Try a hard refresh (Ctrl+Shift+R) or clear browser cache
- **Deployment not updated**: Environment variables changes require a new deployment

### Testing the Configuration

After setting up the environment variables:

1. Open your application
2. Open browser dev tools (F12)
3. Check the console for:
   - `Supabase URL: Set`
   - `Supabase Anon Key: Set`
4. Try to sign up or log in
5. If you see "Demo mode - authentication not available", the variables are still not loaded correctly

### Supabase Project Setup

If you haven't created a Supabase project yet:

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings → API
4. Copy the Project URL and anon key
5. Configure the environment variables as shown above

### Security Notes

- The `anon` key is safe to use in client-side code
- Never expose your `service_role` key in client-side code
- Always use environment variables, never hardcode credentials