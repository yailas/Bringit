import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, Globe, User, LogOut } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { currentUser, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <Logo className="w-8 h-8" />
              <span className="font-bold text-xl text-bringit-900 tracking-tight">Bring It</span>
            </Link>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <Link to="/marketplace" className="border-transparent text-gray-500 hover:border-bringit-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                {t('nav.marketplace')}
              </Link>
              <Link to="/how-it-works" className="border-transparent text-gray-500 hover:border-bringit-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                {t('nav.howItWorks')}
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:gap-4">
            <button 
              onClick={toggleLanguage}
              className="bg-white p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none flex items-center gap-1"
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm font-medium text-gray-600 uppercase">{language}</span>
            </button>
            
            {currentUser ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {currentUser.photoURL ? (
                    <img src={currentUser.photoURL} alt="Profile" className="h-8 w-8 rounded-full border border-gray-200" />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-bringit-100 flex items-center justify-center text-bringit-700 font-medium">
                      {currentUser.email?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-700">{currentUser.displayName || currentUser.email}</span>
                </div>
                <button 
                  onClick={logout}
                  className="text-gray-500 hover:text-gray-900 focus:outline-none"
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="text-gray-500 hover:text-gray-900 font-medium text-sm">{t('nav.login')}</Link>
                <Link to="/signup" className="bg-bringit-600 hover:bg-bringit-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  {t('nav.signup')}
                </Link>
              </>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bringit-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-white border-b border-gray-200">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/marketplace" className="bg-bringit-50 border-bringit-500 text-bringit-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              {t('nav.marketplace')}
            </Link>
            <Link to="/how-it-works" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              {t('nav.howItWorks')}
            </Link>
          </div>
          <div className="pt-4 pb-4 border-t border-gray-200">
            <div className="flex items-center px-4 justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {currentUser && currentUser.photoURL ? (
                    <img src={currentUser.photoURL} alt="Profile" className="h-10 w-10 rounded-full border border-gray-200" />
                  ) : (
                    <User className="h-10 w-10 rounded-full bg-gray-100 p-2 text-gray-500" />
                  )}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">{currentUser ? (currentUser.displayName || currentUser.email) : t('nav.guest')}</div>
                  <div className="text-sm font-medium text-gray-500">{currentUser ? currentUser.email : "guest@example.com"}</div>
                </div>
              </div>
              <button 
                onClick={toggleLanguage}
                className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none flex items-center gap-1"
              >
                <Globe className="h-5 w-5" />
                <span className="text-sm font-medium text-gray-600 uppercase">{language}</span>
              </button>
            </div>
            <div className="mt-3 space-y-1">
              {currentUser ? (
                <button 
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">{t('nav.login')}</Link>
                  <Link to="/signup" className="block px-4 py-2 text-base font-medium text-bringit-600 hover:text-bringit-800 hover:bg-gray-100">{t('nav.signup')}</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
