import type { Metadata } from "next";

import { SiteMenu } from "@/components/site-menu";

import "./globals.css";

export const metadata: Metadata = {
  title: "Maxime Dupuy",
  description: "Personal website"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteMenu />
        {children}
      </body>
    </html>
  );
}
