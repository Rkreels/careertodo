# CareerToDo Design Guidelines

## Design Approach
**Reference-Based + Custom System**: Drawing inspiration from modern edtech platforms (Coursera, Udemy) combined with bold, high-contrast visual language for a career-simulation focused experience.

## Core Design Principles
- **Modern & Bold**: High-contrast, minimal clutter, generous whitespace
- **Big Typography**: Extra-large headings (xl/2xl/3xl), readable body text
- **Micro-interactions**: Subtle animations, hover states, parallax effects
- **Mobile-First**: Scalable responsive design optimized for all devices

---

## Color Palette

### Light Mode
- **Primary**: Deep Indigo `222 47% 11%` or Charcoal `0 0% 15%`
- **Accent Primary**: Cyan `188 94% 43%` or Electric Blue `217 91% 60%`
- **Accent Warm (CTAs)**: Orange `25 95% 53%`
- **Background**: White `0 0% 100%`
- **Surface**: Light Gray `0 0% 98%`
- **Text Primary**: Near Black `0 0% 10%`
- **Text Secondary**: Medium Gray `0 0% 40%`

### Dark Mode
- **Primary**: Deep Indigo `222 47% 11%` (same)
- **Accent Primary**: Cyan `188 94% 43%` (brightened for contrast)
- **Accent Warm**: Orange `25 95% 63%` (slightly lighter)
- **Background**: Very Dark `0 0% 8%`
- **Surface**: Dark Slate `222 20% 12%`
- **Text Primary**: Off White `0 0% 95%`
- **Text Secondary**: Light Gray `0 0% 70%`

---

## Typography

### Font Families
- **Headings**: Modern variable font (Inter, Plus Jakarta Sans, or Outfit)
- **Body**: Sans-serif system stack with variable font fallback

### Type Scale
- **Hero Headline**: text-5xl md:text-6xl lg:text-7xl (bold/extrabold)
- **Section Headers**: text-3xl md:text-4xl lg:text-5xl (bold)
- **Subheadings**: text-xl md:text-2xl (semibold)
- **Body Large**: text-lg md:text-xl (regular)
- **Body**: text-base md:text-lg (regular)
- **Small**: text-sm (regular)

---

## Layout System

### Grid & Spacing
- **Tailwind Units**: Consistently use 2, 4, 6, 8, 12, 16, 20, 24 for spacing
- **Desktop**: 12-column grid with max-w-7xl container
- **Mobile**: Single column, full-width sections
- **Section Padding**: py-12 md:py-20 lg:py-32
- **Component Padding**: p-2 minimum, p-6 to p-8 for cards
- **Rounded Corners**: rounded-2xl standard, rounded-3xl for hero elements

### Viewport Strategy
- **Hero Section**: 80-90vh with background video/animation
- **Content Sections**: Natural height based on content
- **Long-Scroll**: 20+ sections with smooth vertical rhythm

---

## Component Library

### Navigation
- **Sticky Top Nav**: backdrop-blur, shadow-sm, Home | About | Contact | Login | Register
- **Language Toggle**: Top-right, EN/BN switcher with flags
- **Progress Indicator**: Thin progress bar showing scroll position

### Hero Section
- **Background**: Looped muted video (parallax effect) or Lottie animation
- **Content**: Bold headline, subheadline, 2 CTAs side-by-side
- **CTAs**: Primary (filled, warm accent), Secondary (outline with blur backdrop)
- **Visual**: Dashboard mockup overlay (floating cards with subtle shadow)

### Feature Cards
- **Layout**: 3-4 column grid (responsive to 1 column mobile)
- **Style**: Glass-morphism effect, rounded-2xl, p-6 to p-8
- **Content**: Icon/visual, title (text-2xl bold), description
- **Hover**: Subtle lift transform, glow effect on accent border

### Tool Grid (20+ Items)
- **Layout**: 4-5 column grid desktop, 2 column mobile
- **Animation**: Stagger reveal on scroll (Framer Motion)
- **Cards**: Small icon cards, rounded-xl, hover scale effect
- **Tools**: ERP, HRMS, ATS, Accounting, Payroll, Tax, POS, CRM, etc.

