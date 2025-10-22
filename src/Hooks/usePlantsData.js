import axios from "axios";
import { useEffect, useState } from "react";

const usePlantsData = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("/plantsData.json")
      .then((response) => setPlants(response.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { plants, loading, error };
};

export default usePlantsData;
