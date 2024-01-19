import Subscription from '@/views/Subscription'
import React, { FC, ReactElement } from 'react'
import { RiVipDiamondLine } from 'react-icons/ri'

const Home = (): ReactElement => {
  return (
    <>
      <Subscription title='Premium' billing_cycle='Monatlich' price='9,99' />
      <Subscription title='Premium' billing_cycle='Jährlich' price='99,99' />
      {/* <Subscription title='irgendwas' billing_cycle='Monatlich' price='69' /> */}
    </>
  )
}

export default Home