### Reels Testimonial Carousel
- **Layout**: Dual-row, 10 vertical reels per row (9:16 aspect)
- **Behavior**: Horizontal auto-scroll, snap points, pause on hover
- **Interaction**: Tap to unmute, progressive loading
- **Performance**: Virtualization for smooth scrolling

### Video Sections
- **Full Video**: Large player, autoplay muted preview, captions UI
- **Interactive GIFs**: 3 looped demos, lazy-loaded, in-place playback
- **Controls**: Custom player UI matching brand colors

### News/Media Collage
- **Layout**: 10 logos/images with CSS transforms
- **Effect**: Rotate -15° to +15°, z-index layering, central prominence
- **Interaction**: Swipeable, keyboard accessible, click opens modal

### User Feedback Slider
- **Layout**: Two-column sliding cards
- **Animation**: Smooth in/out motion, auto-cycle
- **Cards**: Profile image, 5-star rating, quote text, rounded-xl

### Career Path Cards
- **Style**: Large clickable cards with category images
- **Hover**: Lift effect, accent border glow
- **Content**: Path name, brief description, "Explore" CTA
- **Paths**: Finance, HR, Sales, Product, Ops, Marketing, Treasury, Healthcare

### Pricing Section
- **Layout**: Centered pricing card with prominent offer badge
- **Offer**: "Pay 3 months → Get 6 months" (large, eye-catching)
- **CTA**: Large warm-accent button, "Secure Payment" badge
- **Trust**: Refund policy (7-day), secure payment icons

### FAQ Accordion
- **Style**: Clean, minimal borders, rounded corners
- **Interaction**: Smooth expand/collapse (Framer Motion)
- **Content**: 20 FAQs with SEO-friendly markup
- **Icons**: Chevron rotate animation

### Footer
- **Style**: Thin, minimal, dark background
- **Content**: Links (Privacy, Terms, Contact, Careers, Press)
- **Layout**: Single row desktop, stacked mobile

---

## Animations & Motion

### Page Load
- **Hero**: Fade-in with subtle scale (0.95 → 1)
- **Sections**: Stagger reveal on scroll (cascade effect)

### Hover States
- **Cards**: transform scale(1.02), shadow-lg transition
- **Buttons**: Slight lift, accent glow
- **Links**: Underline slide-in effect

### Scroll Effects
- **Parallax**: Hero background subtle movement
- **Reveal**: Elements fade-in and slide-up when 30% visible

### Carousel
- **Auto-scroll**: Smooth continuous animation, 30s per cycle
- **Manual**: Touch/swipe with momentum, keyboard arrows

**Performance**: Use transform and opacity only, GPU-accelerated

---

## Images & Media

### Hero Section
- **Background Video**: Looped, muted, low bitrate (parallax effect)
- **Dashboard Mockup**: Floating UI screenshot with shadow and glow

### Feature Sections
- **Simulation GIFs**: 3 demo loops showing tool interfaces
- **Tool Icons**: SVG icons for each generic tool

### Testimonial Reels
- **Format**: 9:16 vertical video, 720p-1080p, H.264/AV1
- **Thumbnails**: Auto-generated from first frame

### Media Collage
- **Logos**: 10 news/media outlet logos, optimized PNGs/SVGs
- **Layering**: CSS transforms for visual interest

### Career Cards
- **Illustrations**: Abstract/minimal graphics for each career path
- **Style**: Consistent illustration style, accent color highlights

---

## Accessibility

- **Contrast**: WCAG AA minimum (4.5:1 text, 3:1 UI)
- **Alt Text**: Descriptive for all images and videos
- **Keyboard Nav**: Full keyboard support, visible focus states
- **ARIA**: Labels for interactive components, roles for sections
- **Captions**: All videos include subtitles/captions
- **Semantic HTML**: Proper heading hierarchy, landmarks

---

## Responsive Breakpoints

- **Mobile**: < 768px (single column, stacked layout)
- **Tablet**: 768px - 1024px (2-3 column grids)
- **Desktop**: > 1024px (full 12-column grid, multi-column layouts)
- **Large**: > 1440px (max-w-7xl container, centered)