# SMR WEBSITE BUILD SPECIFICATION
## Version 1.0 | January 25, 2026
### The Definitive Build Reference for Claude Code

---

# EXECUTIVE SUMMARY

**What We're Building:**
A unified website for Steel Man Resumes that:
1. Serves as the consumer-facing gateway to Forge + Refinery apps
2. Establishes AEO (AI Engine Optimization) authority so AI search engines cite SMR for second-chance employment queries
3. Proves The Crucible methodology for TMG consulting sales
4. Looks like a modern masterpiece (reference: Artlist.io, Linear.app, Vercel.com)

**The Crucible Insight:**
The site architecture IS the AEO strategy. Every page exists to answer a specific question AI models are asked. Build it right → AI cites SMR → proof for TMG.

---

# SITE ARCHITECTURE

## Site Map (Final & Approved)

```
steelmanresumes.com/
│
├── /                           ← Homepage (gateway, trust, push to Forge)
│
├── /forge                      ← Free AI Tool (embedded app)
│   └── 6-step wizard → Career Intelligence Report → bridges to Refinery
│
├── /refinery                   ← Paid Service (embedded app)
│   └── $37.21 AI package OR $175-275 human packages
│   └── Pricing, packages, what's included, checkout
│
├── /guide                      ← AEO Content Hub ("The Handbook")
│   │
│   ├── /guide/second-chance-employment     ← PILLAR 1
│   │   ├── /felony-resume
│   │   ├── /employment-gaps
│   │   ├── /interview-scripts
│   │   ├── /fair-chance-laws
│   │   └── /recovery-jobs
│   │
│   └── /guide/blue-collar-careers          ← PILLAR 2
│       ├── /warehouse-resume
│       ├── /trades-resume
│       ├── /certifications
│       └── /job-search-strategy
│
├── /success                    ← Success Stories
│   └── Anonymized results, before/after, partner quotes
│
├── /partners                   ← For Workforce Partners
│   └── Referral info, downloadable one-pager, QR codes
│
├── /about                      ← The Manifesto
│   └── "Truth. Told Strong." — Troy's story, SMR philosophy
│
└── /contact                    ← Contact
    └── Phone, text, simple form
```

## Navigation Structure

### Top Nav (4 items max):
1. **Start Free Report** (Button — primary CTA, gold gradient)
2. **Get a Resume** → /refinery
3. **The Guide** → /guide
4. **Success Stories** → /success

### Footer Nav:
- For Workforce Partners
- About / The Manifesto
- Contact
- Privacy (plain language, 3 bullets max)

### Sticky Mobile Bottom Bar:
- **[Start Free Report]** | **[Text Us]**

---

# VISUAL IDENTITY

## Color Palette

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Background Primary | Forge Black | #0D0D0D | Main page background |
| Background Secondary | Crucible Charcoal | #1A1A1A | Cards, sections |
| Background Tertiary | Anvil Gray | #2A2A2A | Subtle separation |
| Primary Accent | Steel Gold | #D4A84B | CTAs, highlights |
| Primary Hover | Bright Gold | #E8C060 | Hover states |
| Secondary Accent | Trash Red | #C41E3A | Urgency, warnings |
| Text Primary | Iron White | #F5F5F5 | Headlines, body |
| Text Secondary | Ash Gray | #A0A0A0 | Muted text, captions |

## ⚠️ CRITICAL GOLD TREATMENT RULE

**Flat #D4A84B reads as "dirty yellow" — NEVER use flat on prominent elements.**

Gold treatment MUST include one of:
1. **Gradient (DEFAULT for buttons):**
   ```css
   background: linear-gradient(180deg, #E8C060 0%, #D4A84B 50%, #B8923F 100%);
   ```
2. **Edge highlight** — 1px border on top/left using #E8C060
3. **Text glow:**
   ```css
   text-shadow: 0 0 10px rgba(212, 168, 75, 0.5);
   ```
4. **Shimmer animation** — CSS sweep (HERO CTAs only)

