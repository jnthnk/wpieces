import Title from '@/components/Title'
import { FC } from 'react'

const Welcome: FC<WelcomeProps> = ({}) => (
  <header className='px-8 md:px-12 xl:px-16 py-12 md:py-14 xl:py-16 bg-gray-100 border-b border-gray-500'>
    <Title size='lg' className='mb-8 text-primary-800'>
      <span className='underline underline-offset-4'>Code snippets</span>
      {' for WordPress that '}
      <span className='underline underline-offset-4'>just works</span>:
    </Title>
    <p className='mb-2 text-lg font-bold'>
      Finding the right piece of code to implement that plugin / theme / hook / filter can be hard.
      We back you up!
    </p>
    <p className='mb-2 text-lg'>Navigate in our extensive archive of snippets to find the code.</p>
    <p className='text-lg'>
      Feel free to suggest us some ideas to research and create new snippets.
    </p>
  </header>
)

type WelcomeProps = {
  children?: undefined
}

export default Welcome
