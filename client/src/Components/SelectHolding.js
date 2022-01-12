import React, { useState, useEffect, useCallback } from 'react';
import BuyStockModal from './Modals/BuyStockModal';
import SellStockModal from './Modals/SellStockModal';
import { getHoldings } from '../utilities/tradingUtilities';
import StockInfoChart from './Charts/StockInfoChart';

const SelectedHolding = ({
  selectedHolding,
  buyShares,
  sellShares,
  updateShares
}) => {
  const [shares, setShares] = useState(0);
  const [holdings, setHoldings] = useState([]);
  const [holdingStyleColor, setHoldingStyleColor] = useState('');
  const [positiveSign, setPositiveSign] = useState(false);

  const {
    companyName,
    symbol,
    latestPrice,
    previousClose,
    changePercent,
    change
  } = selectedHolding;

  const getHoldingsData = () => {
    getHoldings()
      .then((holdingsData) => setHoldings(holdingsData))
      .catch((err) => console.error('error get holdings', err));
  };

  const isHoldingNegativeOrPositive = useCallback(() => {
    if (String(changePercent).charAt(0) === '-') {
      setHoldingStyleColor('red');
      setPositiveSign(false);
    } else {
      setHoldingStyleColor('green');
      setPositiveSign('+');
    }
  }, [changePercent]);

  useEffect(() => {
    isHoldingNegativeOrPositive();
    getHoldingsData();
  }, [isHoldingNegativeOrPositive]);

  useEffect(() => {
    isHoldingNegativeOrPositive();
  }, [selectedHolding, isHoldingNegativeOrPositive]);

  const handleBuyShares = (shares) => {
    updateShares(shares);
    buyShares(selectedHolding, shares);
    setShares((prevState) => prevState + parseInt(shares));
  };

  const handleSellShares = (shares) => {
    sellShares(selectedHolding, shares);
    updateShares(shares);
    setShares((prevState) => prevState - parseInt(shares));
  };

  const compareSelectedHoldingToExisting = useCallback(() => {
    if (selectedHolding) {
      const holdingExist = holdings.find(
        (holding) => holding.symbol === selectedHolding.symbol
      );
      if (holdingExist) {
        setShares(holdingExist.shares);
      }
    }
  }, [holdings, selectedHolding]);

  useEffect(() => {
    compareSelectedHoldingToExisting();
  }, [holdings, compareSelectedHoldingToExisting]);

  return (
    <>
      <div className='selected-holding card mt-4'>
        <div className='card-head'>
          <h2>
            {' '}
            {companyName}: {symbol}
          </h2>
          <div className='card-buttons'>
            <BuyStockModal
              handleBuyShares={handleBuyShares}
              selectedHolding={selectedHolding}
              shares={shares}
            />
            <SellStockModal
              handleSellShares={handleSellShares}
              selectedHolding={selectedHolding}
              shares={shares}
            />
          </div>
        </div>
        <hr />
        <div className='card-body'>
          <div className='price'>
            <strong>Current Price</strong>
            <p className={`mb-0 ${holdingStyleColor}`}>
              ${latestPrice.toFixed(2)}
            </p>
            <small className={holdingStyleColor}>
              Previous Closed: ${previousClose.toFixed(2)}{' '}
            </small>
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
      <StockInfoChart symbol={symbol} />
    </>
  );
};

export default SelectedHolding;
