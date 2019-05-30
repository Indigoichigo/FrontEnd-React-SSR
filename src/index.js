import 'babel-polyfill';
import React from 'react';
import express from 'Express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
const app = express();

// tell server to download this folder
app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();

  // some logic to initialize
  // and load data into the store

  res.send(renderer(req, store));
});

app.listen('3000', () => {
  console.log('listening on 3000');
});
