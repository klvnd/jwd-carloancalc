import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} CarLoanCalc : by KLVND. All rights reserved.</p>
            </div>
            
            <div className="flex justify-center mt-4 space-x-4">
                <a href="https://github.com/klvnd" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-700 p-2 rounded">
                    <img src="/assets/icons/github-icon.svg" alt="GitHub Icon" className="h-8 w-8" />
                </a>
                <a href="https://www.linkedin.com/in/klvnd/" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-700 p-2 rounded">
                    <img src="/assets/icons/linkedin-icon.svg" alt="LinkedIn Icon" className="h-8 w-8" />
                </a>
                <a href="https://www.instagram.com/klvnnd/" target="_blank" rel="noopener noreferrer" className="hover:bg-gray-700 p-2 rounded">
                    <img src="/assets/icons/instagram-icon.svg" alt="Instagram Icon" className="h-8 w-8" />
                </a>
            </div>
        </footer>
    );
}
