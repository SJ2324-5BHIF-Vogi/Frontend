import React, { FC } from 'react'

interface Props {
  params: Record<string, any>
  searchParams: Record<string, any>
}

const Profile: FC<Props> = ({ params }) => {
  return (
    <div className='flex flex-col m-[15px] space-y-[5px] text-white'>
      {params.username}
    </div>
  )
}

export default Profile
