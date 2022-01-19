import React, { useEffect, useState } from 'react';
import { getHoldings } from '../http-helpers/tradeUtilities';
import { Button } from 'react-bootstrap';

function RenderRecommendations(props) {
  const [shares, setShares] = useState(0);
  const [holdings, setHoldings] = useState([]);
  const [holdingStyleColor, setHoldingStyleColor] = useState('');
  const [positiveSign, setPositiveSign] = useState(false);

  const { companyName, latestPrice, changePercent, change, symbol } =
    props.recommendedHolding;

  useEffect(() => {
    getHoldings()
      .then((holdingsData) => setHoldings(holdingsData))
      .catch((err) => console.error('error get holdings', err));

    const isHoldingNegativeOrPositive = () => {
      if (String(changePercent).charAt(0) === '-') {
        setHoldingStyleColor('red');
        setPositiveSign(false);
      } else {
        setHoldingStyleColor('green');
        setPositiveSign('+');
      }
    };

    isHoldingNegativeOrPositive();
  }, [changePercent]);

  useEffect(() => {
    const compareSelectedHoldingToExistingList = () => {
      const holdingExist = holdings.find(
        (holding) => holding.symbol === props.recommendedHolding.symbol
      );
      if (holdingExist) {
        setShares(holdingExist.shares);
      }
    };

    compareSelectedHoldingToExistingList();
  }, [holdings, props.recommendedHolding.symbol]);

  return (
    <div className='recommended-holding'>
      <div className='selected-holding card mt-3'>
        <div className='card-head'>
          <h3>
            {' '}
            {companyName}: Stock Symbol {symbol}
          </h3>
          <Button
            href='#goup'
            variant='outline-secondary'
            onClick={() => props.handleTrade(symbol)}
          >
            Trade
          </Button>{' '}
        </div>
        <hr />
        <div className='card-body'>
          <div className='price'>
            <strong>Current Price</strong>
            <p className={holdingStyleColor}>${latestPrice.toFixed(2)}</p>
          </div>
          <div className='percent'>
            <strong>Percent Change</strong>
            <p className={holdingStyleColor}>
              {positiveSign}
              {changePercent.toFixed(3)}%
            </p>
          </div>
          <div className='change'>
            <strong>Daily Gain/Loss</strong>
            <p className={holdingStyleColor}>
              {positiveSign}${change}
            </p>
          </div>
          <div className='shares-held'>
            <strong>Shares Held</strong>
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderRecommendations;
