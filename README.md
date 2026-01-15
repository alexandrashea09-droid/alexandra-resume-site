# Personal Resume Website

A minimal, modern personal resume website built with Next.js (App Router), TypeScript, and Tailwind CSS. Designed with strong typography, generous whitespace, and subtle animations.

## Features

- **Home Page** - Hero section with contact info, experience timeline, skills, and project previews
- **Resume Page** - Print-friendly resume with "Print / Save PDF" button
- **Projects Page** - Detailed case studies with problem, approach, and impact
- **Contact Page** - Contact information and links
- **Sticky Navigation** - Top navigation with active section highlighting
- **Smooth Animations** - Fade and slide animations on scroll using Framer Motion
- **Mobile-First Design** - Responsive and optimized for all screen sizes
- **Print Optimized** - Resume page optimized for printing and PDF generation

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS** with Typography plugin
- **Framer Motion** for animations

## Setup & Local Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000) to see the site.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server (after build)
- `npm run lint` - Run ESLint

## Customization

### Update Resume Content

Edit `src/data/resume.ts` to update:
- Personal information (name, title, location, contact)
- Work experience
- Education
- Skills
- Projects

### Styling

- Main styles are in `src/app/globals.css`
- Tailwind configuration is in `tailwind.config.js`
- Color scheme can be adjusted in `tailwind.config.js` (accent color)

### Fonts

The site uses Inter font from Google Fonts. To change fonts, update `src/app/layout.tsx`.

## Building & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Deploy to Vercel

This site is optimized for deployment on Vercel:

1. **Push your code to GitHub:**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Deploy to Vercel:**

   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect Next.js and configure the build
   - Click "Deploy"

3. **Automatic Deployments:**

   - Every push to `main` will trigger a new deployment
   - Preview deployments are created for pull requests

### Alternative Deployment Options

- **Netlify:** Similar process, import from GitHub
- **Self-hosted:** Build with `npm run build` and serve with `npm run start`

## Print / PDF Generation

The resume page includes a "Print / Save PDF" button that:
- Hides navigation and buttons when printing
- Optimizes layout for A4/Letter paper
- Uses print-friendly colors and spacing

To save as PDF:
1. Navigate to `/resume`
2. Click "Print / Save PDF"
3. In the print dialog, select "Save as PDF" as the destination

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Nav
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles
│   │   ├── resume/
│   │   │   └── page.tsx         # Resume page
│   │   ├── projects/
│   │   │   └── page.tsx         # Projects page
│   │   └── contact/
│   │       └── page.tsx         # Contact page
│   ├── components/
│   │   ├── Nav.tsx              # Navigation component
│   │   ├── Timeline.tsx         # Experience timeline
│   │   ├── CaseStudyCard.tsx    # Project case study card
│   │   └── Section.tsx          # Reusable section wrapper
│   └── data/
│       └── resume.ts            # Resume data (edit this!)
├── public/                      # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Notes

- All resume content is stored in `src/data/resume.ts` for easy updates
- The site uses client-side animations that are disabled during printing
- Navigation automatically highlights the active section based on scroll position
- All external links open in new tabs with proper security attributes

## License

This project is open source and available for personal use.
