import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxStoreProvider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhreeti Clinic - Best Clinic in Arrah, Bhojpur",
  description:
    "Dhreeti Clinic in Maulabagh, Arrah offers expert general medicine, gynecology, pathology, diagnostics, and pharmacy services. Serving Arrah & Bhojpur with top-quality healthcare.",
  keywords: [
    // Primary Keywords
    "Dhreeti Clinic",
    "Clinic in Arrah",
    "Maulabagh Arrah Clinic",
    "Best Clinic in Bhojpur",
    "Doctor in Arrah",

    // General Medicine
    "General Physician in Arrah",
    "General Doctor Arrah Bhojpur",
    "Fever treatment Arrah",
    "Cough and cold treatment Arrah",
    "Diabetes doctor Arrah",
    "Blood pressure doctor Arrah",
    "Internal medicine specialist Arrah",

    // Obstetrics & Gynecology
    "Gynecologist in Arrah",
    "Lady doctor Arrah Bhojpur",
    "Pregnancy care clinic Arrah",
    "Maternity hospital Arrah",
    "Infertility treatment Arrah",
    "PCOD treatment Arrah",
    "Women's health clinic Arrah",

    // Pathology & Diagnostics
    "Pathology lab in Arrah",
    "Blood test Arrah Bhojpur",
    "Urine test Arrah",
    "Diagnostic center in Arrah",
    "Health checkup packages Arrah",
    "Thyroid test Arrah",

    // In-House Pharmacy & Home Services
    "Pharmacy in Maulabagh Arrah",
    "Medicine delivery Arrah",
    "Online medicine order Arrah",
    "Home sample collection Arrah",
    "Blood test at home Arrah",
    "Doorstep medical services Arrah",

    // Long-Tail & Local
    "Dhreeti Clinic contact number",
    "Book appointment at Dhreeti Clinic Arrah",
    "Dhreeti Clinic timings",
    "General physician near me in Bhojpur",
    "Gynecologist near Maulabagh Arrah",
    "Home blood test collection in Arrah 802301",
    "Medicine delivery service in Arrah Bhojpur",

    // Action-Oriented
    "Book doctor appointment Arrah",
    "Consult general physician online Arrah",
    "Get blood test done in Arrah",
    "Order medicines online Arrah"
  ],
  metadataBase: new URL("https://dhreeticlinics.com"),
  openGraph: {
    title: "Dhreeti Clinic - Best Clinic in Arrah, Bhojpur",
    description:
      "Your trusted healthcare provider in Arrah. Dhreeti Clinic offers general medicine, gynecology, pathology, diagnostics, and in-house pharmacy services.",
    url: "https://dhreeticlinics.com",
    siteName: "Dhreeti Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxStoreProvider>
          <main>{children}</main>
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
