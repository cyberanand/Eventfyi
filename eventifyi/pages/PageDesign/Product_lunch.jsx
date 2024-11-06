import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, DollarSign, CheckCircle, Filter, Plus, Star } from 'lucide-react';

const Product_lunch = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const vendorProfile = {
    name: "Elite Event Solutions",
    rating: 4.8,
    totalEvents: 150,
    successRate: "98%",
    specialization: "Product Launches & Corporate Events"
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Corp Product Launch",
      date: "December 20, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Silicon Valley Convention Center",
      budget: "$15,000",
      attendees: 200,
      // status: "Confirmed",
      category: "product_launch"
    },
    {
      id: 2,
      title: "Annual Innovation Summit",
      date: "December 25, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Digital Hub Arena",
      budget: "$25,000",
      attendees: 350,
      // status: "Pending",
      category: "corporate"
    }
  ];

  const services = [
    {
      title: "Product Launch Events",
      price: "Starting from $10,000",
      features: [
        "Venue Selection & Setup",
        "Product Display Design",
        "Technical Equipment",
        "Marketing Materials",
        "Guest Management"
      ]
    },
    {
      title: "Corporate Events",
      price: "Starting from $15,000",
      features: [
        "Full Event Planning",
        "Catering Services",
        "Audio/Visual Setup",
        "Professional Staff",
        "Event Photography"
      ]
    },
    {
      title: "Press Conferences",
      price: "Starting from $8,000",
      features: [
        "Media Coordination",
        "Press Kit Preparation",
        "Venue Arrangement",
        "Technical Support",
        "Follow-up Reports"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Vendor Profile Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold mb-2">{vendorProfile.name}</h1>
              <div className="flex items-center gap-4 text-gray-600">
                <span className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" />
                  {vendorProfile.rating}
                </span>
                <span>{vendorProfile.totalEvents} Events Completed</span>
                <span>{vendorProfile.successRate} Success Rate</span>
              </div>
            </div>
            {/* <button className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              Create New Event
            </button> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Management Section */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            {/* <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="border-b px-4">
                <div className="flex space-x-6">
                  {['upcoming', 'past', 'pending'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 px-2 border-b-2 font-medium ${activeTab === tab
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)} Events
                    </button>
                  ))}
                </div>
              </div>
            </div> */}

            {/* Events List */}
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{event.title}</h3>

                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2" />
                      {event.attendees} Attendees
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="w-5 h-5 mr-2" />
                      {event.budget}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    {event.location}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                    {/* <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Edit Event
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Our Services</h2>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="border-b last:border-0 pb-6 last:pb-0">
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-blue-600 mb-4">{service.price}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-gray-600">Upcoming Events</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">8</div>
                  <div className="text-sm text-gray-600">This Month</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">4.8</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_lunch;