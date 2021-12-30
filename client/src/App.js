import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <Router>
      <UserContextProvider>
        <div className='app' id='app-container'>
          <main id='main-container'>
            <Route path='/' exact component={Home} />
          </main>
        </div>
      </UserContextProvider>
    </Router>
  );
}

export default App;
