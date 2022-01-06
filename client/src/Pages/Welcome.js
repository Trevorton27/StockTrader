import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GiReceiveMoney } from 'react-icons/gi';
import { AiOutlineDatabase } from 'react-icons/ai';

const Welcome = () => {
  const userName = useContext(UserContext);

  return (
    <div id='home'>
      <div className='home-content m-0 text-justify w-100'>
        <h1 className='text-center'>
          Hi {userName}, below are some pointers on how to use this app.
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
                    100,000 dollars. (It's not real money, unfortunately.)
                  </Card.Text>
                  <Link to='/trade'>
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
                    Data
                  </Card.Title>
                  <Card.Text>
                    View your personal data, current holdings and statistics.
                    With this information you can make informed decisions on
                    what stocks to buy and sell.
                  </Card.Text>
                  <Link to='/portfolio'>
                    <Button variant='primary' size='lg'>
                      Personal Information
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

export default Welcome;
