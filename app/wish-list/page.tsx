'use client'
// pages/wishlist.tsx
import { useState } from 'react';
import { Montserrat } from '@next/font/google'


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '600',
})

interface Shoe {
  id: number;
  name: string;
  imageUrl: string;
}

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState<Shoe[]>([
    {
      id: 1,
      name: "BROOKS GLYCERIN 19",
      imageUrl: "/cart/brooks.png",
    },
    {
      id: 2,
      name: "NIKE FREE RN DISTANCE",
      imageUrl: "/cart/nike.png",
    },
    {
      id: 3,
      name: "SAUCONY OMNI 20",
      imageUrl: "/cart/saucony.png",
    },
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 h-[580px]">
      <div className={montserrat.className}><h1 className="text-3xl font-bold mb-4 flex items-center">Your Wishlist ❤️</h1></div>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <ul className="space-y-4">
          {wishlistItems.map(item => (
            <li key={item.id} className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center">
                <img src={item.imageUrl} alt={item.name} className="h-16 w-16 object-cover mr-4" />
                <span className="font-medium">{item.name}</span>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;
