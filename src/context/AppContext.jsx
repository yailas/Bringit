import React, { createContext, useContext, useState } from 'react';
import { requests as initialRequests, trips as initialTrips } from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [requests, setRequests] = useState(initialRequests);
  const [trips, setTrips] = useState(initialTrips);

  const addRequest = (newRequest) => {
    setRequests(prev => [{ ...newRequest, id: Date.now(), status: 'Open' }, ...prev]);
  };

  const addTrip = (newTrip) => {
    setTrips(prev => [{ ...newTrip, id: Date.now() }, ...prev]);
  };

  const makeOffer = (requestId, offerDetails) => {
    // In a real app, this would create an offer record.
    // Here we'll just log it or update request status if needed.
    console.log("Offer made on request", requestId, offerDetails);
    alert(`Offer sent for request #${requestId}!`);
  };

  return (
    <AppContext.Provider value={{ requests, trips, addRequest, addTrip, makeOffer }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
