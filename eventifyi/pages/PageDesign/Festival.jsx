import React, { useState, useEffect } from 'react';
import festival from "../../public/assests/festival.jpeg"
import Image from 'next/image';

const events = [
  {
    vendor: {
      name: 'John Doe',
      details: 'Experienced event manager with over 10 years of service.',
      services: ['Event Planning', 'Decoration', 'Catering'],
    },
    eventDetails: {
      title: 'Festival Event',
      date: '2024-12-25',
      time: '6:00 PM',
      location: 'Central Park, New York',
      description: 'A grand festival with music, food, and activities for all ages.',
    },
  },
  {
    vendor: {
      name: 'Jane Smith',
      details: 'Award-winning event organizer.',
      services: ['Sound System', 'Stage Setup', 'Lighting'],
    },
    eventDetails: {
      title: 'Christmas Gala',
      date: '2024-12-24',
      time: '7:00 PM',
      location: 'Grand Hall, Los Angeles',
      description: 'An elegant Christmas Gala with live music and gourmet dinner.',
    },
  },
  {
    vendor: {
      name: 'Michael Johnson',
      details: 'Corporate event manager for conferences and seminars.',
      services: ['Stage Design', 'Audio-Visual Setup', 'Security Services'],
    },
    eventDetails: {
      title: 'Corporate Conference 2024',
      date: '2024-12-26',
      time: '9:00 AM',
      location: 'Convention Center, Chicago',
      description: 'A prestigious conference with industry experts.',
    },
  },
];

const Festival = () => {
  const [vendorDetails, setVendorDetails] = useState(null);

  useEffect(() => {
    // Simulate fetching vendor data for the first event
    setVendorDetails(events[0].vendor);
  }, []);

  return (
    <div className="bg-yellow-100 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            {/* Event Header */}
            <div className="relative w-full h-40">
              <Image
                src={festival}
                alt={event.eventDetails.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>

            {/* Event Information */}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{event.eventDetails.title}</h2>
              <p className="text-sm text-gray-500">{event.eventDetails.date} | {event.eventDetails.time}</p>
              <p className="text-sm mt-2">{event.eventDetails.description}</p>
              <p className="mt-2 text-sm"><strong>Location:</strong> {event.eventDetails.location}</p>
            </div>

            {/* Vendor Information */}
            {vendorDetails && (
              <div className="p-4 bg-gray-50">
                <h3 className="text-lg font-semibold mb-2">Vendor: {event.vendor.name}</h3>
                <p className="text-sm mb-2">{event.vendor.details}</p>
                <div className="text-sm">
                  <strong>Services:</strong>
                  <ul className="list-disc pl-5">
                    {event.vendor.services.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Festival;
