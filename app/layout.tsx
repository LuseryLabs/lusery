"use client";

import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isLandingPage = pathname === "/";

  return (
    <html>
      <body className={isLandingPage ? "" : "max-w-7xl mx-auto"}>
        {children}
      </body>
    </html>
  );
}
