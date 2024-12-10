import React from 'react';

// Import images
import img1 from '../assets/images/Img1.jpg';
import img2 from '../assets/images/Img2.jpg';
import img3 from '../assets/images/Img3.jpg';
import img4 from '../assets/images/Img4.jpg';
import img5 from '../assets/images/Img5.jpg';
import img6 from '../assets/images/Img6.jpg';
import img7 from '../assets/images/Img7.jpg';
import img8 from '../assets/images/Img8.jpg';
import img9 from '../assets/images/Img9.jpg';
import img10 from '../assets/images/Img10.jpg';
import img11 from '../assets/images/Img11.jpg';
import img12 from '../assets/images/Img12.jpg';
import img13 from '../assets/images/Img13.jpg';
import img14 from '../assets/images/Img14.jpg';

const ImagePage = () => {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Upper Part */}
      <div className="grid grid-cols-12 gap-0 w-full h-1/2">
        {/* Large Image in Upper Part */}
        <div className="col-span-12 md:col-span-4 relative group overflow-hidden">
          <img
            src={img1}
            alt="LargeImage1"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Smaller Images in Upper Part */}
        <div className="col-span-12 md:col-span-8 grid grid-cols-3 gap-0">
          <div className="relative group overflow-hidden">
            <img
              src={img2}
              alt="SmallImage2"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden">
            <img
              src={img3}
              alt="SmallImage3"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden">
            <img
              src={img4}
              alt="SmallImage4"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden">
            <img
              src={img5}
              alt="SmallImage5"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden">
            <img
              src={img6}
              alt="SmallImage6"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden">
            <img
              src={img7}
              alt="SmallImage7"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Lower Part */}
      <div className="grid grid-cols-12 gap-0 w-full h-1/2">
        {/* Large Image in Lower Part */}
        <div className="col-span-12 md:col-span-4 relative group overflow-hidden">
          <img
            src={img8}
            alt="LargeImage2"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Smaller Images in Lower Part */}
        <div className="col-span-12 md:col-span-8 grid grid-cols-3 gap-0">
          <div className="relative group overflow-hidden">
            <img
              src={img9}
              alt="SmallImage9"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden">
            <img
              src={img10}
              alt="SmallImage10"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden">
            <img
              src={img11}
              alt="SmallImage11"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden">
            <img
              src={img12}
              alt="SmallImage12"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden">
            <img
              src={img13}
              alt="SmallImage13"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden">
            <img
              src={img14}
              alt="SmallImage14"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
