import { NavbarButton } from '@/components/Sidebar/NavbarButton'
import Link from 'next/link'
import React, { FC } from 'react'
import {
  RiCompassLine,
  RiHome2Line,
  RiSettings4Line,
  RiUserLine,
  RiVipDiamondLine
} from 'react-icons/ri'

export const Sidebar: FC = () => {
  return (
    <nav className='flex flex-col fixed h-screen px-1 overflow-hidden border-r-4 bg-zinc-800 border-zinc-500 border-gradient-r grow w-1/5 text-white dark:bg-midnight-700'>
      <section className='my-16 mx-auto'>
        <div className='rounded-full logo h-[142px] w-[142px]' />
        <p className='text-center mt-4 text-4xl text-emerald-400 logo-text font-righteous'>
          Vogi
        </p>
      </section>
      <section className='flex-col space-y-4 mx-auto grow w-2/3 font-righteous mt-8'>
        <div>
          <Link href='/home'>
            <NavbarButton Icon={RiHome2Line}>Home</NavbarButton>
          </Link>
        </div>
        <div>
          <Link href='/explore'>
            <NavbarButton Icon={RiCompassLine}>Explore</NavbarButton>
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
      </section>
    </nav>
  )
}
