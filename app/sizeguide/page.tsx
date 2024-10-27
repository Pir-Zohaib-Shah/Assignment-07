// pages/size-guide.tsx
import React from 'react';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '600',
});

const SizeGuide: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <div className={montserrat.className}>
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Shoe Size Guide</h1>
      </div>
      <p className="mb-6 text-gray-600 text-lg leading-relaxed">
        Finding the right shoe size is crucial for comfort and support. Our size guide provides a comprehensive chart that converts sizes from US to EU and PK measurements. Use this guide to help determine your ideal shoe size.
      </p>

      <div className={montserrat.className}>
        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4 border-b-2 border-gray-300 pb-2 text-center">Size Chart</h2>
      </div>
      <table className="min-w-full border-collapse border border-gray-200 mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-gray-700">US Size</th>
            <th className="border border-gray-300 px-4 py-2 text-gray-700">EU Size</th>
            <th className="border border-gray-300 px-4 py-2 text-gray-700">PK Size</th>
          </tr>
        </thead>
        <tbody>
          {[
            { us: 6, eu: 36, pk: 38 },
            { us: 7, eu: 37, pk: 39 },
            { us: 8, eu: 38, pk: 40 },
            { us: 9, eu: 39, pk: 41 },
            { us: 10, eu: 40, pk: 42 },
            { us: 11, eu: 41, pk: 43 },
            { us: 12, eu: 42, pk: 44 },
          ].map((size) => (
            <tr key={size.us} className="hover:bg-gray-50 transition duration-200">
              <td className="border border-gray-300 px-4 py-2 text-center text-gray-800">{size.us}</td>
              <td className="border border-gray-300 px-4 py-2 text-center text-gray-800">{size.eu}</td>
              <td className="border border-gray-300 px-4 py-2 text-center text-gray-800">{size.pk}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-4 text-gray-600 text-lg leading-relaxed">
        If you are in between sizes, we recommend choosing the larger size for a better fit. For further assistance, please contact our customer support.
      </p>
    </div>
  );
};

export default SizeGuide;
