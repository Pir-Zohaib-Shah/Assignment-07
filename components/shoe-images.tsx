import React from 'react';
import Image from 'next/image';
import shoe1 from '@/public/shoe_images/shoe1.png';
import shoe2 from '@/public/shoe_images/shoe2.png';
import shoe3 from '@/public/shoe_images/shoe3.png';
import shoe4 from '@/public/shoe_images/shoe4.png';
import shoe5 from '@/public/shoe_images/shoe5.png';
import shoe6 from '@/public/shoe_images/shoe6.png';
import Link from 'next/link';

const ShoeImages = () => {
  return (
    <div className='mt-7'>
      <div className='flex justify-center space-x-8 mb-4  md:hidden'>
       <Link href='#'> <Image src={shoe1} alt='shoe1' className='w-20' /></Link>
       <Link href='#'> <Image src={shoe2} alt='shoe2' className='w-20' /></Link>
       <Link href='#'> <Image src={shoe3} alt='shoe3' className='w-20 h-14 mt-2' /></Link>
      </div>
      <div className='flex justify-center space-x-8 md:hidden'>
       <Link href='#'> <Image src={shoe4} alt='shoe4' className='w-20 h-14 mt-1' /></Link>
       <Link href='#'> <Image src={shoe5} alt='shoe5' className='w-20' /></Link>
       <Link href='#'> <Image src={shoe6} alt='shoe6' className='w-20' /></Link>
      </div>
      <div className='hidden md:block'>
        <div className='flex space-x-20'>
       <Link href='#'> <Image src={shoe1} alt='shoe1' className='w-24' /></Link>
       <Link href='#'> <Image src={shoe2} alt='shoe2' className='w-24' /></Link>
       <Link href='#'> <Image src={shoe3} alt='shoe3' className='w-24 h-16 mt-2' /></Link>
       <Link href='#'> <Image src={shoe4} alt='shoe4' className='w-24 h-16 mt-3' /></Link>
       <Link href='#'> <Image src={shoe5} alt='shoe5' className='w-24' /></Link>
       <Link href='#'> <Image src={shoe6} alt='shoe6' className='w-24' /></Link>
        </div>
        </div>
    </div>
  );
};

export default ShoeImages;
