'use client'
import { SearchBar } from '@/components/global/SearchBar'
import { Header } from '@/views/Header'
import { Post } from '@/views/Post'
import { Sidebar } from '@/views/Sidebar'
import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { RiMenuLine, RiSearchLine } from 'react-icons/ri'

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
  const [showSidebar, setShowSidebar] = useState(false)
  const [showRightAside, setRightAside] = useState(false)

  const toggleSidebar = (): void => {
    if (showRightAside) {
      setRightAside(!showRightAside)
    }

    setShowSidebar(!showSidebar)
  }

  const toggleRightAside = (): void => {
    if (showSidebar) {
      setShowSidebar(!showSidebar)
    }

    setRightAside(!showRightAside)
  }

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

  let content

  if (posts.length === 0) {
    content = (
      <div className='flex items-center justify-center h-screen text-white font-manrope '>
        <div className='text-center text-xl'>
          There aren't any posts we can show you right now.
        </div>
      </div>
    )
  } else {
    content = (
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

  let content1

  if (user === undefined) {
    content1 = (
      <div className='flex items-center justify-center h-screen'>
        <div className='text-center text-xl'>
          This user (@{params.username}) does not exist.
        </div>
      </div>
    )
  } else {
    content1 = (
      <div>
        <Header
          bio={user.bio}
          displayName={user.displayName}
          username={user.username}
        />
        <div className='flex flex-col m-[15px] space-y-[5px] text-white'>
          {content}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='flex-col'>
        <button
          className='2xl:hidden fixed z-50 top-4 right-4 m-1 text-white text-2xl drop-shadow-md'
          onClick={toggleSidebar}
        >
          <RiMenuLine />
        </button>
        <button
          className='2xl:hidden fixed z-50 top-16 right-4 m-1 text-white text-2xl drop-shadow-md'
          onClick={toggleRightAside}
        >
          <RiSearchLine />
        </button>
      </div>
      <div
        className={`fixed z-40 bg-zinc-800 dark:bg-midnight-700 overflow-y-auto ${
          showSidebar ? '' : 'hidden 2xl:block'
        }`}
      >
        <Sidebar />
      </div>
      <div className='flex-col bg-zinc-900 dark:bg-midnight-800 ml-auto mr-auto md:w-3/5 w-full text-white font-manrope'>
        {content1}
      </div>
      <aside
        className={`2xl:w-1/5 w-full z-40 border-gradient-l fixed right-[0px] h-screen bg-zinc-800 border-zinc-500 border-l-4 grow dark:bg-midnight-700 ${
          showRightAside ? '' : 'hidden 2xl:block'
        }`}
      >
        <SearchBar />
      </aside>
    </>
  )
}

export default Profile
