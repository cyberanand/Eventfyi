import React from 'react';
import sport from "../../public/assests/sport.jpeg"
import Image from 'next/image';
const Sport = () => {
  // Dummy data for sports events
  const events = [
    { name: 'Football Championship', date: 'Nov 25, 2024', location: 'Stadium A', description: 'Join the thrilling football championship featuring top teams.' },
    { name: 'Basketball Tournament', date: 'Dec 5, 2024', location: 'Arena B', description: 'Experience the excitement of live basketball action.' },
    { name: 'Tennis Open', date: 'Jan 15, 2025', location: 'Court C', description: 'Watch elite players compete in the annual tennis open.' },
    { name: 'Marathon', date: 'Feb 10, 2025', location: 'City Park', description: 'Participate in a challenging marathon through scenic routes.' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <header className="bg-blue-800 py-8 text-center">
        <h1 className="text-4xl font-bold">Sports Events</h1>
        <p className="text-lg mt-2">Catch the action-packed sports events near you!</p>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto py-10">
        {/* Featured Image */}
        <div className="w-full h-64 mb-10">
          <Image
            src={sport}
            alt="Sports Theme"
            className="w-1/2 mx-auto h-full object-fit rounded-lg shadow-lg"
          />
        </div>

        {/* Events List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
              <p className="text-sm mb-1">
                <strong>Date:</strong> {event.date}
              </p>
              <p className="text-sm mb-1">
                <strong>Location:</strong> {event.location}
              </p>
              <p className="text-sm text-gray-400">{event.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Sport;
