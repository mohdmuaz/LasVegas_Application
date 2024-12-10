import React, { useState } from 'react';

const ReservationPage = () => {
  const [reservationData, setReservationData] = useState({
    date: '',
    time: '',
    persons: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Details:', reservationData);
    // You can send this data to an API or process it further.
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-950 py-10">
      {/* Heading and Reservation Info */}
      <div className="text-center text-white mb-8">
        <h1 className="text-6xl font-bold">RESERVATION</h1>
        <p className="text-lg mt-4">
          Call us at (702)-331-5565 or book a table through Open Table reservations:
        </p>
      </div>

      {/* Reservation Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Make a Reservation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Date Picker */}
            <div>
              <label htmlFor="date" className="block text-gray-700 mb-2">
                Choose a Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={reservationData.date}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Time Picker */}
            <div>
              <label htmlFor="time" className="block text-gray-700 mb-2">
                Choose a Time:
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={reservationData.time}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Number of Persons */}
            <div>
              <label htmlFor="persons" className="block text-gray-700 mb-2">
                Number of Persons:
              </label>
              <select
                id="persons"
                name="persons"
                value={reservationData.persons}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select Number of Persons</option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
                <option value="5">5 Persons</option>
                <option value="6">6 Persons</option>
                <option value="7">7 Persons</option>
                <option value="8">8 Persons</option>
                <option value="9">9 Persons</option>
                <option value="10">10 Persons</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-400 transition duration-300"
            >
              Find Table
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationPage;