import React from 'react';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Trade from './Pages/Trade';
import Portfolio from './Pages/Portfolio';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import AuthorizedRoute from './AuthorizedRoute/AuthorizedRoute';

function App() {
  return (
    <Router>
      <UserContextProvider>
        <div className='app' id='app-container'>
          <NavBar />
          <main id='main-container'>
            <Route path='/' exact component={Home} />
            <AuthorizedRoute path='/trade' component={Trade} />
            <AuthorizedRoute path='/portfolio' component={Portfolio} />
          </main>
        </div>
      </UserContextProvider>
    </Router>
  );
}

export default App;
