// src/components/Footer/Footer.tsx
import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4 className={styles.title}>Explore</h4>
          <ul className={styles.linkList}>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/brands">Contact Us</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/history">Watch History</Link></li>
          </ul>
        </div>



        <div className={styles.column}>
          <h4 className={styles.title}>Follow Us</h4>
          <ul className={styles.socialList}>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.title}>Newsletter</h4>
          <p className={styles.text}>Get the latest news and trends in horology.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Your email" className={styles.input} />
            <button type="submit" className={styles.button}>Subscribe</button>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Watches Wiki. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
