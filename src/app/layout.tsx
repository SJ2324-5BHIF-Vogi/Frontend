import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import './globals.css'
import React, { ReactElement, ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vogi',
  description: 'The only social media platform in the world.'
}
const RootLayout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <html className='dark min-h-[100%] overflow-x-hidden' lang='en'>
      <body
        className={
          inter.className +
          ' flex h-full min-h-[100vh] bg-zinc-900 dark:bg-midnight-800 text-white font-manrope'
        }
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
