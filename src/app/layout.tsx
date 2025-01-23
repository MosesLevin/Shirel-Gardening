import type { Metadata } from 'next'
import { Calistoga, Rubik, Rubik_Bubbles, Rubik_Dirt } from 'next/font/google'
import './globals.css'

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
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`bg-bg1 ${inter.variable} ${calistoga.variable} ${rubikBubbles.variable} ${rubikDirt.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
