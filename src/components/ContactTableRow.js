import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import {
  deleteContactInitiate,
  getContactInitiate,
} from "../Redux/contact/contactActions";

const ContactTableRow = ({ contact, number }) => {
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch(deleteContactInitiate(id));
  };

  const editContact = (id) => {
    dispatch(getContactInitiate(id));
  };
  return (
    <tr>
      <th scope="row">{number + 1}</th>
      <td>{contact.name}</td>
      <td>{contact.contact}</td>
      <td>{contact.email}</td>
      <td>{contact.address}</td>
      <td>
        <MDBBtn
          className="m-1"
          color="none"
          style={{ color: "#55acee", border: "none" }}
          onClick={() => editContact(contact.id)}
        >
          <MDBIcon fas icon="pen" size="lg" />
        </MDBBtn>
        <MDBBtn
          className="m-1"
          color="none"
          style={{ color: "#dd4b39", border: "none" }}
          onClick={() => deleteContact(contact.id)}
        >
          <MDBIcon fas icon="trash" size="lg" />
        </MDBBtn>
      </td>
    </tr>
  );
};

export default ContactTableRow;