**Flat gold acceptable ONLY for:** thin borders (1-2px), small icons, underlines

## Typography

| Purpose | Font | Size | Weight |
|---------|------|------|--------|
| Display | Anton | 72px / 4.5rem | 400, Uppercase |
| H1 | Anton | 48px / 3rem | 400, Uppercase |
| H2 | Anton | 36px / 2.25rem | 400, Uppercase |
| H3 | Work Sans | 24px / 1.5rem | 700 |
| Body | Work Sans | 16px / 1rem | 400 |
| Button | Work Sans | 16px / 1rem | 600, Uppercase |
| Accent | Permanent Marker | varies | (sparingly) |

```css
:root {
  --font-headline: 'Anton', sans-serif;
  --font-body: 'Work Sans', sans-serif;
  --font-accent: 'Permanent Marker', cursive;
}
```

## Visual Effects

| Effect | Description | Where |
|--------|-------------|-------|
| Glassmorphism | Semi-transparent cards with backdrop-blur | Cards, modals |
| Chrome edge reflection | Metallic border shifts with scroll | Section dividers |
| Ambient shimmer | Animated gradient on gold | Hero CTAs |
| Scroll-linked lighting | Elements respond to scroll position | Hero sections |

**Reference Sites:** Artlist.io (current), Linear.app, Vercel.com, Raycast.com

---

# PAGE-BY-PAGE SPECIFICATIONS

## 1. HOMEPAGE /

**Purpose:** Instant recognition ("I'm in the right place"), build trust, push to Forge

**Story Beat:** "Transformation is possible" (Molten pour image)

### Above the Fold:
| Element | Content |
|---------|---------|
| **Headline** | "Get a job-ready resume — even with gaps, job hopping, or a record." |
| **Subhead** | "Start with a free report. If you want, we'll turn it into a resume that survives scrutiny." |
| **Primary CTA** | [Start Free Report] → /forge |
| **Hero Visual** | Molten pour video loop (or static fallback) |

### Below the Fold (scroll):
1. **Trust Strip** — "10+ years helping Wisconsin workers"
2. **How It Works** — 3 steps: Forge → Refinery → Hired
3. **Who This Is For** — Segments (gaps, records, career change)
4. **Pricing Preview** — Range shown upfront ($37-$275)
5. **Success Proof** — 1-2 anonymized before/after
6. **Final CTA** — [Start Free Report]

### AEO Queries This Page Answers:
- "resume service for felons"
- "help with resume employment gap"
- "blue collar resume service Wisconsin"

---

## 2. THE FORGE /forge

**Purpose:** Free entry point — overwhelming value that creates conversion pressure

**Story Beat:** "Let's see what we're working with" (Glowing heated metal image)

### Structure:
- Embedded Next.js app (same codebase, /forge route)
- 6-step wizard UI
- Output: Career Intelligence Report + 42-step DIY guide
- Bridge to Refinery at end

### Key UX Notes:
- Phone-first, one-thumb design
- Big buttons, minimal nav, single-column
- No AI language in UX — outcomes only
- Progress indicator throughout
- Entertainment during AI processing waits

---

## 3. THE REFINERY /refinery

**Purpose:** Paid conversion — transform Forge output into complete package

**Story Beat:** "Here's what comes out" (Polished steel image)

### Pricing Display:

| Package | Price | What's Included |
|---------|-------|-----------------|
| **Refinery (AI)** | $37.21 | 6 documents, AI-generated, great but not flawless |
| **Red (Human)** | $175 | 1 resume, Troy does the 10x |
| **Blue (Human)** | $250 | 2 resumes + cover letter, full package |
| **Black (Urgent)** | $275 | 24-hour rush delivery |

**Critical:** Explain value differences clearly. $37.21 is cheap because it's AI — if they want flawless, hire Troy.

### Structure:
- Embedded Next.js app (same codebase, /refinery route)
- Receives ForgePayload JSON
- Stripe checkout integration
- LETEMCOOK promo code support

