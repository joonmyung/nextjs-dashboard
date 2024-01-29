import '@/app/ui/global.css'
import React from "react";
import { notoSansKr } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.className} antialiased`}>{children}</body>
    </html>
  );
}
