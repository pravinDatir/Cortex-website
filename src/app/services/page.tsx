"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import FloatingParticles from "@/components/effects/FloatingParticles";
import PageTransition from "@/components/effects/PageTransition";
import { services } from "@/content/services";

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="pt-28 md:pt-32">
        <section className="section relative">
          <FloatingParticles count={12} className="opacity-20" />
          <div className="absolute inset-0 bg-radial-glow opacity-30" />
          <div className="section-container relative z-10">
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
    </PageTransition>
  );
}
