# Savor and Style Catering Services — Landing Page
## Marketing Website Blueprint

---

## 1. PROJECT OVERVIEW

**Business Name:** Savor and Style Catering Services
**Legal Name:** V&A Estrella Catering Services
**Tagline:** "We Serve, You Enjoy"
**Phone:** 0948-599-2866
**Facebook:** Savor and Style Catering Services
**Portal URL:** https://savor-and-style-portal.vercel.app
**Service Area:** Metro Manila, Bulacan, and Nearby Provinces

### Purpose of This Website
A marketing landing page designed to:
- Attract new clients via Facebook Ads
- Showcase the brand, events, gallery, and testimonials
- Convert visitors into inquiries via multiple CTAs
- Direct confirmed clients to the booking portal

### This is NOT the booking portal.
The portal (savor-and-style-portal.vercel.app) handles bookings, contracts, payments, and client management. This landing page is purely for marketing and lead generation.

---

## 2. TECH STACK

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (subtle, elegant scroll animations)
- **Icons:** Lucide React
- **Fonts:** Playfair Display (headings) + Inter (body) via Google Fonts
- **Hosting:** Vercel (separate project from the portal)
- **No backend needed** — static site, all CTAs go to Messenger or portal

---

## 3. BRAND & DESIGN SYSTEM

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Wine Red (Primary) | `#722F37` | Buttons, headers, accents, nav |
| Deep Wine (Dark) | `#4A1A20` | Hover states, dark sections |
| Cream Yellow | `#F5F0DC` | Page backgrounds, card fills |
| Warm White | `#FDFAF4` | Content backgrounds |
| Gold Accent | `#C9A84C` | Borders, dividers, highlights, stars |
| Dark Text | `#1A1A1A` | Body text |
| Muted Text | `#6B6B6B` | Labels, secondary text |

### Typography
- **Headings:** Playfair Display — elegant, serif
- **Body:** Inter — clean, modern, readable

### Design Principles
- Elegant but approachable — not intimidating
- Mobile-first — majority of visitors will be on phones
- Clean whitespace — let the food photos breathe
- Subtle scroll animations — fade in, slide up
- No clutter — focused on conversion
- Consistent with portal branding

---

## 4. SITE STRUCTURE — ONE PAGE (Sections)

### Section 1: Navigation Bar (Sticky)
- Logo (logo.png) + "Savor and Style" text
- Nav links: Home, Events, Gallery, Testimonials, Contact
- CTA Button: "Book Now" — wine red button — links to portal
- Mobile: hamburger menu

### Section 2: Hero Section
- Full-width background — elegant food/event photo (use hero.jpg from public folder)
- Overlay: semi-transparent wine red gradient
- Headline: **"We Serve, You Enjoy"** — Playfair Display, large, white
- Subheadline: **"Premium Catering Services for Every Occasion"**
- Sub-text: "Serving Metro Manila, Bulacan & Nearby Provinces"
- Two CTA buttons:
  - **"Book Your Event"** — wine red solid — links to portal
  - **"Message Us"** — outlined white — links to Facebook Messenger (m.me/savorandstylecatering)
- Subtle scroll indicator at bottom

### Section 3: Why Choose Us
- Section title: "Why Families & Companies Trust Us"
- 4 feature cards in a grid:
  1. 🍽️ **Masarap na Pagkain** — "Fresh ingredients, authentic Filipino flavors, and dishes your guests will keep talking about."
  2. 👨‍👩‍👧 **Friendly & Professional Staff** — "Our team goes above and beyond to make sure every guest feels taken care of."
  3. 📋 **Complete Setup** — "From tables and chairs to flatware — we handle everything so you can enjoy your event."
  4. 📱 **Online Client Portal** — "Track your booking, menu, and payments anytime through our exclusive client portal."

### Section 4: Events We Cater
- Section title: "Every Occasion, Perfectly Served"
- Subtitle: "From intimate family gatherings to grand corporate events"
- Event type cards in a grid (with icons):
  1. 🎂 Adult Birthday
  2. 👰 Wedding
  3. 🎀 Debut
  4. 🎈 Kiddie Party
  5. 🙏 Christening / Dedication
  6. 🏠 House Blessing
  7. 🏢 Corporate Events
  8. ✨ And More
