'use strict';

const express = require('express');
const redis = require('redis');
const client = redis.createClient({
  host : process.env.REDIS_HOST,
  port : process.env.REDIS_PORT
})

// Constants
const PORT = '3000';
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  client.get('numbers', function(e,reply){
     var count = 0;
     if (reply) count = parseInt(reply)+1
     res.status(200).json({ count })
     client.set('numbers', count)
  })
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);