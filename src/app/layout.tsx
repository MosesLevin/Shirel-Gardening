import type { Metadata } from 'next'
import { Calistoga, Rubik, Rubik_Bubbles, Rubik_Dirt } from 'next/font/google'
import './globals.css'
import Navbar from './sections/Navbar'
import Banner from '@/components/Banner'
import Footer from './sections/Footer'

const rubikBubbles = Rubik_Bubbles({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bubbles',
})

const rubikDirt = Rubik_Dirt({
  subsets: ['latin'],
  variable: '--font-dirt',
  weight: '400',
})
const inter = Rubik({ subsets: ['latin'], variable: '--font-sans' })
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'שירותי גינון מקצועיים לכל סוגי הגינות | תרבות גן',
  description:
    'הפוך את הגינה שלך לפינת חמד עם שירותי הגינון שלנו. תכנון גינות, טיפול בצמחים, התקנת מערכות השקיה ועוד. צוות מומחים לשירותך',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" className="scroll-smooth">
      <body
        className={`bg-[#ffffff] ${inter.variable} ${calistoga.variable} ${rubikBubbles.variable} ${rubikDirt.variable} antialiased`}
      >
        <Banner />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
