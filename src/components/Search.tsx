import Icon from '@/components/Icon'
import type { FC } from 'react'

const Search: FC<SearchProps> = () => {
  return (
    <form className='absolute overflow-hidden top-5 right-8 flex text-gray-800 rounded shadow'>
      <input
        required
        className='block outline-none bg-white h-10 px-3 py-2 tracking-wider'
        placeholder='Search snippets...'
      />
      <button
        type='submit'
        className='inline-flex items-center w-10 px-2 bg-gray-200 hover:bg-gray-300 transition-colors'
      >
        <Icon name='search' className='flex-shrink-0 !w-6 !h-6 mr-2 fill-primary-900' />
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
