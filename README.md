# Priscilla Adelola - Portfolio Website

A modern, responsive portfolio website showcasing UX/UI design work and case studies. Built with Next.js 15, TypeScript, and Tailwind CSS.

## About

This portfolio highlights the work of Priscilla Adelola, a Senior UI/UX Designer with 5+ years of experience designing accessible, user-centered digital products across Fintech, Healthcare, and E-commerce sectors.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS
- **Server-Side Rendering**: Fast page loads and optimal SEO
- **Static Site Generation**: Pre-rendered case study pages for best performance
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Accessible**: Follows WCAG guidelines for accessibility
- **Component Library**: Uses Radix UI and shadcn/ui for robust, accessible components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tosin-ajayi-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## 📁 Project Structure

```
tosin-ajayi-portfolio/
├── app/                      # Next.js App Router pages
│   ├── case-studies/        # Dynamic case study routes
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ui/                  # Reusable UI components (shadcn/ui)
│   ├── figma/               # Figma-related components
│   ├── finpay/              # FinPay case study components
│   ├── shopsphere/          # ShopSphere case study components
│   ├── healthhub/           # HealthHub case study components
│   ├── travelease/          # TravelEase case study components
│   ├── foodhub/             # FoodHub case study components
│   ├── fitpro/              # FitPro case study components
│   ├── Navigation.tsx       # Main navigation component
│   ├── Hero.tsx             # Hero section
│   ├── AboutMe.tsx          # About section
│   ├── CaseStudy.tsx        # Case study card component
│   ├── CaseStudyDetail.tsx  # Case study detail page
│   └── Contact.tsx          # Contact form section
├── lib/                     # Utility functions and data
│   ├── case-studies.ts      # Case study data and queries
│   ├── metadata.ts          # SEO metadata utilities
│   └── utils.ts             # Helper functions
└── public/                  # Static assets

```

## Case Studies

The portfolio includes detailed case studies for:

1. **FinPay** - Mobile Banking Revolution
2. **ShopSphere** - E-commerce Platform Redesign
3. **HealthHub** - Healthcare Portal (Coming Soon)
4. **TravelEase** - Travel Booking Experience (Coming Soon)
5. **FoodHub** - Food Delivery App (Coming Soon)
6. **FitPro** - Fitness Tracking Application (Coming Soon)

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New" → "Project"
4. Import your repository
5. Click "Deploy"
7. Your site will be live in 2-3 minutes!

### Environment Variables

For the contact form to work, you need to set up a Resend API key. Create a `.env.local` file:

```bash
# Resend API Key for contact form
# Get your API key from: https://resend.com/api-keys
RESEND_API_KEY=your_resend_api_key_here
```

## Customization

### Update Contact Information

Edit `components/Contact.tsx` to update:
- Email address
- Location
- Social media links (LinkedIn, GitHub, Twitter)

### Add/Edit Case Studies

Edit `lib/case-studies.ts` to:
- Add new case studies
- Update existing case study content
- Modify case study metadata

### Update Personal Information

Edit `components/Hero.tsx` and `components/AboutMe.tsx` to update:
- Bio and introduction
- Years of experience
- Skills and expertise
- Professional achievements

## License

This portfolio is for personal use by Priscilla Adelola. All rights reserved.

## Support

For questions or issues, please contact through the portfolio website's contact form.

---

**Built with ❤️ using Next.js**
