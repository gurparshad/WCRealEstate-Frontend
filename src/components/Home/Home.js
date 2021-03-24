import "./Home.css";
import React from "react";
import Banner from "../Banner/Banner";
import PropertyList from "../PropertyList/PropertyList";

const Home = () => {
  return (
    <div>
      <Banner />
      <PropertyList show={true} />
    </div>
  );
};

export default Home;
