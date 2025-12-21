import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RequestCard from '../components/RequestCard';
import CreateRequestModal from '../components/CreateRequestModal';
import CreateTripModal from '../components/CreateTripModal';
import { Search, Filter, Plus, Plane } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Marketplace = () => {
  const { requests } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isTripModalOpen, setIsTripModalOpen] = useState(false);

  const filteredRequests = requests.filter(req => 
    req.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    req.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
    req.to.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
             <div className="flex gap-2">
                <button 
                  onClick={() => setIsRequestModalOpen(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bringit-600 hover:bg-bringit-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bringit-500"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Request Item
                </button>
                <button 
                  onClick={() => setIsTripModalOpen(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-bringit-700 bg-bringit-100 hover:bg-bringit-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bringit-500"
                >
                  <Plane className="h-5 w-5 mr-2" />
                  Post Trip
                </button>
             </div>

            <div className="relative flex-grow sm:flex-grow-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search requests..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-bringit-500 focus:border-bringit-500 sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {filteredRequests.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredRequests.map((request) => (
              <RequestCard key={request.id} request={request} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No requests found matching your search.</p>
          </div>
        )}
      </div>

      <CreateRequestModal isOpen={isRequestModalOpen} onClose={() => setIsRequestModalOpen(false)} />
      <CreateTripModal isOpen={isTripModalOpen} onClose={() => setIsTripModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default Marketplace;
