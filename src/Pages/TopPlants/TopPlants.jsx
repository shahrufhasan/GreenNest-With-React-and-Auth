import React from "react";
import usePlantsData from "../../Hooks/usePlantsData";
import PlantCard from "../Plants/PlantCard";
const TopPlants = () => {
  const { plants } = usePlantsData();
  const topPlants = plants.slice(0, 3);
  return (
    <div>
      <div className="text-center mt-10">
        <h2 className="text-6xl font-semibold mb-5">Our Top Rated Plants</h2>
        <p className="text-primary">
          Discover our most loved plants, perfect for any places
        </p>
      </div>
      <div
        className=" w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 py-4 md:py-8 lg:py-12 gap-5"
      >
        {topPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant}></PlantCard>
        ))}
      </div>
    </div>
  );
};

export default TopPlants;
