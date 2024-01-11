import { Metadata } from 'next'
import React, { FC, ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Vogi',
  description: 'The only social media platform in the world.'
}

interface Props {
  children: ReactNode
  //params: Record<string, any>
  //searchParams: Record<string, any>
}

const RootLayout: FC<Props> = ({ children }) => {
  return <>{children}</>
}

export default RootLayout
