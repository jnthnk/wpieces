import Layout from '@/components/Layout'
import Welcome from '@/components/Welcome'
import Archive from '@/components/Archive'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const HomePage: FC<HomePage> = ({ name }) => (
  <Layout>
    <Welcome />
    <Archive title='Most popular snippets' />
    <Archive title='Last snippets submitted' />
  </Layout>
)

type HomePage = PageProps & {}

export default HomePage
