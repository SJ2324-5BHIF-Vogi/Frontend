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

    // Call the async function
    fetchData()
  }, [])

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

    /*<main className='flex flex-col p-4 space-y-[5px] text-white'>
      <Post
        comments='27'
        content='# Hallo'
        displayName='Freddy'
        likes='7'
        shares='8'
        username='hallooo'
      />
    </main>*/
  )
}

export default Home
