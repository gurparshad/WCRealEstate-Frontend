import axios from "axios";
import React, { useState, useEffect } from "react";
import "./DisplayAddedPictures.css";

const DisplayAddedPictures = ({ data }) => {
  const [images, setImages] = useState([]);

  // const removeImage = async (item) => {
  //   console.log(item);
  //   console.log("guru----++++++", item);
  //   await axios.delete(
  //     `http://localhost:3001/api/1.0/property/deletePictureByUrl/${item}`,
  //   );
  //   console.log("after axios", images);
  //   const filteredItems = images.filter((i) => i !== item);
  //   console.log("after", filteredItems);
  //   setImages(filteredItems);
  // };

  useEffect(() => {
    setImages(data);
  }, [data]);
  return (
    <div className="images">
      {images.map((item, key) => (
        <div>
          <img
            src={`http://localhost:3001/uploads/${item}`}
            alt="propertyImage"
            style={{ height: "300px", width: "300px" }}
          />
          {/* <button onClick={() => removeImage(item)}>Remove</button> */}
        </div>
      ))}
    </div>
  );
};

export default DisplayAddedPictures;
