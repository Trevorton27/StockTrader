const { json } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../database/db');
const portfolioData = require('../dataRoutes/portfolioDataRoute');

router.get('/wallet/:user_id', async (req, res) => {
  try {
    const wallet = 100000;
    let holdingsAmount = 0;
    const { user_id } = req.params;

    const updateWallet = portfolioDataRoute.updateWallet(
      wallet,
      holdingsAmount,
      user_id
    );
    json.res(updateWallet);
  } catch (err) {
    console.error(
      'error from server- get wallet and holdings amount',
      err.message
    );
    res.status(500).json({
      errorMessage: 'Something went wrong on the server. Please try again.'
    });
  }
});

module.exports = router;
