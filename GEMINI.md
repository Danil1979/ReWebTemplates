# GEMINI.md - RE Web Templates

## Project Overview
**RE Web Templates** is a real-estate web template framework built with **React and TanStack (Router/Query)**. Its primary purpose is to empower real-estate agents with highly customizable, SEO-optimized, and mobile-friendly websites for showcasing their properties. It is a fully frontend templates,

The architecture emphasizes modularity and ease of asset swapping.

### Core Technologies
- **Framework:** React
- **Routing & State:** TanStack Router
- **Typing:** TypeScript
- **Styling:** Modular CSS (Expected)

## Directory Structure
```
src/
├── assets/            # Global static files (images, fonts, videos)
├── components/        # Modular UI components (Header, Footer, etc.)
├── config/            # Global environment variables and library configurations
├── hooks/             # Truly global reusable hooks (useDebounce, useWindowSize)
├── lib/               # Initialized library instances 
├── routes/            # TanStack Router route definitions and pages
├── types/             # Global/Shared TypeScript interfaces and types
└── utils/             # Pure helper functions (formatDate, currency formatting)
```

## Key Components
The project starts with the following foundational components:
1. **Header:** Brand identification and navigation.
2. **About Section:** Agent/Company introduction.
3. **Galleries:** Support for both video and image property showcases.
4. **Description:** Facility details and integrated location information.
5. **Floor Plans & Pricing:** Structured data presentation for properties.
6. **Footer:** Site navigation and legal info.
7. **Contact Widgets:** Quick links for Instagram, WhatsApp, and other social channels.

## Building and Running
The project uses **npm** as the package manager.

- **Setup:** `npm install`
- **Development:** `npm run dev` (Starts Vite dev server on port 3000)
- **Build:** `npm run build` (Compiles the project for production)
- **Preview:** `npm run preview` (Locally preview the production build)
- **Test:** `npm run test` (Runs Vitest suite)

## Development Conventions
### 1. Modularity
- Each component should be self-contained and easily swappable.
- Support multiple "styles" per component to allow visual customization.
- Favor composition to keep components focused.

### 2. Asset Management
- Use **neutral naming** for assets within components to facilitate easy swapping.
- Example: In the `Header` component, the hero image should be named `header-banner.webp`.
- Store shared assets in `src/assets/`.

### 3. SEO & Mobile Compatible
- All templates must be responsive by default.
- Semantic HTML is mandatory to ensure SEO friendliness.
- TanStack Router should be configured for clean, crawlable URLs.

### 4. TypeScript
- Define explicit interfaces for all component props in `src/types/` or locally if specific to one component.
- Ensure strict type safety across the application.
