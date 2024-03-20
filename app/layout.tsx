import '@/app/ui/global.css'
import React from "react";
import { pretendard } from "@/app/ui/fonts";
import {Analytics} from "@vercel/analytics/react";
import NextTopLoader from "nextjs-toploader";
import { Metadata} from "next";


export const metadata: Metadata = {
  title: 'Aimee Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} antialiased`}>
      <NextTopLoader
        color="#2299DD"
        initialPosition={0.08}
        crawlSpeed={200}
        height={5}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />        {children}
        <Analytics />
      </body>
    </html>
  );
}
