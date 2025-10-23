import React from "react";

const Team = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 w-11/12 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-semibold mb-5">Meet Our Green Experts</h2>
        <p className="text-primary">
          Get personalized advice from our experienced plant specialists
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <div className="card bg-base-100  shadow-sm text-center hover:scale-105 transition-all duration-300">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
              alt="Shoes"
              className="h-[200px] sm:w-[300px] md:w-[400px] lg:h-[500px]  object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-2xl font-semibold">Emma Green</h2>
            <p className="text-primary">Tropical Plants Specialist</p>
            <div>
              <button className="btn btn-secondary w-full">Contact</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-sm text-center hover:scale-105 transition-all duration-300">
          <figure>
            <img
              src="https://i.ibb.co/DHsfd8Qh/467444869-10160351769061891-3964624160658220491-n.jpg"
              alt="Shoes"
              className="h-[200px] sm:w-[300px] md:w-[400px] lg:h-[500px]  object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-2xl font-semibold">
              Jhankar Mahbub
            </h2>
            <p className="text-primary">CEO & Urban Gardening Expert</p>
            <div>
              <button className="btn btn-secondary w-full">Contact</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-sm text-center hover:scale-105 transition-all duration-300">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=774"
              alt="Shoes"
              className="h-[200px] sm:w-[300px] md:w-[400px] lg:h-[500px]  object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-2xl font-semibold">Mark Gates</h2>
            <p className="text-primary">Tropical Plants Specialist</p>
            <div>
              <button className="btn btn-secondary w-full">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
