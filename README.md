# BDSN Directory MVP

**Big Dreams Sports Network — Directory MVP**
SEO-driven athlete, event, trainer, and program discovery engine.

## Quick Start

```bash
git clone https://github.com/DigitalBlueprint239/bdsn-directory.git
cd bdsn-directory
npm install
node setup.mjs    # generates all source files
npm run dev        # starts dev server at localhost:3000
```

## Stack

- **Next.js 14** (App Router) — SEO-friendly SSR/SSG
- - **React 18 + TypeScript** — type-safe components
  - - **Tailwind CSS** — rapid styling with brand tokens
    - - **Lucide React** — icon library
      - - **Future: Supabase** — database + auth when ready
       
        - ## Route Map
       
        - | Route | Purpose |
        - |-------|---------|
        - | `/directory` | Directory homepage |
        - | `/directory/georgia` | Georgia state page |
        - | `/directory/georgia/atlanta` | Atlanta city page |
        - | `/directory/trainers` | Trainers category |
        - | `/directory/7v7-teams` | 7v7 Teams category |
        - | `/directory/flag-football` | Flag Football category |
        - | `/directory/recruiting-events` | Recruiting Events category |
        - | `/directory/showcases` | Showcases category |
        - | `/directory/nil-resources` | NIL Resources category |
       
        - ## Architecture
       
        - ```
          src/
            app/
              layout.tsx              # Root layout with metadata
              globals.css             # Global styles + Tailwind
              directory/
                page.tsx              # /directory homepage
                [state]/
                  page.tsx            # /directory/georgia
                  [city]/
                    page.tsx          # /directory/georgia/atlanta
                [category]/
                  page.tsx            # /directory/trainers etc
            components/
              DirectoryHero.tsx       # Hero section
              SearchFilterBar.tsx     # Search + filter controls
              ListingCard.tsx         # Standard listing card
              FeaturedListingCard.tsx # Featured/sponsor card
              SponsorBlock.tsx        # Sponsor placement zone
              SectionHeader.tsx       # Section header component
              CTAStrip.tsx            # Call-to-action banner
              EmptyState.tsx          # No results state
              Pagination.tsx          # Load more / pagination
              Footer.tsx              # Site footer
              Navbar.tsx              # Navigation bar
            data/
              categories.ts           # Category definitions
              listings.ts             # Seed listing data
              states.ts               # State/city definitions
            types/
              listing.ts              # TypeScript interfaces
            lib/
              utils.ts                # Utility functions
          ```

          ## Monetization Zones

          - Featured listing cards (gold border, top placement)
          - - Sponsor blocks (sidebar + inline ad placements)
            - - "Get Featured" CTA on every listing
              - - "Claim This Listing" button on unclaimed entries
                - - "Advertise With Us" in footer and sidebar
                  - - Sponsor tier badges (bronze/silver/gold/platinum)
                   
                    - ## SEO Strategy
                   
                    - - Static generation for all city + category pages
                      - - Structured metadata per page
                        - - Internal linking between city and category
                          - - Content blocks for local sports search ranking
                            - - Schema.org LocalBusiness markup ready
                             
                              - ## Launch Checklist
                             
                              - ### Must Have (Monday)
                              - - [x] Repository created
                                - [ ] - [x] Data schema defined
                                - [ ] - [x] Categories seeded
                                - [ ] - [ ] All page routes working
                                - [ ] - [ ] Listing cards rendering
                                - [ ] - [ ] Search/filter basic UI
                                - [ ] - [ ] Mobile responsive
                                - [ ] - [ ] Deploy to Vercel
                               
                                - [ ] ### Post-Launch
                                - [ ] - [ ] Supabase integration
                                - [ ] - [ ] Admin panel for listings
                                - [ ] - [ ] Payment for featured listings
                                - [ ] - [ ] User-submitted listings
                                - [ ] - [ ] Additional states/cities
                                - [ ] - [ ] Full-text search
                                - [ ] - [ ] Analytics tracking
                               
                                - [ ] ## Deploy
                               
                                - [ ] ```bash
                                - [ ] # Deploy to Vercel (recommended)
                                - [ ] npm i -g vercel
                                - [ ] vercel --prod
                               
                                - [ ] # Or build static
                                - [ ] npm run build
                                - [ ] npm start
                                - [ ] ```
                               
                                - [ ] ## License
                               
                                - [ ] Proprietary — Big Dreams Sports Network
