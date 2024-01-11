'use client'
import { NavbarButton } from '@/components/Sidebar/NavbarButton'
import React, { FC, useState } from 'react'
import {
  RiLock2Line,
  RiMoonClearLine,
  RiMoonLine,
  RiPaintBrushLine,
  RiUserLine
} from 'react-icons/ri'

const Settings: FC = () => {
  return (
    <>
      <section className='flex flex-col grow 2xl:w-1/3 w-full items-center justify-center'>
        <div className='2xl:w-1/3 w-3/4 space-y-8 font-righteous'>
          <NavbarButton Icon={RiUserLine}>Profile</NavbarButton>
          <button className='w-full'>
            <NavbarButton Icon={RiMoonLine}>Neon Mode</NavbarButton>
          </button>
          <NavbarButton Icon={RiLock2Line}>Privacy</NavbarButton>
        </div>
      </section>
    </>
  )
}

export default Settings
