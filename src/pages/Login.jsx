import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

const Login = () => {
  const { t } = useLanguage();
  const { loginWithGoogle, currentUser } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (currentUser) {
      navigate('/marketplace');
    }
  }, [currentUser, navigate]);

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center">
            <div className="flex justify-center">
              <Logo className="w-12 h-12" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              {t('auth.loginTitle')}
            </h2>
          </div>
          
          <div className="mt-8 space-y-6">
            <button
              onClick={handleGoogleLogin}
              className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bringit-500 transition-colors"
            >
              <svg className="h-5 w-5 mr-2" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M12.0003 20.45c-4.6667 0-8.45-3.7833-8.45-8.45s3.7833-8.45 8.45-8.45c2.2833 0 4.35 0.8333 5.9667 2.2167l-3.2167 3.2167c-0.6833-0.6667-1.7333-1.1833-2.75-1.1833-2.3667 0-4.2833 1.9667-4.2833 4.4s1.9167 4.4 4.2833 4.4c2.15 0 3.5667-1.1833 4.0167-2.8167h-4.0167v-3.8h8.1c0.1167 0.6333 0.1833 1.3 0.1833 2.0167 0 4.9-3.5167 8.45-8.25 8.45z" fill="#4285F4" />
                <path d="M20.1002 11.5833c0.1167 0.6333 0.1833 1.3 0.1833 2.0167 0 4.9-3.5167 8.45-8.25 8.45-4.6667 0-8.45-3.7833-8.45-8.45s3.7833-8.45 8.45-8.45c2.2833 0 4.35 0.8333 5.9667 2.2167l-3.2167 3.2167c-0.6833-0.6667-1.7333-1.1833-2.75-1.1833-2.3667 0-4.2833 1.9667-4.2833 4.4s1.9167 4.4 4.2833 4.4c2.15 0 3.5667-1.1833 4.0167-2.8167h-4.0167v-3.8h8.1z" fill="transparent" /> {/* Simplified path for demonstration */}
              </svg>
              {t('auth.continueGoogle')}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">{t('auth.or')}</span>
              </div>
            </div>

            <form className="space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">{t('auth.email')}</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-bringit-500 focus:border-bringit-500 focus:z-10 sm:text-sm"
                    placeholder={t('auth.email')}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">{t('auth.password')}</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-bringit-500 focus:border-bringit-500 focus:z-10 sm:text-sm"
                    placeholder={t('auth.password')}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-bringit-600 hover:bg-bringit-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bringit-500"
                >
                  {t('auth.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
