"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-background py-6 px-6 md:px-12 lg:px-20 font-serif">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors"
        >
          Dr. Maya Reynolds
        </Link>
        <nav className="flex gap-8 text-foreground/80 font-sans text-sm tracking-wide uppercase font-medium">
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
