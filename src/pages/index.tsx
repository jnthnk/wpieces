import Latest from '@/components/Latest'
import Welcome from '@/components/Welcome'
import PageProvider from '@/components/PageProvider'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const HomePage: FC<HomePage> = ({}) => (
  <PageProvider name='home'>
    <Welcome />
    <Latest title='Most popular snippets' />
    <Latest title='Last snippets submitted' />
  </PageProvider>
)

type HomePage = PageProps & {}

export default HomePage
