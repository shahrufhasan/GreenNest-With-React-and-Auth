import React from "react";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  const {
    plantName,
    image,
    category,
    rating,
    description,
    price,
    availableStock,
    careLevel,
  } = plant;

  const shortedDescription =
    description.split(" ").slice(0, 10).join(" ") +
    (description.split(" ").length > 10 ? "..." : "");

  const totalStars = 5;
  const filledStars = Math.round(rating);
  const stars = Array.from({ length: totalStars }, (_, i) =>
    i < filledStars ? "★" : "☆"
  ).join("");

  const careBadgeColor =
    careLevel === "Easy"
      ? "bg-green-500"
      : careLevel === "Moderate"
      ? "bg-yellow-400"
      : "bg-red-500";

  return (
    <div className="card bg-base-100 shadow-sm p-2 space-y-3 group hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden rounded-t-lg">
        <figure>
          <img
            src={image}
            alt={plantName}
            className="h-[300px] lg:h-[550px] w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </figure>

        <div className="absolute top-3 right-3">
          <div
            className={`badge ${careBadgeColor} text-white px-3 py-2 shadow-md border-0 transition-transform duration-300 hover:scale-110 hover:brightness-110`}
          >
            {careLevel}
          </div>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title text-2xl">{plantName}</h2>

        <div className="flex justify-between items-center">
          <div className="badge bg-green-200 transition-transform duration-300 hover:scale-110 hover:brightness-110">
            {category}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-lg">{stars}</span>
            <span className="text-gray-700 font-medium">{rating}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-xl">
              Price: <span className="font-bold">${price}</span>
            </h4>
          </div>
          <div>
            <p>Available: {availableStock}</p>
          </div>
        </div>

        <p className="text-gray-600">
          {shortedDescription}{" "}
          {description.split(" ").length > 10 && (
            <span className="underline cursor-pointer hover:text-blue-700">
              Read more
            </span>
          )}
        </p>

        <div>
          <Link
            to={`/plantDetails/${plant.id}`}
            className="btn btn-primary w-full mt-3 transition-transform duration-300 hover:scale-[1.03]"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
