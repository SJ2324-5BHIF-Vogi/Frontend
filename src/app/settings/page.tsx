import { NavbarButton } from '@/components/Sidebar/NavbarButton'
import React, { FC } from 'react'
import { RiLock2Line, RiPaintBrushLine, RiUserLine } from 'react-icons/ri'

const Settings: FC = () => {
  return (
    <>
      <section className='flex flex-col grow w-1/3 items-center justify-center'>
        <div className='w-2/3 space-y-8 font-righteous'>
          <NavbarButton Icon={RiUserLine}>Profile</NavbarButton>
          <NavbarButton Icon={RiPaintBrushLine}>Display</NavbarButton>
          <NavbarButton Icon={RiLock2Line}>Privacy</NavbarButton>
        </div>
      </section>
      <section className='w-2/3'>Test</section>
    </>
  )
}

export default Settings
