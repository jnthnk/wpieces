import Archive from '@/components/Archive'
import PageProvider from '@/components/PageProvider'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const AboutPage: FC<AboutPageProps> = ({}) => (
  <PageProvider name='project'>
    <Archive title='About this Project' />
  </PageProvider>
)

type AboutPageProps = PageProps & {}

export default AboutPage
export type { AboutPageProps }
