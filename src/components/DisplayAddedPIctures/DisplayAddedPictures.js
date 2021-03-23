import React, { useState, useEffect } from "react";
import "./DisplayAddedPictures.css";

const DisplayAddedPictures = ({ data }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(data);
  }, [data]);
  return (
    <div className="images">
      {images.map((item) => (
        <div>
          <img
            src={`http://localhost:3001/uploads/${item}`}
            alt="propertyImage"
            style={{ height: "300px", width: "300px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayAddedPictures;
