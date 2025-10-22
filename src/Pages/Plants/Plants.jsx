import React from "react";
import plantsData from "../../Hooks/plantsData";
import PlantCard from "./PlantCard";

const Plants = () => {
  const { plants } = plantsData();
  console.log(plants);
  return (
    <div className="grid grid-cols-3 gap-2 py-5">
      {plants.map((plant) => (
        <PlantCard plant={plant}></PlantCard>
      ))}
    </div>
  );
};

export default Plants;
