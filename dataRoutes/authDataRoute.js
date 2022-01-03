const express = require('express');
const router = express.Router();
const pool = require('../database/db');
const bcrypt = require('bcrypt');

registerUser = async (user, password, email) => {
  try {
    const selectUser = await pool.query(
      'SELECT * FROM users WHERE user_email = $1',
      [email]
    );

    if (selectUser.rows.length > 0) {
      console.log('That user already exists.');
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await pool.query(
      'INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *',
      [user, email, hashedPassword]
    );
    // console.log('newUser: ', newUser);
    console.log({
      id: newUser.rows[0].user_id,
      name: newUser.rows[0].user_name
    });
  } catch (error) {
    console.log('Looks like something is wrong: ', error.message);
  }
};

loginUser = async (email, password) => {
  try {
    const user = await pool.query(
      'SELECT * FROM users WHERE  user_email = ($1)',
      [email]
    );

    if (user.rows.length === 0) {
      console.log('Invalid Credentials');
    }

    if (user.rows[0].user_password !== password) {
      console.log('Invalid Credentials');
    }

    const storedPassword = user.rows[0].password;

    const match = bcrypt.compare(password, storedPassword);
    if (match) {
      return {
        id: user.rows[0].user_id,
        name: user.rows[0].user_name
      };
    } else {
      console.log('Invalid Credentials');
    }
  } catch (error) {
    console.log('Looks like something is wrong: ', error.message);
  }
};

module.exports = { registerUser, loginUser };
