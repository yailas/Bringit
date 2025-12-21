import React from 'react';
import { Link } from 'react-router-dom';
import RequestCard from './RequestCard';
import { ArrowRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const FeaturedRequests = () => {
  const { requests } = useAppContext();
  
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Requests</h2>
          <Link to="/marketplace" className="text-bringit-600 hover:text-bringit-700 font-medium flex items-center">
            View all <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {requests.slice(0, 4).map((request) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedRequests;
