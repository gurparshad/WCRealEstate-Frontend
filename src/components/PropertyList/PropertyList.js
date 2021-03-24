import React, { useEffect, useState } from "react";
import axios from "axios";
import Property from "../Property/Property";
import "./PropertyList.css";

const PropertyList = ({ show }) => {
  const [properties, setProperties] = useState([]);

  const getAllProperties = async () => {
    const result = await axios.get(
      "http://localhost:3001/api/1.0/property/getAll",
    );
    setProperties(result.data);
  };

  useEffect(() => {
    getAllProperties();
  }, []);
  return (
    <div className="propertyList">
      {!show ? (
        <div>
          <h3 className="propertyList__header">Availabe properties for sale</h3>
          <hr></hr>
        </div>
      ) : null}

      <div className="propertyList__properties">
        {properties.map((item) => (
          <Property property={item} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
