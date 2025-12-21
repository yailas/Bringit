import React from 'react';
import Logo from './Logo';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Logo className="w-8 h-8" />
            <span className="font-bold text-xl text-bringit-900">Bring It</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">About</a>
            <a href="#" className="text-gray-400 hover:text-gray-500">Blog</a>
            <a href="#" className="text-gray-400 hover:text-gray-500">Terms</a>
            <a href="#" className="text-gray-400 hover:text-gray-500">Privacy</a>
            <a 
              href="https://www.instagram.com/bringitapp.es/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-bringit-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center md:text-left">
          <p className="text-base text-gray-400">&copy; 2024 Bring It. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