- Each card: icon + event name + short description
- CTA below: "Planning an event? Let's talk!" → Messenger link

### Section 5: Menu Highlights
- Section title: "A Taste of What We Offer"
- Subtitle: "Our menu is fully customizable to your taste and budget"
- Display dishes in categories with elegant card layout:
  - Pork Dishes (show 3 popular: Lechon Kawali, Crispy Pork Kare-Kare, Pork Hamonado)
  - Chicken Dishes (show 3: Chicken Alexander, Chinese Style Roasted Chicken, Hickory Chicken)
  - Pasta (show 3: Carbonara, Charlie Chan Pasta, Pesto Pasta)
  - Desserts (show 3: Panna Cotta, Buko Pandan, Mango Tapioca)
- "View Full Menu" CTA → opens menu modal OR links to portal
- Note at bottom: "All packages are customizable. Message us for pricing!"

### Section 6: Default Inclusions (What's Always Included)
- Section title: "Every Package Includes"
- Subtitle: "No hidden charges — these come with every booking"
- 4 inclusion cards:
  1. 🪑 Tables and Chairs with Cloths
  2. 🍴 Complete Flatware and Silverwares
  3. 👨‍🍳 Waiter Service and Food Servers
  4. 💧 Water and Ice
- Wine red background section — white text
- CTA: "Get a Quote" → Messenger

### Section 7: Gallery
- Section title: "Moments We've Made Memorable"
- Masonry photo grid layout — 6-9 photos
- Photos uploaded to public/gallery/ folder
- Hover effect: slight zoom + wine red overlay with event type label
- "See More on Facebook" button → Facebook page link
- IMPORTANT: Use actual event photos uploaded by owner (gallery-1.jpg through gallery-9.jpg)

### Section 8: Testimonials
- Section title: "What Our Clients Say"
- Subtitle: "Real feedback from real events"
- 3 testimonial cards — screenshot style (like Messenger chat bubbles) OR clean quote cards:

**Testimonial 1 — Nestle**
⭐⭐⭐⭐⭐
"Ang sisipag at ang babait ng mga waiters mo grabe! Pati mga in-laws ko nung nanghingi ako ng feedback sa kanila, nasarapan sa food nyo. Until our next event!"
— Nestle, Family Event

**Testimonial 2 — April**
⭐⭐⭐⭐⭐
"Legit po talaga kau. Sobrang ganda ng set up ng stage ng anak ko and very friendly ang mga staff nyo po. Lahat ng guests ansabi ang sarap ng food. Thank u po sa uulitin!"
— April, Kids Event

**Testimonial 3 — Rio**
⭐⭐⭐⭐⭐
"Nakakatuwa kasi lahat sila ang feedback sa food masarap lahat pati dessert. Yung set up sa venue maayos, sobrang mag-accommodate ang crew sa mga guest requests. OVERALL GOOD JOB!"
— Rio, Special Event

- Gold stars for ratings
- Subtle card design — cream background, wine red accent border

### Section 9: Call to Action Banner
- Full-width wine red section
- Headline: **"Ready to Make Your Event Unforgettable?"**
- Sub-text: "Book now and get a personalized menu and quote for your special occasion."
- Two buttons:
  - **"Book Your Event Online"** → portal link
  - **"Chat with Us on Messenger"** → Messenger link

### Section 10: Contact & Footer
- Business name: Savor and Style Catering Services
- Formerly: Estrella's Catering Services
- Address: 1185 Tabing Ilog, Sta. Clara, Santa Maria, Bulacan
- Service Area: Metro Manila & Nearby Provinces
- Phone: 0948-599-2866
- Facebook: Savor and Style Catering Services
- Portal link: savor-and-style-portal.vercel.app
- Copyright: © 2026 Savor and Style Catering Services. All Rights Reserved.
- Small text: "V&A Estrella Catering Services"

---

## 5. CALL TO ACTION STRATEGY

