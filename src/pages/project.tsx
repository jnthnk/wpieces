import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const HomePage: FC<HomePage> = ({ name }) => (
  <div>
    <h1>Home Page</h1>
  </div>
)

type HomePage = PageProps & {}

export default HomePage
