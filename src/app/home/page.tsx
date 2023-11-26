import { Post } from '@/views/Post'
import React, { ReactElement } from 'react'

const Home = (): ReactElement => {
  return (
    <main className='flex flex-col p-4 space-y-[5px] text-white'>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </main>
  )
}

export default Home