---

## 4. THE GUIDE /guide

**Purpose:** AEO authority hub — content designed to be cited by AI search engines

**Structure:** Pillar + Cluster model

### Pillar 1: Second-Chance Employment
**URL:** /guide/second-chance-employment

**Cluster Pages:**
| Page | URL | AEO Query Target |
|------|-----|------------------|
| Felony Resume | /guide/second-chance-employment/felony-resume | "how to write resume with felony" |
| Employment Gaps | /guide/second-chance-employment/employment-gaps | "explain gap in employment on resume" |
| Interview Scripts | /guide/second-chance-employment/interview-scripts | "how to explain criminal record in interview" |
| Fair Chance Laws | /guide/second-chance-employment/fair-chance-laws | "ban the box states" |
| Recovery Jobs | /guide/second-chance-employment/recovery-jobs | "jobs that hire recovering addicts" |

### Pillar 2: Blue-Collar Careers
**URL:** /guide/blue-collar-careers

**Cluster Pages:**
| Page | URL | AEO Query Target |
|------|-----|------------------|
| Warehouse Resume | /guide/blue-collar-careers/warehouse-resume | "warehouse worker resume example" |
| Trades Resume | /guide/blue-collar-careers/trades-resume | "electrician resume no degree" |
| Certifications | /guide/blue-collar-careers/certifications | "certifications for blue collar workers" |
| Job Search Strategy | /guide/blue-collar-careers/job-search-strategy | "how to find warehouse jobs" |

### AEO Requirements Per Page:
- Clear H1 that matches query
- Schema markup (FAQ, HowTo, Article)
- Explicit definitions ("X is Y")
- Consistent entity naming (always "Steel Man Resumes")
- Citation-ready formatting
- Internal links to related content

---

## 5. SUCCESS STORIES /success

**Purpose:** Social proof that respects privacy

**Story Beat:** "It worked. You're in." (Tattooed handshake image)

### Content:
- Anonymized before/after comparisons
- Partner quotes (workforce offices, employers)
- Metrics where available
- NO names or identifying details

---

## 6. PARTNERS /partners

**Purpose:** B2B referral channel for workforce offices

**Story Beat:** Tech collaboration (Partners hero image)

### Content:
- What SMR offers partners
- Downloadable one-pager (PDF)
- QR codes for easy referral
- Contact for partnership inquiries

---

## 7. ABOUT /about

**Purpose:** The Manifesto — Troy's story and SMR philosophy

**Story Beat:** Authenticity and credibility

### Content:
- "Truth. Told Strong." philosophy
- Troy's background (Lean Six Sigma, blue-collar experience)
- Why SMR exists
- Real photo of Troy (not AI avatar)

---

## 8. CONTACT /contact

**Purpose:** Simple contact options

### Content:
- Phone: (262) 391-8137
- Text option emphasized (SMS > Email for this audience)
- Simple form
- Physical location (Waukesha, WI)

---

# TECHNICAL SPECIFICATIONS

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS + CSS Variables |
| Animation | Framer Motion |
| Database | Supabase (state persistence) |
| Payments | Stripe + alternatives (see Payment Options) |
| AI - Writing | Claude Sonnet 4 |
| AI - Analysis | GPT-4o-mini |
| AI - Research | Perplexity Sonar Pro |
| Documents | docx (npm) |
| Hosting | Vercel |
| Domain | steelmanresumes.com (Hostinger DNS) |

## Architecture Decision: Unified App

**NOT separate apps.** One Next.js app with routes:
- `/` — Homepage
- `/forge` — Forge app
- `/refinery` — Refinery app
- `/guide/*` — Content pages
- etc.

**Why:** Solves the data handoff problem. No localStorage fragility. State persists via Supabase.

## Environment Variables Required

