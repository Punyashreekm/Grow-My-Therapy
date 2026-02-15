"use client";

import React from "react";
import FadeIn from "../ui/fade-in";

export default function DarkCTA() {
  return (
    <section className="bg-primary py-24 md:py-32 px-8">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <FadeIn fullWidth>
          {/* Title - Bold and Tracking-tight */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-primary-foreground mb-10 tracking-tight">
            Take the first step.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} fullWidth>
          {/* Paragraph - Clean white with max-width for line breaks */}
          <div className="space-y-4 text-primary-foreground/90 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-sans">
            <p>
              Ready to reconnect with yourself and find more sustainable ways of
              living?
            </p>
            <p>
              Contact me to schedule a consultation. I look forward to
              supporting you on your journey.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} fullWidth>
          {/* Outlined White Button */}
          <button className="border border-primary-foreground px-10 py-4 text-primary-foreground text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary-foreground hover:text-primary transition-all duration-300 rounded-sm">
            GET IN TOUCH →
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
