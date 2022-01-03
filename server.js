require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.use(express.json());

const authRoute = require('./serverRoutes/authRoute');
app.use('/api/auth/', authRoute);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
