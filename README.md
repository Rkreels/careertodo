# CareerToDo - Vite + React + Supabase

A career development platform built with Vite, React, TypeScript, and Supabase.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Supabase**
   - Copy `.env.example` to `.env`
   - Replace the Supabase URL and anon key with your actual values from Supabase dashboard

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Project Structure

- `/components` - React components
- `/pages` - Page components
- `/contexts` - React contexts (Auth, etc.)
- `/hooks` - Custom React hooks
- `/lib` - Utility functions and configurations
- `/types` - TypeScript type definitions
- `/public` - Static assets
- `/supabase` - Database migrations and config

## Tech Stack

- **Framework**: Vite + React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Backend**: Supabase (PostgreSQL + Auth)
- **State Management**: React Query (TanStack Query)
- **Routing**: Wouter
- **Animations**: Framer Motion

## Features

- User authentication with Supabase
- Career path simulations
- Interactive dashboard
- Real-world tool practice environments
- Responsive design
- Dark mode support