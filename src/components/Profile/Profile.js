import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import Property from "../Property/Property";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [userProperties, setUserProperties] = useState({});

  const getUserProperties = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    let userObj = {
      userFirstName: user.firstName,
      userLastName: user.lastName,
      userEmail: user.email,
    };
    setUserData(userObj);
    const result = await axios.get(
      `http://localhost:3001/api/1.0/property/getProperties/${user.id}`,
    );
    console.log("**********", result);
    setUserProperties(result.data);
  };

  useEffect(() => {
    getUserProperties();
  }, []);

  return (
    <div className="profile">
      <h3 className="profile__header">Profile</h3>
      <hr></hr>
      <div className="profile__dataItem">
        <p className="profile__dataItemSpan">First Name:</p>
        <p>{userData.userFirstName}</p>
      </div>
      <div className="profile__dataItem">
        <p className="profile__dataItemSpan">Last Name:</p>
        <p>{userData.userLastName}</p>
      </div>
      <div className="profile__dataItem">
        <p className="profile__dataItemSpan">Email:</p>
        <p>{userData.userEmail}</p>
      </div>
      <h5 className="profile__header">Your Listings</h5>
      <hr></hr>
      <div className="profile__properties">
        {userProperties.length > 0 ? (
          userProperties.map((item, key) => (
            <Property property={item} owner={true} />
          ))
        ) : (
          <p>Your listings will appear here</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
