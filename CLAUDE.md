# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `yarn dev` - Run development server on port 3019 with Turbopack
- `yarn build` - Build the application for production
- `yarn start` - Start the production server
- `yarn lint` - Run ESLint to check code quality
- `yarn lint-fix` - Run ESLint with auto-fix

## Architecture Overview

This is a Next.js 15 real estate marketing website for "Silver Palm" - a luxury villa in Phuket, Thailand. The application follows a modern React/Next.js architecture with:

### Key Technology Stack
- **Framework**: Next.js 15 with App Router
- **UI**: React 19 with Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **Image Handling**: Multiple lightbox libraries (yet-another-react-lightbox, react-image-lightbox)
- **Maps**: Google Maps React integration
- **Animations**: Custom CSS animations with Tailwind
- **Captcha**: Google reCAPTCHA integration
- **Notifications**: react-hot-toast

### Project Structure

**Core Application**
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components for the villa showcase
- `actions/` - Server actions for form handling
- `lib/` - Utility functions (captcha verification)
- `types/` - TypeScript type definitions
- `constants/` - Static data (image configurations)

**Key Components**
- `ImageSlider` - Main property image carousel
- `PropertyInformation` - Villa details and specifications
- `GalleryImages` - Property photo gallery with lightbox
- `FloorPlan` - Interactive floor plan viewer
- `LocationInformation` - Area information and Google Maps
- `ContactUs` - Lead capture form with reCAPTCHA
- `Footer` & `Navbar` - Site navigation

### Data Flow Architecture

**Form Handling**
- Uses React Hook Form with Zod schema validation
- Server actions (`actions/formAction.ts`) handle form submissions
- Integrates with Google Sheets via Google Apps Script for lead collection
- reCAPTCHA verification before form submission

**Image Management**
- Static images stored in `public/images/`
- Image metadata centralized in `constants/images.ts`
- Multiple lightbox implementations for different use cases

**Styling Approach**
- Tailwind CSS with custom luxury/real estate theming
- Extensive use of gradients, animations, and responsive design
- Custom animations for premium feel (shimmer effects, flowing borders)

### Environment Variables Required
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - Public reCAPTCHA key
- `RECAPTCHA_SECRET_KEY` - Private reCAPTCHA key (server-side)
- `NODE_ENV` - Environment detection for analytics

### Development Notes

**Port Configuration**: Development server runs on port 3019 (not default 3000)

**Form Integration**: Contact form posts to Google Apps Script endpoint for lead capture

**SEO Optimization**: Comprehensive metadata and Open Graph tags for real estate marketing

**Performance**: Uses Turbopack for fast development builds, optimized images, and Next.js 15 features