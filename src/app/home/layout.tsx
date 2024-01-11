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
  const [showRightAside, setRightAside] = useState(false)

  const toggleSidebar = (): void => {
    if (showRightAside) {
      setRightAside(!showRightAside)
    }

    setShowSidebar(!showSidebar)
  }

  const toggleRightAside = (): void => {
    if (showSidebar) {
      setShowSidebar(!showSidebar)
    }

    setRightAside(!showRightAside)
  }

  return (
    <>
      <div className='flex-col'>
        <button
          className='2xl:hidden fixed z-50 top-4 right-4 m-1 text-white text-2xl drop-shadow-md'
          onClick={toggleSidebar}
        >
          <RiMenuLine />
        </button>
        <button
          className='2xl:hidden fixed z-50 top-16 right-4 m-1 text-white text-2xl drop-shadow-sm'
          onClick={toggleRightAside}
        >
          <RiSearchLine />
        </button>
      </div>
      <div
        className={`fixed z-40 bg-zinc-800 dark:bg-midnight-700 overflow-y-auto ${
          showSidebar ? '' : 'hidden 2xl:block'
        }`}
      >
        <Sidebar />
      </div>
      <div className='flex-col bg-zinc-900 dark:bg-midnight-800 ml-auto mr-auto 2xl:w-3/5 w-full'>
        {children}
      </div>
      <aside
        className={`2xl:w-1/5 w-full z-40 border-gradient-l fixed right-[0px] h-screen bg-zinc-800 border-zinc-500 border-l-4 grow dark:bg-midnight-700 ${
          showRightAside ? '' : 'hidden 2xl:block'
        }`}
      >
        <SearchBar />
      </aside>
    </>
  )
}

export default RootLayout
