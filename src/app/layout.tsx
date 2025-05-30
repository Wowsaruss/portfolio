import React from 'react'
import type { Metadata } from 'next'
import { Outfit, Martian_Mono } from 'next/font/google'
import './globals.css'
import ThemeToggle from '../components/ThemeToggle'
import { ThemeProvider } from '../components/ThemeProvider'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const martianMono = Martian_Mono({ 
  subsets: ['latin'],
  variable: '--font-martian-mono',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Russell Hayes',
  description: 'Software Engineer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${martianMono.variable} font-sans antialiased`}>
      <body className="bg-white dark:bg-black text-gray-900 dark:text-white selection:bg-gray-200 dark:selection:bg-gray-800">
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 