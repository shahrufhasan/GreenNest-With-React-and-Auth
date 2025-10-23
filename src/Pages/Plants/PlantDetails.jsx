import { Link, useParams } from "react-router";
import usePlantsData from "../../Hooks/usePlantsData";

const PlantDetails = () => {
  const { id } = useParams();
  const { plants, loading, error } = usePlantsData();

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return error.code;
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
    <div className="max-w-4xl mx-auto my-10 p-5 bg-white shadow-md rounded-xl">
      <img
        src={image}
        alt={plantName}
        className="w-full h-[400px] object-cover rounded-lg mb-6"
      />

      <h1 className="text-4xl font-bold mb-3">{plantName}</h1>
      <p className="text-gray-600 mb-3">
        Description:
        <span className="text-primary"> {description}</span>
      </p>
      <p className="font-medium mb-2">Category: {category}</p>
      <p className="font-medium mb-2">Care Level: {careLevel}</p>
      <p className="font-medium mb-2 ">
        Rating: <span className="text-yellow-500">{stars}</span>
      </p>
      <h2 className="text-xl font-bold  mt-4">
        Price: <span className="text-green-700">${price}</span>
      </h2>
      <Link className="btn btn-primary px-5 mt-8 w-full" to="/plants">
        See All Plants
      </Link>

      <div class="max-w-3xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg my-10">
        <h2 class="text-4xl font-bold text-green-700 mb-6 text-center">
          Book a Consultation
        </h2>

        <form class="space-y-4">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              class="input input-bordered w-full"
              required
            />
          </div>

          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              class="input input-bordered w-full"
              required
            />
          </div>

          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Phone</span>
            </label>
            <input
              type="tel"
              placeholder="(123) 456-7890"
              class="input input-bordered w-full"
              required
            />
          </div>

          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Preferred Date</span>
            </label>
            <input type="date" class="input input-bordered w-full" required />
          </div>

          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Message</span>
            </label>
            <textarea
              placeholder="Write your message..."
              class="textarea textarea-bordered w-full"
              rows="4"
            ></textarea>
          </div>

          <div class="form-control w-full mt-4">
            <button class="btn btn-primary w-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlantDetails;
