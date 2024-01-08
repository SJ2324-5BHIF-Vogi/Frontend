import { NavbarButton } from '@/components/Sidebar/NavbarButton'
import { SearchBar } from '@/components/global/SearchBar'
import { Sidebar } from '@/views/Sidebar'
import React, { FC } from 'react'
import { RiLock2Line, RiPaintBrushLine, RiUserLine } from 'react-icons/ri'

const Settings: FC = () => {
  return (
    <>
      <Sidebar />
      <div className='flex bg-zinc-900 dark:bg-midnight-800 ml-auto mr-auto w-3/5 font-righteous'>
        <section className='flex flex-col grow w-1/3 items-center justify-center'>
          <div className='w-2/3 space-y-8'>
            <NavbarButton Icon={RiUserLine}>Profile</NavbarButton>
            <NavbarButton Icon={RiPaintBrushLine}>Display</NavbarButton>
            <NavbarButton Icon={RiLock2Line}>Privacy</NavbarButton>
          </div>
        </section>
        <section className='w-2/3'>Test</section>
      </div>
      <aside className='border-gradient-l fixed right-[0px] h-screen bg-zinc-800 border-zinc-500 border-l-4 grow w-1/5 dark:bg-midnight-700'>
        <SearchBar />
      </aside>
    </>
  )
}

export default Settings
