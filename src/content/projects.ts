export interface Project {
  slug: string;
  title: string;
  category: "erp" | "web" | "mobile" | "ecommerce";
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  duration: string;
  thumbnail: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  highlights?: { value: string; label: string }[];
  highlightsTitle?: string;
  capabilities?: string[];
  capabilitiesTitle?: string;
}

export const projects: Project[] = [
  {
    slug: "autoivd-erp",
    title: "AutoIVD — Pharmaceutical ERP System",
    category: "erp",
    description:
      "A comprehensive ERP solution for pharmaceutical manufacturing — managing batch records (BMR/BPR), inventory, audit trails, and compliance documentation with a dynamic theming system.",
    problem:
      "The client needed a centralized system to manage pharmaceutical manufacturing processes including batch records, inventory tracking, and regulatory compliance — replacing fragmented spreadsheets and manual workflows.",
    solution:
      "Built a full-featured ERP application with role-based dashboards, dynamic BMR/BPR template management, real-time inventory tracking, automated PDF generation for compliance documents, and a configurable appearance system with accent-color theming.",
    technologies: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "Chart.js", "DOMPDF"],
    duration: "6 months",
    thumbnail: "/projects/erp-thumb.png",
    featured: true,
    highlightsTitle: "Solution Highlights",
    highlights: [
      { value: "BMR/BPR", label: "Digital Batch Record Workflows" },
      { value: "Role-Based", label: "Department & User Access" },
      { value: "Real-Time", label: "Inventory & Material Tracking" },
      { value: "Audit-Ready", label: "Compliance Documentation" },
    ],
    capabilitiesTitle: "ERP Platform Capabilities",
    capabilities: [
      "Configurable BMR and BPR templates for pharmaceutical production workflows",
      "Role-based dashboards tailored to manufacturing, inventory, quality, and administration teams",
      "Batch-level material issue, consumption, reconciliation, and production record management",
      "Real-time inventory visibility across raw materials, packaging materials, and finished goods",
      "Structured audit trails for operational changes and compliance review",
      "Automated PDF generation for controlled batch and compliance documentation",
      "Centralized master data for products, materials, users, and manufacturing configurations",
      "Configurable interface theming for organization and user preferences",
    ],
  },
  {
    slug: "biogenix-platform",
    title: "Biogenix — Diagnostics Commerce & Procurement Platform",
    category: "ecommerce",
    description:
      "A nationwide diagnostics commerce and procurement platform for laboratories, hospitals, institutions, distributors, and healthcare buyers — combining product discovery, B2B/B2C access, checkout, quotations, PI requests, and partner support.",
    problem:
      "Biogenix serves a large diagnostic network across India with hundreds of products spanning test kits, reagents, instruments, and analyzers. Its customers needed one reliable digital workspace to search technical products, compare pack options and pricing, complete retail purchases, and manage institution-focused procurement workflows.",
    solution:
      "Built a unified platform around the live Biogenix catalog, with multi-filter product search, SKU and pack-size details, GST-aware cart and checkout, branded quotation PDF generation, Proforma Invoice requests, B2B/B2C onboarding, meeting booking, English/Hindi access, and a searchable nationwide distributor network.",
    technologies: ["Laravel 12", "PHP 8.2", "Tailwind CSS v4", "Vite", "MySQL", "Laravel Fortify", "DOMPDF"],
    duration: "4 months",
    thumbnail: "/projects/biogenix-thumb.png",
    featured: true,
    liveUrl: "https://biogenix.in/",
    highlights: [
      { value: "10,000+", label: "Laboratories & Hospitals Served" },
      { value: "18+", label: "Years in Diagnostics" },
      { value: "500+", label: "Products & Instruments" },
      { value: "650+", label: "Channel & Distributor Partners" },
      { value: "150+", label: "Institutional Clients" },
      { value: "50M+", label: "Test Kits Produced Annually" },
    ],
    capabilities: [
      "Searchable diagnostics catalog spanning nine core product categories",
      "Product discovery by SKU, name, application, brand, category, and price",
      "Dedicated B2B and B2C registration and account workflows",
      "GST-aware cart, checkout, pack-size selection, and order handling",
      "Branded quotation PDF generation and Proforma Invoice requests",
      "Nationwide authorized distributor search with regional support access",
      "Meeting booking, procurement assistance, and customer support journeys",
      "English and Hindi platform navigation for broader customer accessibility",
    ],
  },
  {
    slug: "optimus-cgm-app",
    title: "Optimus CGM — Continuous Glucose Monitoring App",
    category: "mobile",
    description:
      "A Flutter application for continuous glucose monitoring with role-based workspaces for patients, doctors, and admins — featuring real-time glucose charts, AI coaching, sensor integration, and comprehensive health tracking.",
    problem:
      "Healthcare providers needed a cross-platform mobile solution for continuous glucose monitoring that supports multiple user roles, real-time data visualization, and native CGM sensor SDK integration.",
    solution:
      "Built a comprehensive Flutter app with role-based login (Customer/Doctor/Admin), real-time glucose dashboards with interactive charts, meal impact logging, AI-style coaching summaries, native CGM SDK bridge for sensor connectivity, push notifications via Firebase, and offline-first caching for glucose readings.",
    technologies: ["Flutter", "Dart", "Firebase", "Laravel API", "Railway", "CGM SDK", "Provider"],
    duration: "5 months",
    thumbnail: "/projects/cgm-app-thumb.png",
    featured: true,
    highlightsTitle: "Application Highlights",
    highlights: [
      { value: "3 Roles", label: "Patient, Doctor & Admin Workspaces" },
      { value: "Real-Time", label: "Glucose Monitoring & Charts" },
      { value: "Offline-First", label: "Resilient Reading Access" },
      { value: "Cross-Platform", label: "Unified Mobile Experience" },
    ],
    capabilitiesTitle: "Mobile Platform Capabilities",
    capabilities: [
      "Role-based onboarding and workspaces for patients, doctors, and administrators",
      "Real-time glucose dashboards with interactive trend and range visualizations",
      "Meal, activity, and health-event logging for contextual glucose analysis",
      "AI-style coaching summaries that translate glucose patterns into clear guidance",
      "Native CGM sensor SDK bridge for device discovery, pairing, and reading synchronization",
      "Firebase-powered notifications for readings, reminders, and important events",
      "Offline-first caching so recent glucose information remains available without connectivity",
      "Secure API integration with the broader Optimus CGM healthcare platform",
    ],
  },
  {
    slug: "cgm-website",
    title: "Optimus CGM — Healthcare Web Portal",
    category: "web",
    description:
      "A modern healthcare web portal built with Laravel for the Optimus CGM platform — providing patient management, glucose data visualization, reporting, and admin operations through a responsive web interface.",
    problem:
      "The CGM platform needed a complementary web portal for healthcare providers and administrators to manage patients, review glucose data trends, generate reports, and handle system configuration.",
    solution:
      "Developed a responsive Laravel web application with Tailwind CSS and Vite, featuring patient data dashboards, glucose trend analysis views, report generation, user management with role-based access, and integration with the mobile app's backend API.",
    technologies: ["Laravel", "PHP", "Tailwind CSS", "Vite", "MySQL", "Chart.js"],
    duration: "3 months",
    thumbnail: "/projects/cgm-web-thumb.png",
    featured: false,
    highlightsTitle: "Portal Highlights",
    highlights: [
      { value: "Role-Based", label: "Provider & Admin Access" },
      { value: "Trend Views", label: "Glucose Pattern Analysis" },
      { value: "Reports", label: "Clinical Data Summaries" },
      { value: "API-Connected", label: "Shared Platform Data" },
    ],
    capabilitiesTitle: "Web Portal Capabilities",
    capabilities: [
      "Patient directory and profile management for healthcare teams",
      "Responsive glucose dashboards for reviewing readings, ranges, and trends",
      "Role-based access for providers, administrators, and operational users",
      "Report workflows for clinical review and longitudinal glucose analysis",
      "User and platform configuration tools for administrative operations",
      "Shared backend integration with the Optimus CGM mobile application",
    ],
  },
  {
    slug: "labelsr-fashion",
    title: "Label SR — Fashion E-Commerce Store",
    category: "ecommerce",
    description:
      "A premium fashion e-commerce website for Label SR — an Indian ethnic wear brand featuring curated collections, product catalogs, wish lists, gift cards, and a complete online shopping experience.",
    problem:
      "Label SR needed a polished online storefront to showcase their ethnic wear collections (Reva, Sapna) across categories like suit sets, kurtas, dresses, co-ord sets, and tops — with a seamless shopping experience.",
    solution:
      "Built a modern e-commerce website on Wix with a curated product catalog organized by collections and categories, wishlist functionality, gift card support, sale section, responsive design, and integrated checkout — reflecting the brand's premium aesthetic.",
    technologies: ["Wix", "E-Commerce", "SEO", "Responsive Design", "Payment Gateway"],
    duration: "2 months",
    thumbnail: "/projects/labelsr-thumb.png",
    featured: true,
    liveUrl: "https://www.labelsr.com/",
    highlightsTitle: "Storefront Highlights",
    highlights: [
      { value: "Responsive", label: "Mobile & Desktop Shopping" },
      { value: "Collection-Led", label: "Curated Product Discovery" },
      { value: "Integrated", label: "Cart & Checkout Experience" },
      { value: "Gift Cards", label: "Flexible Commerce Features" },
    ],
    capabilitiesTitle: "Commerce Experience Capabilities",
    capabilities: [
      "Collection-led navigation for ethnic wear, seasonal edits, and curated launches",
      "Category-based product discovery across suit sets, kurtas, dresses, co-ords, and tops",
      "Responsive product pages designed for visual browsing on mobile and desktop",
      "Wishlist functionality for saving and returning to preferred styles",
      "Integrated cart, checkout, payment, and order journeys",
      "Gift card and promotional sale experiences for customer acquisition and retention",
      "Search-friendly content structure supporting product and collection discoverability",
      "Brand-aligned visual presentation that preserves Label SR's premium aesthetic",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
