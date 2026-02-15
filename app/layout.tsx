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
  title: {
    default: "Dr. Maya Reynolds | Clinical Psychologist in Santa Monica",
    template: "%s | Dr. Maya Reynolds",
  },
  description:
    "Licensed Clinical Psychologist in Santa Monica, CA. Specializing in anxiety therapy, trauma processing (EMDR), and burnout recovery for high-achievers.",
  keywords: [
    "Clinical Psychologist Santa Monica",
    "Anxiety Therapy Santa Monica",
    "Trauma Counseling Los Angeles",
    "Burnout Recovery Therapist",
    "Dr. Maya Reynolds",
    "EMDR Therapy California",
    "CBT Psychologist",
    "Mindfulness Based Therapy",
    "Private Therapy Sanctum",
    "90401 Psychologist",
  ],
  authors: [{ name: "Dr. Maya Reynolds" }],
  creator: "Dr. Maya Reynolds",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.drmayareynolds.com",
    title: "Dr. Maya Reynolds | Clinical Psychologist",
    description:
      "Compassionate, evidence-based therapy for anxiety, trauma, and burnout in Santa Monica.",
    siteName: "Dr. Maya Reynolds Psychology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Maya Reynolds | Clinical Psychologist",
    description:
      "Therapy for anxiety, trauma, and burnout in Santa Monica, CA.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
