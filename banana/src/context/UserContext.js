import React, { useState, useEffect, createContext } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('userData'))) {
      setUserName(JSON.parse(localStorage.getItem('userData')).name);
    }
  }, []);

  return (
    <UserContext.Provider value={[userName, setUserName]}>
      {props.children}
    </UserContext.Provider>
  );
};
