import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Service from "./components/service/Service.jsx";
import Banner from "./components/banner/Banner.jsx";
import Footer from "./components/footer/Footer.jsx";

export function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Service />
        <Banner />
        <Footer />
      </Router>
    </div>
  );
}
