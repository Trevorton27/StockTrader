import React from 'react';
import RegisterForm from '../Components/RegisterForm';
import LoginForm from '../Components/LogInForm';
import Welcome from './Welcome';

const Home = () => {
  if (!localStorage.getItem('userData')) {
    return (
      <div id='home'>
        <h1 className='text-center display-4 text-light'>
          Welcome to Stock Trader
        </h1>
        <div className='home-container'>
          <div className='home-content mt-5 h2 font-weight-light'>
            <p>Experience the thrill of the stock market without the risk.</p>
            <p>Before you start, please register to create an account.</p>
            <div className='home-buttons-wrapper'>
              <RegisterForm />
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Welcome />;
  }
};

export default Home;
