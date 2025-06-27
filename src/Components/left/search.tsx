'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function Search(){
    return(
    <div className="flex items-center bg-white px-1 py-2 rounded-md shadow-sm border border-gray-300 w-1/1">
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        className="ml-2 outline-none w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent"
      />
    </div>
    )
}