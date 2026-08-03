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
    thumbnail: "/projects/erp-thumb.webp",
    featured: true,
  },
  {
    slug: "biogenix-platform",
    title: "Biogenix — B2B/B2C E-Commerce Platform",
    category: "web",
    description:
      "A comprehensive Laravel-based enterprise web application for Biogenix Inc. featuring B2B/B2C order management, product cataloging, and automated Proforma Invoice (PI) generation.",
    problem:
      "Biogenix needed a unified platform to serve both business and retail customers — with differentiated pricing tiers, automated invoice generation, and role-based access for admin, B2B, and B2C portals.",
    solution:
      "Developed a full-stack Laravel 12 application with specialized B2B and B2C user portals, dynamic pricing management, automated PI generation with PDF creation, inventory & category management, RBAC, and real-time email notifications.",
    technologies: ["Laravel 12", "PHP 8.2", "Tailwind CSS v4", "Vite", "MySQL", "Laravel Fortify", "DOMPDF"],
    duration: "4 months",
    thumbnail: "/projects/biogenix-thumb.webp",
    featured: true,
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
    thumbnail: "/projects/cgm-app-thumb.webp",
    featured: true,
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
    thumbnail: "/projects/cgm-web-thumb.webp",
    featured: false,
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
    thumbnail: "/projects/labelsr-thumb.webp",
    featured: true,
    liveUrl: "https://www.labelsr.com/",
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
