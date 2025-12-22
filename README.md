# SmadarExpress Web App

A Next.js web application for SmadarExpress built with React, TypeScript, Tailwind CSS, and Base44.

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` and add your Base44 API credentials:
   ```
   NEXT_PUBLIC_BASE44_API_URL=https://api.base44.com
   NEXT_PUBLIC_BASE44_API_KEY=your_actual_api_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
web_app/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── providers.tsx      # React Query provider
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── landing/          # Landing page components
│   └── UserNotRegisteredError.tsx
├── api/                   # API clients
│   └── base44Client.ts   # Base44 API client
└── Entities/              # Entity definitions (JSON schemas)
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Query** - Data fetching
- **Lucide React** - Icons
- **Base44** - Backend API

## Notes

- Make sure to configure your Base44 API credentials in `.env.local`
- The app uses RTL (Right-to-Left) layout for Hebrew content
- Components are client-side rendered (using 'use client' directive) for interactivity

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying to your domain `www.smadar-express.com`.

**Quick Deploy to Vercel:**
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Set root directory to `web_app` (if deploying from parent repo)
4. Add your domain in Vercel project settings
5. Configure DNS records at your domain registrar
6. Deploy! 🚀



