import { createContext } from 'react'

const PageContext = createContext<PageContextProps>(null)

type PageContextProps = {
  name: 'home' | 'tags' | 'project' | 'snippets' | 'single' | 'error'
}

export default PageContext
export type { PageContextProps }
