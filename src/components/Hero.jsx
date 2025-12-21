import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative bg-bringit-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-bringit-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span className="block xl:inline">{t('hero.title')}</span>{' '}
                <span className="block text-bringit-600 xl:inline">{t('hero.subtitle')}</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                {t('hero.description')}
              </motion.p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link to="/marketplace" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-bringit-600 hover:bg-bringit-700 md:py-4 md:text-lg shadow-lg shadow-bringit-200/50">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    {t('hero.startShopping')}
                  </Link>
                </motion.div>
                <motion.div
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link to="/marketplace" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-bringit-700 bg-bringit-100 hover:bg-bringit-200 md:py-4 md:text-lg">
                    <Plane className="w-5 h-5 mr-2" />
                    {t('hero.deliverItems')}
                  </Link>
                </motion.div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1953&q=80"
          alt="Plane flying over clouds"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bringit-50 to-transparent lg:via-bringit-50/20"></div>
      </div>
    </div>
  );
};

export default Hero;
