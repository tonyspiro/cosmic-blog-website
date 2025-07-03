import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cosmic Blog - Modern Content Hub',
  description: 'A modern blog platform powered by Cosmic CMS featuring posts, authors, and categories.',
  keywords: ['blog', 'cosmic cms', 'next.js', 'typescript', 'headless cms'],
  authors: [{ name: 'Cosmic Blog Team' }],
  creator: 'Cosmic CMS',
  openGraph: {
    title: 'Cosmic Blog - Modern Content Hub',
    description: 'A modern blog platform powered by Cosmic CMS featuring posts, authors, and categories.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmic Blog - Modern Content Hub',
    description: 'A modern blog platform powered by Cosmic CMS featuring posts, authors, and categories.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}