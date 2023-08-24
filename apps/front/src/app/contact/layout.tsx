import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oncar - Contact',
  description: 'Job Challenge para Oncar - página de contato.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Oncar</h2>
            </div>
            {children}
          </div>
          
        </div>
      </main>
      </body>
    </html>
  )
}
