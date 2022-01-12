require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.use(express.json());

const authRoutes = require('./serverRoutes/authRoutes');
app.use('/api/auth/', authRoutes);

const holdingsRoutes = require('./serverRoutes/holdingsRoutes');
app.use('/api/holdings/', holdingsRoutes);

const portfolioRoutes = require('./serverRoutes/portfolioRoutes');
app.use('/api/portfolio/', portfolioRoutes);
const apiRoutes = require('./serverRoutes/IEXapiRoutes');
app.use('/api/stocks/', apiRoutes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
