"use client";

import React from "react";
import Image from "next/image";
import FadeIn from "../ui/fade-in";

export default function OurOffice() {
  return (
    <section className="bg-secondary/30 py-24 px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <FadeIn direction="left">
              <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                A Sanctuary in Santa Monica
              </h2>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="prose prose-lg text-foreground/80 font-sans space-y-6">
                <p>
                  Therapy works best when you feel safe, comfortable, and
                  removed from the noise of daily life. My office is designed to
                  be a quiet, private sanctuary where you can truly slow down.
                </p>
                <p>
                  With natural light, comfortable furnishings, and a calming
                  aesthetic, the space itself supports the work we do. Whether
                  you are coming in for trauma processing or to navigate
                  professional burnout, this environment is built to help you
                  feel grounded from the moment you arrive.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-8 text-sm font-medium text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    123th Street 45 W, Santa Monica, CA
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Private Waiting Room
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Hybrid Options Available
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Images Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <FadeIn
              direction="up"
              delay={0.3}
              className="!h-auto mt-8 md:mt-12"
            >
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-md">
                <Image
                  src="/office1.jpeg"
                  alt="Therapy office seating area"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 grayscale-[10%]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </FadeIn>
            <FadeIn
              direction="up"
              delay={0.5}
              className="!h-auto mb-8 md:mb-12"
            >
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-md">
                <Image
                  src="/office2.jpeg"
                  alt="Calming office details"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 grayscale-[10%]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
