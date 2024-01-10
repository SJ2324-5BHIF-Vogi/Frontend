'use client'
import { Header } from '@/views/Header'
import { Post } from '@/views/Post'
import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'

interface Props {
  params: Record<string, any>
  searchParams: Record<string, any>
}

interface UserData {
  username: string
  displayName: string
  bio: string
  //pic: string
}

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

const Profile: FC<Props> = ({ params }) => {
  const [user, setUser] = useState<UserData>()

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get(
          `http://localhost:3003/users/${params.username}`
        )
        setUser(response.data)
      } catch (error) {
        console.error('Error fetching object:', error)
      }
    }
    fetchData()
  }, [])

  const [posts, setPosts] = useState<PostData[]>([])

  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      try {
        const response = await axios.get('http://localhost:3002/posts')
        setPosts(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchPosts()
  }, [])

  if (user === undefined) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='text-center text-xl'>
          This user (@{params.username}) does not exist.
        </div>
      </div>
    )
  }

  return (
    <>
      <Header
        bio={user.bio}
        displayName={user.displayName}
        username={user.username}
      />
      <div className='flex flex-col m-[15px] space-y-[5px] text-white'>
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
      </div>
    </>
  )
}

export default Profile
