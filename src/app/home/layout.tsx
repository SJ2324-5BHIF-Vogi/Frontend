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
      <div className='flex-col bg-zinc-900 dark:bg-midnight-800 ml-auto mr-auto w-3/5'>
        <Header username='Bob' />
        {children}
      </div>
      <aside className='border-gradient-l fixed right-[0px] h-screen bg-zinc-800 border-zinc-500 border-l-4 grow w-1/5 dark:bg-midnight-700'>
        <SearchBar />
      </aside>
    </>
  )
}

export default RootLayout
