'use client'
import { NavbarButton } from '@/components/Sidebar/NavbarButton'
import React, { FC, useState } from 'react'
import {
  RiLock2Line,
  RiMoonClearLine,
  RiPaintBrushLine,
  RiUserLine
} from 'react-icons/ri'

const Settings: FC = () => {
  const [showAppearance, setAppearance] = useState(false)

  const toggleAppearance = (): void => {
    setAppearance(!showAppearance)
  }

  return (
    <>
      <section className='flex flex-col grow 2xl:w-1/3 w-full items-center justify-center'>
        <div className='2xl:w-2/3 w-3/4 space-y-8 font-righteous'>
          <NavbarButton Icon={RiUserLine}>Profile</NavbarButton>
          <button className='w-full' onClick={toggleAppearance}>
            <NavbarButton Icon={RiPaintBrushLine}>Neon Mode</NavbarButton>
          </button>
          <NavbarButton Icon={RiLock2Line}>Privacy</NavbarButton>
        </div>
      </section>
      <section
        className={`z-30 flex flex-col 2xl:w-2/3 w-full border-l-4 border-zinc-700 ${
          showAppearance ? '' : 'hidden 2xl:block'
        }`}
      >
        <div className='w-2/5 mx-auto my-auto'>
          <NavbarButton Icon={RiMoonClearLine}>Neon Mode</NavbarButton>
        </div>
      </section>
    </>
  )
}

export default Settings
