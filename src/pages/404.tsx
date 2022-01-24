import PageProvider from '@/components/PageProvider'
import type { FC } from 'react'
import type { PageProps } from '@/types/PageProps'

const ErrorPage: FC<ErrorPageProps> = ({}) => (
  <PageProvider name='error'>
    <div>Page not found</div>
  </PageProvider>
)

type ErrorPageProps = PageProps & {}

export default ErrorPage
