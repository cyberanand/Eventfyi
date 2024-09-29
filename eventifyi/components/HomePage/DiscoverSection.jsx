import React from 'react';

const categories = [
  { name: 'Home & Garden', icon: '🏠' },
  { name: 'Health & Wellbeing', icon: '❤️' },
  { name: 'Weddings & Events', icon: '🗓️' },
  { name: 'Business Services', icon: '🏢' },
  { name: 'Lessons & Training', icon: '📚' },
  { name: 'Other services', icon: '⋯' },
];

const DiscoverSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Discover</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-2">
              <span className="text-2xl">{category.icon}</span>
            </div>
            <p className="text-center text-sm font-medium text-gray-600">
              {category.name.split('&')[0]}
              <br />
              {category.name.includes('&') && `& ${category.name.split('&')[1]}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverSection;