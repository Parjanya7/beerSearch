const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();

config.MiddleWare(app, express, bodyParser);
config.ROUTES(app);

app.listen( config.PORT, () => console.log(`Server running on ${config.PORT}`));