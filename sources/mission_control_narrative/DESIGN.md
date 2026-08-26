---
name: Mission Control Narrative
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
  surface-card: '#111114'
  surface-elevated: '#18181B'
  border-subtle: '#27272A'
  text-muted: '#A1A1AA'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
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
  bento-gap: 1rem
  section-padding: 5rem
  margin-mobile: 1rem
  margin-desktop: 2rem
---

## Brand & Style

This design system is engineered for high-performance B2B environments, where data-driven automation meets industrial-grade reliability. The visual language bridges the gap between agile innovation and enterprise stability, adopting a **Corporate / Modern** style with a "Mission Control" aesthetic.

The brand personality is authoritative and resilient, prioritizing clarity and technical efficiency through a "Single Pane of Glass" philosophy. The user experience is designed to feel "invisible" yet powerful, empowering users with data sovereignty and integrated growth tools.

Key visual pillars include:
- **Modular Information Density:** Utilizing Bento Box layouts to organize diverse data streams into cohesive, scannable blocks.
- **Precision Engineering:** Sharp execution of borders and layered surfaces to denote technical capabilities.
- **Authoritative Resilience:** A dark-first interface that reduces visual fatigue while emphasizing high-contrast data indicators.

## Colors

The palette is anchored by a deep brand blue, used for primary actions and brand presence. The **Dark Mode** default provides a sophisticated technical backdrop.

- **Primary:** Deep Blue (`#1D55B2`) represents stability and professional trust. Use for primary CTAs, active navigation states, and key brand moments.
- **Secondary:** Success Green (`#00C16A`) is reserved for positive data trends, "Online" system statuses, and successful conversion points.
- **Neutral:** A foundation of Zinc and Slate tones. Backgrounds use a near-black base, while containers use progressively lighter shades of gray to create hierarchy.
- **Accent:** Indigo is used for secondary data paths and interactive technical elements.

## Typography

The typography system uses a high-performance sans-serif stack designed for legibility in data-dense environments.

- **Headings (Geist):** Headings utilize Geist for its technical, precise character. Headlines feature tighter tracking in larger sizes to maintain a premium, architectural feel.
- **Body (Inter):** Inter is used for all long-form reading and interface labels due to its exceptional readability and neutral tone.
- **Technical/Code:** For automated logs, terminal snippets, or system IDs, use JetBrains Mono to clearly differentiate raw data from descriptive interface text.

Mobile typography scales down display sizes to ensure technical titles fit within modular bento containers without excessive wrapping.

## Layout & Spacing

The layout is built on a **Fluid Grid** with a strict adherence to the **Bento Box model** for feature showcasing and dashboards. 

- **Grid System:** A 12-column grid is the default for standard page layouts. Bento layouts transition into a 6-column sub-grid or flexible flexbox containers depending on information density.
- **Rhythm:** Spacing follows an 8px incremental scale (4, 8, 16, 24, 32, 48, 64, 80) to maintain structural alignment.
- **Responsive Adaptations:**
    - **Desktop:** 1280px max-width with 2rem margins. Bento items may span 2, 3, or 4 columns.
    - **Tablet:** 1.5rem margins. Bento items reflow to 2-column grids where appropriate.
    - **Mobile:** 1rem margins. All grid items collapse into a vertical stack to maintain legibility of charts and technical text.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional drop shadows.

- **Layer 0 (Background):** The base canvas (`#09090B`) provides the deepest level.
- **Layer 1 (Bento/Cards):** Surfaces (`#111114`) sit immediately above the background, defined by a 1px ghost border (`#27272A`).
- **Layer 2 (Interactions):** Active popovers or modals use a lighter surface (`#18181B`) with a very subtle, diffused ambient shadow (10% opacity primary blue tint) to separate from the layout.

Borders are the primary method of separation. Use thin, low-opacity strokes to define containers, maintaining a clean, technical aesthetic that mimics a software terminal or cockpit.

## Shapes

The shape language is modern and architectural, utilizing generous corner radii to balance the "cold" nature of a technical dark-mode interface.

- **Standard Containers:** Bento boxes and primary cards use `rounded-xl` (1rem) for a modern, software-centric look.
- **Small Elements:** Buttons and form inputs use `rounded-lg` (0.5rem) to maintain a precise, clickable footprint.
- **System Badges:** Status chips utilize a fully rounded "pill" shape to distinguish them from structural components.

## Components

### Buttons
- **Primary:** Solid `#1D55B2` background, white text. No shadow, flat technical execution.
- **Secondary:** Transparent background with a `1px` border of `zinc-800`.
- **States:** Interactive elements should have a subtle brightness increase on hover and a slight scale-down (98%) on click for tactile confirmation.

### Bento Boxes & Cards
- Use a background of `#111114` and a `1px` border of `zinc-800`.
- Inner padding should be consistent at `1.5rem` or `2rem`.
- Use "Data Badges" (small chips) in the top-right corner to indicate technical statuses or categories.

### Input Fields
- Dark backgrounds (`#09090B`) with subtle borders. Focus state should utilize a sharp 2px primary blue outer glow (ring) with 0px blur.

### Chips & Badges
- Small, uppercase labels using the Geist font. 
- Backgrounds should use a low-opacity tint of the functional color (e.g., 10% opacity secondary green for a "Success" badge).

### Data Visualization
- Charts should be minimalist. Use `#00C16A` for growth/success and `#1D55B2` for general volume. Grid lines should be faint (`zinc-800` at 50% opacity).