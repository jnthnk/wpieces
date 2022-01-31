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
        className={`flex w-full relative overflow-hidden z-10 sm:pt-[5.5rem] sm:pb-4${
          dark ? ' dark' : ''
        }`}
      >
        <div className='w-full text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 rounded-br-2xl transition-colors'>
          {children}
        </div>
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
