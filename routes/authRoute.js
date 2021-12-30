const express = require('express');
const router = express.Router();
const pool = require('../database/db');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  try {
    const { user, email, password } = req.body;
    const selectUser = await pool.query(
      'SELECT * FROM users WHERE user_email = $1',
      [email]
    );

    if (selectUser.rows.length > 0) {
      return res.status(401).json('That user already exists.');
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await pool.query(
      'INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *',
      [user, email, hashedPassword]
    );

    res.json({ id: newUser.rows[0].user_id, name: newUser.rows[0].user_name });
  } catch (error) {
    console.log('Looks like some trouble with the server: ', error.message);
    res.status(500).json({
      message:
        'Something is wrong with your server connection. Please get to a debuggin.'
    });
  }
});

router.get('/login', async (req, res) => {
  try {
    const { email, password } = req.query;

    const user = await pool.query(
      'SELECT * FROM users WHERE user_email = ($1)',
      [email]
    );

    if (user.rows.length === 0) {
      return res.status(401).json('Invalid Credentials');
    }

    if (user.rows[0].user_password !== password) {
      return res.status(401).json('Invalid Credentials');
    }

    res.json({ id: user.rows[0].user_id, name: user.rows[0].user_name });
  } catch (error) {
    console.log('Looks like some trouble with the server: ', error.message);
    res.status(500).json({
      message:
        'Something is wrong with your server connection. Please get to a debuggin.'
    });
  }
});

module.exports = router;
