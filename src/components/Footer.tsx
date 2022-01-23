import { FC } from 'react'

const Footer: FC<FooterProps> = () => (
  <footer className='relative overflow-hidden z-0 text-white bg-gray-900'>
    <nav className='p-8 md:px-12 xl:px-16'>
      <ul className='flex'>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Code snippets</a>
        </li>
        <li>
          <a>The project</a>
        </li>
      </ul>
    </nav>
  </footer>
)

type FooterProps = {
  children?: undefined
}

export default Footer
