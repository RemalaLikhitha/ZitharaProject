const express = require('express');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/api/data', dataRoutes);

app.listen(PORT, () => console.log(Server running on port ${PORT}));