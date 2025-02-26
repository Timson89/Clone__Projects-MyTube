import React from 'react';
import { SearchIcon } from 'lucide-react';


const SearchInput = () => {

  // TODO: add search functionality //

  return (

    <form className='flex w-full max-w-[600px]'>
      <div className='relative w-full'>
        <input className='w-full pl-4 py-2 pr-12 rounded-l-full border focus:outline-none focus:border-blue-500' 
          type='text' 
          placeholder='Search' 
        />

      {/* TODO: add remove search button */}

      </div>
      <button className='px-5 py-2.5 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed' type='submit'>
        <SearchIcon className='size-5' />
      </button>
    </form>
  )
}

export default SearchInput;