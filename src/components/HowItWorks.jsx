import React from 'react';
import { Search, Plane, PackageCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      title: t('howItWorks.step1'),
      description: t('howItWorks.desc1'),
      icon: Search,
    },
    {
      title: t('howItWorks.step2'),
      description: t('howItWorks.desc2'),
      icon: Plane,
    },
    {
      title: t('howItWorks.step3'),
      description: t('howItWorks.desc3'),
      icon: PackageCheck,
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-bringit-600 tracking-wide uppercase">{t('howItWorks.title')}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t('howItWorks.subtitle')}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t('howItWorks.description')}
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-bringit-300 to-bringit-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-bringit-500 text-white">
                      <step.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-medium text-gray-900">{step.title}</p>
                    <p className="mt-3 text-base text-gray-500">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
