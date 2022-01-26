import { marked } from 'marked'
import Title from '@/components/Title'
import type { FC } from 'react'

const Single: FC<SingleProps> = ({ title, content }) => {
  return (
    <article className='relative px-8 md:px-12 xl:px-16 py-12 md:py-14 xl:py-16'>
      <Title size='lg'>{title}</Title>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} className='prose' />
    </article>
  )
}

type SingleProps = {
  ID: number
  tags?: string[]
  title: string
  views: number
  content: string
  children?: undefined
}

export default Single
export type { SingleProps }
