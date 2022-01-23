import Link from 'next/link'
import links from '@/contents/links'
import type { FC } from 'react'

const Header: FC<HeaderProps> = ({}) => (
  <header>
    <nav>
      <ul className='flex leading-4'>
        {links.map(({ href, label }) => (
          <li key={href} className='block'>
            <Link passHref href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

type HeaderProps = {
  children?: undefined
}

export default Header
