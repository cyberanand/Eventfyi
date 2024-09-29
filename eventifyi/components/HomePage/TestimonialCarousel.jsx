"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Jim',
    quote: "Bark was easy to use and I received sensible quotes. I had a professional visit the next day and he did an excellent job.",
    image: '/wedding.jpeg',
  },
  {
    id: 1,
    name: 'Jim',
    quote: "Bark was easy to use and I received sensible quotes. I had a professional visit the next day and he did an excellent job.",
    image: '/assests/google.png',
  },
  {
    id: 1,
    name: 'Jim',
    quote: "Bark was easy to use and I received sensible quotes. I had a professional visit the next day and he did an excellent job.",
    image: '/assests/google.png',
  },
  {
    id: 1,
    name: 'Jim',
    quote: "Bark was easy to use and I received sensible quotes. I had a professional visit the next day and he did an excellent job.",
    image: '/assests/google.png',

  },
  {
    id: 1,
    name: 'Jim',
    quote: "Bark was easy to use and I received sensible quotes. I had a professional visit the next day and he did an excellent job.",
    image: '/assests/google.png',

  },
  {
    id: 1,
    name: 'Jim',
    quote: "Bark was easy to use and I received sensible quotes. I had a professional visit the next day and he did an excellent job.",
    image: '/assests/google.png',

  },
  // Add 9 more testimonials here to match the image
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getImageSize = (index) => {
    const diff = Math.abs(index - activeIndex);
    if (diff === 0) return 'w-24 h-24';
    if (diff === 1) return 'w-16 h-16';
    if (diff === 2) return 'w-12 h-12';
    return 'w-10 h-10';
  };

  const getImagePosition = (index) => {
    const positions = [
      'left-1/4 -translate-x-1/2 top-8',
      'left-1/3 -translate-x-1/2 top-4',
      'left-1/2 -translate-x-1/2 top-0',
      'left-2/3 -translate-x-1/2 top-4',
      'left-3/4 -translate-x-1/2 top-8',
      'right-3/4 translate-x-1/2 top-8',
      'right-2/3 translate-x-1/2 top-4',
      'right-1/2 translate-x-1/2 top-0',
      'right-1/3 translate-x-1/2 top-4',
      'right-1/4 translate-x-1/2 top-8',
    ];
    return positions[index];
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-24">
      {/* Profile Images */}
      <div className="relative h-32 mb-16">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute rounded-full overflow-hidden transition-all duration-300 ${getImageSize(index)} ${getImagePosition(index)}`}
            style={{
              zIndex: testimonials.length - Math.abs(index - activeIndex),
              opacity: Math.abs(index - activeIndex) > 2 ? 0.7 : 1,
            }}
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="text-center px-4">
        <p className="text-2xl font-medium text-gray-800 mb-4 max-w-2xl mx-auto">
          &quot;{testimonials[activeIndex].quote}&quot;
        </p>

        {/* <p className="text-2xl font-medium text-gray-800 mb-4 max-w-2xl mx-auto">
          "{testimonials[activeIndex].quote}"
        </p> */}
        <p className="text-lg font-semibold text-gray-600">
          {testimonials[activeIndex].name}
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full mx-1 focus:outline-none transition-all duration-300 ${index === activeIndex ? 'bg-blue-500 w-4' : 'bg-gray-300'
              }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;