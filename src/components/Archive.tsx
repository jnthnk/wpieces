import Title from '@/components/Title'
import Card from '@/components/Card'
import type { FC } from 'react'
import type { CardProps } from '@/components/Card'

const Archive: FC<ArchiveProps> = ({ cards, title }) => (
  <section className='p-8 md:px-12 xl:px-16'>
    <Title tag='h2' className='mb-2'>
      {title}
    </Title>
    <p>This website doesn't pretend to be.</p>
    {cards.map((card) => (
      <Card key={card.ID} {...card} />
    ))}
  </section>
)

type ArchiveProps = {
  cards: CardProps[]
  title: string
  children?: undefined
}

export default Archive
