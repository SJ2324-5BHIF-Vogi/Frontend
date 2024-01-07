import { Sidebar } from '@/views/Sidebar'
import { SearchBar } from '@/components/global/SearchBar'
import { Header } from '@/views/Header'
import { Metadata } from 'next'
import React, { FC, ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Vogi',
  description: 'The only social media platform in the world.'
}

interface Props {
  children: ReactNode
  params: Record<string, any>
  //searchParams: Record<string, any>
}

const RootLayout: FC<Props> = ({ children, params }) => {
  return (
    <>
      <Sidebar />
      <div className='flex-col bg-zinc-900 grow w-3/5'>
        <Header username={params.username} />
        {children}
      </div>
      <aside className='bg-zinc-800 border-zinc-500 border-l-4 grow w-1/5'>
        <SearchBar />
      </aside>
    </>
  )
}

export default RootLayout
