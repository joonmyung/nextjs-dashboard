import { Roboto, Noto_Sans_KR } from 'next/font/google'

export const notoSansKr = Noto_Sans_KR({ subsets: ['latin'], weight: ['100','400','700','900']})

export const roboto = Roboto({weight: ['100','400', '700'], subsets: ['latin'], variable: '--roboto'})