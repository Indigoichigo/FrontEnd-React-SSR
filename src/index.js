import React from 'react';
import express from 'Express';
import renderer from './helpers/renderer';
const app = express();

// tell server to download this folder
app.use(express.static('public'));
app.get('*', (req, res) => {
  res.send(renderer(req));
});

app.listen('3000', () => {
  console.log('listening on 3000');
});
