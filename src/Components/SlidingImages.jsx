import React, { useState } from "react";

// Import images
import bgImage1 from "../assets/images/about_us_left_1.jpg";
import bgImage2 from "../assets/images/about_us_left_2.jpg";
import bgImage3 from "../assets/images/about_us_right.jpg";
import bgImage4 from "../assets/images/about_us_left_1.jpg";

const SlidingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: bgImage1,
      text: "Experience the Best Dining with Americana",
      buttonLabel: "Explore Menu",
    },
    {
      image: bgImage2,
      text: "Enjoy Exceptional Catering Services",
      buttonLabel: "Learn More",
    },
    {
      image: bgImage3,
      text: "Savor Authentic Flavors",
      buttonLabel: "View Dishes",
    },
    {
      image: bgImage4,
      text: "Host Memorable Events",
      buttonLabel: "Contact Us",
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Slide */}
      <div
        key={currentSlide}
        className="relative h-full w-full flex flex-col justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        {/* Overlay to dull the image */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text and Button */}
        <div className="relative text-center z-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            {slides[currentSlide].text}
          </h1>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition duration-300">
            {slides[currentSlide].buttonLabel}
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 z-20"
        onClick={handlePrevSlide}
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 z-20"
        onClick={handleNextSlide}
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidingPage;
