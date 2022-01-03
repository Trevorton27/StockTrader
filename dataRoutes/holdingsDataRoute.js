const express = require('express');
const router = express.Router();
const pool = require('../database/db');

getUserHoldings = async (user_id) => {
  const response = await pool.query(
    'SELECT * FROM holdings WHERE user_id = ($1)',
    [user_id]
  );

  holdings = response.rows;

  holdings.forEach((item, index) => {
    holdings[index].created_at = holdings[index].created_at
      .toString()
      .substring(0, 24);
  });
  return holdings;
};

buyStock = async (
  user_id,
  shares,
  companyName,
  symbol,
  latestPrice,
  changePercent
) => {
  const response = await pool.query(
    'SELECT * FROM holdings WHERE symbol = ($1) AND user_id = $2',
    [symbol, user_id]
  );

  const matchingHolding = response.rows.length > 0;

  if (matchingHolding) {
    const updatedShares = parseInt(response.rows[0].shares) + parseInt(shares);

    // update holding
    const updatedHolding = await pool.query(
      'UPDATE holdings SET shares = $1, price = $2 WHERE holding_id = $3 RETURNING *',
      [updatedShares, latestPrice, response.rows[0].holding_id]
    );

    return updatedHolding.rows[0];
  } else {
    // create new holding
    const newHolding = await pool.query(
      `INSERT INTO holdings (name, symbol, shares, percent_change, price, user_id) 
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [companyName, symbol, shares, changePercent, latestPrice, user_id]
    );
    return newHolding.rows[0];
  }
};

sellStock = async (user_id, holding, shares, symbol, latestPrice) => {
  const response = await pool.query(
    'SELECT * FROM holdings WHERE symbol = ($1) AND user_id = $2',
    [symbol, user_id]
  );

  const matchingHolding = response.rows.length > 0;

  if (!matchingHolding) {
    return res
      .status(404)
      .json({ errorMessage: 'cannot find selected holding' });
  }

  const updatedShares = parseInt(response.rows[0].shares) - parseInt(shares);

  if (updatedShares === 0) {
    // delete holding row
    const deletedHolding = await pool.query(
      'DELETE FROM holdings WHERE holding_id = $1',
      [response.rows[0].holding_id]
    );
  } else {
    // update holding
    const updatedHolding = await pool.query(
      'UPDATE holdings SET shares = $1, price = $2 WHERE holding_id = $3 RETURNING *',
      [updatedShares, latestPrice, response.rows[0].holding_id]
    );
  }

  return updatedHolding.rows[0];
};

module.exports = router;
