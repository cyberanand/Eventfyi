// components/Navbar.js
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="https://i.postimg.cc/mkJh5B1f/logo-evnty.png" alt="Eventify Logo" />
      </div>
      <ul className={styles.navItems}>
        <li>Home</li>
        <li>Types of Events</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
