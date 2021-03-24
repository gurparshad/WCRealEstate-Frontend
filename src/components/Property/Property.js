import React, { useEffect, useState } from "react";
import "./Property.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Property = ({ property }) => {
  const history = useHistory();
  const [photo, setPhoto] = useState();
  const getPropertyImage = async () => {
    const result = await axios.get(
      `http://localhost:3001/api/1.0/property/getAllPictures/${property.id}`,
    );
    if (result.data.length > 0) {
      const photoUrl = result.data[0].photourl;
      setPhoto(photoUrl);
    }
  };

  useEffect(() => {
    getPropertyImage();
  }, []);
  return (
    <div className="property">
      <img
        src={`http://localhost:3001/uploads/${photo}`}
        alt="propertyImage"
        className="property__img"
      />
      <p>Apartment for sale {property.rooms} Rooms</p>
      <button onClick={() => history.push(`/propertyDetails/${property.id}`)}>
        Details
      </button>
    </div>
  );
};

export default Property;
