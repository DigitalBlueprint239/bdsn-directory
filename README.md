# BDSN Directory

A sports directory for Big Dreams Sports Network. Find youth sports trainers, 7v7 teams, flag football leagues, recruiting events, showcases, and NIL resources. Starting with Georgia and Atlanta.

## Run it

```bash
git clone https://github.com/DigitalBlueprint239/bdsn-directory.git
cd bdsn-directory
npm install
npm run dev
```

Open http://localhost:3000

## Environment variables

Create `.env.local` and set:

```bash
# Public site URL for canonical, sitemap, and robots output
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Microsoft Clarity project ID (optional; Clarity loads only when set)
NEXT_PUBLIC_MICROSOFT_CLARITY_ID=
```

## Pages

- `/` - landing page
- `/directory` - directory hub
- `/directory/georgia` - state page
- `/directory/georgia/atlanta` - city page
- `/directory/trainers` - category page
- `/directory/7v7-teams` - category page
- `/directory/flag-football` - category page
- `/directory/recruiting-events` - category page
- `/directory/showcases` - category page
- `/directory/nil-resources` - category page
- `/about` - about page
- `/contact` - contact page
- `/advertise` - sponsor page

## Built with

- Next.js 14
- TypeScript
- Tailwind CSS

## Status

MVP with sample data. No backend yet. Ready for Supabase later.
