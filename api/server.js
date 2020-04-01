'use strict';

const bodyParser =  require("body-parser");
const express = require('express');

// Constants
const PORT = '3000';
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);