# SmartHR - HRM, Payroll, Workforce & CRM Admin Dashboard Landing Page

A modern, high-performance landing page for the **SmartHR** React & Bootstrap Admin Dashboard Template. Designed for HR management, payroll processing, workforce tracking, and CRM administration.

---

## 🌟 Key Features

- **Responsive Hero Section**
  - High-resolution dashboard preview mockup with custom layered diagonal background pills.
  - Floating, animated React badge anchored directly to the top-right corner of the dashboard preview.
  - Interactive technology buttons (React, Next.js).
- **Interactive Sticky Navigation**
  - Clean floating pill navbar that seamlessly docks as a full-width sticky bar on scroll.
  - Responsive mobile collapse menu with Bootstrap 5 integration.
- **Showcase Sections**
  - **Overview**: 4 highlight cards showcasing job listings, analytics, candidate tracking, and themes.
  - **Demos**: Multiple prebuilt dashboard variants (Admin, Deals, Employee, Leads, Super Admin).
  - **Use Cases**: Split showcases for Human Resource Management (HRM) and Field Service Management (FSM) with direct redirect actions.
  - **Layouts Showcase**: 15 pre-rendered layout architecture options dynamically loaded via JavaScript.
  - **Benefits & Animated Counters**: Viewport-triggered numerical counter animations with interactive stat cards.
  - **Inner Pages Filter**: Multi-category filterable tabs (Applications, CRMs, Authentication, and Other Modules) with responsive grid cards.
  - **Features Grid**: Visual display of core technologies (React 19, SCSS, Redux, Bootstrap 5, Hooks, Apex Charts, Ant Design, FullCalendar).
  - **Pricing Plans**: Clean plan tiers with action buttons.
  - **Draggable Testimonials**: Smooth click-and-drag slider for user reviews and testimonials.
  - **Interactive FAQ Accordion**: Expandable FAQ items powered by Bootstrap.
- **Floating Utilities**
  - **"We Are Here!" Live Chat Launcher**: Custom floating chat button featuring the official `wah.svg` comic badge, yellow waving hand, and green smiley message icon that toggles a modern conversation popup window.
  - **Quick Contact Pill**: Floating WhatsApp and Email badges positioned on the right edge.
  - **Scroll-to-Top Button**: Smooth floating return-to-top button on the lower-left corner, automatically displaying upon downward scrolling.

---
## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | React |
| **Build Tool** | Vite |
| **Styling** | Bootstrap 5, plain CSS (one stylesheet per component or section), Inter font (Google Fonts) |
| **Icons** | Bootstrap Icons |
| **Interactivity** | React Hooks (`useState`, `useEffect`, `useRef`), IntersectionObserver for counters |
| **Linting** | Oxlint |
| **Assets** | PNG/SVG images in `public/img/` or linked by URL |

---

## 📁 Project Directory Structure

```text
smarthr-landing/
├── index.html                      # HTML entry point
├── package.json                    # Dependencies and scripts
├── vite.config.js                  # Vite configuration
├── README.md                       # Project documentation
├── public/
│   └── img/                        # Static images (dashboard, demos, inner pages, layouts)
└── src/
    ├── main.jsx                    # App entry, global CSS and Bootstrap imports
    ├── App.jsx                     # Assembles all sections in page order
    ├── index.css                   # Theme colors, fonts, and global styles
    ├── components/
    │   ├── Navbar.jsx / .css       # Floating navbar with scroll behavior
    │   ├── SectionHeader.jsx / .css  # Reusable label + title + subtitle
    │   └── FloatingWidgets.jsx / .css  # Scroll-to-top button and chat popup
    ├── sections/
    │   ├── Hero.jsx / .css
    │   ├── Overview.jsx / .css
    │   ├── Templates.jsx / .css
    │   ├── UseCase.jsx / .css
    │   ├── Demos.jsx / .css
    │   ├── Benefits.jsx / .css
    │   ├── Counters.jsx / .css
    │   ├── InnerPages.jsx / .css
    │   ├── Marquee.jsx / .css
    │   ├── Layouts.jsx / .css
    │   ├── Pricing.jsx / .css
    │   ├── Faq.jsx / .css
    │   ├── CustomDesignCta.jsx / .css
    │   ├── Testimonials.jsx / .css
    │   ├── ReactFeatures.jsx / .css
    │   └── FooterCta.jsx / .css
    └── data/
        ├── overview.js             # Overview cards
        ├── templates.js            # Template cards
        ├── useCases.js             # Use case columns
        ├── demos.js                # Demo tabs and images
        ├── benefits.js             # Key benefits list
        ├── counters.js             # Counter values and labels
        ├── innerPages.js           # Inner page tabs and cards
        ├── marquee.js              # Marquee ribbon text
        ├── layouts.js              # Layout preview cards
        ├── pricing.js              # License plans and features
        ├── faq.js                  # FAQ questions and answers
        ├── testimonials.js         # Client reviews
        └── features.js             # React feature cards
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS version) and npm

### Running Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/materwelonxdev/smarthr-landing.git
   cd smarthr-landing
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the local address printed in the terminal (usually `http://localhost:5173`).

### Production Build
```bash
npm run build      # creates the optimized dist/ folder
npm run preview    # serves the production build locally
```

---

## ⚙️ Key Configuration Options

### Changing Colors and Fonts
Edit the CSS variables at the top of [`src/index.css`](src/index.css):
```css
:root {
  --bs-primary: #f26522;   /* main orange */
  --hero-bg: #051a29;      /* dark navy */
  --dark-bg: #212529;      /* charcoal sections */
  --accent-cyan: #0dc8f0;  /* hero headline highlight */
}
```

### Changing Images
- **Hero preview:** update the `src` of the dashboard image in [`src/sections/Hero.jsx`](src/sections/Hero.jsx).
- **Everything else:** update the `img` fields in the files under [`src/data/`](src/data/). Use a path such as `/img/example.png` (a file in `public/img/`) or a full image URL.

### Updating Contact Details
In [`src/components/FloatingWidgets.jsx`](src/components/FloatingWidgets.jsx), change the `EMAIL` constant at the top of the file.

---

## 📄 License
Copyright © 2026 Dreamstechnologies. All rights reserved.
