import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import UsersList from './components/UsersList';

export default () => {
  return (
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/users" component={UsersList} />
    </div>
  );
};
