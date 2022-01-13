import React, { useState, useEffect } from 'react';
import UserInfo from '../Components/UserInformation';
import CurrentHoldings from '../Components/CurrentHoldings';
import NoHoldings from '../Components/NoHoldings';
import HeaderPortfolio from '../Components/Headers/PortfolioHeader';
import HoldingsChart from '../Components/Charts/HoldingsChart';
import { getHoldings } from '../utilities/tradingUtilities';

const Portfolio = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldingsData = () => {
      getHoldings()
        .then((holdingsData) => {
          setHoldings(holdingsData);
        })
        .catch((err) => console.error('error get holdings', err));
    };
    fetchHoldingsData();
  }, []);

  return (
    <section className='portfolio-container text-size container'>
      <HeaderPortfolio />
      <div className='portfolio-top-wrapper d-flex align-items-start'>
        <UserInfo />
        <HoldingsChart />
      </div>
      <div className='user-holdings-list container'>
        {holdings.length > 0 ? (
          holdings.map((holding) => (
            <CurrentHoldings holding={holding} key={holding.holding_id} />
          ))
        ) : (
          <NoHoldings />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
