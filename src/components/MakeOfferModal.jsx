import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';

const MakeOfferModal = ({ isOpen, onClose, request }) => {
  const { makeOffer } = useAppContext();
  const { t } = useLanguage();
  const [offerPrice, setOfferPrice] = useState(request?.reward || '');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    makeOffer(request.id, { price: offerPrice, message });
    alert(t('makeOffer.success'));
    onClose();
    setMessage('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden pointer-events-auto">
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900">{t('makeOffer.title')}</h3>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="px-6 py-3 bg-bringit-50 border-b border-bringit-100">
                <p className="text-sm text-bringit-800 font-medium">
                  {t('createRequest.productName')}: {request?.title}
                </p>
                <p className="text-xs text-bringit-600">
                  {t('marketplace.reward')}: ${request?.reward}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('makeOffer.yourOffer')}</label>
                  <input
                    type="number"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bringit-500 focus:border-bringit-500 outline-none transition-all"
                    placeholder="0.00"
                    value={offerPrice}
                    onChange={e => setOfferPrice(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('makeOffer.message')}</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bringit-500 focus:border-bringit-500 outline-none transition-all"
                    rows="3"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-bringit-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-bringit-700 transition-colors shadow-lg shadow-bringit-200/50 mt-2"
                >
                  {t('makeOffer.submit')}
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MakeOfferModal;
