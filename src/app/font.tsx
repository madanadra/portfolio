import { Playfair_Display, Antonio, Inter, Kenia } from 'next/font/google'

const abrilFatface = Playfair_Display({ weight: ['400', '500', '600', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin'] })
const antonio = Antonio({ weight: ['100', '200', '300', '400', '500', '600', '700'], subsets: ['latin'] })
const inter = Inter({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })
const kenia = Kenia({weight: '400', subsets: ['latin']})

export {abrilFatface, antonio, inter, kenia}