// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Springdale Public School. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
