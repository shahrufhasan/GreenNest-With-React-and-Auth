import React from "react";
import usePlantsData from "../../Hooks/usePlantsData";
import PlantCareCards from "../Plants/PlantCareCards";
import Loading from "../Loading/Loading";

const PlantCare = () => {
  const { plants } = usePlantsData();

  if (!plants || plants.length === 0) {
    return <Loading></Loading>;
  }

  const samplePlant = plants[0];

  return (
    <section className="py-16 ">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-green-700">
          Plant Care Essentials
        </h2>
        <p className="text-primary mt-4 max-w-xl mx-auto">
          Master the basics of plant care to help your greenery thrive.
        </p>
      </div>

      <PlantCareCards plant={samplePlant} />
    </section>
  );
};

export default PlantCare;
