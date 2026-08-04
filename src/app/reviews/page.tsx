"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import FloatingParticles from "@/components/effects/FloatingParticles";
import PageTransition from "@/components/effects/PageTransition";
import { reviews } from "@/content/reviews";

export default function ReviewsPage() {
  return (
    <PageTransition>
      <div className="pt-28 md:pt-32">
        <section className="section relative">
          <FloatingParticles count={10} className="opacity-15" />
          <div className="absolute inset-0 bg-radial-glow-purple opacity-30" />
          <div className="section-container relative z-10">
            <SectionHeading
              title="Client Reviews"
              subtitle="Hear from the businesses we've helped transform through technology."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {reviews.map((review, i) => (
                <TestimonialCard key={review.name} review={review} index={i} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
