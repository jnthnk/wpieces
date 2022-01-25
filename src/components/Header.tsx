import Link from 'next/link'
import Search from '@/components/Search'
import Toggle from '@/components/Toggle'
import type { FC } from 'react'

const Header: FC<HeaderProps> = ({}) => (
  <header className='relative sm:fixed overflow-hidden sm:inset-0 sm:bottom-auto z-20 bg-primary-900 shadow-lg sm:transform-gpu'>
    <nav className='flex items-center p-8 leading-4'>
      <Link passHref href='/'>
        <a className='block mr-12'>WPieces</a>
      </Link>
      <ul className='flex flex-wrap -my-3 -mx-4 tracking-widest uppercase'>
        <li className='hidden md:block py-3 px-4'>
          <Link passHref href='/'>
            <a className='block p-1 -m-1 font-bold'>Home</a>
          </Link>
        </li>
        <li className='block py-3 px-4'>
          <Link passHref href='/snippets'>
            <a className='block p-1 -m-1 font-bold md:before:content-["code_"]'>Snippets</a>
          </Link>
        </li>
        <li className='block py-3 px-4'>
          <Link passHref href='/project'>
            <a className='block p-1 -m-1 font-bold lg:after:content-["_the_project"]'>About</a>
          </Link>
        </li>
      </ul>
      <Toggle />
      <Search />
    </nav>
  </header>
)

type HeaderProps = {
  children?: undefined
}

export default Header
export type { HeaderProps }
