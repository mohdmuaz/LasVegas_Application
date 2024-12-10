import React, { useState } from 'react';
import backgroundImage from '../assets/images/reviews_back.jpg';

const reviews = [
  {
    reviewer: 'John Doe',
    stars: 5,
    review: 'Wonderful and beautiful to have Sunday brunch here! It is by the lake and the ambient is just so relaxing! Food was excellent! The salad was so fresh and crispy. The dressing was just mixed to perfect. And the main dish of pasta and salmon was so tender and juicy.',
  },
  {
    reviewer: 'Jane Smith',
    stars: 4,
    review: 'Cozy atmosphere with great coffee and pastries. Their cappuccino is perfectly balanced, and the baristas are super friendly. Its an ideal spot for remote work or casual meet-ups. Only downside: limited seating during peak hours.',
  },
  {
    reviewer: 'Alex Johnson',
    stars: 3,
    review: 'Stunning visuals and an engaging plot kept me hooked throughout. The lead actor’s performance was a standout. However, the pacing felt a bit off in the middle, and some subplots were underdeveloped. Overall, a must-watch for fans of sci-fi drama!',
  },
  {
    reviewer: 'Chris Lee',
    stars: 5,
    review: 'Impeccable food with bold, creative flavors. The presentation was Instagram-worthy, and the staff was welcoming. The ambiance added to the overall experience, but service was slightly slow. Would definitely return for the truffle pasta alone!',
  },
];

const ReviewPage = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-10">REVIEWS</h1>

      {/* Review Carousel */}
      <div className="w-full max-w-md sm:max-w-lg px-4 py-8 bg-gray-50 bg-opacity-50 rounded-lg shadow-lg">
        {/* Review Content */}
        <div className="text-center mb-6">
          <p className="text-lg sm:text-2xl font-bold text-gray-700">{reviews[currentReview].reviewer}</p>
          <div className="flex justify-center items-center space-x-1 mt-2">
            {Array.from({ length: reviews[currentReview].stars }).map((_, index) => (
              <span key={index} className="text-yellow-600 text-3xl">★</span>
            ))}
          </div>
          <p className="mt-4 text-base sm:text-lg md:text-2xl text-gray-500">{reviews[currentReview].review}</p>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prevReview}
            className="text-xl text-gray-300 hover:text-white md:text-2xl"
          >
            &#8592; {/* Left arrow */}
          </button>
          <button
            onClick={nextReview}
            className="text-xl text-gray-300 hover:text-white md:text-2xl"
          >
            &#8594; {/* Right arrow */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
