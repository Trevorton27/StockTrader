import React, { useState, useEffect } from 'react';
import qa from 'qs';
import {
  searchForHolding,
  getHoldings,
  buyStock,
  sellStock
} from '../utilities/tradingUtilities';
import { withRouter } from 'react-router-dom';
import SelectedHolding from '../Components/SelectHolding';
import TradeHeader from '../Components/Headers/TradeHeader';
import ShowAlert from '../Components/ShowAlert';
import AddHolding from '../Components/AddHolding';

const Trade = (props) => {
  const [holdings, setHoldings] = useState([]);
  const [selectedHolding, setSelectedHolding] = useState(null);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [sharesPurchased, setSharesPurchased] = useState(0);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const fetchHoldingsData = () => {
      getHoldings()
        .then((holdingsData) => setHoldings(holdingsData))
        .catch((err) => console.error('error get holdings', err));
    };

    const renderSearchedHoldingFromPortfolio = () => {
      const queryStrings = qa.parse(props.location.search, {
        ignoreQueryPrefix: true
      });
      if (queryStrings.symbol) {
        handleSearchForHolding(queryStrings.symbol);
      }
    };

    renderSearchedHoldingFromPortfolio();
    fetchHoldingsData();
  }, [props.location.search]);

  const updateShares = (shares) => {
    setSharesPurchased(shares);
  };

  const toggleAlertState = () => {
    setIsShowAlert((prevState) => !prevState);
  };

  const handleSearchForHolding = (symbol) => {
    searchForHolding(symbol)
      .then((selectedHolding) => setSelectedHolding(selectedHolding))
      .catch((err) => console.error('error get holdings', err));
  };

  const sellShares = (holding, shares) => {
    sellStock(holding, shares);
    setAlertMessage('Stock successfully sold');
    toggleAlertState();
  };

  const buyShares = async (holding, shares) => {
    // send an http request to buy stocks
    await buyStock(holding, shares);
    // set alert messsgae to purchased
    setAlertMessage('Stock successfully purchased');
    // toggle alert state
    toggleAlertState();
  };
  return (
    <section className='trade-container'>
      <TradeHeader />
      <div className='container'>
        {isShowAlert && (
          <ShowAlert
            toggleAlertState={toggleAlertState}
            isShowAlert={isShowAlert}
            selectedHolding={selectedHolding}
            sharesPurchased={sharesPurchased}
            alertMessage={alertMessage}
          />
        )}
        <AddHolding handleSearchForHolding={handleSearchForHolding} />
        {selectedHolding ? (
          <SelectedHolding
            selectedHolding={selectedHolding}
            buyShares={buyShares}
            sellShares={sellShares}
            updateShares={updateShares}
          />
        ) : null}
      </div>
    </section>
  );
};

export default withRouter(Trade);
