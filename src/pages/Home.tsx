// src/pages/Home.tsx
import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Body/Hero/Hero";
import PhotoGrid from "../components/Body/PhotoGrid/PhotoGrid";
import Footer from "../components/Footer/Footer";

const Home: React.FC = () => {

  return (
    <>
      <Header />
      <Hero />
      <PhotoGrid />
      <Footer />
    </>
  );
};

export default Home;
