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

  return (
    <div className="addPicture">
      <h3>Add Pictures</h3>
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
      {uploadedFiles ? <DisplayAddedPictures data={uploadedFiles} /> : null}
      <button onClick={finish}>Finish</button>
    </div>
  );
};

export default AddPictures;
