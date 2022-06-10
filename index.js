const express = require('express');
require('dotenv').config();
const app = express();
const router = require('./app/router')

app.set('view engine', 'ejs');
app.set('views', './app/views')

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () =>{
  console.log(`Listening on http://localhost:${port}`)
});