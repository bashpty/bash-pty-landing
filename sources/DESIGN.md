---
name: Resilient Intelligence System
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f22'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#c3c6d4'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#8d909e'
  outline-variant: '#434752'
  surface-tint: '#afc6ff'
  primary: '#afc6ff'
  on-primary: '#002d6d'
  primary-container: '#1d55b2'
  on-primary-container: '#bed0ff'
  inverse-primary: '#255bb8'
  secondary: '#43e186'
  on-secondary: '#00391b'
  secondary-container: '#02c16a'
  on-secondary-container: '#004824'
  tertiary: '#c0c1ff'
  on-tertiary: '#1000a9'
  tertiary-container: '#4344d1'
  on-tertiary-container: '#cbccff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#afc6ff'
  on-primary-fixed: '#001944'
  on-primary-fixed-variant: '#004299'
  secondary-fixed: '#65fe9f'
  secondary-fixed-dim: '#43e186'
  on-secondary-fixed: '#00210d'
  on-secondary-fixed-variant: '#00522a'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
  slate-900: '#0F172A'
  zinc-400: '#A1A1AA'
  zinc-800: '#27272A'
  success-vibrant: '#10B981'
  warning-amber: '#F59E0B'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: ui-monospace
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2rem
  bento-gap: 1rem
  section-padding: 5rem
---

## Brand & Style

This design system is engineered for a high-performance B2B environment where data-driven automation meets industrial-grade reliability. The visual language bridges the gap between agile startup innovation and enterprise-level stability, utilizing a **Corporate / Modern** style with heavy influences from modern SaaS aesthetics.

The brand personality is authoritative and resilient. It prioritizes clarity and efficiency through a "Single Pane of Glass" philosophy, ensuring that complex automation workflows and deep analytics are presented with surgical precision. The user experience is designed to feel "invisible" yet powerful, empowering users with data sovereignty and integrated growth tools.

Key visual pillars include:
- **Modular Information Density:** Utilizing "Bento Box" layouts to organize diverse data streams into cohesive, scannable blocks.
- **Precision Engineering:** Sharp execution of borders and soft shadows to denote "pro-code" capabilities.
- **Data Clarity:** High-contrast text and vibrant success indicators that drive conversion and highlight system health.

## Colors

The palette is anchored by a deep brand blue, extracted from the core identity, used for primary actions and brand presence. The default **Dark Mode** provides a sophisticated "Mission Control" backdrop, reducing eye strain for long-form data monitoring.

- **Primary:** Deep Blue (`#1D55B2`) represents stability and professional trust. Use for primary CTAs and active states.
- **Secondary:** Success Green (`#00C16A`) is reserved for positive data trends, conversion points, and system "Online" statuses.
- **Neutrals:** A sophisticated range of Zinc and Slate tones provides the structural foundation. Surfaces utilize layered dark grays to create depth without relying on pure black.
- **Functional Accents:** Vibrant indigo and amber are used sparingly for secondary data paths and system alerts.

## Typography

The typography system uses a high-performance sans-serif stack designed for legibility in data-dense environments.

- **Headings (Geist):** Headings use Geist for its technical, precise character. Headlines feature generous tracking (+1% to +2%) to enhance the premium, "enterprise-grade" feel.
- **Body (Inter):** Inter is used for all long-form reading and interface labels due to its exceptional readability and neutral tone.
- **Code/Technical:** For automated logs, IDs, and "pro-code" snippets, use a monospaced font to differentiate data from descriptive text.

For mobile, display sizes scale down aggressively to ensure that technical labels and bento-grid titles remain fully visible without excessive wrapping.

## Layout & Spacing

The layout is built on a **Fluid Grid** with a specific emphasis on the **Bento Box model** for feature showcasing and dashboards. 

- **Grid:** A 12-column grid is used for standard pages, while a 6-column sub-grid is typically used for Bento layouts.
- **Rhythm:** Spacing follows an 8px incremental scale (4, 8, 16, 24, 32, 48, 64).
- **Responsive Behavior:** 
    - **Desktop:** 1280px max-width, 2rem margins, 1.5rem gutters.
    - **Tablet:** 1.5rem margins, 1rem gutters. Elements begin reflowing from multi-column to single-column blocks.
    - **Mobile:** 1rem margins. Bento items collapse into a vertical stack to maintain chart legibility.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Low-Contrast Outlines**. Instead of aggressive shadows, this system uses surface tiers to represent depth:

1.  **Level 0 (Background):** Base surface (`#09090B`).
2.  **Level 1 (Cards/Bento):** Elevated surface (`#111114`) with a subtle 1px border (`#27272A`).
3.  **Level 2 (Modals/Popovers):** Higher surface (`#18181B`) with a soft, diffused ambient shadow (10% opacity, 20px blur) to separate from the background.

Borders are a critical structural element. Use "Ghost Borders"—low-opacity, thin strokes—to define containers without adding visual noise.

## Shapes

The shape language is modern and "friendly-tech," utilizing generous corner radii to soften the industrial nature of the product.

- **Standard Containers:** Use `rounded-xl` (1rem) for most cards and bento boxes.
- **Large Components:** Use `rounded-2xl` (1.5rem) or `rounded-3xl` for high-level hero sections or primary dashboard containers to align with the Nuxt UI inspiration.
- **Small Elements:** Buttons and inputs use `rounded-lg` (0.5rem) to maintain a precise, clickable feel.

## Components

### Buttons
- **Primary:** Solid `#1D55B2` background, white text, `rounded-lg`. High-contrast and impactful.
- **Secondary:** Transparent background with a `1px` border of `zinc-800`.
- **States:** Subtle scale down (98%) on click to provide tactile feedback.

### Cards & Bento Boxes
- Use a background of `#111114` and a `1px` border of `zinc-800`. 
- Padding should be generous (`2rem`) to prevent data congestion.
- Include "Data Badges" (chips) in the top right for status indicators.

### Input Fields
- Dark backgrounds (`#09090B`) with subtle borders. 
- Focus state should utilize a `2px` primary blue outer glow (ring).

### Chips & Badges
- Used for status (e.g., "Active," "Deploying"). 
- Small, uppercase Geist labels with a semi-transparent background tint derived from the status color (e.g., 10% opacity green).

### Data Visualization
- Charts should use `secondary-color` (green) for success metrics and `primary-color` (blue) for standard volume. 
- Grid lines in charts should be kept to a minimum, using `zinc-800` at 50% opacity.