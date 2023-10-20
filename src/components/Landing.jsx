import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavList } from "./Navlist";
import { ProudctList } from "./Productlist";
import { Home } from "./Home";
export const Landing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavList />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodlist" element={<ProudctList />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
