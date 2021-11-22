import axios from 'axios';
import React, { useState, useRef, useContext } from 'react';
import { Container } from 'react-bootstrap';
import LogInForm from '../Components/LogInForm';
import SignUpForm from '../Components/SignUpForm';
import AuthContext from '../store/auth-context';
import UserContext from '../store/user-context';

function Home() {
  const [isRegistered, setIsRegistered] = useState(true);
  const [successfulReg, setSuccessfulReg] = useState(false);
  const userNameInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  const userCtx = useContext(UserContext);

  function toggleIsRegistered(event) {
    event.preventDefault();
    setIsRegistered((prevState) => !prevState);
    if (isRegistered) {
      setSuccessfulReg(false);
    }
  }

  const formSwitch = () => {
    if (isRegistered) {
      return (
        <LogInForm
          isRegistered={toggleIsRegistered}
          handleLogin={handleLogin}
          userNameInputRef={userNameInputRef}
          passwordInputRef={passwordInputRef}
        />
      );
    } else {
      return (
        <SignUpForm
          isRegistered={toggleIsRegistered}
          handleSignUp={handleSignUp}
          userNameInputRef={userNameInputRef}
          passwordInputRef={passwordInputRef}
        />
      );
    }
  };

  function handleLogin(event) {
    event.preventDefault();

    const enteredUserName = userNameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (enteredUserName && enteredPassword) {
      axios
        .post('/api/login', {
          username: enteredUserName,
          password: enteredPassword
        })
        .then((res) => {
          //expirationTime is current time plus token expiresIn converted to a new date object
          const expirationTime = new Date(
            new Date().getTime() + +res.data.expiresIn
          );
          authCtx.login(
            res.data.accessToken,
            expirationTime.toISOString(),
            res.data.result[0].id
          );
          userCtx.login(
            res.data.result[0].wallet_balance,
            res.data.result[0].username
          );
        })
        .catch((error) => {
          alert('Please check your username/password.');
        });
    } else {
      alert('You must provide a username and password.');
    }
  }

  function handleSignUp(event) {
    event.preventDefault();
    const enteredUserName = userNameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    axios
      .post('/api/signup', {
        username: enteredUserName,
        password: enteredPassword
      })
      .then((res) => {
        if (!res.data.detail) {
          setIsRegistered((prevState) => !prevState);
          setSuccessfulReg((prevState) => !prevState);
        } else {
          const errorMessage = res.data.detail;
          alert(errorMessage);
        }
      });
  }

  return (
    <Container>
      <Container className='App welcome-container'>
        <h1>Welcome Stock Trader</h1>
        <p></p>
      </Container>
      {successfulReg && (
        <p className='text-center'>Registration Successful - Login Below</p>
      )}
      {formSwitch()}
    </Container>
  );
}

export default Home;
