import React from 'react'
import { IoSearch } from "react-icons/io5";
import { Button } from './ui/button';

const Searchbar = () => {
  return (
    <>
    <div className='flex items-center'>
        <input type="text" name='search' placeholder='search for you choice' className='p-2  w-[600px] rounded-xl'/>
      <Button className='rounded-xl -ml-14'> <IoSearch className='text-3xl' /></Button>
    </div>
    </>
  )
}

export default Searchbar