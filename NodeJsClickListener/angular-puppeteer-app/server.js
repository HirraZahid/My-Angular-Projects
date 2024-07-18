// server.js
const express = require('express');
const path = require('path');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/open-url', async (req, res) => {
  const url = req.body.url;
  console.log(`Received URL: ${url}`);
  if (url) {
    try {
      console.log('Launching browser with Puppeteer');
      const browser = await puppeteer.launch({ headless: false }); // Launch a full version of Chrome
      const page = await browser.newPage();
      await page.goto(url);
      console.log('URL opened in browser');

      // Inject script to capture clicks
      await page.evaluate(() => { 
        document.addEventListener('click', (event) => {
          const target = event.target;
          const info = {
            id: target.id || 'No ID',
            className: target.className || 'No Class'
          };

          alert(`Element clicked:\nID=${info.id}\nClass=${info.className}`);

          fetch('http://localhost:3000/click-info', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
          }).catch(err => console.error('Error sending click info:', err));
        });
      });

      console.log('Script injected successfully');
    } catch (error) {
      console.error(`Error opening URL with Puppeteer: ${error.message}`);
    }
  }
  res.sendStatus(200);
});

app.post('/click-info', (req, res) => {
  console.log('Received data:', req.body); // Check what data is received
  const { id, className } = req.body;
  console.log(`Element clicked: ID=${id}, Class=${className}`);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
