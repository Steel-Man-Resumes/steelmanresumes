# SMR WEBSITE PROJECT

## What This Is
Steel Man Resumes — a resume service for blue-collar workers and second-chance candidates.
Building: Marketing website that integrates with the existing Forge and Refinery apps (already deployed separately).

## Primary Documentation
**READ FIRST:** `docs/SMR_WEBSITE_BUILD_SPEC.md` — contains everything you need.

## Critical Constraints
1. **NO LinkedIn services** — SMR doesn't offer them, never mention
2. **Mobile-first** — This audience is phone-primary, not desktop
3. **No AI language in UX** — Don't say "our AI will..." — focus on outcomes
4. **Gold treatment required** — Never use flat #D4A84B, always gradient/glow
5. **Blue-collar voice** — No corporate buzzwords, direct and real

## Tech Stack
- Next.js 15 (App Router)
- Tailwind CSS
- Vercel (hosting)

## Assets
All images and videos are in `assets/` folder, organized by type.
Videos need compression (4K → 1080p).
Favicon needs to be generated from logo icon.

## Build Order
1. Foundation (Next.js + Tailwind setup)
2. Static pages (Homepage, About, Contact, Services, etc.)
3. Integration points to Forge/Refinery apps (links/embeds)
4. Polish (animations, video, mobile optimization)
5. Launch

## Questions?
If unclear on anything, check the build spec first. If still unclear, ask Troy.
