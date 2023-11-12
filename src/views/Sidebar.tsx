import { NavbarButton } from '@/components/Sidebar/NavbarButton'
import React, { FC } from 'react'
import Image from 'next/image'
import { RiHome2Line } from 'react-icons/ri'

export const Sidebar: FC = () => {
  return (
    <nav className='flex flex-col px-1 overflow-hidden border-r-4 border-black grow w-1/4'>
      <div className='my-5 mx-auto'>
        <Image
          alt='Vogi Logo'
          className='rounded-[75px]'
          height={142}
          src='/vogi_logo.png'
          width={142}
        />
        <p className='text-center my-3'>Vogi</p>
      </div>
      <div className='flex-col space-y-5 mx-auto'>
        <NavbarButton Icon={RiHome2Line}>Home</NavbarButton>
        <NavbarButton Icon={RiHome2Line}>Home</NavbarButton>
        <NavbarButton Icon={RiHome2Line}>Home</NavbarButton>
        <NavbarButton Icon={RiHome2Line}>Home</NavbarButton>
      </div>
    </nav>
  )
}
