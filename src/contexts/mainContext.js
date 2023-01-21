import { useState } from 'react';
import { createContext } from 'react';

export const MainContext = createContext({});

export const MainProvider = ({ children }) => {
  const [coinsState, setCoinsState] = useState(0);
  const [progress, setProgress] = useState(0);

  return (
    <MainContext.Provider value={{ coinsState, setCoinsState, progress, setProgress }}>
      {children}
    </MainContext.Provider>
  );
};
