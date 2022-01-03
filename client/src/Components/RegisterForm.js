import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const RegisterForm = (props) => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userName, setUserName] = useContext(UserNameContext);
  const [isMatch, setIsMatch] = useState(true);
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    setIsMatch(event.target.value === password);
  };

  const userContext = useContext(UserContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createNewUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/register', {
        user: user,
        email: email,
        password: password
      });

      localStorage.setItem('data', JSON.stringify(response.data));
      setUserName(response.data.name);

      props.history.push('/');
    } catch (err) {
      console.error('error in createUser', err.message);
    }
  };

  return (
    <>
      <Button size='lg' onClick={handleShow} className='btn btn-warning'>
        Register
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> Register </Modal.Title>
        </Modal.Header>
        <Form onSubmit={createNewUser}>
          <Form.Group controlId='username'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              placeholder='Username'
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='emal'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className='text-muted'>
              Your email will never be shared with any 3rd parties.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='password2'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Please confirm your password'
              onChange={handleConfirmPassword}
              className={isMatch ? '' : 'is-invalid'}
            />
            <Form.Control.Feedback type='invalid'>
              Passwords do not match
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal>
    </>
  );
};

export default withRouter(RegisterForm);
