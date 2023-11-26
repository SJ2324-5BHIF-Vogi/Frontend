import { Component, FC } from 'react'

interface Props {
  children: string
  Icon: typeof Component
}
export const InteractionButton: FC<Props> = ({ children, Icon }: Props) => {
  return (
    <button className='flex items-center space-x-2'>
      <Icon className='text-xl' />
      <span>{children}</span>
    </button>
  )
}
