import Nav from '@/components/header/nav'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio-KMF',
  description: 'Portfolio of Karl Michael Figuerrez buit with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${montserrat.className} bg-zinc-900 text-zinc-200`}>                        
        {children}        
      </body>
    </html>
  )
}
