import Title from '@/components/Title'
import { FC } from 'react'

const Latest: FC<LatestProps> = ({ title }) => (
  <section className='lg:flex px-8 md:px-12 xl:px-16 py-12 md:py-14 xl:py-16'>
    <div className='lg:w-1/2 2xl:w-1/3 lg:pr-12 2xl:pr-16'>
      <Title tag='h2' className='mb-6'>
        {title}:
      </Title>
      <p>This website doesn't pretend to be.</p>
    </div>
    <ul className='block lg:w-1/2 2xl:w-2/3 bg-white rounded shadow'>
      <li className='block'>
        <article className='flex items-center p-4'>
          <h3 className=''>How to disable Gutenberg?</h3>
          <span>324 reads</span>
          <span className='font-bold'>4.5 stars</span>
        </article>
      </li>
    </ul>
  </section>
)

type LatestProps = {
  title: string
  children?: undefined
}

export default Latest
