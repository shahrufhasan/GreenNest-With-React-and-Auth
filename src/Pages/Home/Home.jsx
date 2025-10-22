import React from "react";
import banner from "../../../public/banner.jpg";
import usePlantsData from "../../Hooks/usePlantsData";
import PlantCard from "../Plants/PlantCard";

const Home = () => {
  const { plants } = usePlantsData();
  const topPlants = plants.slice(0, 3);
  return (
    <div>
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] h-[800px] md:h-[800px]">
        <img src={banner} alt="Banner" className="w-full h-full object-cover" />

        <div className="absolute top-1/2 right-0 w-full md:w-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Nurturing a <br />
            <span className="text-primary">Greener</span> Tomorrow
          </h1>
          <p className="text-primary text-sm sm:text-base md:text-base max-w-full md:max-w-md">
            At GreenNest, we believe that a sustainable lifestyle starts at
            home. From eco-friendly products to practical green solutions, we
            empower you to create a healthier, more vibrant environment for
            yourself and the planet. Join us in making every choice count
            towards a brighter, greener future.
          </p>
        </div>
      </div>

      {/* Top plant section */}

      <div>
        <div className="text-center mt-10">
          <h2 className="text-6xl font-semibold mb-5">Our Top Rated Plants</h2>
          <p className="text-primary">
            Discover our most loved plants, perfect for any places
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 md:py-8 lg:py-12 gap-5">
          {topPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant}></PlantCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
