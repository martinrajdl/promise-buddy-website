# Promise Buddy - Marketing Website

A calm, minimal marketing website for Promise Buddy, a gentle habit companion app.

## Overview

Promise Buddy helps users keep personal promises (sobriety, quitting smoking, fasting, protein intake, daily steps, or custom goals) by taking care of a virtual buddy. The tone is calm, supportive, non-judgmental, and human.

This is the public marketing website for the app.

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel (static export)

## Pages

- `/` - Landing page with hero, how it works, goals, philosophy, privacy, and CTA
- `/about` - Why Promise Buddy exists and the philosophy behind it
- `/privacy` - Plain English privacy policy
- `/support` - FAQ and contact information

## Design Principles

- Minimal, calm, cozy aesthetic
- Soft colors (neutral background, sage green accent)
- No harsh contrasts or aggressive CTAs
- Short sentences, plenty of whitespace
- Mobile-first, responsive design
- Accessible semantic HTML

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with header/footer
│   ├── page.tsx        # Landing page
│   ├── globals.css     # Global styles and Tailwind config
│   ├── about/
│   │   └── page.tsx    # About page
│   ├── privacy/
│   │   └── page.tsx    # Privacy policy
│   └── support/
│       └── page.tsx    # Support/FAQ page
└── components/
    ├── Header.tsx      # Site header
    └── Footer.tsx      # Site footer
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | `#FAF9F7` | Background |
| Warm White | `#FFFEFB` | Card backgrounds |
| Stone | `#E8E4DF` | Borders, placeholders |
| Sand | `#D4CFC7` | Subtle accents |
| Text Primary | `#3D3A36` | Headings, body text |
| Text Secondary | `#6B665E` | Supporting text |
| Text Muted | `#9A948A` | Captions, metadata |
| Sage | `#8FA589` | Primary accent, CTAs |
| Sage Light | `#B5C4B0` | Hover states |
| Sage Dark | `#6B8266` | Active states |

## Customization

### App Store Link

Replace the `href="#"` in the download buttons with your actual App Store link:

```tsx
// In src/app/page.tsx
<a href="https://apps.apple.com/app/promise-buddy/id123456789">
  Download for iOS
</a>
```

### Illustrations

The site includes placeholder divs for illustrations. Replace them with actual images:

```tsx
// Replace this:
<div className="w-24 h-24 mx-auto mb-6 bg-stone rounded-2xl" />

// With this:
<Image src="/illustrations/step-1.png" alt="Choose a buddy" width={96} height={96} />
```

### Contact Email

Update the email in `/support`:

```tsx
// In src/app/support/page.tsx
<a href="mailto:your-email@example.com">
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy (auto-configured for Next.js)

The site is configured for static export (`output: "export"` in next.config.ts).

### Other Platforms

Build and deploy the `out` directory:

```bash
npm run build
# Deploy contents of ./out
```

## License

Private - All rights reserved.
