import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { reviews } from "@/content/reviews";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "Read what our clients say about working with Cortex Analytix. 98% client satisfaction across 25+ delivered projects.",
};

export default function ReviewsPage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="section">
        <div className="section-container">
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
  );
}
