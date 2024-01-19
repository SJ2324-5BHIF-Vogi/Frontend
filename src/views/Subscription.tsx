import React, { FC } from 'react'
import { RiVipDiamondLine } from 'react-icons/ri'

interface Props {
  icon?: JSX.Element
  title: string
  billing_cycle: string
  price: string
}

const Subscription: FC<Props> = ({ icon, title, billing_cycle, price }) => {
  const condition = billing_cycle === 'Monatlich'
  const billing = condition ? 'Monat' : 'Jahr'

  return (
    <>
      <div className='flex flex-col w-1/2 border-4 p-3.5 mt-3 mx-4 bg-zinc-900 rounded-3xl border-zinc-500 max-h-72'>
        <div className='flex justify-start self-start pb-1'>
          <RiVipDiamondLine className='text-2xl' />
          <p className='px-2 font-righteous text-xl'>{title}</p>
        </div>
        <hr className='w-full h-px bg-black' />
        <p className='text-sm text-neutral-600 mt-4'>{billing_cycle}</p>
        <p className='font-righteous p-0'>
          {price} €/{billing}
        </p>
        <button className='bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-2 mt-auto'>
          Abonnieren
        </button>
      </div>
    </>
  )
}

export default Subscription
