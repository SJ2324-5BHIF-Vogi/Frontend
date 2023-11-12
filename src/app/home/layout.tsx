import { Sidebar } from '@/views/Sidebar'
import { SearchBar } from '@/components/global/SearchBar'
import { Header } from '@/views/Header'
import { Metadata } from 'next'
import React, { ReactElement, ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Vogi',
  description: 'The only social media platform in the world.'
}
const RootLayout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <>
      <Sidebar />
      <div className='flex-col bg-zinc-900 grow w-3/5'>
        <Header />
        {children}
      </div>
      <aside className='bg-zinc-800 border-zinc-300 border-l-4 grow w-1/5'>
        <SearchBar />
      </aside>
    </>
  )
}

export default RootLayout
