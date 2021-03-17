import React from "react";
import banner from "../../banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <h2 className="banner__text">Find Your Dream House Today</h2>
      <img src={banner} alt="banner" className="banner__img" />
      <h2 className="banner__text">Checkout Our New Listings</h2>
    </div>
  );
};

export default Banner;
