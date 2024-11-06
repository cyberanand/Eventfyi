import React from "react";

const BirthdayPage = () => {
  const vendors = [
    {
      name: "John Doe Events",
      details:
        "Specializes in elegant decorations, custom cakes, and full event management. Make your birthday unforgettable!",
    },
    {
      name: "Celebration Experts",
      details:
        "From balloon arches to themed setups, we handle everything to make your birthday party spectacular.",
    },
    {
      name: "Dream Party Planners",
      details:
        "Offering creative and budget-friendly packages tailored to your needs, making each event unique and memorable.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-300 to-pink-400 p-4">
      <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-8">
        🎉 Happy Birthday Celebration! 🎉
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendors.map((vendor, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {vendor.name}
            </h2>
            <p className="text-gray-600 text-lg">{vendor.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthdayPage;
