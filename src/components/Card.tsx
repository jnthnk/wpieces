import Title from '@/components/Title'
import type { FC } from 'react'
import type { SingleProps } from '@/components/Single'

const Card: FC<CardProps> = ({ tags, title }) => {
  return (
    <article className='relative p-4 bg-white'>
      <Title size='sm'>{title}</Title>
    </article>
  )
}

type CardProps = Omit<SingleProps, 'content'>

export default Card
export type { CardProps }
