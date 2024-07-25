// src/pages/Admissions.js
import React from 'react';

function Admissions() {
  return (
    <div className="container mx-auto p-6 bg-white/80 mt-5 mb-5 shadow-md rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Admissions</h1>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Process</h2>
        <p className="text-gray-700 leading-relaxed">
          Admission forms are available for download. Submit the completed form along with required documents at the school office.
        </p>
        <a
          href="/assets/Admission-Form.pdf"  // Path to your admission form
          download
          className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Download Admission Form
        </a>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Criteria</h2>
        <p className="text-gray-700 leading-relaxed">
          Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Important Dates</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Admission Form Availability: March 1st</li>
          <li>Last Date for Submission: March 31st</li>
          <li>Entrance Test: April 15th</li>
          <li>Announcement of Results: April 30th</li>
        </ul>
      </section>
    </div>
  );
}

export default Admissions;