### Primary CTAs (Wine Red Buttons):
- "Book Your Event" → https://savor-and-style-portal.vercel.app
- "Book Now" → https://savor-and-style-portal.vercel.app

### Secondary CTAs (Outlined Buttons):
- "Message Us" → https://m.me/EstrellasCateringServices
- "Chat with Us on Messenger" → https://m.me/EstrellasCateringServices
- "See More on Facebook" → https://www.facebook.com/EstrellasCateringServices

### Floating CTA (Mobile):
- Sticky bottom bar on mobile: "📩 Message Us" + "📅 Book Now"

---

## 6. ANIMATIONS & INTERACTIONS

- Navbar: transparent on top, wine red background on scroll
- Hero: fade-in text animation on load
- Sections: fade-up animation on scroll (using Framer Motion)
- Cards: subtle hover lift effect (translateY -4px + shadow)
- Gallery: hover zoom + overlay
- Buttons: hover color darken + scale 1.02
- Mobile menu: smooth slide-down

---

## 7. SEO & META TAGS

```html
<title>Savor and Style Catering Services | Metro Manila & Bulacan</title>
<meta name="description" content="Premium catering services for weddings, birthdays, debuts, corporate events and more. Serving Metro Manila, Bulacan & nearby provinces. Book online now!" />
<meta property="og:title" content="Savor and Style Catering Services" />
<meta property="og:description" content="We Serve, You Enjoy. Premium catering for every occasion." />
<meta property="og:image" content="/hero.jpg" />
```

---

## 8. IMAGES NEEDED

Place these in the `public/` folder before building:

| Filename | Description |
|----------|-------------|
| logo.png | Savor and Style logo (already have this) |
| hero.jpg | Main hero background — best event/food photo |
| gallery-1.jpg to gallery-9.jpg | Past event photos for gallery section |

All images should be optimized — max 500KB each for fast loading.

---

## 9. FOLDER STRUCTURE

```
savor-and-style-landing/
├── public/
│   ├── logo.png
│   ├── hero.jpg
│   └── gallery/
│       ├── gallery-1.jpg
│       └── gallery-2.jpg ... etc
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── EventTypes.jsx
│   │   ├── MenuHighlights.jsx
│   │   ├── DefaultInclusions.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTABanner.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 10. GETTING STARTED — INSTRUCTIONS FOR CLAUDE CODE

Build in this exact order:

1. Scaffold new Vite + React project (separate from the portal project)
2. Install: tailwindcss, framer-motion, lucide-react
3. Set up Tailwind with custom color palette from Section 3
4. Set up Google Fonts — Playfair Display + Inter in index.html
5. Build components in this order:
   - Navbar (sticky, transparent to wine red on scroll, mobile hamburger)
   - Hero (full-width, overlay, two CTAs, scroll indicator)
   - WhyChooseUs (4 feature cards)
   - EventTypes (8 event type cards)
   - MenuHighlights (dish cards by category)
   - DefaultInclusions (wine red background section)
   - Gallery (masonry grid, hover effects)
   - Testimonials (3 cards with stars)
   - CTABanner (full-width wine red)
   - Footer (contact details, links)
6. Add scroll animations via Framer Motion
7. Add floating mobile CTA bar
8. Add SEO meta tags
9. Make fully mobile responsive
10. Test build — npm run build must pass clean
11. Deploy to Vercel as separate project

---

## 11. IMPORTANT NOTES FOR CLAUDE CODE

- This is a SEPARATE project from savor-and-style-portal — do NOT mix the two
- No backend, no database, no authentication needed — pure static React
- All links to portal: https://savor-and-style-portal.vercel.app
- All Messenger links: https://m.me/EstrellasCateringServices
- Facebook page: https://www.facebook.com/EstrellasCateringServices
- Use placeholder images (from unsplash or solid color blocks) until owner uploads real photos
- Keep bundle size small — fast loading is critical for mobile users from ads

---

*Blueprint for: Savor and Style Catering Services Landing Page*
*Sta. Maria, Bulacan | Serving Metro Manila & Nearby Areas*
*Prepared with Claude AI — Version 1.0*
