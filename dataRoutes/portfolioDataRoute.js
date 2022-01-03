const express = require('express');
const router = express.Router();
const pool = require('../database/db');

updateWallet = async (wallet, holdingsAmount, user_id) => {
  const response = await pool.query(
    'SELECT * FROM holdings WHERE user_id = ($1)',
    [user_id]
  );
  for (const element of response.rows) {
    holdingsAmount += element.shares * element.price;
  }
  return { wallet: wallet - holdingsAmount, holdingsAmount };
};
