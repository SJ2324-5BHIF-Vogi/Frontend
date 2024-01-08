import { InteractionButton } from '@/components/Post/InteractionButton'
import React, { FC } from 'react'
import Image from 'next/image'
import Markdown from 'react-markdown'
import {
  RiHeart3Line,
  RiMessage3Line,
  RiShareForwardLine
} from 'react-icons/ri'

interface Props {
  //uuid: string
  username: string
  displayName: string
  //date: Date
  content: string
  likes: string
  shares: string
  comments: string
}

export const Post: FC<Props> = ({
  username,
  displayName,
  content,
  likes,
  shares,
  comments
}) => {
  /*const markdown =
    '# Dies ist ein Test  \n ## Super Test  \n *hallo*  \n **HALLO**'*/

  return (
    <article className='p-2 pt-5 pb-4 border-b-2  border-neutral-700 dark:border-midnight-600 font-manrope'>
      <aside className='flex space-x-3'>
        <Image
          alt='[CHANGE TO USERNAME] profile picture'
          className='rounded-full'
          height={50}
          src='/vogi_logo_dark.png'
          width={50}
        />
        <div className='flex flex-col justify-center'>
          <span className='text-sm'>
            {displayName}{' '}
            <span className='text-zinc-400 dark:text-gray-500'>
              vor 2 Stunden
            </span>
          </span>
          <span className='text-sm text-zinc-400 dark:text-gray-500'>
            {username}
          </span>
        </div>
      </aside>
      <Markdown className='my-5'>{content}</Markdown>
      <section className='flex justify-center space-x-5'>
        <InteractionButton Icon={RiHeart3Line}>{likes}</InteractionButton>
        <InteractionButton Icon={RiShareForwardLine}>
          {shares}
        </InteractionButton>
        <InteractionButton Icon={RiMessage3Line}>{comments}</InteractionButton>
      </section>
    </article>
  )
}
