import React from "react";
import { Link as OtherLink } from "react-router-dom";
import Home from "./Home";
import Features from "./Features";
import Home2 from "./Home2";
import Navbar from "./pages/Navbar";
import University from "./University";
import Companies from "./Companies";
import Join from "./Join";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Home2 />
      <Companies />
      <University />
      <Join />
      <Footer />
    </>
  );
}

export default Main;
