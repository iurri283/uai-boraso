import React, { createContext, useState } from 'react';

export const CaronasContext = createContext();

export const CaronasProvider = ({ children }) => {
  const [minhasCaronas, setMinhasCaronas] = useState([]);

  return (
    <CaronasContext.Provider value={{ minhasCaronas, setMinhasCaronas }}>
      {children}
    </CaronasContext.Provider>
  );
};
