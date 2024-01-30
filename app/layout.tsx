import '@/app/ui/global.css'
import React from "react";
import { notoSansKr } from "@/app/ui/fonts";
import {Analytics} from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
