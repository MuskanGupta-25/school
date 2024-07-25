// src/pages/Faculty.js
import React from 'react';

function Faculty() {
  return (
    <div className="container mx-auto p-6 bg-white/80 mb-5 mt-5 shadow-md rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Faculty</h1>
      <div className="space-y-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">John Doe</h2>
          <p className="text-gray-700">Principal, M.Ed, 20 years of experience in educational administration.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Jane Smith</h2>
          <p className="text-gray-700">Vice Principal, M.Sc. in Physics, 15 years of teaching experience.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Emily Johnson</h2>
          <p className="text-gray-700">English Teacher, M.A. in English, 10 years of teaching experience.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Michael Brown</h2>
          <p className="text-gray-700">Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Sophia Davis</h2>
          <p className="text-gray-700">Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">David Wilson</h2>
          <p className="text-gray-700">Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.</p>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
