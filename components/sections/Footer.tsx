"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full font-serif">
      {/* Top Section - Light Cream Background */}
      <div className="bg-background pt-20 pb-16 px-8 md:px-16 lg:px-24 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand & Address Column */}
          <div className="md:col-span-6 lg:col-span-7 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight max-w-sm leading-none">
              Dr. Maya Reynolds, PsyD
            </h2>
            <div className="text-lg text-foreground/80 space-y-1 font-sans">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
            </div>
            <div className="text-lg space-y-1 pt-2 font-sans">
              <p>
                <Link
                  href="mailto:contact@drmayareynolds.com"
                  className="text-foreground underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  contact@drmayareynolds.com
                </Link>
              </p>
              <p>
                <Link
                  href="tel:3105550123"
                  className="text-foreground underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  (310) 555-0123
                </Link>
              </p>
            </div>
          </div>

          {/* Hours Column */}
          <div className="md:col-span-3 lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-bold text-foreground tracking-tight">
              Hours
            </h3>
            <div className="text-lg text-foreground/80 space-y-1 font-sans">
              <p>Monday – Thursday</p>
              <p>9am – 5pm</p>
            </div>
          </div>

          {/* Find/Nav Column */}
          <div className="md:col-span-3 lg:col-span-2 space-y-6 md:text-right lg:text-left">
            <h3 className="text-2xl font-bold text-foreground tracking-tight">
              Menu
            </h3>
            <nav className="flex flex-col space-y-2 font-sans">
              <Link
                href="/"
                className="text-lg text-foreground/80 underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-lg text-foreground/80 underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Section - Darker Sand Background */}
      <div className="bg-muted py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] md:text-sm font-medium text-muted-foreground uppercase tracking-wider font-sans">
            <Link
              href="#"
              className="underline decoration-1 underline-offset-4 hover:opacity-70"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="underline decoration-1 underline-offset-4 hover:opacity-70"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="underline decoration-1 underline-offset-4 hover:opacity-70"
            >
              Good Faith Estimate
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-[13px] md:text-sm text-muted-foreground font-medium opacity-90 font-sans">
            All Rights Reserved © {new Date().getFullYear()} Dr. Maya Reynolds,
            PsyD.
          </p>
        </div>
      </div>
    </footer>
  );
}
