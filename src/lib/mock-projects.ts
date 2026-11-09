/**
 * ============================================================================
 * PLACEHOLDER MOCK PROJECTS DATASET
 * ============================================================================
 * CAUTION: ALL DATA BELOW IS REALISTIC FICTIONAL / DEMO PLACEHOLDER CONTENT.
 * Designed to showcase the sales-oriented portfolio interface until real
 * client projects are added to MongoDB.
 *
 * Switching between mock and live database data requires changing ONLY the
 * `USE_MOCK` boolean in `src/lib/api.ts`.
 * ============================================================================
 */

import { IProject } from "@/models/Projects";

export const MOCK_PROJECTS: IProject[] = [
  {
    _id: "mock-lumiere-boutique",
    slug: "lumiere-boutique",
    title: "Lumière Boutique",
    tagline: "Full-Stack E-Commerce Platform",
    overview: "High-converting luxury fashion store with dynamic catalog, smart size recommendation, and instant Stripe checkout.",
    category: "E-Commerce", /**Website Type*/
    industry: "Fashion & Apparel", /**For which industry this website is developed*/
    liveLink: "https://example.com/demo/lumiere",
    frontendCode: "https://github.com/example/lumiere-boutique",
    backendCode: "https://github.com/example/lumiere-api",
    codeIsPublic: false,
    isFeatured: true,
    displayOrder: 1,
    clientType: "Small Business / Retail",
    budgetRange: "$3,500 – $5,000",
    duration: "8 weeks",
    challenge:
      "The client relied 100% on a local physical boutique with zero digital footprint. During slow foot-traffic seasons, inventory sat unsold while competing brands dominated Instagram and Google shopping. They needed an online store that mirrored their high-touch boutique aesthetic while loading instantly on mobile devices.",
    solution:
      "Engineered an ultra-fast Next.js storefront using Tailwind CSS, ISR (Incremental Static Regeneration) for instant product indexing on Google, and a robust Stripe payment flow with apple/google pay support. Added a lightweight interactive size guide and Cloudinary-optimized media delivery.",
    results: [
      "Generated $48,000 in direct online revenue within the first 60 days of launch",
      "Achieved average mobile page load time of 1.1s with 98+ Lighthouse Performance",
      "Reduced cart abandonment rate from industry average 70% down to 42%"
    ],
    metrics: [
      {
        label: "Online Revenue",
        value: "+62%",
        context: "Within first 60 days of launch"
      },
      {
        label: "Checkout Speed",
        value: "1.1s",
        context: "Average mobile page load time"
      },
      {
        label: "Cart Abandonment",
        value: "-28%",
        context: "Compared to industry baseline"
      }
    ],
    features: [
      "Real-time product inventory synchronization and low-stock alerts",
      "Stripe Checkout with multi-currency and 1-click mobile wallets",
      "Custom interactive size recommender reducing return requests",
      "Automated order confirmation and tracking emails via SendGrid",
      "SEO-optimized product catalog with automated OpenGraph tags"
    ],
    technologies: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express", "MongoDB", "Stripe API"],
      tools: ["Cloudinary", "Vercel", "SendGrid", "Postman"]
    },
    testimonial: {
      quote:
        "Jobayer transformed our small boutique into an international brand. We sold out our summer collection online before it even reached the physical store floor.",
      author: "Amélie Fontaine",
      role: "Founder & Creative Director",
      company: "Lumière Boutique"
    },
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80"
    ],
    createdAt: new Date("2025-08-15")
  },
  {
    _id: "mock-sakura-garden",
    slug: "sakura-garden",
    title: "Sakura Garden — Restaurant & Direct Table Booking System",
    tagline: "Modern dining showcase with real-time reservation scheduling, takeaway order flow, and zero commission fees.",
    category: "Restaurant Website",
    industry: "Food & Beverage",
    overview:
      "A complete digital dining platform built to eliminate 30% third-party food portal fees. Features an appetizing visual menu, seamless date/time reservation management, and direct takeaway ordering.",
    liveLink: "https://example.com/demo/sakura",
    codeIsPublic: false,
    isFeatured: true,
    displayOrder: 2,
    clientType: "Hospitality / Dining",
    budgetRange: "$2,000 – $3,200",
    duration: "4 weeks",
    challenge:
      "The client was hemorrhaging thousands of dollars monthly in third-party food aggregator commissions and lost table bookings due to unanswered phone calls during peak dining rush.",
    solution:
      "Designed and delivered a high-converting website featuring an appetizing digital menu, real-time table reservation system with automated SMS/email reminders, and zero-commission takeaway pickup ordering with Stripe.",
    results: [
      "Captured $14,500 in direct takeaway orders in the first 3 months with 0% platform fee",
      "Table reservations increased by 38%, with no phone tag required by front-of-house staff",
      "Ranked #1 on Google Local Pack for 'Japanese fine dining [downtown]'"
    ],
    metrics: [
      {
        label: "Table Bookings",
        value: "+38%",
        context: "Direct online reservations"
      },
      {
        label: "Commission Saved",
        value: "$3.8k/mo",
        context: "Bypassing 3rd party food portals"
      },
      {
        label: "Google Rating",
        value: "4.9★",
        context: "Boosted by post-meal review prompts"
      }
    ],
    features: [
      "Interactive table reservation calendar with instant email confirmations",
      "Direct online pickup menu with dietary filtering (Gluten-Free, Vegan)",
      "Automated post-dining review request email trigger",
      "Staff management portal to confirm, decline, or reschedule bookings",
      "Structured local business JSON-LD schema for Google Maps dominance"
    ],
    technologies: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB", "Mongoose"],
      tools: ["Stripe", "Resend", "Google Maps API", "Vercel"]
    },
    testimonial: {
      quote:
        "Tables are full every weekend and our staff no longer spends hours answering phone reservation calls. The site paid for itself within 6 weeks.",
      author: "Hiroshi Tanaka",
      role: "Executive Chef & Owner",
      company: "Sakura Garden Bistro"
    },
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80"
    ],
    createdAt: new Date("2025-09-01")
  },
  {
    _id: "mock-aquaflow-plumbing",
    slug: "aquaflow-pro",
    title: "AquaFlow Pro — High-Conversion Emergency Trades Website",
    tagline: "Rapid emergency plumbing service website engineered for 24/7 quote generation and instant click-to-call mobile conversion.",
    category: "Service Business Website",
    industry: "Home Services & Trades",
    overview:
      "A lightning-fast, conversion-obsessed lead generation website for a regional plumbing and heating enterprise. Optimized for mobile users in emergency situations who need service right away.",
    liveLink: "https://example.com/demo/aquaflow",
    frontendCode: "https://github.com/example/aquaflow-web",
    codeIsPublic: true,
    isFeatured: true,
    displayOrder: 3,
    clientType: "Trade & Field Service",
    budgetRange: "$1,500 – $2,500",
    duration: "3 weeks",
    challenge:
      "Homeowners facing burst pipes or water heater failures need answers in seconds. The client's legacy WordPress site took 7 seconds to load on mobile and had hidden contact details, causing frantic prospects to bounce to competitors.",
    solution:
      "Built a sub-second serverless Next.js site featuring prominent click-to-call badges, immediate postcode coverage checker, upfront pricing transparent breakdown, and a simple 2-step emergency dispatch booking form.",
    results: [
      "Emergency service call enquiries surged by 90% in the first 45 days",
      "Achieved a 100/100 Google Lighthouse mobile performance score",
      "Form submission conversion rate skyrocketed from 2.4% to 9.8%"
    ],
    metrics: [
      {
        label: "Emergency Calls",
        value: "+90%",
        context: "Direct mobile inquiries"
      },
      {
        label: "Page Load Time",
        value: "0.6s",
        context: "100/100 Lighthouse score"
      },
      {
        label: "Conversion Rate",
        value: "9.8%",
        context: "From visitor to booked call"
      }
    ],
    features: [
      "Sticky click-to-call and WhatsApp dispatch trigger on mobile",
      "Postal code service area verification widget",
      "Transparent pricing calculator giving instant rough estimates",
      "Real-time SMS dispatch alerts to technicians on call",
      "Trust badges and verified license proof display"
    ],
    technologies: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js Server Actions", "Twilio API"],
      tools: ["Vercel", "Twilio SMS", "Google Analytics 4"]
    },
    testimonial: {
      quote:
        "We had to hire two additional service technicians within two months of launching the new site. The phone literally rings non-stop.",
      author: "David MacLeod",
      role: "Managing Director",
      company: "AquaFlow Heating & Plumbing"
    },
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
    ],
    createdAt: new Date("2025-09-20")
  },
  {
    _id: "mock-horizon-property",
    slug: "horizon-living",
    title: "Horizon Living — Premium Real Estate & Property Discovery",
    tagline: "High-end real estate portal with interactive map filtering, virtual tours, and private valuation booking.",
    category: "Property Platform",
    industry: "Real Estate",
    overview:
      "A custom property portal designed for a luxury estate agency to break free from third-party marketplace listing fees and present bespoke homes with immersive photography and direct buyer inquiries.",
    liveLink: "https://example.com/demo/horizon",
    codeIsPublic: false,
    isFeatured: true,
    displayOrder: 4,
    clientType: "Real Estate Agency",
    budgetRange: "$4,500 – $7,000",
    duration: "10 weeks",
    challenge:
      "The agency was spending over $5,000/month on generic listing portal fees where their multi-million dollar properties were placed next to budget rentals. Their proprietary leads were being captured and resold by portal algorithms.",
    solution:
      "Created a standalone luxury agency platform with dynamic Mapbox search, rich video tour support, instant WhatsApp VIP agent chat, and an automated property valuation funnel that converts homeowners into listing clients.",
    results: [
      "Secured 14 exclusive listing instructions worth over $18M in gross value within 4 months",
      "Valuation inquiry forms increased by 3.2x compared to the previous agency website",
      "Average time on site increased from 42 seconds to 3 minutes and 40 seconds"
    ],
    metrics: [
      {
        label: "Valuation Leads",
        value: "3.2×",
        context: "Direct seller consultation requests"
      },
      {
        label: "Exclusive Listings",
        value: "$18M+",
        context: "Acquired in first 4 months"
      },
      {
        label: "Portal Fees Saved",
        value: "$60k/yr",
        context: "Replaced third-party fees"
      }
    ],
    features: [
      "Dynamic interactive map search with radius and neighborhood boundary filters",
      "High-resolution image gallery with full-screen lightbox and 3D walkthrough embeds",
      "Instant property valuation request tool capturing verified seller contact details",
      "Direct WhatsApp and call connections to the designated listing agent",
      "Admin listing management console with auto-watermarking and lead notification"
    ],
    technologies: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Mapbox GL"],
      backend: ["Node.js", "Express", "MongoDB", "AWS S3"],
      tools: ["AWS S3", "Vercel", "SendGrid", "Figma"]
    },
    testimonial: {
      quote:
        "High-net-worth clients tell us our website gave them the confidence to entrust us with their prime properties. It completely elevated our market reputation.",
      author: "Sarah Sterling",
      role: "Partner & Head of Residential",
      company: "Horizon Living Properties"
    },
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    createdAt: new Date("2025-10-05")
  },
  {
    _id: "mock-trackify-saas",
    slug: "trackify-saas",
    title: "Trackify SaaS — Subscription Client Analytics & KPI Hub",
    tagline: "Sleek B2B SaaS platform with automated billing, team role permissions, and visual business performance metrics.",
    category: "SaaS Application",
    industry: "SaaS / B2B Tech",
    overview:
      "A complete modern SaaS application created for an agile analytics startup. Delivered from conceptual design to launch-ready product including Stripe subscription tiers, authenticated team workspaces, and live reporting dashboards.",
    liveLink: "https://example.com/demo/trackify",
    frontendCode: "https://github.com/example/trackify-dashboard",
    backendCode: "https://github.com/example/trackify-server",
    codeIsPublic: false,
    isFeatured: true,
    displayOrder: 5,
    clientType: "B2B Tech Startup",
    budgetRange: "$6,000 – $9,500",
    duration: "12 weeks",
    challenge:
      "The founders had validated customer demand with spreadsheets but lacked the technical capacity to build a secure, enterprise-grade web application with self-service billing and scalable architecture.",
    solution:
      "Engineered an end-to-end full-stack SaaS platform utilizing Next.js 15, TypeScript, MongoDB, JWT authentication, and Stripe Customer Portal for automated subscription upgrades, downgrades, and invoices.",
    results: [
      "Acquired 420 active paying subscribers within 90 days of public release",
      "Reached $6,300 in recurring monthly revenue (MRR) by month three",
      "Zero security incidents and 99.98% platform uptime across all quarters"
    ],
    metrics: [
      {
        label: "Paying Users",
        value: "420+",
        context: "Signed up in first 90 days"
      },
      {
        label: "MRR Growth",
        value: "$6.3k",
        context: "Monthly recurring revenue at Q1"
      },
      {
        label: "Uptime",
        value: "99.98%",
        context: "Across production services"
      }
    ],
    features: [
      "Stripe Billing with tiered pricing, free trials, and customer self-serve portal",
      "Multi-tenant organization workspaces with granular Role-Based Access Control",
      "Interactive data visualizations and exportable CSV/PDF performance summaries",
      "Secure JWT + refresh token authentication with social OAuth options",
      "Automated webhooks handling subscription lifecycle and invoice receipts"
    ],
    technologies: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
      backend: ["Node.js", "Express", "MongoDB", "Redis"],
      tools: ["Stripe API", "Vercel", "GitHub Actions", "Docker"]
    },
    testimonial: {
      quote:
        "Jobayer took our rough prototype and turned it into a commercial software product that closed enterprise deals on day one. Exceptional execution.",
      author: "Marcus Vance",
      role: "Co-Founder & CEO",
      company: "Trackify Software Ltd."
    },
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80"
    ],
    createdAt: new Date("2025-10-18")
  }
];
