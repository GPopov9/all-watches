// src/components/Header/Header.tsx
import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>ALL WATCHES</Link>

        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
          <Link to="/" className={styles.navLink}>HOME</Link>
          <Link to="/brands" className={styles.navLink}>BRANDS</Link>
          <Link to="/history" className={styles.navLink}>MOVEMENTS</Link>
          <Link to="/reviews" className={styles.navLink}>REVIEWS</Link>
          <Link to="/guides" className={styles.navLink}>BLOG</Link>
          <Link to="/community" className={styles.navLink}>Community</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