```env
# AI APIs
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...
PERPLEXITY_API_KEY=pplx-...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=...
SUPABASE_SERVICE_KEY=...

# RapidAPI (MANDATORY - powers 50 employer research via JSearch)
RAPIDAPI_KEY=...

# Stripe (USE LIVE KEYS IN PRODUCTION)
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_PRICE_ID=price_...

# App
NEXT_PUBLIC_BASE_URL=https://steelmanresumes.com
BYPASS_CODE=LETEMCOOK
```

---

# ASSET INVENTORY

## Page Heroes (Images)

| Asset | Page | Status | Notes |
|-------|------|--------|-------|
| Molten pour | Homepage | ✅ Have | Needs organizing |
| Glowing heated metal | Forge | ✅ Have | Needs organizing |
| Polished steel | Refinery | ✅ Have | Needs organizing |
| Daily Grind arrival | Second-Chance Guide | ✅ Have | Needs organizing |
| Tattooed handshake | Success Stories | ✅ Have | Needs organizing |
| Sparks/embers | Texture overlay | ✅ Have | Needs organizing |
| Partners hero | Partners | ✅ Have | Needs organizing |
| Blue-Collar Guide hero | Guide pillar | ✅ Have | Needs organizing |
| About/Troy photo | About | ✅ Have | Needs organizing |

**Note:** Troy has ALL assets plus extras. CC will need to sort and rename them.

## Video Assets

| Asset | Purpose | Status |
|-------|---------|--------|
| Flame loop | Homepage hero BG | ✅ Have (needs compression to 1080p) |
| Sparks rising | Transitions | ✅ Have (needs compression to 1080p) |

## Logo/Brand Assets

| Asset | Status |
|-------|--------|
| SMR_Icon_Gold_Transparent | ✅ |
| SMR_Icon_Black_Transparent | ✅ |
| SMR_Icon_White_Transparent | ✅ |
| SMR_Icon_Gold_ForgeGlow | ✅ |
| SMR_Wordmark_NoMan | ✅ |
| SMR_Wordmark_WithMan | ✅ |

## Favicon
**Status:** Needs to be generated from SMR_Icon_Gold_Transparent
**CC Task:** Generate full favicon set (16x16, 32x32, 180x180, 192x192, 512x512)

---

# CONSTRAINTS & RULES

