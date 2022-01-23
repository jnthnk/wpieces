import Archive from '@/components/Archive'
import PageProvider from '@/components/PageProvider'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const ArchivePage: FC<ArchivePage> = ({}) => (
  <PageProvider name='project'>
    <Archive title='About this Project' />
  </PageProvider>
)

type ArchivePage = PageProps & {}

export default ArchivePage
