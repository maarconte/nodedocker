'use strict';
const express = require('express');

// Constants
const PORT = '3000';
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', function (res) {
	res.send("Coucou");
  });

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);