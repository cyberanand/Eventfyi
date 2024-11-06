import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import wedding from "../../public/assests/wedding.jpeg"
const weddingEvent = {
  vendor: [
    {
      name: 'Elegant Weddings Inc.',
      details: 'We specialize in creating unforgettable wedding experiences. Our team has over 15 years of expertise in organizing weddings.',
      services: ['Wedding Planning', 'Venue Decoration', 'Catering', 'Photography'],
    },
    {
      name: 'Royal Weddings Co.',
      details: 'Creating luxurious weddings with attention to detail. We offer bespoke wedding planning services.',
      services: ['Custom Designs', 'Event Coordination', 'Catering', 'Photography'],
    },
    {
      name: 'Simple Weddings Ltd.',
      details: 'Affordable and beautiful weddings for every couple. Our team makes weddings stress-free and memorable.',
      services: ['Event Planning', 'Catering', 'Photography'],
    },
  ],
  eventDetails: {
    title: 'Wedding Anniversary Celebration',
    date: '2024-12-15',
    time: '5:00 PM',
    location: 'The Grand Ballroom, New York',
    description: 'Celebrate love with an elegant wedding anniversary celebration with music, gourmet dinner, and unforgettable memories.',
  },
};

const Wedding = () => {
  const [vendorDetails, setVendorDetails] = useState([]);

  useEffect(() => {
    // Simulate fetching vendor data
    setVendorDetails(weddingEvent.vendor);
  }, []);

  return (
    <div className="bg-pink-100 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Event Header */}
        <div className="relative w-full h-64">
          <Image
            src={wedding}
            alt="Wedding Anniversary Event"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-3xl font-bold">{weddingEvent.eventDetails.title}</h1>
            <p className="text-xl mt-2">{weddingEvent.eventDetails.date} | {weddingEvent.eventDetails.time}</p>
          </div> */}
        </div>

        {/* Event Information */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
          <p className="text-lg">{weddingEvent.eventDetails.description}</p>
          <p className="mt-4 text-lg">
            <strong>Location:</strong> {weddingEvent.eventDetails.location}
          </p>
        </div>

        {/* Vendor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {vendorDetails.map((vendor, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl font-semibold">{vendor.name}</h3>
              <p className="text-sm mt-2">{vendor.details}</p>
              <div className="mt-4">
                <strong>Services Offered:</strong>
                <ul className="list-disc pl-5 text-sm">
                  {vendor.services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wedding;
