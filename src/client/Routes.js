import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';

export default () => {
  return (
    <div>
      <Route path="/" component={Home} exact />
    </div>
  );
};
