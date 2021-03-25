import React from "react";
import banner2 from "../../banner2.jpg";
import banner from "../../banner.jpg";
import banner3 from "../../banner3.jpg";
import banner4 from "../../banner4.jpg";
import "./Banner.css";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banner">
      <h2 className="banner__text">Find Your Dream Home Today</h2>
      <Carousel autoPlay={true} interval={2000}>
        <Carousel.Item>
          <img className="banner__img" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Most Comfertable Houses</h3>
            <p>All our listings are brand new and confertable.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner__img" src={banner3} alt="First slide" />
          <Carousel.Caption>
            <h3>Brand New Listings</h3>
            <p>Find your next home right here, right now.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner__img" src={banner4} alt="Second slide" />

          <Carousel.Caption>
            <h3>Most Comfertable Houses</h3>
            <p>All our listings are brand new and confertable.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner__img" src={banner} alt="Third slide" />

          <Carousel.Caption>
            <h3>At Best Price</h3>
            <p>
              We have many different options for you that will fit your budget.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h2 className="banner__text">Checkout Our New Listings</h2>
    </div>
  );
};

export default Banner;
