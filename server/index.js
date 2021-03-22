/* eslint-disable no-console */
const expressStaticGzip = require('express-static-gzip');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(expressStaticGzip('client', {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders(res) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  },
}));

app.listen(PORT, () => { console.log(`listening on port: ${PORT}`); });
