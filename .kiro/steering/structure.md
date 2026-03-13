# Project Structure

## Directory Organization

```
src/
├── assets/          # Static assets (images, SVGs, logos)
├── components/      # Reusable UI components
├── context/         # React Context providers
├── pages/           # Route-level page components
│   ├── Dashboard/   # Dashboard-related pages
│   ├── Onboarding/  # Onboarding flow pages
│   └── Onboarding1/ # Alternative onboarding implementation
├── App.tsx          # Main app component with routing
├── main.tsx         # Application entry point
└── index.css        # Global styles and Tailwind directives
```

## Architectural Patterns

### Routing Structure

- Top-level routes defined in `App.tsx`
- Nested routes for dashboard and onboarding flows
- Protected routes wrapped with `PrivateRoute` component
- Default redirects to login for unauthenticated users

### Component Organization

- **Reusable Components** (`src/components/`): Button, Input, Card, Header, Sidebar, etc.
- **Page Components** (`src/pages/`): Full page views tied to routes
- **Layout Components**: OnboardingLayout, Dashboard layout with nested routing

### State Management

- **Global Auth State**: React Context (`AuthContext.tsx`)
- **Local State**: Component-level useState hooks
- **Form State**: react-hook-form for complex forms
- **Additional State**: Zustand available for more complex state needs

### Authentication Flow

- AuthProvider wraps entire app
- PrivateRoute component guards protected routes
- User data stored in localStorage
- useAuth hook provides auth context to components

## Naming Conventions

- **Components**: PascalCase (e.g., `AccountTypeSelector.tsx`)
- **Pages**: PascalCase, organized in feature folders
- **Utilities**: camelCase
- **Assets**: kebab-case or descriptive names

## Design System

### Color Palette

- **Primary**: Burgundy (burgundy-950: #8B0000)
- **Accent**: Gold (gold-500: #d4af37)
- **Neutral**: Gray scale for text and backgrounds

### Custom Tailwind Classes

- `btn-primary`: Primary button styling
- `btn-secondary`: Secondary button styling
- Custom shadows: `shadow-card`, `shadow-input`
- Custom fonts: `font-playfair` (headings), `font-inter` (body)

## File Patterns

- Each component in its own file
- Default exports for components
- Named exports for utilities and hooks
- Co-located types with components (inline type definitions)

## Page Flow Architecture

1. **Authentication Pages**: Login → Signup → OTP Verification → QR Code
2. **Onboarding Pages**: Multi-step wizard with layout wrapper
3. **Dashboard Pages**: Nested routes with shared layout and sidebar
