import { NavbarButton } from '@/components/Sidebar/NavbarButton'
import Link from 'next/link'
import React, { FC } from 'react'
import {
  RiHome2Line,
  RiLoginBoxLine,
  RiSettings4Line,
  RiUserLine,
  RiVipDiamondLine
} from 'react-icons/ri'

export const Sidebar: FC = () => {
  return (
    <nav className='flex flex-col fixed h-screen px-1 overflow-y border-r-4 bg-zinc-800 border-zinc-500 border-gradient-r grow 2xl:w-1/5 w-full text-white dark:bg-midnight-700 max-h-screen overflow-y-auto'>
      <section className='md:mt-16 mt-12 mx-auto 2xl:mb-0 mb-8'>
        <Link href='/home'>
          <div className='rounded-full logo h-[142px] w-[142px]' />
          <p className='text-center mt-4 text-4xl text-emerald-400 logo-text font-righteous'>
            Vogi
          </p>
        </Link>
      </section>
      <section className='flex justify-center flex-col xl:space-y-6 space-y-8 mx-auto grow 2xl:w-2/3 xl:1/5 md:w-2/5 w-3/4 font-righteous mb-8'>
        <div>
          <Link href='/home'>
            <NavbarButton Icon={RiHome2Line}>Home</NavbarButton>
          </Link>
        </div>
        <div>
          <Link href='/user/github'>
            <NavbarButton Icon={RiUserLine}>Profile</NavbarButton>
          </Link>
        </div>
        <div>
          <Link href='/premium'>
            <NavbarButton Icon={RiVipDiamondLine}>Premium</NavbarButton>
          </Link>
        </div>
        <div>
          <Link href='/settings'>
            <NavbarButton Icon={RiSettings4Line}>Settings</NavbarButton>
          </Link>
        </div>
        <div>
          <Link href='/login'>
            <NavbarButton Icon={RiLoginBoxLine}>Login</NavbarButton>
          </Link>
        </div>
      </section>
    </nav>
  )
}
