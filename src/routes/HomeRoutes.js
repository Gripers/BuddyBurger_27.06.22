import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Filials from "../pages/Filials";
import Home from "../pages/Home";

const HomeRoutes = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/filials" element={<Filials />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default HomeRoutes;
