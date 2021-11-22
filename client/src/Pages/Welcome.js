import React, { useContext } from 'react';
import UserContext from '../store/user-context';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Welcome() {
  const userCtx = useContext(UserContext);

  return (
    <Container>
      <Container className='App welcome-container'>
        <h1>Welcome {userCtx.userName} to Stock Trader</h1>
        <p>
          {' '}
          Now that you have registered and logged in, you can begin trading. The
          first step is head to the "Trade" page. There you can search for a
          stock(s) you'd like to purchase. You will be given a digital wallet
          with a balance of $100,000USD. So you'll have plenty of room to play
          around. Pretty nice, eh? So go ahead and click on the "Trade" link
          above and get started. Or you can click the button below, too.
        </p>
        <Button>
          <Link className='trade-button' to='/trade/'>
            Start Trading
          </Link>
        </Button>
      </Container>
    </Container>
  );
}

export default Welcome;
