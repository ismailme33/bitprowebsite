import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BitPro - ZATCA Phase 2 Compliant Business Management Software | Saudi Arabia",
  description: "Complete business management platform with ZATCA Phase 2 e-invoicing compliance. POS, ERP, Asset Management, and more. Trusted by businesses across Saudi Arabia for 15 years.",
  keywords: "ZATCA Phase 2, e-invoicing Saudi Arabia, POS system KSA, ERP software, business management, inventory management, accounting software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
