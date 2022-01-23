import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { FC } from 'react'

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main className='relative overflow-hidden z-10 sm:pt-20 md:pr-[200px]'>
      {children}
      <Sidebar />
    </main>
    <Footer />
  </>
)

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export default Layout
