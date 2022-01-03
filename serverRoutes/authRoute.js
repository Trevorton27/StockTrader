const express = require('express');
const router = express.Router();
const authDataRoute = require('../dataRoutes/authDataRoute');

router.post('/register', async (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  const email = req.body.email;

  const registerdUser = await authDataRoute.registerUser(user, email, password);
  res.status(201).send({ registerdUser });
});

router.get('/login', async (req, res) => {
  const password = req.body.password;
  const email = req.body.email;

  const loginUser = await authDataRoute.loginUser(email, password);

  if (!loginUser) {
    res.status(401).json({
      message: 'Login attempt failed.'
    });
  } else {
    res.status(201).send({ loginUser });
  }
});

module.exports = router;
