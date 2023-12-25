import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/sidebar'

const inter = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Something fun',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar>
        {children}
        </Sidebar>
        </body>
    </html>
  )
}
