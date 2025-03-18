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
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Master Kitchen | Premium Kitchen Remodeling in Los Angeles",
  description: "Transform your space with high-quality Shaker & European-style cabinets and quartz countertops. Get a free 3D design preview. Serving Los Angeles homeowners since 2010.",
  keywords: "kitchen remodeling, Los Angeles, Shaker cabinets, European cabinets, quartz countertops, 3D kitchen design, kitchen renovation, premium cabinets, luxury kitchen, kitchen makeover",
  authors: [{ name: "Master Kitchen", url: "https://masterkitchen.com" }],
  creator: "Master Kitchen Design Team",
  publisher: "Master Kitchen",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://masterkitchen.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Master Kitchen | Premium Kitchen Remodeling in Los Angeles",
    description: "Shaker & European-style cabinets with quartz countertops. High-quality kitchen remodeling with 3D design preview.",
    url: "https://masterkitchen.com",
    siteName: "Master Kitchen",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Master Kitchen - Premium Kitchen Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Kitchen | Premium Kitchen Remodeling",
    description: "Transform your kitchen with premium cabinets and countertops. Get a free 3D design preview.",
    images: ["/images/twitter-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0284c7" />
        
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
              "priceRange": "$$-$$$",
              "email": "info@masterkitchen.com",
              "foundingDate": "2010",
              "image": "https://masterkitchen.com/images/logo.png",
              "logo": "https://masterkitchen.com/images/logo.png",
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
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday"],
                  "opens": "10:00",
                  "closes": "16:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/masterkitchen",
                "https://www.instagram.com/masterkitchen",
                "https://pinterest.com/masterkitchen",
                "https://www.houzz.com/masterkitchen"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Kitchen Remodeling Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Full Kitchen Remodeling",
                    "description": "Complete kitchen transformation with premium materials and expert installation"
                  },
                  {
                    "@type": "Offer",
                    "name": "Cabinet Replacement",
                    "description": "High-quality Shaker and European style cabinets custom designed for your kitchen"
                  },
                  {
                    "@type": "Offer",
                    "name": "Countertop Installation",
                    "description": "Premium quartz countertops with expert measurement and installation"
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "147"
              }
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
            <main id="main-content">
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
