# LandingHero Component

## Overview
The LandingHero component is the main hero section of the landing page, featuring a dynamic video background, animated text content, and call-to-action buttons. It's designed to be fully responsive across mobile, tablet, and desktop devices.

## Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Responsive Features

#### Video Background
- Mobile: Optimized for smaller screens with reduced quality
- Tablet: Medium quality with adaptive sizing
- Desktop: Full HD quality with full-screen display

#### Text Content
- Mobile: 
  - Larger font sizes for better readability
  - Stacked layout for CTAs
  - Reduced padding/margins
- Tablet:
  - Medium font sizes
  - Side-by-side CTAs when space permits
  - Balanced padding/margins
- Desktop:
  - Standard font sizes
  - Full layout with maximum spacing
  - Side-by-side CTAs

#### Call-to-Action Buttons
- Mobile: Full-width buttons stacked vertically
- Tablet: Medium-width buttons, potentially side-by-side
- Desktop: Standard button sizes, side-by-side layout

## Implementation Guidelines

### Media Queries
Use Tailwind's responsive prefixes:
```css
/* Mobile-first approach */
.base-class {
  /* Mobile styles */
}

.md:tablet-class {
  /* Tablet styles */
}

.lg:desktop-class {
  /* Desktop styles */
}
```

### Performance Considerations
- Lazy load video content
- Use responsive images with srcset
- Implement proper loading states
- Optimize animations for mobile devices

### Accessibility
- Ensure proper contrast ratios at all breakpoints
- Maintain readable font sizes on mobile
- Keep interactive elements appropriately sized for touch
- Test with screen readers at all breakpoints

## Example Usage
```tsx
<LandingHero />
```

## Props
The component uses the following props from HeroSection:
- `mediaItems`: Array of media items for the background
- `slogans`: Array of text content to display
- `mission`: Mission statement text
- `description`: Description text
- `tagline`: Tagline text
- `ctaButtons`: Array of call-to-action buttons
- `isPlaying`: Boolean to control media playback 