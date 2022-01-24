import { FC } from 'react'

const Sidebar: FC<SidebarProps> = () => (
  <aside className='relative md:fixed md:top-20 md:right-0 md:bottom-0 md:w-[200px] h-[200px] md:h-auto'>
    <div></div>
  </aside>
)

type SidebarProps = {
  children?: undefined
}

export default Sidebar
