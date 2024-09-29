'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Team Building Event',
    image: '/assests/Team.jpeg',
    isOnline: true,

  },
  {
    title: 'Sport',
    image: '/assests/sport.jpeg',
    isOnline: true,

  },
  {
    title: 'Product Launch',
    image: '/assests/product_launch.jpeg',
    isOnline: false,

  },
  {
    title: 'Festival',
    image: '/assests/festival.jpeg',
    isOnline: false,

  },
  {
    title: 'Exibition',
    image: '/assests/exibition.jpeg',
    isOnline: false,

  },
  {
    title: 'Conference',
    image: '/assests/Conference.jpeg',
    isOnline: false,

  },
  {
    title: 'Competition',
    image: '/assests/competition.jpeg',
    isOnline: false,

  },
  {
    title: 'Wedding Anniversary',
    image: '/assests/weeding_anniversary.jpeg',
    isOnline: false,

  },
  {
    title: 'Birthday',
    image: '/assests/birthday.jpeg',
    isOnline: false,

  },
  {
    title: 'Apprecitate Event',
    image: '/assests/Apprecitate_Event.jpeg',
    isOnline: false,

  },
  {
    title: 'wedding',
    image: '/assests/wedding.jpeg',
    isOnline: false,

  },

  // ... other services
];

const ServiceCard = ({ title, image, isOnline, isSale }) => (
  <div className={`flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden mx-3 my-4 ${isSale ? 'transform -translate-y-2' : ''}`}>
    <div className="relative h-48 w-full">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-4  bg-blue-950 ">
      <h3 className="text-sm text-center text-white font-semibold">{title}</h3>


    </div>
  </div>
);

const ServiceGrid = () => {
  const scrollRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          setScrollDirection(-1);
          setIsScrolling(false);
          setTimeout(() => setIsScrolling(true), 1000);
        } else if (scrollLeft <= 1) {
          setScrollDirection(1);
          setIsScrolling(false);
          setTimeout(() => setIsScrolling(true), 1000);
        }
      }
    };

    const intervalId = setInterval(() => {
      if (scrollRef.current && isScrolling) {
        scrollRef.current.scrollBy({ left: scrollDirection, behavior: 'smooth' });
      }
    }, 20);

    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      clearInterval(intervalId);
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scrollDirection, isScrolling]);

  return (
    <div className="w-full overflow-hidden py-2">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;