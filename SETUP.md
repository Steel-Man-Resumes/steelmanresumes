# SMR Website - Asset Setup

Before running `npm install` and `npm run dev`, you need to set up the public assets:

## 1. Copy these files:

### Logo:
- Copy `assets/SMR_Icon_Master_Gold_Transparent_Fixed.png` to `public/logo-icon.png`

### Video:
- Create folder `public/video/`
- Copy `assets/Subtle_continuous_motion_golde_Veo_31_86190.mp4` to `public/video/hero-molten.mp4`

### Troy's headshot:
- Copy your chosen headshot to `public/troy-headshot.jpg`

## 2. Then run:
```bash
cd C:\Users\marcu\Documents\Claude-Code\SMR-Website
npm install
npm run dev
```

## 3. Open http://localhost:3000 to preview

## 4. When ready to deploy:
```bash
git init
git add .
git commit -m "Initial SMR website"
# Then connect to Vercel
```
