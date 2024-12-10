import React from 'react';
import mapImage from '../assets/images/map.png';

const NewsletterPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-[50vh]">
      {/* Left Section */}
      <div className="flex flex-col justify-between items-center md:w-1/2 bg-blue-100 text-black p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 mt-6">NEWSLETTER</h1>
          <p className="text-base sm:text-lg md:text-lg mb-6">
            Sign up for our newsletter & get exclusive offers and invites!
          </p>
        </div>
        <form className="flex flex-col sm:flex-row items-center w-full max-w-md gap-2 mb-12">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-md w-full sm:w-2/3 text-black"
            required
          />
          <button
            type="submit"
            className="bg-red-800 text-white px-4 py-3 mt-3 sm:mt-0 sm:ml-4 hover:bg-yellow-400 transition duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full h-[50vh]">
        <img
          src={mapImage}
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default NewsletterPage;
