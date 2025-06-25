import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mackenry Kevin Arceno',
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
