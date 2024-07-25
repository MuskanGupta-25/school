// src/pages/Home.js
import React from 'react';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Springdale Public School</h1>
      <div className="mb-4">
        <Carousel />
      </div>
    </div>
  );
}

export default Home;
