import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Emma Green",
      role: "Tropical Plants Specialist",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    {
      name: "Jhankar Mahbub",
      role: "Urban Gardening Expert",
      img: "https://i.ibb.co/DHsfd8Qh/467444869-10160351769061891-3964624160658220491-n.jpg",
    },
    {
      name: "Marketing Manager",
      role: "Tropical Plants Specialist",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=774",
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 py-12">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-semibold mb-5">Meet Our Green Experts</h2>
        <p className="text-primary">
          Get personalized advice from our experienced plant specialists
        </p>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="card bg-base-100 w-full max-w-sm shadow-sm rounded-lg overflow-hidden"
          >
            <figure>
              <img
                src={member.img}
                alt={member.name}
                className="h-[450px] w-full object-cover"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-2xl font-bold text-gray-600">
                {member.name}
              </h2>
              <p className="text-primary mb-4">{member.role}</p>
              <button className="btn btn-secondary text-white w-full">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
