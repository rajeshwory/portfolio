import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rajeshwory | React & React Native Developer",
  description: "Professional portfolio showcasing React and React Native development expertise. Passionate about building elegant web and mobile applications.",
  keywords: ["React", "React Native", "Developer", "Portfolio", "Web Development", "Mobile Development"],
  authors: [{ name: "Rajeshwory" }],
  openGraph: {
    title: "Rajeshwory | React & React Native Developer",
    description: "Professional portfolio showcasing React and React Native development expertise",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajeshwory | React & React Native Developer",
    description: "Professional portfolio showcasing React and React Native development expertise",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}

