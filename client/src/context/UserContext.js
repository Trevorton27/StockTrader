import React, { useState, useEffect, createContext } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('userData'))) {
      setUserName(JSON.parse(sessionStorage.getItem('userData')).name);
    }
  }, []);

  return (
    <UserContext.Provider value={[userName, setUserName]}>
      {props.children}
    </UserContext.Provider>
  );
};
