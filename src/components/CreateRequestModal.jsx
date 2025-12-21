import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const CreateRequestModal = ({ isOpen, onClose }) => {
  const { addRequest } = useAppContext();
  const [formData, setFormData] = useState({
    title: '',
    from: '',
    to: '',
    price: '',
    reward: '',
    date: '',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000' // Default placeholder
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addRequest(formData);
    onClose();
    setFormData({
      title: '',
      from: '',
      to: '',
      price: '',
      reward: '',
      date: '',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000'
    });
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
                <h3 className="text-lg font-bold text-gray-900">Create New Request</h3>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bringit-500 focus:border-bringit-500 outline-none transition-all"
                    placeholder="e.g., iPhone 15 Pro"
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Buy From</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bringit-500 focus:border-bringit-500 outline-none transition-all"
                      placeholder="e.g., USA"
                      value={formData.from}
                      onChange={e => setFormData({...formData, from: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Deliver To</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bringit-500 focus:border-bringit-500 outline-none transition-all"
                      placeholder="e.g., Madrid"
                      value={formData.to}
                      onChange={e => setFormData({...formData, to: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Item Price ($)</label>
                    <input
                      type="number"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bringit-500 focus:border-bringit-500 outline-none transition-all"
                      placeholder="0.00"
                      value={formData.price}
                      onChange={e => setFormData({...formData, price: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Traveler Reward ($)</label>
                    <input
                      type="number"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bringit-500 focus:border-bringit-500 outline-none transition-all"
                      placeholder="0.00"
                      value={formData.reward}
                      onChange={e => setFormData({...formData, reward: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Deliver Before</label>
                  <input
                    type="date"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bringit-500 focus:border-bringit-500 outline-none transition-all"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-bringit-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-bringit-700 transition-colors shadow-lg shadow-bringit-200/50 mt-2"
                >
                  Create Request
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CreateRequestModal;
