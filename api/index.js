/* eslint-disable no-console */
require('dotenv').config();
const expressStaticGzip = require('express-static-gzip');

const express = require('express');
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

// const pass = process.env.GMAIL_PASS;
// const user = process.env.GMAIL_USER;



app.use(cors());
app.use(express.json());
app.use('/',expressStaticGzip('client', {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders(res) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  },
}));


app.listen(PORT, () => { console.log(`listening on port: ${PORT}`); });
