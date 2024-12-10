import React from 'react';
import cateringImage from '../assets/images/about_us_right.jpg';
import partyImage from '../assets/images/about_us_left_2.jpg';
import Decoration from '../assets/images/title_decoration.png';
import backgroundImage from '../assets/images/about_us_back.jpg';

const AboutUs_more = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Wrapper for responsiveness */}
      <div className="flex flex-col md:flex-row md:flex-wrap space-y-6 md:space-y-0 p-4 md:p-8 overflow-hidden">

        {/* Catering Section */}
        <div className="w-full md:w-1/2 p-6 mb-6 md:mb-0">
          <div className="text-gray-700 text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              CATERING
            </h1>
            <img src={Decoration} alt="title_decoration" className="mx-auto my-4 w-16 md:w-24" />
            <p className="text-sm md:text-base m-2">
              Let us cater your next event
            </p>
            <p className="text-xs md:text-sm lg:text-base m-4 md:m-6 lg:m-8">
              We cater your needs. Elegant style of catering for your style and budget. Any kind of event from weddings to birthdays.
            </p>
            <button className="bg-red-900 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-blue-900 transition duration-300">
              CATERING
            </button>
          </div>
        </div>

        {/* Catering Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={cateringImage}
            alt="Catering"
            className="w-full h-auto object-cover" // Ensuring responsive scaling
          />
        </div>

        {/* Party Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={partyImage}
            alt="Party"
            className="w-full h-auto object-cover" // Ensuring responsive scaling
          />
        </div>

        {/* Party Section */}
        <div className="w-full md:w-1/2 p-6 mb-6 md:mb-0">
          <div className="text-gray-700 text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              PARTIES
            </h1>
            <img src={Decoration} alt="title_decoration" className="mx-auto my-4 w-16 md:w-24" />
            <p className="text-sm md:text-base m-2">
              Book your next party with us!
            </p>
            <p className="text-xs md:text-sm lg:text-base m-4 md:m-6 lg:m-8">
              No matter the occasion, you can celebrate at our place! Book a private party.
            </p>
            <button className="bg-red-900 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-blue-900 transition duration-300">
              PARTIES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs_more;
