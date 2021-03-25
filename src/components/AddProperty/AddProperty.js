import React, { useState } from "react";
import "./AddProperty.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddProperty = () => {
  const history = useHistory();

  const [property, setProperty] = useState({
    address: "",
    price: "",
    rooms: "",
    builtYear: "",
    ownership: "",
    groundArea: "",
    energyMark: "",
    phone: "",
  });

  const [addressError, setAddressError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [roomsError, setRoomsError] = useState("");
  const [builtYearError, setBuiltYearError] = useState("");
  const [ownershipError, setOwnershipError] = useState("");
  const [groundAreaError, setGroundAreaError] = useState("");
  const [energyMarkError, setEnergyMarkError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [addPropertyError, setAddPropertyError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.id;

    let isValid = false;
    isValid = validate(property);
    if (isValid) {
      const result = await axios.post(
        `http://localhost:3001/api/1.0/property/addProperty/${userId}`,
        property,
      );
      const propertyId = result.data.id;
      console.log("--------------+++++>>>>", propertyId);
      history.push(`/addProperty/addPictures/${propertyId}`);
    }
  };

  const validate = (property) => {
    setAddressError("");
    setPriceError("");
    setRoomsError("");
    setBuiltYearError("");
    setOwnershipError("");
    setGroundAreaError("");
    setEnergyMarkError("");
    setPhoneError("");

    let validationError = false;

    if (property.address === "") {
      setAddressError("*Please Enter the Address");
      validationError = true;
    }

    if (property.price === "" || !property.price.match(/^[0-9]+$/)) {
      setPriceError("*Please Enter a valid price");
      validationError = true;
    }

    if (property.rooms === "" || !property.rooms.match(/^[0-9]+$/)) {
      setRoomsError("*Please Enter a valid number of rooms");
      validationError = true;
    }

    if (property.builtYear === "" || !property.builtYear.match(/^[0-9]+$/)) {
      setBuiltYearError("*Please Enter the Built year of property");
      validationError = true;
    }

    if (property.ownership === "") {
      setOwnershipError("*Please Enter the ownership type");
      validationError = true;
    }

    if (property.groundArea === "" || !property.groundArea.match(/^[0-9]+$/)) {
      setGroundAreaError("*Please Enter the Ground area");
      validationError = true;
    }

    if (property.energyMark === "") {
      setEnergyMarkError("*Please Enter the energy mark");
      validationError = true;
    }

    if (property.phone === "") {
      setPhoneError("*Please Enter the phone");
      validationError = true;
    }

    if (validationError === true) {
      console.log("here here", validationError);
      setAddPropertyError(true);
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <h3 className="addProperty__header">Add Your Property details</h3>
      <hr></hr>
      <form onSubmit={submitHandler} className="addProperty">
        <div className="addProperty__formInner">
          <div className="addProperty__formGroup">
            <label htmlFor="address" className="addProperty__label">
              Address:
            </label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={(e) =>
                setProperty({ ...property, address: e.target.value })
              }
              value={property.address}
              autoComplete="true"
            />
            <p className="addProperty__error">{addressError}</p>
          </div>
          <div className="addProperty__formGroup">
            <label htmlFor="price" className="addProperty__label">
              Price(€):
            </label>
            <input
              type="text"
              name="price"
              id="price"
              onChange={(e) =>
                setProperty({ ...property, price: e.target.value })
              }
              value={property.price}
              autoComplete="true"
            />
            <p className="addProperty__error">{priceError}</p>
          </div>

          <div className="addProperty__formGroup">
            <label htmlFor="rooms" className="addProperty__label">
              Number of rooms:
            </label>
            <input
              type="text"
              name="rooms"
              id="rooms"
              onChange={(e) =>
                setProperty({ ...property, rooms: e.target.value })
              }
              value={property.rooms}
              autoComplete="true"
            />
            <p className="addProperty__error">{roomsError}</p>
          </div>

          <div className="addProperty__formGroup">
            <label htmlFor="builtYear" className="addProperty__label">
              Built Year:
            </label>
            <input
              type="text"
              name="builtYear"
              id="builtYear"
              onChange={(e) =>
                setProperty({ ...property, builtYear: e.target.value })
              }
              value={property.builtYear}
              autoComplete="true"
            />
            <p className="addProperty__error">{builtYearError}</p>
          </div>

          <div className="addProperty__formGroup">
            <label htmlFor="ownership" className="addProperty__label">
              Ownership Type:
            </label>
            <input
              type="text"
              name="ownership"
              id="ownership"
              onChange={(e) =>
                setProperty({ ...property, ownership: e.target.value })
              }
              value={property.ownership}
              autoComplete="true"
            />
            <p className="addProperty__error">{ownershipError}</p>
          </div>

          <div className="addProperty__formGroup">
            <label htmlFor="groundArea" className="addProperty__label">
              Ground Area(m²):
            </label>
            <input
              type="text"
              name="groundArea"
              id="groundArea"
              onChange={(e) =>
                setProperty({ ...property, groundArea: e.target.value })
              }
              value={property.groundArea}
              autoComplete="true"
            />
            <p className="addProperty__error">{groundAreaError}</p>
          </div>

          <div className="addProperty__formGroup">
            <label htmlFor="energyMark" className="addProperty__label">
              Energy Mark:
            </label>
            <input
              type="text"
              name="energyMark"
              id="energyMark"
              onChange={(e) =>
                setProperty({ ...property, energyMark: e.target.value })
              }
              value={property.energyMark}
              autoComplete="true"
            />
            <p className="addProperty__error">{energyMarkError}</p>
          </div>

          <div className="addProperty__formGroup">
            <label htmlFor="phone" className="addProperty__label">
              Phone:
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              onChange={(e) =>
                setProperty({ ...property, phone: e.target.value })
              }
              value={property.phone}
              autoComplete="true"
            />
            <p className="addProperty__error">{phoneError}</p>
          </div>

          {addPropertyError && (
            <p className="addProperty__error">
              Unable to complete your request
            </p>
          )}
          <input
            className="addProperty__submitButton"
            type="submit"
            value="Next"
            data-test="submitInput"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
