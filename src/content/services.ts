export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: "Brain",
    title: "AI Development",
    description:
      "Intelligent solutions powered by machine learning, NLP, and computer vision to automate decisions and unlock insights from your data.",
    features: ["Machine Learning Models", "Natural Language Processing", "Predictive Analytics", "AI Chatbots"],
  },
  {
    icon: "Database",
    title: "ERP Development",
    description:
      "Custom enterprise resource planning systems that centralize your operations — from inventory and manufacturing to finance and HR.",
    features: ["Custom Modules", "Workflow Automation", "Real-time Dashboards", "Compliance & Audit"],
  },
  {
    icon: "Smartphone",
    title: "Flutter Apps",
    description:
      "Cross-platform mobile applications with native performance — built once, deployed everywhere with stunning UI and seamless UX.",
    features: ["iOS & Android", "Native Performance", "Offline Support", "Push Notifications"],
  },
  {
    icon: "Globe",
    title: "Web Applications",
    description:
      "Modern, responsive web applications built with cutting-edge frameworks — from SPAs to full-stack platforms with real-time features.",
    features: ["React / Next.js", "Laravel / Node.js", "Real-time Features", "PWA Support"],
  },
  {
    icon: "Cloud",
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and deployment strategies that grow with your business — optimized for performance and cost.",
    features: ["AWS / Azure / GCP", "CI/CD Pipelines", "Auto-scaling", "Cost Optimization"],
  },
  {
    icon: "Plug",
    title: "API Development",
    description:
      "Robust, well-documented RESTful and GraphQL APIs that power your applications and integrate seamlessly with third-party services.",
    features: ["REST & GraphQL", "Authentication", "Rate Limiting", "API Documentation"],
  },
  {
    icon: "Zap",
    title: "Automation",
    description:
      "Streamline repetitive tasks and complex workflows with intelligent automation — reducing errors and freeing your team for high-value work.",
    features: ["Process Automation", "Data Pipelines", "Scheduled Jobs", "Integration Flows"],
  },
  {
    icon: "BarChart3",
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with interactive dashboards, reports, and visualizations that drive informed decisions.",
    features: ["Interactive Dashboards", "Custom Reports", "Data Visualization", "Business Intelligence"],
  },
];
