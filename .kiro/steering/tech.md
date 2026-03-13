# Tech Stack

## Core Technologies

- **Framework**: React 18.3.1 with TypeScript 5.5.3
- **Build Tool**: Vite 5.4.2
- **Routing**: React Router DOM 6.22.3
- **Styling**: Tailwind CSS 3.4.1 with PostCSS and Autoprefixer
- **Animations**: Framer Motion 11.0.8
- **State Management**: Zustand 4.5.2 + React Context API

## Key Libraries

- **UI Components**: @headlessui/react, lucide-react (icons)
- **Forms**: react-hook-form 7.51.0
- **Utilities**: clsx, tailwind-merge
- **Specialized**: react-otp-input, react-qr-code

## Development Tools

- **Linting**: ESLint 9.9.1 with TypeScript ESLint
- **Type Checking**: TypeScript with strict mode
- **Code Quality**: React Hooks ESLint plugin, React Refresh plugin

## Common Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Build Configuration

- Vite optimizes dependencies, excluding lucide-react from pre-bundling
- TypeScript uses project references (tsconfig.app.json, tsconfig.node.json)
- Tailwind scans all HTML and TSX files in src directory

## Code Style Conventions

- Use functional components with TypeScript
- Prefer React.FC type for component definitions
- Use type (not interface) for props definitions
- Export components as default exports
- Use motion components from framer-motion for animations
- Leverage Tailwind utility classes over custom CSS
