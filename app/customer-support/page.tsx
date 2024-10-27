// pages/customer-support.tsx
import React from 'react';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '600',
});

const CustomerSupport: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 mb-9">
      <h1 className={`${montserrat.className} text-4xl font-bold text-gray-800 mb-6 text-center`}>Customer Support</h1>
      <p className="mb-6 text-gray-600 text-lg leading-relaxed">
        We’re here to help! If you have any questions or need assistance, please reach out to our customer support team. We aim to respond to all inquiries within 24 hours.
      </p>

      <h2 className={`${montserrat.className} text-3xl font-semibold text-gray-800 mt-6 mb-4 border-b-2 border-gray-300 pb-2`}>Contact Us</h2>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition duration-200"
        >
          Send Message
        </button>
      </form>

      <h2 className={`${montserrat.className} text-3xl font-semibold text-gray-800 mt-6 mb-4 border-b-2 border-gray-300 pb-2`}>Frequently Asked Questions</h2>
      <ul className="mt-4 text-gray-600">
        <li className="mb-4">
          <strong>What is your return policy?</strong> <br />
          You can return any unworn items within 30 days for a full refund.
        </li>
        <li className="mb-4">
          <strong>How can I track my order?</strong> <br />
          You will receive an email with tracking information once your order is shipped.
        </li>
        <li className="mb-4">
          <strong>Do you offer international shipping?</strong> <br />
          Yes, we ship to many countries worldwide. Please check our shipping policy for details.
        </li>
      </ul>
    </div>
  );
};

export default CustomerSupport;
