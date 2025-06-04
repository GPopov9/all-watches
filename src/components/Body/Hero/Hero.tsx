import React from "react";
import styles from "./Hero.module.css";

const Header: React.FC = () => {
  return (
      <div className={styles.container}>
        <p className={styles.p}>Our guide to luxury watches explains the history behind the world’s best brands, teaches you about movements and artistic crafts, and shows you today’s hottest trends.</p>
      </div>
  );
};

export default Header;