import type { Metadata } from "next";
import { spaceGrotesk, clashDisplay } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thestreetceo.com"),
  title: {
    default: "The Street CEO | Keynote Speaker & Executive Coach | Cameron Murrell",
    template: "%s | The Street CEO",
  },
  description:
    "Build leaders who execute. High-impact keynotes and executive coaching for sales teams, leaders, and organizations. 50+ events, 98% satisfaction. Book Cameron Murrell.",
  keywords: [
    "The Street CEO",
    "Cameron Murrell",
    "keynote speaker",
    "sales leadership speaker",
    "executive coaching",
    "sales team training",
    "discipline coaching",
    "business transformation",
    "motivational speaker UK",
    "leadership development",
    "team coaching",
    "high-performance coaching",
  ],
  authors: [{ name: "Cameron Murrell" }],
  creator: "The Street CEO",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Street CEO",
    title: "The Street CEO | Keynote Speaker & Executive Coach",
    description:
      "Build leaders who execute. High-impact keynotes and executive coaching for sales teams and organizations.",
    images: ["/images/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Street CEO | Keynote Speaker & Executive Coach",
    description:
      "Build leaders who execute. High-impact keynotes and executive coaching for sales teams and organizations.",
    creator: "@thestreetceo",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${clashDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
