// pages/brands.tsx
import React from 'react';
import { Oleo_Script_Swash_Caps } from '@next/font/google'
import { Montserrat } from '@next/font/google'

interface Brand {
  name: string;
  imageUrl: string;
}

const play = Oleo_Script_Swash_Caps({
    subsets: ['latin'],
    weight: '400',
})

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: '400',
})

const defaultImage = '/placeholder.png'; 

const brands: Brand[] = [
    { name: 'Adidas', imageUrl:"/logos/adidas.png" },
    { name: 'Nike', imageUrl: '/logos/nike.png' },
    { name: 'Puma', imageUrl: '/logos/puma.png' },
    { name: 'Reebok', imageUrl: '/logos/reeboks.png' },
    { name: 'Converse', imageUrl: '/logos/converse.png' },
    { name: 'New Balance', imageUrl: '/logos/new-balance.png' },
    { name: 'Vans', imageUrl: '/logos/vans.png' },
    { name: 'Asics', imageUrl: '/logos/asics.png' },
    { name: 'Saucony', imageUrl: '/logos/saucony.png' },
    { name: 'Under Armour', imageUrl: '/logos/under-armour.png' },
    { name: 'Skechers', imageUrl: '/logos/skechers.png' },
    { name: 'Fila', imageUrl: '/logos/fila.png' },
    { name: 'Clarks', imageUrl: '/logos/clarks.png' },
    { name: 'Brooks', imageUrl: '/logos/brooks.png' },
    { name: 'Dr. Martens', imageUrl: '/logos/dr-martens.png' },
];

const BrandsPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
        <div className={montserrat.className}>
      <h1 className="text-5xl font-bold  text-center">Brands</h1>
        </div>
      <div className={play.className}>
      <h3 className='text-center mb-6 text-lg'>Explore our curated collection of renowned shoe brands, where style meets comfort in every step!</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <div key={brand.name} className="border rounded-lg shadow-lg p-4 flex items-center justify-between bg-white hover:shadow-xl transition-shadow duration-200">
            <div className={montserrat.className}>
            <span className="text-xl font-semibold">{brand.name}</span>
            </div>
              <img 
                src={brand.imageUrl || defaultImage}
                alt={brand.name}
                className=" w-14 "
              />
            </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
