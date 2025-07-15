# Cypherpunk Portfolio

A retro minimalist portfolio website with a cypherpunk aesthetic, featuring a terminal-inspired design, matrix rain effects, and comprehensive project archives.

## Features

- 🔒 **Cypherpunk Aesthetic**: Terminal-inspired design with green-on-black color scheme
- 📱 **Mobile Responsive**: Optimized for all screen sizes with touch-friendly interactions
- ♿ **Accessibility First**: WCAG compliant with screen reader support and keyboard navigation
- ⌨️ **Keyboard Shortcuts**: Navigate with E (expand all), D (decrypt), 1-4 (toggle sections)
- 🎨 **Visual Effects**: CRT scanlines, glitch effects, matrix rain, and decrypt animations
- 🎯 **Performance**: Static site generation with optimized loading

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom terminal theme
- **Icons**: Lucide React
- **Fonts**: VT323 (terminal) and IBM Plex Mono
- **Deployment**: Optimized for Vercel

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see the portfolio.

### Build

```bash
npm run build
```

### Deploy to Vercel

```bash
npx vercel
```

## Customization

### Portfolio Content

Edit `/src/data/portfolio.ts` to customize your projects and information:

```typescript
export const portfolioData: PeriodSection[] = [
  {
    id: '2024',
    period: '2024',
    company: 'Your Company',
    achievements: [
      {
        title: 'Your Project',
        description: 'Project description',
        status: '[STATUS]',
        link: 'https://github.com/your-repo',
        icon: 'lock' // Available: lock, key, shield, eye, terminal, zap
      }
    ]
  }
];
```

### Site Configuration

Update site metadata and contact info:

```typescript
export const siteConfig = {
  title: 'Your Portfolio',
  description: 'Your description',
  author: 'Your Name',
  pgpKey: 'Your PGP Key',
  torAddress: 'Your .onion address',
  quote: 'Your favorite quote',
  quoteAuthor: 'Quote Author'
};
```

### Visual Customization

Edit `/src/app/globals.css` to modify:

- Color scheme (terminal green, amber, red)
- Animation speeds and effects
- CRT and glitch intensity
- Mobile responsiveness breakpoints

### Content Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and terminal effects
├── data/
│   └── portfolio.ts        # Portfolio content and configuration
```

## Keyboard Shortcuts

- **E**: Expand/collapse all sections
- **D**: Trigger decrypt animation
- **1-4**: Toggle specific sections
- **Tab**: Navigate through interactive elements
- **Enter/Space**: Activate buttons and links

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Screen reader support
- High contrast mode support
- Reduced motion support
- Keyboard navigation
- Focus indicators
- Touch-friendly targets (44px minimum)

## Browser Support

- Modern browsers with ES2020+ support
- Progressive enhancement for older browsers
- Mobile Safari, Chrome, Firefox, Edge

## Security Considerations

This is a static portfolio site with no backend or data collection. The cypherpunk theme is purely aesthetic - implement actual security measures for real cryptographic projects.

## License

MIT License - feel free to use this template for your own portfolio.
