import { Playfair_Display, Antonio, Inter, Space_Grotesk } from 'next/font/google'

const playfairDisplay = Playfair_Display({ weight: ['400', '500', '600', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin'] })
const antonio = Antonio({ weight: ['100', '200', '300', '400', '500', '600', '700'], subsets: ['latin'] })
const inter = Inter({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })
const spaceGrotest = Space_Grotesk({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })

export {playfairDisplay, antonio, inter, spaceGrotest}