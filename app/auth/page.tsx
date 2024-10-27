'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {  Input } from '@/components/ui/input';
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: '400',
})

const Auth: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg mb-60 md:mb-28">
    <div className={montserrat.className}><h1 className="text-3xl text-center mb-6 font-bold">{isRegister ? 'Register' : 'Login'}</h1></div>
        
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="mb-4">
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
          )}
          <div className="mb-4">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-200">
            {isRegister ? 'Register' : 'Login'}
          </Button>
        </form>

        <p className="mt-4 text-center">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-500 font-semibold ml-1"
          >
            {isRegister ? 'Login' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
