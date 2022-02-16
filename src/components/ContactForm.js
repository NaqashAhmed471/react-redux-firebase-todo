import React, { useState, useEffect } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBTypography,
} from "mdb-react-ui-kit";
import {
  addContactInitiate,
  updateContactInitiate,
} from "../Redux/contact/contactActions";
import { useDispatch, useSelector } from "react-redux";

const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState(null);
  const { name, contact, email, address } = contactInfo;

  const dispatch = useDispatch();

  const singleContact = useSelector((state) => state.contactReducer.contact);
  const contacts = useSelector((state) => state.contactReducer.contacts);
  let filterContact = [];
  if (singleContact) {
    filterContact = contacts.filter(
      (contact) => contact.name === singleContact.name
    );
  }
  const updateContactId = filterContact[0]?.id;

  useEffect(() => {
    if (singleContact) {
      setContactInfo({ ...singleContact });
      setEditMode(true);
    }
  }, [singleContact]);

  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !contact || !email || !address) {
      setError("Please fill all fields");
    } else {
      if (!editMode) {
        dispatch(addContactInitiate(contactInfo));
        setContactInfo({ name: "", contact: "", email: "", address: "" });
        setError("");
      } else {
        dispatch(updateContactInitiate(updateContactId, contactInfo));
        setContactInfo({ name: "", contact: "", email: "", address: "" });
        setEditMode(false);
        setError("");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <MDBRow className="mb-4">
        <MDBTypography variant="h5">
          {!editMode ? "Add Contact" : "Update Contact"}
        </MDBTypography>
        {error && <h4 style={{ color: "red" }}>{error}</h4>}
        <MDBCol>
          <MDBInput
            id="name"
            label="Name"
            value={name || ""}
            type="text"
            onChange={handleChange}
          />
        </MDBCol>
        <MDBCol>
          <MDBInput
            id="contact"
            label="Contact"
            value={contact || ""}
            type="number"
            onChange={handleChange}
          />
        </MDBCol>
      </MDBRow>
      <MDBInput
        className="mb-4"
        type="email"
        id="email"
        label="Email"
        value={email || ""}
        onChange={handleChange}
      />
      <MDBInput
        className="mb-4"
        type="text"
        id="address"
        label="Address"
        value={address || ""}
        onChange={handleChange}
      />

      <MDBBtn
        type="submit"
        className="mb-4"
        color={!editMode ? "success" : "warning"}
      >
        {!editMode ? "Submit" : "Update"}
      </MDBBtn>
    </form>
  );
};

export default ContactForm;
