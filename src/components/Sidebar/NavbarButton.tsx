import React, { Component, FC } from 'react'
interface Props {
  children: string
  Icon: typeof Component
}

export const NavbarButton: FC<Props> = ({ children, Icon }: Props) => {
  return (
    <button className='flex items-center text-center rounded-full border grow h-20 w-full navbar-button-text hover:text-emerald-400'>
      <Icon className='ml-8 mr-6 text-4xl' />
      <span className='text-2xl navbar-button-text'>{children}</span>
    </button>
  )
}
