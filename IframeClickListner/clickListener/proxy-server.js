const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/proxy', (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('URL is required');
  }
  request({ url: url }, (error, response, body) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(body);
  });
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});