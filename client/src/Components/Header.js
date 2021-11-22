import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { useContext } from 'react';
import AuthContext from '../store/auth-context';
import UserContext from '../store/user-context';
import { Link } from 'react-router-dom';
function Header() {
  const authCtx = useContext(AuthContext);
  const userCtx = useContext(UserContext);

  const isLoggedIn = authCtx.isLoggedIn;

  function logoutHandler() {
    authCtx.logout();
    userCtx.logout();
  }

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' sticky='top'>
      <Navbar.Brand href='#home'></Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav>
          <Link to='/'>Home</Link>
          {isLoggedIn && <Link to='/trade'>Trade</Link>}
          {isLoggedIn && <Link to='/portfolio'>Portfolio</Link>}
          {isLoggedIn && (
            <Button variant='dark' onClick={logoutHandler}>
              Logout
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
