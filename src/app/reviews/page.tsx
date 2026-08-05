"use client";

import PremiumPageHero from "@/components/ui/PremiumPageHero";
import TestimonialCard from "@/components/ui/TestimonialCard";
import FloatingParticles from "@/components/effects/FloatingParticles";
import PageTransition from "@/components/effects/PageTransition";
import { reviews } from "@/content/reviews";
import ScrollSection from "@/components/ui/ScrollSection";

export default function ReviewsPage() {
  return (
    <PageTransition>
      <div className="pt-20 md:pt-24">
        <ScrollSection revealDirection="right" className="section relative !pt-6 md:!pt-8">
          <FloatingParticles count={10} className="opacity-15" />
          <div className="absolute inset-0 bg-radial-glow-purple opacity-30" />
          <div className="section-container relative z-10">
            <PremiumPageHero
              variant="reviews"
              title="Client Reviews"
              subtitle="Hear from the businesses we've helped transform through technology."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {reviews.map((review, i) => (
                <TestimonialCard key={review.name} review={review} index={i} />
              ))}
            </div>
          </div>
        </ScrollSection>
      </div>
    </PageTransition>
  );
}
