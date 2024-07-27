import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

const SearchBox = ({search,setSearch ,searchHandler}) => {
  return (
    <div className='mb-[50px]'> 
        <input className='w-[300px] h-10 border-none rounded-md p-2.5 mr-2.5 text-base bg-[#e0e0e0] focus:outline-none' type="text" placeholder='Search title' value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())} />
        <button  className='w-10 h-10 border-none rounded-md text-xl bg-[#6552f4] text-[#e0e0e0] cursor-pointer' onClick={searchHandler}>
            <IoSearchSharp />
        </button>
    </div>
  )
}

export default SearchBox