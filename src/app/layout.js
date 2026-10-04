import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://portfolio.sahildev.workers.dev"),

  title: "Md Sahil — Full-Stack Developer",

  description:
    "Portfolio of Md Sahil, a Full-Stack Developer specializing in React, Next.js, Node.js, MongoDB, DevOps and modern web development.",

  openGraph: {
    title: "Md Sahil — Full-Stack Developer",
    description:
      "Explore Md Sahil's portfolio, projects, technical skills and development experience.",
    url: "https://portfolio.sahildev.workers.dev/",
    siteName: "Md Sahil Portfolio",
    type: "website",
    locale: "en_US",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Md Sahil — Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Md Sahil — Full-Stack Developer",
    description:
      "Full-Stack Developer portfolio showcasing projects, skills and development experience.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-[var(--bg-base)] text-[var(--text-primary)]">
        <ThemeProvider>
          <SmoothScrollProvider>
            <Header />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
