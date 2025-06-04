// src/components/PhotoGrid.tsx
import React from "react";
import styles from "./PhotoGrid.module.css";
import { brandImages } from '../../../assets/images/images';

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Omega Speedmaster",
    description: "Iconic chronograph known for its space legacy.",
    imageUrl: "/assets/images/watch.jpg",
  },
  {
    id: 2,
    title: "Rolex Submariner",
    description: "The classic diver’s watch for any occasion.",
    imageUrl: "/assets/images/watch.jpg",
  },
  {
    id: 3,
    title: "Seiko Presage",
    description: "A perfect blend of tradition and technology.",
    imageUrl: "/assets/images/watch.jpg",
  },
  {
    id: 4,
    title: "Tag Heuer Carrera",
    description: "Born from motor racing heritage.",
    imageUrl: "/assets/images/watch.jpg",
  },
];

const PhotoGrid: React.FC = () => {
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <div key={card.id} className={styles.card}>
          <img src={brandImages.watch} alt={card.title} className={styles.photo} />
          <div className={styles.photo_content}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
