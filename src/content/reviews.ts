export interface Review {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar?: string;
}

export const reviews: Review[] = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer",
    company: "Optimus Health",
    quote:
      "Cortex Analytix delivered a CGM platform that exceeded our expectations. The real-time glucose monitoring, AI coaching, and seamless sensor integration have transformed how we serve our patients.",
    rating: 5,
  },
  {
    name: "Rajesh Kapoor",
    role: "Managing Director",
    company: "AutoIVD Pharmaceuticals",
    quote:
      "The ERP system they built streamlined our entire manufacturing workflow. Batch records, inventory, compliance — everything in one place. Our operational efficiency improved by 40%.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder & CEO",
    company: "Biogenix Inc.",
    quote:
      "Their B2B/B2C platform handles our complex pricing tiers and automated invoicing flawlessly. The team understood our business needs from day one and delivered a robust, scalable solution.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Brand Director",
    company: "Label SR",
    quote:
      "Our fashion e-commerce store looks stunning and converts beautifully. Cortex Analytix captured our brand's premium aesthetic perfectly while ensuring a seamless shopping experience.",
    rating: 5,
  },
];
