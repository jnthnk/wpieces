import Layout from '@/components/Layout'
import PageContext from '@/contexts/PageContext'
import type { FC } from 'react'
import type { PageContextProps } from '@/contexts/PageContext'

const PageProvider: FC<PageProviderProps> = ({ name, children }) => (
  <PageContext.Provider value={{ name }}>
    <Layout>{children}</Layout>
  </PageContext.Provider>
)

type PageProviderProps = PageContextProps & {
  children: JSX.Element | JSX.Element[]
}

export default PageProvider
