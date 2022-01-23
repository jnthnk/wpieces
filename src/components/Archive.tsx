import Title from '@/components/Title'
import { FC } from 'react'

const Archive: FC<ArchiveProps> = ({ title }) => (
  <header className='p-8'>
    <Title tag='h2' className='mb-2'>
      {title}
    </Title>
    <p>This website doesn't pretend to be.</p>
  </header>
)

type ArchiveProps = {
  title: string
  children?: undefined
}

export default Archive
