'use client'
import { Header } from '@/views/Header'
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
        {params.username}
      </div>
    </>
  )
}

export default Profile
