'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { appWithTranslation } from 'next-i18next'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aime Cesanges Web-App',
  description: 'Dev by dashotb.com',
}

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


export default RootLayout