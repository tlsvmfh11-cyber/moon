# Replit MD

## Overview

This is a Korean-language marketing/landing page website for "강남 달토" (Gangnam Dalto), a karaoke entertainment venue (하이퍼블릭 가라오케) in the Gangnam district of Seoul. The site is a single-page application built with React and Express, featuring parallax scrolling sections, animations, SEO optimization for Korean search engines (Google, Naver, Daum), and mobile-first contact CTAs (phone calls, SMS, Telegram).

The site is primarily a static marketing page — the backend is minimal and mostly serves the frontend. The database schema exists but is largely unused by the current feature set.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript (no React Router currently — it's a single-page scrolling landing page)
- **Build Tool**: Vite with HMR in development
- **Styling**: Tailwind CSS with custom dark theme (black/neon aesthetic), CSS variables for shadcn/ui compatibility
- **UI Components**: shadcn/ui (new-york style) with Radix UI primitives. Components live in `client/src/components/ui/`
- **Animations**: Framer Motion for parallax scrolling, scroll-triggered animations, and accordion effects
- **Icons**: Lucide React
- **State Management**: TanStack React Query (configured but minimally used since the site is mostly static content)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Framework**: Express 5 on Node.js with TypeScript (executed via `tsx`)
- **Architecture**: Single entry point at `server/index.ts`, routes registered in `server/routes.ts`
- **Storage**: Interface-based storage pattern (`IStorage`) with in-memory implementation (`MemStorage`). Designed to be swapped to a database-backed implementation
- **API Pattern**: All API routes should be prefixed with `/api`
- **Development**: Vite dev server middleware is integrated into Express for HMR
- **Production**: Static files served from `dist/public/` with SPA fallback to `index.html`

### Build System
- **Client**: Vite builds to `dist/public/`
- **Server**: esbuild bundles server code to `dist/index.cjs` with selected dependencies bundled (allowlist pattern to reduce cold start times)
- **Scripts**: `npm run dev` for development, `npm run build` for production build, `npm start` for production server

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` — currently only has a `users` table with `id` (UUID), `username`, and `password`
- **Validation**: drizzle-zod generates Zod schemas from Drizzle table definitions
- **Migrations**: `drizzle-kit push` via `npm run db:push`
- **Connection**: Requires `DATABASE_URL` environment variable for PostgreSQL
- **Note**: The current app uses in-memory storage (`MemStorage`) and doesn't actively use the database. The database infrastructure is in place for future features

### Project Structure
```
├── client/               # Frontend React app
│   ├── index.html        # HTML entry with extensive SEO meta tags
│   ├── public/           # Static assets (robots.txt, images)
│   └── src/
│       ├── components/   # Page sections (Hero, Intro, Features, etc.) and UI components
│       ├── hooks/        # Custom React hooks
│       ├── lib/          # Utilities (queryClient, cn helper)
│       └── pages/        # Page components (only not-found exists)
├── server/               # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route registration
│   ├── storage.ts        # Storage interface and in-memory implementation
│   ├── static.ts         # Production static file serving
│   └── vite.ts           # Vite dev server integration
├── shared/               # Shared code between client and server
│   └── schema.ts         # Drizzle database schema and Zod types
└── script/
    └── build.ts          # Production build script
```

## External Dependencies

- **PostgreSQL**: Required database (connection via `DATABASE_URL` env var). Used with Drizzle ORM but not actively queried by current features
- **Framer Motion**: Core animation library for parallax effects and scroll-triggered animations
- **shadcn/ui + Radix UI**: Component library foundation (many Radix primitives installed)
- **TanStack React Query**: Data fetching library (configured, minimal current use)
- **connect-pg-simple**: PostgreSQL session store (available but not currently wired up)
- **Replit plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` for development experience on Replit
- **External contact integrations**: Phone (tel: links), SMS (sms: links), Telegram (@hscompanyshs)
- **Domain**: `runningrabbitsik.com` (referenced in canonical URLs, sitemap, OG tags)