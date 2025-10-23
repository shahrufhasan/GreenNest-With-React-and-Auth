import React from "react";
import { FaHandHoldingWater, FaSun, FaSeedling } from "react-icons/fa";

const PlantCareCards = ({ plant }) => {
  if (!plant) return null;

  const { watering, sunlight, fertilizing } = plant;

  return (
    <div className="w-full max-w-6xl mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Watering */}
        <div className="flex flex-col items-center bg-green-50 p-8 rounded-md shadow-md hover:scale-105 transition-all duration-300">
          <FaHandHoldingWater className="text-blue-500 text-6xl mb-3" />
          <h3 className="text-2xl font-semibold mb-2 text-gray-600">
            Watering
          </h3>
          <p className="text-gray-600 text-sm text-center">{watering}</p>
        </div>

        {/* Sunlight */}
        <div className="flex flex-col items-center bg-green-50 p-8 rounded-md shadow-md hover:scale-105 transition-all duration-300">
          <FaSun className="text-yellow-500 text-6xl mb-3" />
          <h3 className="text-2xl font-semibold mb-2 text-gray-600">
            Sunlight
          </h3>
          <p className="text-gray-600 text-sm text-center">{sunlight}</p>
        </div>

        {/* Fertilizing */}
        <div className="flex flex-col items-center bg-green-50 p-8 rounded-md shadow-md hover:scale-105 transition-all duration-300">
          <FaSeedling className="text-green-500 text-6xl mb-3" />
          <h3 className="text-2xl font-semibold mb-2 text-gray-600">
            Fertilizing
          </h3>
          <p className="text-gray-600 text-sm text-center">{fertilizing}</p>
        </div>
      </div>
    </div>
  );
};

export default PlantCareCards;
