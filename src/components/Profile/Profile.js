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
      <p>{userData.userFirstName}</p>
      <h4>Your Listings</h4>
      <div className="profile__properties">
        {userProperties.length > 0
          ? userProperties.map((item, key) => (
              <Property property={item} owner={true} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Profile;
