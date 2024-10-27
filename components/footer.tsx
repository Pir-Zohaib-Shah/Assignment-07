import Image from 'next/image'
import React from 'react'
import logo_w from '@/public/logo_w.png'

const Footer = () => {
  return (
    <div className='flex justify-center items-center h-12 space-x-2 text-white bg-black'>
    <div className='text-center text-sm'>Copyright &copy;</div><Image src={logo_w} alt='logo' className='w-20 h-5 '/> <div className='text-sm'> 2024 | All Rights Reserved</div>
    </div>
  )
}

export default Footer