import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimationInit from "./animation-init";
import { KitchenLoadingAnimation } from "@/components/LoadingAnimation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Master Kitchen | Premium Kitchen Remodeling in Los Angeles",
  description: "Shaker & European-style cabinets with quartz countertops. High-quality kitchen remodeling with 3D design preview. Serving Los Angeles homeowners.",
  keywords: "kitchen remodeling, Los Angeles, Shaker cabinets, European cabinets, quartz countertops, 3D kitchen design",
  robots: "index, follow",
  openGraph: {
    title: "Master Kitchen | Premium Kitchen Remodeling in Los Angeles",
    description: "Shaker & European-style cabinets with quartz countertops. High-quality kitchen remodeling with 3D design preview.",
    url: "https://masterkitchen.com",
    siteName: "Master Kitchen",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Master Kitchen",
              "description": "Specializing in Shaker & European style cabinets and quartz countertops with 3D kitchen design visualization.",
              "url": "https://masterkitchen.com",
              "telephone": "+1-555-123-4567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Design Street",
                "addressLocality": "Los Angeles",
                "addressRegion": "CA",
                "postalCode": "90001",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "34.0522",
                "longitude": "-118.2437"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/masterkitchen",
                "https://www.instagram.com/masterkitchen",
                "https://pinterest.com/masterkitchen"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} font-poppins antialiased bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100`}
      >
        <ThemeProvider>
          <Suspense fallback={<KitchenLoadingAnimation fullScreen />}>
            <AnimationInit />
            <Header />
            <main>
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
