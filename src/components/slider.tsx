"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
    { src: '/assets/img/banner_1.jpg', text: 'Welcome to CalLoanCalc' },
    { src: '/assets/img/banner_2.jpg', text: 'Calculate Car Purchase Installments' },
    { src: '/assets/img/banner_3.jpg', text: 'Free and easy to use.' },
];

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => setCurrentIndex((currentIndex + 1) % images.length);
    const goToPreviousSlide = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    const goToSlide = (index: number) => setCurrentIndex(index);

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative w-full max-w-4xl h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg">
            
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-64 sm:h-80 md:h-96 relative rounded-lg overflow-hidden">
                        <Image
                            src={image.src}
                            alt={`Slide ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute bottom-4 left-4 max-w-xs">
                            <h2 className="text-white text-sm sm:text-lg md:text-xl font-bold font-mono">{image.text}</h2>
                        </div>
                    </div>
                ))}
            </div>
            
            <button 
                onClick={goToPreviousSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full focus:outline-none"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button 
                onClick={goToNextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full focus:outline-none"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                    />
                ))}
            </div>
        </div>        
    );
}
