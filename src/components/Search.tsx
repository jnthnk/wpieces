import Icon from '@/components/Icon'
import type { FC } from 'react'

const Search: FC<SearchProps> = () => {
  return (
    <form className='relative ml-auto text-gray-800'>
      <input required className='block outline-none' />
      <button type='submit' className='absolute overflow-hidden flex items-center w-6'>
        <Icon name='search' className='flex-shrink-0 !w-6 !h-6 mr-2 fill-white' />
        Search
      </button>
    </form>
  )
}

type SearchProps = {
  children?: undefined
}

export default Search
export type { SearchProps }
