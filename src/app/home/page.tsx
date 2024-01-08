'use client'
import { Post } from '@/views/Post'
import axios from 'axios'
import React, { ReactElement } from 'react'

interface PostData {
  uuid: string
  username: string
  displayName: string
  date: Date
  content: string
  likes: number
  shares: number
  comments: number
}

const Home = (): ReactElement => {
  const posts: PostData[] = []

  axios
    .get('http://localhost:3002/posts')
    .then((response) => {
      posts.push(response.data)
      console.log(posts)
    })
    .catch(() => {})

  return (
    <main className='flex flex-col p-4 space-y-[5px] text-white'>
      {posts.map((post) => (
        <Post
          key={post.uuid}
          comments={post.comments.toString()}
          content={post.content}
          displayName={post.displayName}
          likes={post.likes.toString()}
          shares={post.shares.toString()}
          username={post.username}
        />
      ))}
    </main>
  )
}

export default Home
