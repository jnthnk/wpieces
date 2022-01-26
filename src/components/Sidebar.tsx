import { FC } from 'react'

const Sidebar: FC<SidebarProps> = () => (
  <aside className='relative md:w-[200px]'>
    <div></div>
  </aside>
)

type SidebarProps = {
  children?: undefined
}

export default Sidebar
