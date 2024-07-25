// src/pages/Students.js
import React from 'react';

function Students() {
  return (
    <div className="container mx-auto p-6 bg-white/80 mt-5 mb-5 shadow-md rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Students</h1>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Life at Springdale</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">Extracurricular Activities</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Music</li>
            <li>Dance</li>
            <li>Drama</li>
            <li>Art</li>
            <li>Sports</li>
            <li>Robotics</li>
            <li>Debate Club</li>
            <li>Science Club</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">Clubs and Societies</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Literary Society</li>
            <li>Environmental Club</li>
            <li>Astronomy Club</li>
            <li>Coding Club</li>
          </ul>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Achievements</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
        </ul>
      </section>
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Student Council</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>President: Amy Parker, Grade 12</li>
          <li>Vice President: Rajiv Mehta, Grade 11</li>
          <li>Secretary: Lisa Wong, Grade 10</li>
        </ul>
      </section>
    </div>
  );
}

export default Students;
