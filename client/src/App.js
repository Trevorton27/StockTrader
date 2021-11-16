import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api').then((data) => {
      console.log('data.message ', data.message);
      setData(data.message);
    });
  }, []);

  return (
    <div className='App'>
      <p>HI. I'm a react app that works.</p>
    </div>
  );
}

export default App;