## Things to NEVER Include
- LinkedIn services (SMR doesn't offer them)
- Instructions in code boxes (only code goes in code boxes)
- Corporate buzzwords in blue-collar content
- Specific legal advice (always disclaim)
- AI language in user-facing copy ("our AI will...")

## Things to ALWAYS Include
- SMR contact info in appropriate places
- Phone-first design considerations
- Gold treatment on gold elements (never flat)
- Dignified framing of second-chance content

## Critical Path Note
The constraints live at `payload.intake.constraints`, NOT `payload.strategy.constraints`. This has caused bugs before.

---

# MOBILE-FIRST PRIORITY

**This audience is phone-primary.** Mobile optimization is not "nice to have" — it's mandatory.

## Mobile Requirements:
- One-thumb navigation (bottom sticky bar)
- Touch targets minimum 44x44px
- Single-column layouts
- Big buttons, minimal nav
- Forms that don't feel intimidating
- Fast load times on slow connections
- Text readable without zooming (16px minimum body)

## Test On:
- Older Android phones (this audience doesn't have iPhone 15 Pro)
- Slow 3G connections
- Small screens (320px width support)

---

# AEO COPY STRATEGY

## Who Writes It?
**Orchestra Protocol for all Guide content:**

| Task | Tool | Purpose |
|------|------|---------|
| Research queries | Perplexity | What questions are people actually asking AI? |
| Draft content | Claude | Write the initial content |
| Verify claims | Perplexity | Fact-check, add citations |
| Steelman review | Claude | Make it the strongest possible version |

## AEO Copy Requirements:
1. **Clear H1 that matches the query** — If someone asks "how to write resume with felony", the H1 should be close to that
2. **Explicit definitions** — "A felony-friendly employer is..."
3. **Schema markup** — FAQ, HowTo, Article schemas on every guide page
4. **Consistent entity naming** — Always "Steel Man Resumes" (never just "SMR" in body copy)
5. **Citation-ready formatting** — Stats with sources, clear attribution
6. **Answer the question in first 100 words** — AI pulls from the top

## Content Validation Process:
Before publishing any Guide page:
1. Ask Perplexity: "What questions do people ask about [topic]?"
2. Write content that directly answers those questions
3. Test: Ask ChatGPT/Claude the question, see if our content would be a good answer
4. Refine until it's the BEST answer on the internet for that query

---

# INFOGRAPHICS VS TEXT

## Where to Use Infographics:
| Location | Type | Purpose |
|----------|------|---------|
| Homepage | 3-step process | How It Works (Forge → Refinery → Hired) |
| Homepage | Package comparison | Pricing tiers visual |
| /refinery | What's included | Visual checklist of deliverables |
| /guide pages | Process diagrams | Complex processes simplified |
| /forge | Progress indicator | Where they are in the flow |

## Design Notes:
- Use glassmorphism cards for infographic containers
- Gold accents on key elements
- Keep text minimal — visuals should communicate
- Mobile-friendly (stack vertically on small screens)
- Accessible (alt text, don't rely solely on color)

## Text vs Visual Decision Framework:
- **Process/Steps** → Infographic
- **Comparison** → Infographic or table
- **Explanation/Nuance** → Text
- **Emotional content** → Text with supporting image
- **Data/Stats** → Infographic

---

# PAYMENT OPTIONS

**Multiple payment methods build trust.** Don't force Stripe-only.

## Required Payment Methods:
| Method | Priority | Implementation |
|--------|----------|----------------|
| **Stripe** | Primary | Credit/debit cards |
| **PayPal** | Secondary | Many people trust PayPal more than entering card |
| **Venmo** | Optional | Popular with younger blue-collar workers |
| **Cash App** | Optional | Very common in this demographic |
| **Zelle** | Manual | Display info, manual fulfillment |

## Implementation Strategy:
1. **Stripe Checkout** — Primary flow, handles cards
2. **PayPal Button** — Add PayPal checkout option
3. **Manual options** — Show Venmo/CashApp/Zelle as "Other ways to pay" with instructions

## Trust Signals:
- Show all accepted payment methods upfront
- "Pay however you're comfortable"
- No surprise fees at checkout
- Money-back guarantee messaging

---

# ALLOY REPORT ENHANCEMENT

## Government Resources for Second-Chance Candidates

**Add a section to Alloy Report:** "Programs You May Qualify For"

### Federal Programs:
| Program | What It Is | Who Qualifies |
|---------|------------|---------------|
| **Federal Bonding Program** | Free fidelity bonds for employers who hire ex-offenders | Anyone with criminal record |
| **Work Opportunity Tax Credit (WOTC)** | Tax credit for employers who hire felons | Employers get $2,400-$9,600 credit |
| **Second Chance Pell Grants** | Federal financial aid for education | Incarcerated or recently released |
| **SNAP Employment & Training** | Job training + food assistance | Low-income, includes those with records |

### Wisconsin-Specific Programs:
| Program | Contact | What It Offers |
|---------|---------|----------------|
| **DVR (Division of Vocational Rehabilitation)** | dwd.wisconsin.gov/dvr | Job training, placement assistance |
| **Wisconsin Works (W-2)** | Various county offices | Employment assistance, childcare help |
| **Workforce Development Boards** | wdbscw.org (Southeast WI) | Free career services |

### Disclaimers (Required):
```
IMPORTANT: This information is provided for reference only and is not legal advice. 
Program eligibility requirements change frequently. Contact each program directly 
to verify current requirements and your specific eligibility. Steel Man Resumes 
is not affiliated with any government program.
```

### Implementation:
- Include in Alloy Report only when user indicates relevant barriers
- Present as "resources you may want to explore"
- Always include contact info and websites
- Update quarterly (programs change)

---

# FAVICON & BRAND ASSETS

## Favicon Requirements:
| Size | Format | Use |
|------|--------|-----|
| 16x16 | .ico | Browser tab |
| 32x32 | .ico | Browser tab (high-DPI) |
| 180x180 | .png | Apple touch icon |
| 192x192 | .png | Android Chrome |
| 512x512 | .png | PWA icon |

**Source:** Use SMR_Icon_Gold_Transparent, export at required sizes

## Files Needed:
```
/public/
├── favicon.ico (16x16 + 32x32 combined)
├── apple-touch-icon.png (180x180)
├── icon-192.png
├── icon-512.png
└── site.webmanifest
```

**Note:** CC should generate these from the master icon file.

---

# ASSET ORGANIZATION

## Current Status:
**Troy has ALL assets** — they just need organizing and renaming.

## CC Asset Tasks:
1. **Sort assets into folders:**
   ```
   /assets/
   ├── heroes/           ← Page hero images
   ├── icons/            ← UI icons, favicons
   ├── logos/            ← SMR logo variants
   ├── videos/           ← Video loops (compressed)
   ├── textures/         ← Overlays, backgrounds
   └── infographics/     ← (to be created)
   ```

2. **Rename to semantic names:**
   - `homepage-hero-molten-pour.webp`
   - `forge-hero-glowing-metal.webp`
   - `refinery-hero-polished-steel.webp`
   - etc.

3. **Compress videos:**
   - 4K masters → 1080p for web delivery
   - WebM format for modern browsers
   - MP4 fallback for Safari

4. **Generate favicon set** from master icon

---

# TROY ACTION ITEMS

Before CC begins:
- [ ] **Verify Supabase status** — Is your account active? Do you have a project?
- [ ] **Gather assets** — Put all images/videos in one folder for DC to organize
- [ ] **Confirm payment accounts** — PayPal, Venmo, Cash App, Zelle usernames/handles
- [ ] **Review this spec** — Final approval before build begins

---

# BUILD PHASES

## Phase 1: Foundation
- [ ] Set up Next.js 15 project
- [ ] Configure Tailwind with design system tokens
- [ ] Set up Supabase project
- [ ] Configure Vercel deployment
- [ ] Set up environment variables

## Phase 2: Static Pages
- [ ] Homepage
- [ ] About
- [ ] Contact
- [ ] Partners
- [ ] Success Stories
- [ ] Guide pillar pages
- [ ] Guide cluster pages (content can be placeholder)

## Phase 3: Forge Integration
- [ ] Port Forge app to /forge route
- [ ] Connect to Supabase for state
- [ ] Test full flow

## Phase 4: Refinery Integration
- [ ] Port Refinery app to /refinery route
- [ ] Connect Forge → Refinery handoff via Supabase
- [ ] Stripe integration (live keys)
- [ ] Test payment flow

## Phase 5: Polish
- [ ] Video compression and integration
- [ ] Animation implementation
- [ ] Mobile optimization
- [ ] Performance optimization
- [ ] SEO/Schema markup

## Phase 6: Launch
- [ ] DNS configuration
- [ ] SSL verification
- [ ] Final testing
- [ ] Go live

---

# REFERENCE DOCUMENTS

| Document | Location | Purpose |
|----------|----------|---------|
| SMR v3 MASTER | Google Drive | Full app specs (Forge + Refinery) |
| SMR Brand Bible | Google Drive | Visual identity details |
| SMR rebuild ideas | Google Drive | Session notes, asset lists |
| Google Ecosystem | Google Drive | Future vision (Life Stability Platform) |

---

# APPROVAL STATUS

**Architecture:** ✅ Approved by Troy (this document)
**Design System:** ✅ Approved (Brand Bible v2.1)
**Tech Stack:** ✅ Approved
**Site Map:** ✅ Approved

---

*Document Owner: Troy Richard Carr*
*Prepared by: Claude (Skippy)*
*Date: January 25, 2026*

---

**"Truth. Told Strong."**
