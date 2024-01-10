import { Sidebar } from '@/views/Sidebar'
import { SearchBar } from '@/components/global/SearchBar'
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
  return (
    <>
      <div className='hidden md:block'>
        <Sidebar />
      </div>
      <div className='flex-col bg-zinc-900 dark:bg-midnight-800 ml-auto mr-auto md:w-3/5 w-full text-white font-manrope'>
        {children}
      </div>
      <aside className='hidden md:block border-gradient-l fixed right-[0px] h-screen bg-zinc-800 border-zinc-500 border-l-4 grow w-1/5 dark:bg-midnight-700'>
        <SearchBar />
      </aside>
    </>
  )
}

export default RootLayout
