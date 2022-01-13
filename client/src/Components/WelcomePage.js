import React, { useContext } from 'react';
import { UserNameContext } from '../context/UserNameContext';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GiReceiveMoney } from 'react-icons/gi';
import { AiOutlineDatabase } from 'react-icons/ai';

const WelcomePage = () => {
  const [userName, setUserName] = useContext(UserNameContext);

  return (
    <div id='home'>
      <div className='home-content m-0 text-justify w-100'>
        <h1 className='text-center'>
<<<<<<< HEAD
          Hi {userName}, and welcome to Stock Trader.
=======
          Hello {userName}, and welcome to Stock Trader.
>>>>>>> f096357124aa6d6c4928a9b7da037c79381713a7
        </h1>
        <Container>
          <Row>
            <Col lg={6}>
              <Card bg='transparent' className='home-card mt-3'>
                <GiReceiveMoney size='7em' className='col-logo' />
                <Card.Body className='d-block'>
                  <Card.Title as='h1' className='text-center'>
                    Trade
                  </Card.Title>
                  <Card.Text>
                    Buy stocks by searching for a specific symbol, or view our
                    recommended stocks. You are initially given a total of
<<<<<<< HEAD
                    100,000 dollars.
=======
                    100,000 dollars. No, it's not real money unfortunately :-)
>>>>>>> f096357124aa6d6c4928a9b7da037c79381713a7
                  </Card.Text>
                  <Link to='/main'>
                    <Button variant='primary' size='lg'>
                      Start Trading
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Card bg='transparent' className='home-card mt-3'>
                <AiOutlineDatabase size='7em' className='col-logo' />
                <Card.Body className='d-block'>
                  <Card.Title as='h1' className='text-center'>
                    Portfolio
                  </Card.Title>
                  <Card.Text>
                    View your personal data, current holdings and statistics.
                    With this information you can make informed decisions on
                    what stocks to buy and sell.
                  </Card.Text>
<<<<<<< HEAD
                  <Link to='/portfolio' className='text-center'>
=======
                  <Link to='/portfolio'>
>>>>>>> f096357124aa6d6c4928a9b7da037c79381713a7
                    <Button variant='primary' size='lg'>
                      View Portfolio
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WelcomePage;
