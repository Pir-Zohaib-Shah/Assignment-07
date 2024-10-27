'use client';
import React from 'react';
import { Montserrat } from '@next/font/google';
import Image from 'next/image';
import offer1 from '@/public/top-offers/offer1.png';
import offer2 from '@/public/top-offers/offer2.png';
import offer3 from '@/public/top-offers/offer3.png';
import offer4 from '@/public/top-offers/offer4.png';
import offer5 from '@/public/top-offers/offer5.png';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '600',
});

const offers = [offer1, offer2, offer3, offer4, offer5]; 

const TopOffers = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className='flex flex-col items-center'>
      <div className='text-2xl mr-36 mt-8 md:text-4xl md:mr-[750px] md:mt-8'>
        <div className={montserrat.className}>Top Offers</div>
      </div>
      <Carousel className="w-48 md:w-[900px] mt-6" ref={emblaRef}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className='md:basis-1/3'>
              <div className="flex items-center justify-center p-1">
                <Image 
                  src={offers[index % offers.length]}
                  alt={`offer${index + 1}`} 
                  className="object-cover w-full h-full cursor-pointer"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TopOffers;
