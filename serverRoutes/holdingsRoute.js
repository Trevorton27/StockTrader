const express = require('express');
const router = express.Router();
const holdingsData = require('../dataRoutes/holdingsDataRoute');

router.get('/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params;
    const holdings = holdingsData.getUserHoldings(user_id);
    res.json(holdings);
  } catch (err) {
    console.error('error from server- get all holdings', err.message);
    res.status(500).json({
      errorMessage: 'Something went wrong on the server. Please try again.'
    });
  }
});

router.post('/buy', async (req, res) => {
  const { user_id, holding, shares } = req.body;
  const { companyName, symbol, latestPrice, changePercent } = holding;

  try {
    const stockBought = holdingsData.buyStock(
      user_id,
      shares,
      companyName,
      symbol,
      latestPrice,
      changePercent
    );
    res.json(stockBought);
  } catch (err) {
    console.error('error from server- create new holding', err.message);
    res.status(500).json({
      errorMessage: 'Something went wrong on the server. Please try again.'
    });
  }
});

router.post('/sell', async (req, res) => {
  const { user_id, holding, shares } = req.body;
  const { symbol, latestPrice } = holding;

  try {
    const stockSold = holdingsData.sellStock(
      user_id,
      holding,
      shares,
      symbol,
      latestPrice
    );
    res.json(stockSold);
  } catch (err) {
    console.error('error from server- create new holding', err.message);
    res.status(500).json({
      errorMessage: 'Something went wrong on the server. Please try again.'
    });
  }
});

module.exports = router;
