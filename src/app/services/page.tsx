import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of software services — AI Development, ERP Solutions, Flutter Apps, Web Applications, Cloud, API, Automation, and Data Analytics.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="section">
        <div className="section-container">
          <SectionHeading
            title="Our Services"
            subtitle="End-to-end software solutions tailored to your business needs — from concept to deployment and beyond."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
