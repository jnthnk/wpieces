import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FC } from 'react'

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export default Layout
