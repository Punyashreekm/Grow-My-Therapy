import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds | Clinical Psychologist in Santa Monica",
  description:
    "Licensed Clinical Psychologist offering therapy for anxiety, trauma, and burnout in Santa Monica, CA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
