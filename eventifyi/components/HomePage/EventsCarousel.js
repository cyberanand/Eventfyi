// components/EventsCarousel.js
import React from "react";
import Slider from "react-slick";
import styles from "./EventsCarousel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Event images for the carousel
const eventImages = {
  Weddings:
    "https://img.freepik.com/free-photo/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual_8353-10047.jpg?semt=ais_hybrid",
  Birthdays:
    "https://img.freepik.com/free-photo/people-outdoors-garden-celebration-senior-birthday-party_23-2150657138.jpg?semt=ais_hybrid",
  Anniversaries:
    "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481480.jpg?semt=ais_hybrid",
  "Baby Showers":
    "https://images.pexels.com/photos/3593432/pexels-photo-3593432.jpeg?cs=srgb&dl=pexels-paola-vasquez-1971169-3593432.jpg&fm=jpg",
  "Educational and Professional Events":
    "https://img.freepik.com/free-photo/speaker-business-meeting-conference-hall_155003-14240.jpg",
  "Sports Events":
    "https://img.freepik.com/premium-photo/exciting-track-field-championship-thrilling-stadium-atmosphere-with-bright-floodlights_209190-137633.jpg?semt=ais_hybrid",
  Concerts:
    "https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg?semt=ais_hybrid",
  Festivals:
    "https://img.freepik.com/free-photo/navratri-highly-detailed-candle-decoration_23-2151193692.jpg?semt=ais_hybrid",
  "House Party":
    "https://img.freepik.com/premium-vector/friends-gather-vibrant-house-party-enjoying-drinks-snacks-festive-outdoor-atmosphere-customizable-flat-illustration-house-party_585735-36162.jpg?semt=ais_hybrid",
};

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

const EventsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const eventTypes = Object.keys(eventImages);

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>Types of Events</h2>
      <Slider {...settings}>
        {eventTypes.map((event, index) => (
          <div className={styles.eventCard} key={index}>
            <img
              src={eventImages[event]}
              alt={event}
              className={styles.eventImage}
            />
            <h3>{event}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventsCarousel;
