# Portfolio Website

A modern, clean portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Designed with an Airbnb-inspired aesthetic featuring smooth animations and full responsiveness.

## Features

- ✨ Clean, minimalist design
- 📱 Fully responsive on all devices
- 🎨 Airbnb-inspired UI/UX
- ⚡ Built with Next.js 15 App Router
- 🎭 Smooth animations with Framer Motion
- 🎯 Clean architecture (Data, Domain, UI layers)
- 📝 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🔤 Poppins font family

## Project Structure

```
src/
├── data/           # Static content & constants
│   ├── profile.ts  # Personal info, intro text
│   ├── projects.ts # Project data
│   ├── skills.ts   # Skills data
│   └── navigation.ts # Navigation items
├── domain/         # Types & interfaces
│   └── types.ts    # TypeScript interfaces
└── ui/             # All UI components
    ├── components/ # Reusable UI components
    │   ├── button.tsx
    │   ├── card.tsx
    │   ├── section-heading.tsx
    │   └── skill-badge.tsx
    ├── sections/   # Page sections
    │   ├── hero.tsx
    │   ├── about.tsx
    │   ├── projects.tsx
    │   └── skills.tsx
    └── layouts/
        └── navbar.tsx
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

Edit the files in the `src/data/` directory:

- **`profile.ts`** - Your name, title, intro, and about content
- **`projects.ts`** - Add/edit your projects
- **`skills.ts`** - Add/edit your skills
- **`navigation.ts`** - Customize navigation items

### Customize Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: "#FF385C",    // Main accent color
  secondary: "#00A699",  // Secondary accent
  // ... add more colors
}
```

### Add Sections

1. Create a new component in `src/ui/sections/`
2. Import and add it to `src/app/page.tsx`
3. Add navigation item in `src/data/navigation.ts`

## Architecture Principles

This project follows clean architecture principles:

- **Data Layer**: Static content separated from UI
- **Domain Layer**: Type definitions and interfaces
- **UI Layer**: Components, sections, and layouts
- **Single Responsibility**: Each component has one clear purpose
- **DRY Principle**: Reusable components avoid duplication

## Technologies

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Poppins** - Google Font

## Building for Production

```bash
npm run build
npm run start
```

## License

This project is open source and available for personal use.


