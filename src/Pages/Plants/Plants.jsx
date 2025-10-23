import React from "react";
import plantsData from "../../Hooks/usePlantsData";
import PlantCard from "./PlantCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay between cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Plants = () => {
  const { plants } = plantsData();

  if (!plants || plants.length === 0) {
    return <p className="text-center mt-10">No plants available</p>;
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-5 w-10/12 mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {plants.map((plant) => (
        <motion.div key={plant.id} variants={cardVariants}>
          <PlantCard plant={plant}></PlantCard>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Plants;
