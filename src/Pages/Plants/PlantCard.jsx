import React from "react";

const PlantCard = ({ plant }) => {
  const { plantName, image, category, rating, description, price } = plant;
  return (
    <div>
      <div className="card bg-base-100  shadow-sm p-2">
        <figure>
          <img src={image} className="h-[500px] object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{plantName}</h2>
          <div className="flex justify-between items-center">
            <div className="badge bg-green-200">{category}</div>
            <div className="badge badge-secondary">{rating}</div>
          </div>
          <div>
            <h4 className="text-xl">
              Price: <span className="font-bold">${price}</span>{" "}
            </h4>
          </div>
          <p>{description}</p>
          <div>
            <button className="btn btn-primary w-full">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
