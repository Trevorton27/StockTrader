require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'client/build')));

const authRoute = require('./routes/authRoute');
app.use('/api/auth/', authRoute);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
