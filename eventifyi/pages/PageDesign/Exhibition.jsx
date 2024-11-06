import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Search } from 'lucide-react';

const Exhibition = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const exhibitions = [
    {
      id: 1,
      title: "Modern Art Showcase",
      category: "art",
      date: "December 15-20, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Metropolitan Gallery",
      image: "/api/placeholder/400/300",
      description: "Experience contemporary artworks from leading modern artists.",
      featured: true
    },
    {
      id: 2,
      title: "Digital Innovation Expo",
      category: "technology",
      date: "December 18-22, 2024",
      time: "9:00 AM - 8:00 PM",
      location: "Tech Hub Center",
      image: "/api/placeholder/400/300",
      description: "Discover the latest in digital technology and innovation."
    },
    {
      id: 3,
      title: "Cultural Heritage Exhibition",
      category: "culture",
      date: "December 20-25, 2024",
      time: "10:00 AM - 7:00 PM",
      location: "Heritage Museum",
      image: "/api/placeholder/400/300",
      description: "Explore rich cultural traditions and historical artifacts."
    },
    {
      id: 4,
      title: "Photography Masters",
      category: "art",
      date: "December 22-27, 2024",
      time: "11:00 AM - 5:00 PM",
      location: "Light Box Gallery",
      image: "/api/placeholder/400/300",
      description: "Stunning photographs from award-winning photographers."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Exhibitions' },
    { id: 'art', name: 'Art' },
    { id: 'technology', name: 'Technology' },
    { id: 'culture', name: 'Culture' }
  ];

  const filteredExhibitions = selectedCategory === 'all'
    ? exhibitions
    : exhibitions.filter(ex => ex.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <img
          src="/api/placeholder/1920/600"
          alt="Exhibition Banner"
          className="w-full h-96 object-cover opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Featured Exhibitions 2024</h1>
          <p className="text-xl mb-8 text-center max-w-2xl">
            Discover extraordinary exhibitions showcasing art, technology, and culture
          </p>
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search exhibitions..."
              className="w-full py-3 pl-12 pr-4 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${selectedCategory === category.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Exhibition */}
        {selectedCategory === 'all' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Exhibition</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <img
                  src="/api/placeholder/800/600"
                  alt="Featured Exhibition"
                  className="w-full h-full object-cover"
                />
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">{exhibitions[0].title}</h3>
                  <p className="text-gray-600 mb-6">{exhibitions[0].description}</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-3" />
                      {exhibitions[0].date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-3" />
                      {exhibitions[0].time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-3" />
                      {exhibitions[0].location}
                    </div>
                  </div>
                  <button className="mt-8 px-6 py-3 bg-gray-900 text-white rounded-full flex items-center hover:bg-gray-800 transition-colors">
                    Learn More <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Exhibition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExhibitions.map(exhibition => (
            <div
              key={exhibition.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={exhibition.image}
                alt={exhibition.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{exhibition.title}</h3>
                <p className="text-gray-600 mb-4">{exhibition.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exhibition.date}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {exhibition.time}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exhibition.location}
                  </div>
                </div>
                <button className="mt-6 px-4 py-2 bg-gray-900 text-white rounded-full text-sm flex items-center hover:bg-gray-800 transition-colors">
                  View Details <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exhibition;