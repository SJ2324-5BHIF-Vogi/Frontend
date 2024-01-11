import { NavbarButton } from '@/components/Sidebar/NavbarButton'
import React, { FC } from 'react'
import { RiLock2Line, RiPaintBrushLine, RiUserLine } from 'react-icons/ri'

const Settings: FC = () => {
  return (
    <>
      <section className='flex flex-col grow 2xl:w-1/3 w-full items-center justify-center'>
        <div className='2xl:w-2/3 w-3/4 space-y-8 font-righteous'>
          <NavbarButton Icon={RiUserLine}>Profile</NavbarButton>
          <NavbarButton Icon={RiPaintBrushLine}>Display</NavbarButton>
          <NavbarButton Icon={RiLock2Line}>Privacy</NavbarButton>
        </div>
      </section>
      <section className='2xl:w-2/3 w-full hidden 2xl:block'>Test</section>
    </>
  )
}

export default Settings
