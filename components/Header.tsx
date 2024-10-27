import React from 'react'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import Sidebar_provider from './sidebar-provider'
import Searchbar from './searchbar'
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc"
import Link from 'next/link'

const Header= () => {
  return (
    <>
    <div className='bg-[rgb(217,217,217)] h-[70px] w-full flex  justify-between px-4 flex-grow md:relative'>
        <div>
        <Sidebar_provider/>
        </div>
      <div className="flex-grow flex justify-center items-center md:justify-start md:absolute md:bottom-3 md:mt-9 md:ml-12 ">
        <Image src={Logo} alt='logo' className='w-36 h-10  ml-4 sticky md: md:top-1'/>
      </div>
      <div className='md:absolute md:mt-4 ml-80 hidden md:block'>
      <Searchbar/>
      </div>
      <div className='flex items-center space-x-4'>
      <Link href="auth"><VscAccount className='text-lg hidden md:block'/></Link>
       <IoSearch className='text-lg md:hidden'/>
       <Link href="cart"><FiShoppingCart className='text-lg'/></Link>
      </div>
    </div>
    </>
  )
}

export default Header;
