import React, { useState } from 'react';
import { Plane, MapPin, Calendar, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import MakeOfferModal from './MakeOfferModal';

const RequestCard = ({ request }) => {
  const { makeOffer } = useAppContext();
  const { t } = useLanguage();
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="relative h-48">
        <img 
          src={request.image} 
          alt={request.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-bringit-700 shadow-sm">
          {t('marketplace.reward')}: ${request.reward}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{request.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{t('marketplace.price')}: ${request.price}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-bringit-500" />
            <span className="truncate">{t('marketplace.from')}: <span className="font-medium text-gray-900">{request.from}</span></span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-bringit-500" />
            <span className="truncate">{t('marketplace.to')}: <span className="font-medium text-gray-900">{request.to}</span></span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-bringit-500" />
            <span>{t('marketplace.before')}: {request.date}</span>
          </div>
        </div>

        <button 
          onClick={() => setIsOfferModalOpen(true)}
          className="mt-5 w-full bg-bringit-50 text-bringit-600 hover:bg-bringit-100 hover:text-bringit-700 font-medium py-2 px-4 rounded-lg transition-colors border border-bringit-100"
        >
          {t('marketplace.makeOffer')}
        </button>
      </div>
      <MakeOfferModal 
        isOpen={isOfferModalOpen} 
        onClose={() => setIsOfferModalOpen(false)} 
        request={request}
      />
    </motion.div>
  );
};

export default RequestCard;
