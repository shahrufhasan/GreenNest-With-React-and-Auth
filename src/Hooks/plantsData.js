import axios from "axios";
import { useEffect, useState } from "react";

const plantsData = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios("../plantsData.json")
      .then((data) => setPlants(data.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { plants };
};

export default plantsData;
