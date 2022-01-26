import Link from 'next/link'
import Title from '@/components/Title'
import type { FC } from 'react'
import type { SingleProps } from '@/components/Single'

const Card: FC<CardProps> = ({ ID, tags, title, views }) => {
  return (
    <article className='relative p-4 bg-white'>
      <Title size='sm'>
        <Link href={`/snippets/${ID}`}>
          <a className='block'>{title}</a>
        </Link>
      </Title>
      <div className='flex p-2 text-xs font-bold leading-[1] text-secondary-800 bg-secondary-200 rounded'>
        Views: {views}
      </div>
    </article>
  )
}

type CardProps = Omit<SingleProps, 'content'>

export default Card
export type { CardProps }
