import React from 'react';
import { Montserrat } from '@next/font/google'


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '600',
})

const Originality= () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 mb-8">

      <div className={montserrat.className}><h1 className="text-4xl  text-gray-800 mb-6 text-center">Originality of Our Pre-Loved Shoes</h1></div>
      <p className="mb-8 text-gray-600 text-base leading-relaxed">
        At ZEE SHOES, we take pride in offering a curated selection of pre-loved shoes that are not only stylish but also authentic. Each pair is carefully inspected to ensure you receive quality footwear.
      </p>

      <div className={montserrat.className}><h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4 border-b-2 border-gray-300 pb-2">Why Authenticity Matters</h2></div>
      <p className="mb-4 text-gray-600 leading-relaxed">
        When purchasing pre-loved shoes, authenticity is key. Genuine products offer numerous benefits, including:
      </p>
      <ul className="list-disc list-inside mb-6 pl-5 space-y-2">
        <li className="flex items-center text-gray-700">
          <span className="mr-2 text-green-500">🔹</span>
          Quality Assurance: Our shoes are sourced from trusted sellers, ensuring you receive authentic brands.
        </li>
        <li className="flex items-center text-gray-700">
          <span className="mr-2 text-green-500">🔹</span>
          Eco-Friendly Choice: Choosing pre-loved shoes helps reduce waste and promotes sustainable fashion.
        </li>
        <li className="flex items-center text-gray-700">
          <span className="mr-2 text-green-500">🔹</span>
          Unique Finds: Pre-loved shoes often come with character and history, giving you a one-of-a-kind addition to your wardrobe.
        </li>
      </ul>

      <div className={montserrat.className}><h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4 border-b-2 border-gray-300 pb-2">How to Verify Authenticity</h2></div>
      <p className="mb-4 text-gray-600 leading-relaxed">
        To ensure you’re purchasing genuine pre-loved shoes, follow these steps:
      </p>
      <ol className="list-decimal list-inside mb-6 pl-5 space-y-2 text-gray-700">
        <li>Check Product Descriptions: We provide detailed descriptions and photos for every item.</li>
        <li>Look for Authentic Tags: Genuine shoes often have tags or branding that indicate their authenticity.</li>
        <li>Research the Seller: Trust our vetted sellers or consult reviews and ratings for reassurance.</li>
      </ol>

      <div className={montserrat.className}><h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4 border-b-2 border-gray-300 pb-2">Get in Touch</h2></div>
      <p className="text-gray-600 leading-relaxed">
        If you have any questions about the authenticity of our pre-loved shoes, please reach out to our customer support team. We’re here to help you find the perfect pair!
      </p>
    </div>
  );
};

export default Originality;
