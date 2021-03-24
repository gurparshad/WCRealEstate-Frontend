import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./PropertyDetails.css";
// import { Carousel } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PropertyDetails = () => {
  const history = useHistory();
  const [details, setDetails] = useState({});
  const [photos, setPhotos] = useState([]);
  const { propertyId } = useParams();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const getData = async () => {
    const result = await axios.get(
      `http://localhost:3001/api/1.0/property/getProperty/${propertyId}`,
    );
    setDetails(result.data);
    const res = await axios.get(
      `http://localhost:3001/api/1.0/property/getAllPictures/${propertyId}`,
    );
    setPhotos(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h3 className="propertyDetails__header">Property Details</h3>
      <hr></hr>
      <div className="propertyDetails">
        <div className="propertyDetails__data">
          <div className="propertyDetails__dataItem">
            <p className="propertyDetails__dataItemSpan">Address:</p>
            <p>{details.address}</p>
          </div>
          <div className="propertyDetails__dataItem">
            <p className="propertyDetails__dataItemSpan">Price:</p>
            <p>{details.price}</p>
          </div>
          {details.rooms ? (
            <div className="propertyDetails__dataItem">
              <p className="propertyDetails__dataItemSpan">Rooms:</p>
              <p>{details.rooms}</p>
            </div>
          ) : null}

          <div className="propertyDetails__dataItem">
            <p className="propertyDetails__dataItemSpan">Built Year:</p>
            <p>{details.builtYear}</p>
          </div>
          <div className="propertyDetails__dataItem">
            <p className="propertyDetails__dataItemSpan">Ownership:</p>
            <p>{details.ownership}</p>
          </div>
          <div className="propertyDetails__dataItem">
            <p className="propertyDetails__dataItemSpan">Ground Area:</p>
            <p>{details.groundArea}</p>
          </div>
          <div className="propertyDetails__dataItem">
            <p className="propertyDetails__dataItemSpan">Energy Mark:</p>
            <p>{details.energyMark}</p>
          </div>
          <div className="propertyDetails__dataItem">
            <p className="propertyDetails__dataItemSpan">Owner's Contact:</p>
            <p>{details.phone}</p>
          </div>
        </div>
        <div className="propertyDetails__images">
          <Carousel
            responsive={responsive}
            className="propertyDetails__carousel"
          >
            {photos.map((item) => (
              <div style={{ textAlign: "center" }}>
                <img
                  src={`http://localhost:3001/uploads/${item.photourl}`}
                  alt="PropertyImage"
                  className="propertyDetails__carouselImage"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
