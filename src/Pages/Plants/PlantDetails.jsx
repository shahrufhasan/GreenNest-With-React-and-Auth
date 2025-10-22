import { useParams } from "react-router";
import usePlantsData from "../../Hooks/usePlantsData";

const PlantDetails = () => {
  const { id } = useParams();
  const { plants, loading, error } = usePlantsData();

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-500">
        Error loading plant data.
      </p>
    );
  }

  const plant = plants.find((p) => String(p.id) === String(id));

  const { plantName, image, category, description, price, careLevel, rating } =
    plant;
  const totalStars = 5;
  const filledStars = Math.round(rating);
  const stars = Array.from({ length: totalStars }, (_, i) =>
    i < filledStars ? "★" : "☆"
  ).join("");
  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 bg-white shadow-md rounded-xl">
      <img
        src={image}
        alt={plantName}
        className="w-full h-[400px] object-cover rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-3">{plantName}</h1>
      <p className="text-gray-700 mb-3">{description}</p>
      <p className="font-medium mb-2">Category: {category}</p>
      <p className="font-medium mb-2">Care Level: {careLevel}</p>
      <p className="font-medium mb-2 ">
        Rating: <span className="text-yellow-500">{stars}</span>
      </p>
      <h2 className="text-2xl font-bold  mt-4">
        Price: <span className="text-green-700">${price}</span>
      </h2>
    </div>
  );
};

export default PlantDetails;
