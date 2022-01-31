import Icon from '@/components/Icon'
import type { FC } from 'react'

const Search: FC<SearchProps> = () => {
  return (
    <form className='relative overflow-hidden -my-2 ml-auto lg:ml-4 flex text-gray-800 rounded shadow'>
      <input
        required
        className='block outline-none bg-gray-200 hover:bg-gray-100 focus:bg-white w-48 lg:w-56 xl:w-64 2xl:w-80 h-10 px-3 py-2 tracking-wider transition-colors'
        placeholder='Search snippets...'
      />
      <button
        type='submit'
        className='inline-flex flex-shrink-0 items-center relative overflow-hidden w-10 px-2 bg-secondary-700 hover:bg-secondary-600 active:bg-secondary-500 border-l shadow-sm transition-colors after:absolute after:inset-0 after:bottom-1/2 after:bg-white/10'
      >
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
