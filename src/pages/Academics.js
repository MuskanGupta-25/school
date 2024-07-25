// src/pages/Academics.js
import React from 'react';

function Academics() {
  return (
    <div className="container mx-auto p-6 bg-white/80 mt-5 mb-5 shadow-md rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Academics</h1>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Curriculum</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">Primary (Grades 1-5)</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Social Studies</li>
              <li>Art</li>
              <li>Physical Education</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">Secondary (Grades 6-10)</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science (Physics, Chemistry, Biology)</li>
              <li>Social Studies</li>
              <li>Computer Science</li>
              <li>Physical Education</li>
              <li>Art</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">Senior Secondary (Grades 11-12)</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
              <li>Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Teaching Methodologies</h2>
        <p className="text-gray-700 leading-relaxed">
          We use a blend of traditional and modern teaching techniques to cater to different learning styles.
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Educational Resources</h2>
        <p className="text-gray-700 leading-relaxed">
          Digital classrooms, interactive learning modules, and access to online educational platforms.
        </p>
      </section>
    </div>
  );
}

export default Academics;
