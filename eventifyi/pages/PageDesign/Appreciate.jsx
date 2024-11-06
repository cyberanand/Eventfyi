import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Appreciate = () => {
  const [vendorDetails, setVendorDetails] = useState([]);

  const appreciateEvent = {
    vendor: [
      {
        name: 'Appreciation Events LLC',
        details: 'We organize appreciation events with a personal touch, making sure every guest feels valued. Our team is committed to creating memorable moments.',
        services: ['Event Coordination', 'Gift Arrangements', 'Catering', 'Photography'],
      },
      {
        name: 'Grateful Gatherings',
        details: 'We specialize in curating events to express gratitude and appreciation, creating unforgettable experiences with heartfelt gestures.',
        services: ['Custom Decor', 'Event Planning', 'Catering', 'Photography'],
      },
      {
        name: 'Thank You Creations',
        details: 'We craft unique appreciation events, offering personalized services to make every celebration extra special.',
        services: ['Event Design', 'Guest Management', 'Catering', 'Photography'],
      },
    ],
    eventDetails: {
      title: 'Appreciation Event Celebration',
      date: '2024-12-20',
      time: '7:00 PM',
      location: 'Riverside Banquet Hall, New York',
      description: 'A heartwarming event to appreciate the people who make a difference in our lives, filled with great food, entertainment, and heartfelt speeches.',
    },
  };

  useEffect(() => {
    setVendorDetails(appreciateEvent.vendor);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="relative mb-12 rounded-2xl overflow-hidden shadow-lg">
          <div className="h-96 bg-blue-600">
            <img
              src="/api/placeholder/1200/400"
              alt="Appreciation Event"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="text-center text-white p-6">
              <h1 className="text-5xl font-bold mb-4">{appreciateEvent.eventDetails.title}</h1>
              <div className="flex items-center justify-center space-x-6 text-xl">
                <span className="flex items-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  {appreciateEvent.eventDetails.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  {appreciateEvent.eventDetails.time}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Event Details Card */}
        <div className="mb-12 bg-white/80 backdrop-blur rounded-xl shadow-lg">
          <div className="p-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
                <p className="text-lg text-gray-700 mb-4">{appreciateEvent.eventDetails.description}</p>
                <p className="text-lg">
                  <strong>Location:</strong> {appreciateEvent.eventDetails.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vendor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendorDetails.map((vendor, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3">{vendor.name}</h3>
              <p className="text-gray-600 mb-4">{vendor.details}</p>
              <div>
                <strong className="text-gray-800">Services Offered:</strong>
                <ul className="mt-2 space-y-1">
                  {vendor.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {service}
                    </li>
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

export default Appreciate;