import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import useDataContext from '@/hooks/useDataContext'
import { FC } from 'react'

const Layout: FC<LayoutProps> = ({ children }) => {
  const { dark } = useDataContext()
  return (
    <>
      <Header />
      <main
        className={`relative overflow-hidden z-10 text-gray-800 bg-gray-100 md:rounded-br-lg shadow-lg${
          dark ? ' dark' : ''
        }`}
      >
        {children}
        <Sidebar />
      </main>
      <Footer />
    </>
  )
}

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export default Layout
