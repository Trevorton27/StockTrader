import React, { useState, useEffect, useRef, useCallback } from 'react';
import Alert from 'react-bootstrap/Alert';
import { searchForHolding } from '../http-helpers/tradeUtilities';

const AddHolding = (props) => {
  const [symbol, setSymbol] = useState('');
  const [companyName, setCompanyName] = useState(null);
  const [isCanSearch, setCanSearch] = useState(false);
  const timeoutRef = useRef(null);
  const [isShowAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (symbol === '') {
      setShowAlert(false);
      setCompanyName(null);
    }
  }, [symbol]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSearchForHolding(symbol);
    setSymbol('');
  };

  const onSearchSymbol = (e) => {
    setCanSearch(false);
    setSymbol(e.target.value);
  };

  const performApiCall = useCallback(async () => {
    try {
      const response = await searchForHolding(symbol);
      if (response === 'error') {
        setShowAlert(true);
      } else if (response) {
        setShowAlert(false);
        setCompanyName(response.companyName);
      }
    } catch (err) {
      console.error(err.message);
    }
  }, [symbol]);

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    if (isCanSearch && symbol) performApiCall();

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      setCanSearch(true);
    }, 2000);
  }, [isCanSearch, performApiCall, symbol]);

  return (
    <>
      <form
        className='form-inline justify-content-center mt-3 selected-holding'
        onSubmit={handleSubmit}
      >
        <input
          type='symbol'
          value={symbol}
          autoFocus
          onChange={(e) => onSearchSymbol(e)}
          className='form-control col-sm-5'
          placeholder='Enter stock symbol'
        />
        <button
          type='submit'
          className='btn btn-primary col-sm-2'
          style={{ backgroundColor: '#343a40', border: 'none' }}
          disabled={!companyName}
        >
          Submit
        </button>
        <h6
          className='w-100 text-center text-success'
          style={{
            marginTop: '10px',
            display: symbol === '' ? 'none' : 'block'
          }}
        >
          {!companyName
            ? ''
            : `Did you mean ${companyName}? Please press submit if this is the correct
            company.`}
        </h6>
      </form>
      {isShowAlert && (
        <Alert
          className='w-50 text-center m-auto'
          variant='danger'
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <strong className='text-uppercase'>{symbol}</strong> is not a valid
          symbol. Please try modifying your search.
        </Alert>
      )}
    </>
  );
};

export default AddHolding;
