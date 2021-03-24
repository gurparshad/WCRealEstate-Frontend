import React, { useEffect, useState } from "react";
import "./Property.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Property = ({ property, owner }) => {
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

  const deleteProperty = async (e) => {
    e.preventDefault();
    await axios.delete(
      `http://localhost:3001/api/1.0/property/delete/${property.id}`,
    );
    history.push("/");
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
      <button
        onClick={() => history.push(`/propertyDetails/${property.id}`)}
        className="property__detailsButton"
      >
        Details
      </button>
      {owner ? (
        <button
          className="property__editButton"
          onClick={() => history.push(`/property/editProperty/${property.id}`)}
        >
          Edit
        </button>
      ) : null}
    </div>
  );
};

export default Property;
