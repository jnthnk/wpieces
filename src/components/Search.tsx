import Icon from '@/components/Icon'
import type { FC } from 'react'

const Search: FC<SearchProps> = () => {
  return (
    <form className='absolute overflow-hidden top-5 right-8 flex text-gray-800 rounded shadow'>
      <input
        required
        className='block outline-none bg-gray-200 hover:bg-gray-100 focus:bg-white h-10 px-3 py-2 tracking-wider transition-colors'
        placeholder='Search snippets...'
      />
      <button
        type='submit'
        className='inline-flex items-center relative overflow-hidden w-10 px-2 bg-secondary-700 hover:bg-secondary-600 active:bg-secondary-500 border-l shadow-sm transition-colors after:absolute after:inset-0 after:bottom-1/2 after:bg-white/10'
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
