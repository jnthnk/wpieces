import useDataContext from '@/hooks/useDataContext'
import type { FC } from 'react'

const Toggle: FC<ToggleProps> = () => {
  const { dark, darkUpdate } = useDataContext()
  return (
    <button
      className='absolute top-4 bg-secondary-600'
      type='button'
      onClick={() => {
        darkUpdate(!dark)
      }}
    >
      Dark mode
    </button>
  )
}

type ToggleProps = {
  children?: undefined
}

export default Toggle
