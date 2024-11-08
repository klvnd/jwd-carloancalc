'use client'

import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-gray-800 text-white flex items-center p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center">
            <img src="ASSETS/IMG/logo.png" alt="Logo" className="h-8 w-30 mr-4" />
            <div className="text-center font-bold">
              <h1 className="text-xl">CarLoanCalc</h1>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40" onClick={toggleMenu}></div>
      )}

      <div className={`fixed top-0 left-0 bg-gray-800 text-white w-3/4 h-full ${isOpen ? 'block' : 'hidden'} z-50`}>
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <button className="absolute top-4 left-4 text-white" onClick={toggleMenu}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <a href="#home" className="text-xl" onClick={toggleMenu}>Home</a>
          <a href="#about" className="text-xl" onClick={toggleMenu}>About</a>
          <a href="#contact" className="text-xl" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </>
  );
}
