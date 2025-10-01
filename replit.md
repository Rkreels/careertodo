# CareerToDo

## Overview

CareerToDo is a career simulation edtech platform designed to bridge the skills gap between education and employment. The platform provides hands-on learning through 20+ professional tool simulations including ERP, HRMS, CRM, accounting, and more. Users can practice real-world workflows in Finance, HR, Sales, and Marketing career paths.

The application features a long-scroll marketing homepage with 20+ sections including hero, features, testimonials, pricing, and community sections. It supports bilingual content (English/Bengali) with automatic language detection and theme switching (light/dark mode).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, built using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight alternative to React Router. The application currently has a single-page marketing site with a homepage and 404 fallback.

**UI Component Library**: Built on shadcn/ui (Radix UI primitives) with custom Tailwind CSS styling following the "new-york" preset. Components are organized in `/client/src/components/ui/` for reusable primitives and `/client/src/components/` for feature-specific components.

**Styling System**: 
- Tailwind CSS with custom design tokens defined in CSS variables
- Custom border radius scale (sm to 3xl)
- HSL-based color system with light/dark mode support
- Design follows high-contrast, modern aesthetic with generous whitespace
- Typography uses Inter and Plus Jakarta Sans variable fonts

**Animation & Interactions**: Framer Motion for all animations including scroll-based reveals, hover states, and micro-interactions. Custom hooks like `useReducedMotion` respect user accessibility preferences.

**State Management**: 
- React Query (TanStack Query) for server state management
- React Context for theme and language preferences
- Local component state with React hooks

**Internationalization**: Custom i18n implementation via LanguageProvider context supporting English and Bengali with automatic browser language detection.

### Backend Architecture

**Server Framework**: Express.js with TypeScript running in ESM mode.

**Development Setup**: Custom Vite middleware integration for HMR (Hot Module Replacement) during development. In production, Vite builds static assets that are served by Express.

**API Structure**: RESTful API with routes prefixed with `/api`. Currently minimal backend implementation with placeholder routes in `server/routes.ts`.

**Session Management**: Configured for session-based authentication (connect-pg-simple middleware present in dependencies).

**Build Process**: 
- Client built with Vite to `dist/public`
- Server bundled with esbuild to `dist/index.js`
- Separate dev and production configurations

### Data Storage Solutions

**Database**: PostgreSQL via Neon serverless driver (@neondatabase/serverless).

**ORM**: Drizzle ORM with TypeScript-first schema definitions in `shared/schema.ts`.

**Schema Management**: Drizzle Kit for migrations with push-based workflow (`npm run db:push`).

**Current Schema**: Minimal user table with:
- UUID primary key (generated via PostgreSQL)
- Username (unique)
- Password (hashed - implementation pending)

**Validation**: Drizzle-Zod integration for runtime schema validation.

**Development Storage**: In-memory storage implementation (`MemStorage`) for rapid prototyping without database dependency.

### Authentication and Authorization

**Planned Mechanism**: Session-based authentication using express-session with PostgreSQL session store (connect-pg-simple).

**Current State**: Authentication not yet implemented. User schema exists but no registration/login endpoints or password hashing.

**Future Implementation**: Should include:
- Bcrypt/Argon2 password hashing
- Session middleware configuration
- Protected API routes
- CSRF protection

### External Dependencies

**UI Component Libraries**:
- Radix UI (20+ primitive components for accessible UI)
- Lucide React (icon library)
- Framer Motion (animation library)
- CMDK (command menu component)
- Embla Carousel (carousel component)

**Development Tools**:
- Vite with React plugin
- TypeScript strict mode
- Replit-specific plugins (runtime error overlay, cartographer, dev banner)

**Utilities**:
- class-variance-authority (CVA) for component variants
- clsx + tailwind-merge for className management
- date-fns for date formatting
- Zod for schema validation

**Payment Integration**: Planned bKash integration for Bangladesh market (not yet implemented).

**Asset Management**: Static assets stored in `attached_assets/` directory with path alias `@assets`.

**Design Resources**: Generated placeholder images for hero sections, career paths, and testimonials using placehold.co service.

**Hosting Platform**: Designed for Vercel deployment with serverless/edge function support.

**Missing Integrations**: 
- Payment gateway (bKash)
- Email service for transactional emails
- Analytics platform
- Video hosting (currently using placeholders)
- CDN for static assets