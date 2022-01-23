import { FC } from 'react'

const Footer: FC<FooterProps> = ({}) => (
  <footer>
    <nav>
      <ul>
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
