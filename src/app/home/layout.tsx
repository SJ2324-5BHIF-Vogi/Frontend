'use client'
import { Sidebar } from '@/views/Sidebar'
import { SearchBar } from '@/components/global/SearchBar'
import { Metadata } from 'next'
import React, { ReactElement, ReactNode, useState } from 'react'
import { RiMenuLine, RiSearchLine } from 'react-icons/ri'

export const metadata: Metadata = {
  title: 'Vogi',
  description: 'The only social media platform in the world.'
}
const RootLayout = ({ children }: { children: ReactNode }): ReactElement => {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = (): void => {
    setShowSidebar(!showSidebar)
  }

  return (
    <>
      <div className='flex-col'>
        <button
          className='md:hidden fixed z-50 top-4 right-4 m-1 text-white text-4xl'
          onClick={toggleSidebar}
        >
          <RiMenuLine />
        </button>
        <button
          className='md:hidden fixed z-50 top-16 right-4 m-1 text-white text-4xl'
          onClick={toggleSidebar}
        >
          <RiSearchLine />
        </button>
      </div>
      <div
        className={`fixed inset-y-0 left-0 z-40 w-80 bg-zinc-800 dark:bg-midnight-700 overflow-y-auto ${
          showSidebar ? '' : 'hidden md:block'
        }`}
      >
        <Sidebar />
      </div>
      <div className='flex-col bg-zinc-900 dark:bg-midnight-800 ml-auto mr-auto md:w-3/5 w-full'>
        {children}
      </div>
      <aside className='hidden md:block border-gradient-l fixed right-[0px] h-screen bg-zinc-800 border-zinc-500 border-l-4 grow w-1/5 dark:bg-midnight-700'>
        <SearchBar />
      </aside>
    </>
  )
}

export default RootLayout
