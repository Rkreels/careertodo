# CareerToDo Platform - Frontend with Supabase

A modern career skill simulation platform built with React, TypeScript, and Supabase.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Supabase account

### 1. Clone and Install
```bash
git clone <your-repo>
cd career-todo-vite
npm install
```

### 2. Set Up Supabase
1. Create a new project at [supabase.com](https://supabase.com)
2. Run the SQL migration from `supabase/migrations/001_initial_schema.sql`
3. Copy your Project URL and anon key

### 3. Environment Variables
Create `client/.env`:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000`

## 📁 Project Structure

```
career-todo-vite/
├── client/                     # Frontend application
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── contexts/          # React contexts
│   │   ├── hooks/             # Custom hooks
│   │   ├── lib/               # Utilities and Supabase client
│   │   ├── pages/             # Page components
│   │   ├── types/             # TypeScript types
│   │   └── main.tsx           # App entry point
│   └── public/                # Static assets
├── supabase/                  # Supabase configuration
│   └── migrations/            # Database migrations
├── package.json               # Dependencies and scripts
└── vite.config.ts            # Vite configuration
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI**: Tailwind CSS, shadcn/ui, Framer Motion
- **State Management**: React Query, React Context
- **Backend**: Supabase (Database, Auth, Storage)
- **Icons**: Lucide React
- **Forms**: React Hook Form, Zod validation

## 🎯 Features

- 20+ professional tool simulations
- User authentication with Supabase Auth
- Multi-language support (English/Bengali)
- Responsive design
- Real-time data synchronization
- Payment integration ready
- Dashboard with analytics

## 📚 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## 🔧 Configuration

### Supabase Setup
1. Run the migration script in Supabase SQL Editor
2. Enable Row Level Security (RLS) policies
3. Configure authentication providers
4. Set up storage buckets if needed

### Database Schema
The project includes a complete database schema with:
- Users table with authentication
- Payments table for transactions
- Devices table for user sessions
- Proper RLS policies for security

## 🎨 Customization

### Theming
The app uses a light/dark theme system. Customize in:
- `client/src/components/ThemeProvider.tsx`
- `client/src/index.css` for CSS variables

### Colors
Update Tailwind config in `tailwind.config.ts`:
```js
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ }
    }
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

- Check the [Supabase Documentation](https://supabase.com/docs)
- Review the database schema in `supabase/migrations/`
- Open an issue for bugs or feature requests

---

Built with ❤️ using React, TypeScript, and Supabase