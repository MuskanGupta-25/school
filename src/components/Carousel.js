// src/components/Carousel.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import home from '../assests/awards.jpg'
import school from '../assests/Home.jpeg'
import classroom from '../assests/classroom.jpg'
import cul from '../assests/cultural.webp'
const Carousel = () => {
  const [autoPlay, setAutoPlay] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: 3000, // Time in milliseconds
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoPlay(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="w-full h-80 bg-gray-300 flex items-center justify-center">
          <img src={school} alt="Slide 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-80 bg-gray-300 flex items-center justify-center">
          <img src={home} alt="Slide 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-80 bg-gray-300 flex items-center justify-center">
          <img src={classroom} alt="Slide 3" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-80 bg-gray-300 flex items-center justify-center">
          <img src={cul} alt="Slide 4" className="w-full h-full object-cover" />
        </div>
      </Slider>
      <div class="bg-white/80 p-6 mt-10 rounded-lg shadow-lg max-w-auto mx-auto">
  <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
  <p class="text-gray-700 leading-relaxed">
    Our aim is not just to create another face in the crowd but to nurture each student into developing a personality which has the resolve to do the nation proud. Love, tolerance, brotherhood, humanism, patriotism, sensitivity to the environment, rationalism, courage to bear life’s contingencies and to take up cudgels on behalf of the underprivileged are the hallmarks of our students. Spring Dale endeavours to provide not just pedantic learning but a genuine and holistic education in a stress-free environment where students inculcate a spirit of enquiry. We not only train them to find challenging careers but also to face the complexities of life.
  </p>
</div>

    </div>
  );
};

export default Carousel;
