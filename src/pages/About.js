// src/pages/AboutUs.js
import React from 'react';

function AboutUs() {
  return (
    <div className="container mx-auto p-6 mt-5 mb-5 bg-white/80 shadow-md rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">About Us</h1>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">History</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Principal's Message</h2>
        <p className="text-gray-700 leading-relaxed">
          At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Infrastructure and Facilities</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
