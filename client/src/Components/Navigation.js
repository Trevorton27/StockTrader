import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { UserNameContext } from '../context/UserNameContext';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineStock } from 'react-icons/ai';

const Navigation = (props) => {
  const [userName, setUserName] = useContext(UserNameContext);

  const logOut = () => {
<<<<<<< HEAD
    localStorage.removeItem('userData');
=======
    localStorage.removeItem('data');
>>>>>>> f096357124aa6d6c4928a9b7da037c79381713a7
    props.history.push('/');
  };

  return (
<<<<<<< HEAD
    <Navbar bg='dark' variant='dark' id='navbar' expand='sm' sticky='top'>
=======
    <Navbar bg='dark' variant='dark' id='navbar' expand='sm'>
>>>>>>> f096357124aa6d6c4928a9b7da037c79381713a7
      <Navbar.Brand href='/'>
        Stock Trader <AiOutlineStock />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto d-flex justify-content-center nav-links'>
          <Nav.Link onClick={() => props.history.push('/main')}>Trade</Nav.Link>
          <Nav.Link onClick={() => props.history.push('/portfolio')}>
            Portfolio
          </Nav.Link>
        </Nav>
        {JSON.parse(localStorage.getItem('userData')) ? (
          <Nav>
            <Nav.Link className='d-flex'>
<<<<<<< HEAD
              <CgProfile size='1.5em' className='mr-1' /> Welcome {userName}
=======
              <CgProfile size='1.5em' className='mr-1' /> {userName}
>>>>>>> f096357124aa6d6c4928a9b7da037c79381713a7
            </Nav.Link>
            <Nav.Link onClick={logOut}>Logout</Nav.Link>
          </Nav>
        ) : null}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navigation);
