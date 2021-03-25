import React, { useState, useEffect } from "react";
import "./AddPictures.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import DisplayAddedPictures from "../DisplayAddedPIctures/DisplayAddedPictures";

let imageFiles = [];

const AddPictures = () => {
  const history = useHistory();
  const [imageFile, setImageFile] = useState();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [propertyImages, setPropertyImages] = useState([]);
  const { propertyId } = useParams();

  const saveImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", imageFile);
    try {
      console.log("inside try");
      const res = await axios.post(
        `http://localhost:3001/api/1.0/property/addPicture/${propertyId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      const { url } = res.data;
      console.log("url in add picture", url);
      imageFiles.push(url);
      setUploadedFiles(imageFiles);
      setImageFile(null);
    } catch (err) {
      if (err.response.status === 500) {
        console.log("there is problem with server", err);
      } else {
        console.log(err);
      }
    }
  };

  const finish = (e) => {
    e.preventDefault();
    setUploadedFiles([]);
    setImageFile([]);
    history.push("/profile");
    imageFiles = [];
  };

  const getPropertyImages = async () => {
    console.log("property id -->", propertyId);
    const result = await axios.get(
      `http://localhost:3001/api/1.0/property/getAllPictures/${propertyId}`,
    );
    setPropertyImages(result.data);
    console.log(propertyImages);
  };

  useEffect(() => {
    getPropertyImages();
  }, []);

  const removeImage = async (item) => {
    console.log(item);
    console.log("guru----++++++", item);
    await axios.delete(
      `http://localhost:3001/api/1.0/property/deletePictureByUrl/${item.photourl}`,
    );
    console.log("after axios", propertyImages);
    const filteredItems = propertyImages.filter(
      (i) => i.photourl !== item.photourl,
    );
    console.log("after", filteredItems);
    setPropertyImages(filteredItems);
  };

  return (
    <div>
      <h3 className="addPictures__header">Add Pictures</h3>
      <hr></hr>
      <div className="addPicture">
        <form onSubmit={saveImage}>
          <div className="custome-file">
            <input
              type="file"
              className="custome-file-input"
              id="customFile"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </div>
          <input type="submit" value="Add" className="btn btn-danger mt-4" />
        </form>
      </div>
      {uploadedFiles ? <DisplayAddedPictures data={uploadedFiles} /> : null}
      <div className="addPicture__propertyAllImages">
        {propertyImages.length > 0
          ? propertyImages.map((item) => (
              <div className="addPicture__propertyDiv">
                <img
                  className="addPicture__propertyImages"
                  src={`http://localhost:3001/uploads/${item.photourl}`}
                  alt=""
                />
                <button
                  className="addPicture__removeButton"
                  onClick={() => removeImage(item)}
                >
                  Remove
                </button>
              </div>
            ))
          : null}
      </div>
      <div className="addPicture__finishDiv">
        <button className="addPicture__submitButton" onClick={finish}>
          Finish
        </button>
      </div>
    </div>
  );
};

export default AddPictures;
