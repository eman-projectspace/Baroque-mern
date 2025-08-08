import React, { useState } from "react";

const CountryAlert = ({ onClose }) => {
  const [country, setCountry] = useState("Pakistan");

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg"
      >
        <h2 className="text-xl font-bold mb-3">Are you in the right place?</h2>
        <p className="mb-2">Please select your shipping country.</p>
        <p className="mb-4 text-sm">
          Buy from the country of your choice. Remember that we can only ship your
          order to addresses located in the chosen country.
        </p>

        <label htmlFor="country-select" className="block mb-1 font-semibold">
          Country
        </label>
        <select
          id="country-select"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
        >
          <option>Pakistan</option>
          <option>USA</option>
          <option>UK</option>
          <option>Canada</option>
        </select>

        <button
          onClick={onClose}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CountryAlert;
