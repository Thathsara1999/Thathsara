import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <a
          className={styles.cv}
          href="/cv/Nawanka_Thathsara_CV.pdf"
          download="Nawanka_Thathsara_CV.pdf"
        >
          My Resume
        </a>
        <a className={styles.title} href="/">
          Hi I'm Nawanka Thathsara
        </a>

        {/* Hamburger / Close Icon */}
        <div
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes size={28} color="black" />
          ) : (
            <FaBars size={28} color="black" />
          )}
        </div>
      </div>

      <ul
        className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
