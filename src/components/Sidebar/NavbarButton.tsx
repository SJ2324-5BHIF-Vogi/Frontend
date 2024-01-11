import React, { Component, FC } from 'react'
interface Props {
  children: string
  Icon: typeof Component
}

export const NavbarButton: FC<Props> = ({ children, Icon }: Props) => {
  return (
    <button className='flex items-center text-center rounded-full grow h-20 w-full text-white xl:hover:bg-emerald-600 xl:bg-zinc-800 hover:dark:bg-gradient-to-b 2xl:hover:dark:from-indigo-700 2xl:hover:dark:to-purple-700 hover:dark:text-white 2xl:dark:bg-midnight-700 dark:bg-purple-700 bg-emerald-600'>
      <Icon className='ml-8 mr-6 text-4xl' />
      <span className='text-2xl navbar-button-text'>{children}</span>
    </button>
  )
}
