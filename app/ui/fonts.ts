import { Roboto, Noto_Sans_KR } from 'next/font/google'
import localFont from "next/font/local";

export const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 100 400 700 920",
  
});

export const notoSansKr = Noto_Sans_KR({ subsets: ['latin'], weight: ['100','400','700','900']})
export const roboto = Roboto({weight: ['100','400', '700'], subsets: ['latin'], variable: '--roboto'})
