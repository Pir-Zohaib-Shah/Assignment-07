'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FiTrash2 } from 'react-icons/fi';
import { Montserrat } from '@next/font/google'


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '600',
})


interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

const Cart: React.FC = () => {
  // Example cart items (you would typically fetch this from a state management solution)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'SAUCONY OMNI 20',
      price: 75,
      imageUrl: '/cart/saucony.png',
      quantity: 1,
    },
    {
    id: 2,
      name: 'BROOKS GLYCERIN 19',
      price: 89,
      imageUrl: '/cart/brooks.png',
      quantity: 1,
    },
    {
    id: 2,
      name: 'NIKE FREE RN DISTANCE',
      price: 110,
      imageUrl: '/cart/nike.png',
      quantity: 1,
    },
  ]);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto md:px-52 px-4 mt-11 h-[560px]">
      <div className={montserrat.className}><h1 className="text-2xl font-bold mb-4">Your Cart</h1></div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                <Image src={item.imageUrl} alt={item.name} width={100} height={100} className="mr-4" />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                <FiTrash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          <div className="flex justify-between font-bold mt-4">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-xl">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
