import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bonthu Lohitha | Full Stack Developer",
  description: "Full Stack Developer & Machine Learning Enthusiast with expertise in Next.js, React, and cloud technologies.",
  metadataBase: new URL("https://yourdomain.com"),
  applicationName: "Bonthu Lohitha Portfolio",
  authors: [{ name: "Bonthu Lohitha" }],
  keywords: ["Full Stack Developer", "Web", "Next.js", "React", "Machine Learning", "Cloud"],
  openGraph: {
    type: "website",
    url: "https://yourdomain.com",
    title: "Bonthu Lohitha | Full Stack Developer",
    description: "Full Stack Developer & Machine Learning Enthusiast with expertise in Next.js, React, and cloud technologies.",
    siteName: "Bonthu Lohitha",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/icon.png" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}