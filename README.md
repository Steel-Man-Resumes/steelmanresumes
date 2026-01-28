# SMR Website - File Structure Documentation

## Project Overview
This is the Second Chance Refinery website, built with Next.js, TypeScript, and Tailwind CSS.

## Directory Structure

### `/content/guides/` (9 files)
Career guidance articles in Markdown format:
- `blue-collar-job-search-strategy.md` - Strategic approach to blue-collar job hunting
- `certifications-worth-getting.md` - Valuable certifications for career advancement
- `explaining-employment-gaps.md` - How to address employment gaps professionally
- `fair-chance-ban-the-box-laws.md` - Guide to fair chance hiring and ban-the-box laws
- `how-to-write-resume-with-felony.md` - Resume writing guidance for applicants with records
- `interview-scripts-tough-questions.md` - Scripts for difficult interview scenarios
- `jobs-that-support-recovery.md` - Employment opportunities supportive of recovery
- `trades-skilled-labor-resumes.md` - Resume templates for skilled trades
- `warehouse-distribution-resumes.md` - Resume templates for warehouse/distribution roles

### `/schema/` (9 files)
SEO schema markup files for structured data:
- `certifications-schema.html`
- `employment-gaps-schema.html`
- `fair-chance-laws-schema.html`
- `interview-scripts-schema.html`
- `job-search-strategy-schema.html`
- `jobs-recovery-schema.html`
- `resume-with-felony-schema.html`
- `trades-resume-schema.html`
- `warehouse-resume-schema.html`

### `/assets/infographics/` (8 files)
Visual content for articles:
- `infographic-ban-the-box.png` (landscape)
- `infographic-ban-the-box-portrait.png` (portrait)
- `infographic-career-gaps.png` (landscape)
- `infographic-career-gaps-portrait.png` (portrait)
- `infographic-portrait-resume-with-felony.png` (portrait)
- `infographic-recovery.png` (landscape)
- `infographic-recovery-portrait.png` (portrait)
- `infographic-resume-with-felony-v2.png` (landscape version 2)

**Note**: Both versions of felony resume infographic exist (v2 and portrait)

### `/video/` (2 files)
- `Blue-Collar_Job_Search.mp4` - Educational video about blue-collar job search
- `Truth.mp4` - Brand/mission video

### Root Configuration Files (7 files)
Build configuration and dependencies (kept in root per Next.js convention):
- `next.config.js` - Next.js configuration
- `next-env.d.ts` - Next.js TypeScript declarations
- `package.json` - Project dependencies
- `package-lock.json` - Locked dependency versions
- `postcss.config.js` - PostCSS configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

### `/src/` (Next.js Application)
- `app/` - Next.js App Router pages and layouts
- `components/` - React components

### `/public/` (Static Assets)
Web-accessible static files:
- Favicon files (various sizes)
- Hero images for different pages
- Logo files (header, footer, icon)
- Video subdirectory

### `/assets/` (Design Assets)
Brand assets, hero images, icons, logos, textures, and extras

### `/docs/` (Documentation)
- `SMR_WEBSITE_BUILD_SPEC.md` - Website build specifications

### Root Files
- `SETUP.md` - Setup and installation instructions
- `README.md` - This file
- `node_modules/` - Installed dependencies
- `out/` - Build output directory

## Quick Reference

### To work with content:
- **Add new guide**: Create `.md` file in `/content/guides/`
- **Add schema markup**: Create `.html` file in `/schema/`
- **Add infographic**: Place PNG in `/assets/infographics/`
- **Add video**: Place MP4 in `/video/`

### To build/run the site:
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Organization Completed
Organized on: 2026-01-27
- 9 guide articles moved to `/content/guides/` (including fair-chance-ban-the-box-laws.md)
- 9 schema files moved to `/schema/` (including fair-chance-laws-schema.html)
- 8 infographics moved to `/assets/infographics/`
- 2 videos moved to `/video/`
- Config files remain in root per Next.js convention
