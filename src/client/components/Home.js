import React from 'react';

const handleClick = () => {
  console.log('hi');
};

const Home = () => {
  return (
    <div>
      <p>Home Component!!</p>
      <button onClick={handleClick}>click me!</button>
    </div>
  );
};

export default Home;
