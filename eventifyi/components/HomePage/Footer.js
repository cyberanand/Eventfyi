// components/Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faEnvelope,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex justify-between items-start p-8 bg-gray-800 text-white">
      <div className="flex-1">
        <h4 className="mb-4">Follow Us</h4>
        <ul className="list-none p-0">
          <li className="mb-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:underline"
            >
              <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4 mr-2" />{" "}
              Facebook
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:underline"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 mr-2" />{" "}
              Instagram
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:underline"
            >
              <FontAwesomeIcon icon={faTwitter} className="w-4 h-4 mr-2" />{" "}
              Twitter
            </a>
          </li>
          <li className="mb-2">
            <a
              href="mailto:info@example.com"
              className="flex items-center text-white hover:underline"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-2" />{" "}
              Email
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 text-right">
        <h4 className="mb-4">About Us</h4>
        <p>
          Eventify connects customers with event managers across the country,
          helping you find the perfect planner for your events.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
