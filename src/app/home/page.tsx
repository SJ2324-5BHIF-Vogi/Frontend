'use client'
import { Post } from '@/views/Post'
import axios from 'axios'
import React, { ReactElement, useEffect, useState } from 'react'

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
  const [posts, setPosts] = useState<PostData[]>([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get('http://localhost:3002/posts')
        setPosts(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  if (posts.length === 0) {
    return (
      <div className='flex items-center justify-center h-screen text-white font-manrope'>
        <div className='text-center text-xl'>
          There aren't any posts we can show you right now.
        </div>
      </div>
    )
  }

  return (
    <main className='flex flex-col p-4 space-y-[5px] text-white'>
      {posts.map((post) => (
        <Post
          key={post.uuid}
          comments={post.comments.toString()}
          content={post.content}
          date={post.date}
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
