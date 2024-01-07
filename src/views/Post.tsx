import { InteractionButton } from '@/components/Post/InteractionButton'
import React, { FC } from 'react'
import Image from 'next/image'
import Markdown from 'react-markdown'
import {
  RiHeart3Line,
  RiMessage3Line,
  RiShareForwardLine
} from 'react-icons/ri'

export const Post: FC = () => {
  const markdown =
    '# Dies ist ein Test  \n ## Super Test  \n *hallo*  \n **HALLO**'

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
            Vogi Offical{' '}
            <span className='text-zinc-400 dark:text-gray-500'>
              vor 2 Stunden
            </span>
          </span>
          <span className='text-sm text-zinc-400 dark:text-gray-500'>
            @vogi
          </span>
        </div>
      </aside>
      <Markdown className='my-5'>{markdown}</Markdown>
      <section className='flex justify-center space-x-5'>
        <InteractionButton Icon={RiHeart3Line}>2.123</InteractionButton>
        <InteractionButton Icon={RiShareForwardLine}>723</InteractionButton>
        <InteractionButton Icon={RiMessage3Line}>52</InteractionButton>
      </section>
    </article>
  )
}
