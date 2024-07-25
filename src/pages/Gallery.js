// src/pages/Gallery.js
import React from 'react';
import sports from '../assests/sports.webp'
import science from '../assests/science.jpeg'
import classroom from '../assests/classroom.jpg'
import cul from '../assests/cultural.webp'
import lib from '../assests/360_F_837973042_YHqXJ57rxnwjg9SAHkOUxQ7kUdiBMUHB.jpg'


function Gallery() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src={sports} alt="Sports Day" className="w-full h-48 object-cover mb-4"/>
          <img src={science} alt="Science Exhibition" className="w-full h-48 object-cover mb-4"/>
          <img src={cul} alt="Cultural Fest" className="w-full h-48 object-cover mb-4"/>
          <img src={classroom} alt="Classroom" className="w-full h-48 object-cover mb-4"/>
          <img src={lib} alt="Library" className="w-full h-48 object-cover mb-4"/>
        </div>
      </section>
     
    </div>
  );
}

export default Gallery;
