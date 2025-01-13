import React from "react";
import Hero from "../Components/Hero";
import Product from "../Components/Product";
import Sweets from "../Components/Sweets";
import Scary from "../Components/Scary";
import Ceramic from "../Components/Ceramic";

const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <Sweets />
      <Scary />
      <Ceramic />
    </div>
  );
};

export default Home;
