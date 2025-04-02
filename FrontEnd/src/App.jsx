import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Collection from "./Pages/Collection";
import PlaceOrder from "./Pages/PlaceOrder";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Orders from "./Pages/Orders";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./Pages/Verify";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
        <Route path="/Product/:productId" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
