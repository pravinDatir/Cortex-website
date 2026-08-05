"use client";

import PremiumPageHero from "@/components/ui/PremiumPageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import FloatingParticles from "@/components/effects/FloatingParticles";
import PageTransition from "@/components/effects/PageTransition";
import { services } from "@/content/services";
import ScrollSection from "@/components/ui/ScrollSection";

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="pt-20 md:pt-24">
        <ScrollSection className="section relative !pt-6 md:!pt-8">
          <FloatingParticles count={12} className="opacity-20" />
          <div className="absolute inset-0 bg-radial-glow opacity-30" />
          <div className="section-container relative z-10">
            <PremiumPageHero
              variant="services"
              title="Our Services"
              subtitle="End-to-end software solutions tailored to your business needs — from concept to deployment and beyond."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((service, i) => (
                <ServiceCard key={service.title} service={service} index={i} />
              ))}
            </div>
          </div>
        </ScrollSection>
      </div>
    </PageTransition>
  );
}
