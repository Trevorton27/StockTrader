import React from 'react';
import Register from '../components/Register';
import Login from '../components/Login';
import WelcomePage from '../components/WelcomePage';

const HomeScreen = () => {
  if (!localStorage.getItem('userData')) {
    return (
      <div id='home'>
        <h1 className='text-center display-4 text-light'>
          Welcome to Stock Trader
        </h1>
        <div className='home-container'>
          <div className='home-content mt-5 h2 font-weight-light'>
            <h1 className='display-4 mb-5 home-header'>
              The best choices are based on experience.
            </h1>
            <p>
              Experience the thrill of the stock market by utilizing fake money
              to purchase real stocks and buy or sell shares.
            </p>
            <p>Before you start, you must first register.</p>
            <p>
              Once you have registered, you will be automatically logged in.
            </p>
            <div className='home-buttons-wrapper'>
              <Register />
              <Login />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <WelcomePage />;
  }
};

export default HomeScreen;
