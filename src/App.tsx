// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Brands from "./pages/Brands";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        {/* Add more routes below as you create them */}
        {/* <Route path="/brands" element={<Brands />} /> */}
        {/* <Route path="/reviews" element={<Reviews />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
