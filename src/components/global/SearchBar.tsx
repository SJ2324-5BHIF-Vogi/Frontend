import { FC } from 'react'
import { RiSearchLine } from 'react-icons/ri'

export const SearchBar: FC = () => {
  return (
    <search className='flex items-center mt-5 rounded-full border'>
      <RiSearchLine className='cursor-pointer' />
      <input className='rounded-full' />
    </search>
  )
}
