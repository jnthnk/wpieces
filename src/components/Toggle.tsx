import Icon from '@/components/Icon'
import useDataContext from '@/hooks/useDataContext'
import Cookies from 'universal-cookie'
import type { FC } from 'react'

const cookies = new Cookies()
const date = new Date()
const expiresDate = date.setDate(date.getDate() + 60) // expires in 60 days

const Toggle: FC<ToggleProps> = ({ className }) => {
  const { dark, darkUpdate } = useDataContext()
  return (
    <button
      className={`flex items-center relative overflow-hidden h-10 py-2 pr-4 pl-9 -my-2 rounded transition-colors shadow-inner after:absolute after:inset-0 after:top-1/2 after:bg-white/5 ${
        dark ? 'bg-black/50' : 'bg-black/25'
      }${className ? ` ${className}` : ''}`}
      type='button'
      onClick={() => {
        darkUpdate(!dark)
        cookies.set('wpieces-dark-mode', !dark, { path: '/', expires: new Date(expiresDate) })
      }}
    >
      {dark ? 'Dark ON' : 'Dark OFF'}
      <Icon
        name='dark'
        className={`absolute left-3 fill-white transition-opacity${
          dark ? '' : ' opacity-0 pointer-events-none'
        }`}
      />
      <Icon
        name='light'
        className={`absolute left-3 fill-white transition-opacity${
          dark ? ' opacity-0 pointer-events-none' : ''
        }`}
      />
    </button>
  )
}

type ToggleProps = {
  children?: undefined
  className?: string
}

export default Toggle
export type { ToggleProps }
