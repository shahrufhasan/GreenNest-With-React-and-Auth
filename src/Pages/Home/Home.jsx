import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import banner1 from "../../../public/banner1.jpg";
import banner2 from "../../../public/banner2.jpg";
import banner3 from "../../../public/banner3.jpg";
import TopPlants from "../TopPlants/TopPlants";
import PlantCare from "../PlantCare/PlantCare";
import Team from "../Team/Team";
import DecorIdeas from "../DecorIdea/DecorIdeas";

const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};
const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Home = () => {
  const banners = [banner1, banner2, banner3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="overflow-x-hidden">
      <div className="relative w-full h-[500px] lg:h-[800px] md:h-[800px] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={current}
            src={banners[current]}
            alt={`Banner ${current + 1}`}
            className="w-full h-full object-cover absolute top-0 left-0"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center z-10">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.2)]">
            Nurturing a <br />
            <span className="text-primary">Greener</span> Tomorrow
          </h1>
          <p className="text-white text-sm max-w-full md:max-w-md">
            At GreenNest, we believe that a sustainable lifestyle starts at
            home. From eco-friendly products to practical green solutions, we
            empower you to create a healthier, more vibrant environment for
            yourself and the planet. Join us in making every choice count
            towards a brighter, greener future.
          </p>
        </div>
      </div>

      <motion.div
        className="my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 1.5 }}
      >
        <TopPlants></TopPlants>
      </motion.div>

      <motion.div
        className="my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeLeft}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <PlantCare></PlantCare>
      </motion.div>

      <motion.div
        className="my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeRight}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Team></Team>
      </motion.div>

      <motion.div
        className="my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scaleUp}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <DecorIdeas></DecorIdeas>
      </motion.div>
    </div>
  );
};

export default Home;
