import type { Metadata } from 'next'
import Provider from '@/contextAPI/Provider'

export const metadata: Metadata = {
  title: 'Todo List IVipCoin',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider> 
          {children}
        </Provider>
      </body>
    </html>
  )
}