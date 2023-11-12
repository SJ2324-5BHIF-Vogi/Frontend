import { NavbarButton } from '@/components/Sidebar/NavbarButton'
import React, { FC } from 'react'
import Image from 'next/image'
import {
  RiCompassLine,
  RiHome2Line,
  RiUserLine,
  RiVipDiamondLine
} from 'react-icons/ri'

export const Sidebar: FC = () => {
  return (
    <nav className='flex flex-col px-1 overflow-hidden border-r-4 bg-zinc-800 border-zinc-300 grow w-1/5 text-white'>
      <div className='my-16 mx-auto'>
        <Image
          alt='Vogi Logo'
          className='rounded-full'
          height={142}
          src='/vogi_logo.png'
          width={142}
        />
        <p className='text-center my-4 text-3xl text-emerald-400'>Vogi</p>
      </div>
      <div className='flex-col space-y-8 mx-auto grow w-2/3'>
        <NavbarButton Icon={RiHome2Line}>Home</NavbarButton>
        <NavbarButton Icon={RiCompassLine}>Explore</NavbarButton>
        <NavbarButton Icon={RiUserLine}>Profile</NavbarButton>
        <NavbarButton Icon={RiVipDiamondLine}>Premium</NavbarButton>
      </div>
    </nav>
  )
}
