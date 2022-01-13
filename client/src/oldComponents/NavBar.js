import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineStock } from 'react-icons/ai';

const NavBar = (props) => {
  const userName = useContext(UserContext);

  const logOut = () => {
    localStorage.removeItem('userData');
    props.history.push('/');
  };

  return (
    <Navbar bg='dark' variant='dark' id='navbar' expand='sm'>
      <Navbar.Brand href='/'>
        Stock Trader <AiOutlineStock />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto d-flex justify-content-center nav-links'>
          <Nav.Link onClick={() => props.history.push('/trade')}>
            Trade
          </Nav.Link>
          <Nav.Link onClick={() => props.history.push('/portfolio')}>
            Portfolio
          </Nav.Link>
        </Nav>
        {JSON.parse(localStorage.getItem('userData')) ? (
          <Nav>
            <Nav.Link className='d-flex'>
              <CgProfile size='1.5em' className='mr-1' /> Welcome {userName}
            </Nav.Link>
            <Nav.Link onClick={logOut}>Logout</Nav.Link>
          </Nav>
        ) : null}
        <Nav.Link onClick={() => props.history.push('/instructions')}>
          <Button variant='danger' size='md'>
            About
          </Button>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );

  //   return (
  //     <Navbar bg='dark' variant='dark' id='navbar' expand='sm'>
  //       <Navbar.Brand href='/'>
  //         Fantazy <AiOutlineStock /> Stocks
  //       </Navbar.Brand>
  //       <Navbar.Toggle aria-controls='basic-navbar-nav' />
  //       <Navbar.Collapse id='basic-navbar-nav'>
  //         <Nav className='mr-auto d-flex justify-content-center nav-links'>
  //           <Link to='/main'>Trade</Link>
  //           <Link to='/portfolio'>Portfolio</Link>
  //         </Nav>
  //         {JSON.parse(sessionStorage.getItem('userData')) ? (
  //           <Nav>
  //             <Link className='d-flex'>
  //               <CgProfile size='1.5em' className='mr-1' /> {userName}
  //             </Link>
  //             <Nav.Link onClick={logOut}>Logout</Nav.Link>
  //           </Nav>
  //         ) : null}
  //         <Link to='/instructions'>
  //           <Button variant='danger' size='md'>
  //             About
  //           </Button>
  //         </Link>
  //       </Navbar.Collapse>
  //     </Navbar>
  //   );
};

export default withRouter(NavBar);
