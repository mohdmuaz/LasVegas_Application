import React from 'react';
import aboutImage from '../assets/images/about_us_left_1.jpg';
import Decoration from '../assets/images/title_decoration.png';

const AboutUs = () => {
  return (
    <div className="h-[80vh] flex flex-col">
      {/* Address Section */}
      <div className="bg-red-800 text-white text-center p-4">
        <p className="text-lg sm:text-xl md:text-2xl">
          2620 Regatta Drive, Las Vegas, NV 89128
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row flex-1 w-full">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 h-1/2 md:h-auto">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 bg-blue-200 flex items-center justify-center p-4 md:p-6">
          <div className="text-gray-700 text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              ABOUT US
            </h1>
            <img
              src={Decoration}
              alt="title_decoration"
              className="mx-auto my-4 w-16 md:w-24"
            />
            <p className="text-sm sm:text-base md:text-lg px-4 md:px-8 lg:px-12">
              Americana brings incredible blends of various cultures to the Desert Shores
              community in Las Vegas. The restaurant offers fine dining with a blended
              cultural theme of modern American cuisine.
            </p>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-red-900 transition duration-300">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
