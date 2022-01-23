import Link from 'next/link'
import { FC } from 'react'

const Header: FC<HeaderProps> = ({}) => (
  <header>
    <nav>
      <ul>
        <li>
          <Link passHref href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <a>Code snippets</a>
        </li>
        <li>
          <a>The project</a>
        </li>
      </ul>
    </nav>
  </header>
)

type HeaderProps = {
  children?: undefined
}

export default Header
