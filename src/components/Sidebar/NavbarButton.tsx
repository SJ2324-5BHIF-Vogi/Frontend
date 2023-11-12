import { Component, FC } from 'react'
interface Props {
  children: string
  Icon: typeof Component
}

export const NavbarButton: FC<Props> = ({ children, Icon }: Props) => {
  return (
    <button className='flex items-center text-center border rounded-full'>
      <Icon className='ml-3 mr-5' />
      {children}
    </button>
  )
}
