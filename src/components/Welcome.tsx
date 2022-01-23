import Title from '@/components/Title'
import { FC } from 'react'

const Welcome: FC<WelcomeProps> = ({}) => (
  <header className='p-8'>
    <Title size='lg' className='mb-6'>
      <span className='underline underline-offset-4'>Code snippets</span> for WordPress developers
      that <span className='underline underline-offset-4'>just works</span>:
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
