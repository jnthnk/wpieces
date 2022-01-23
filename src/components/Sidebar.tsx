import { FC } from 'react'

const Sidebar: FC<SidebarProps> = () => (
  <aside className='relative md:absolute md:top-20 md:right-0 md:-bottom-20 md:w-[200px] h-[200px] md:h-auto bg-gray-300 border-l border-gray-500'>
    <div></div>
  </aside>
)

type SidebarProps = {
  children?: undefined
}

export default Sidebar
