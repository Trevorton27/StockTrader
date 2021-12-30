import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
//import { UserContext } from '../context/UserContext';

const RegisterForm = (props) => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [userName, setUserName] = useState('');

  //const userContext = useContext(UserContext);
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
      localStorage.setItem('userData', JSON.stringify(response.data));
      setUserName(response.data.name);

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
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Please confirm your password'
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal>
        </>
      );
    } catch (error) {
      console.log('error in createNewUser method: ', error.message);
    }
  };
};

export default withRouter(RegisterForm);
