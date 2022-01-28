import About from '@/components/About'
import PageProvider from '@/components/PageProvider'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const AboutPage: FC<AboutPageProps> = ({}) => (
  <PageProvider name='project'>
    <About />
  </PageProvider>
)

type AboutPageProps = PageProps & {}

export default AboutPage
export type { AboutPageProps }
