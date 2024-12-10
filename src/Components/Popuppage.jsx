import React, { useState, useEffect } from "react";

const PopupPage = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Show the popup after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="">

      {/* Pop-Up */}
      {isPopupVisible && (
        <div
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-1/2 md:w-1/3 bg-white shadow-lg rounded-lg transition-all duration-500 ease-in-out z-50 ${
            isPopupVisible ? "top-0" : "-top-full"
          }`}
        >
          <div className="relative p-6">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              &#x2715;
            </button>

            <h1 className="text-3xl font-bold text-center mb-8 mt-6">
              Let us host your special event!
            </h1>
            <p className="text-center text-lg mb-8">
              Whether a birthday party, office function, or any other special occasion - we
              take care of all the fine details, bringing your event to life, just as you
              imagined.
            </p>
            <p className="text-center mb-8">
              Host your next party or get together.
            </p>
            <div className="text-center">
              <button
                onClick={handleClose}
                className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Book Your Party
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupPage;
