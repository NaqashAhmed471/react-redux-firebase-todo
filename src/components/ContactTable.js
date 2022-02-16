import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactsInitiate } from "../Redux/contact/contactActions";
import ContactTableRow from "./ContactTableRow";

const ContactTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsInitiate());
  }, []);

  const contacts = useSelector((state) => state.contactReducer.contacts);

  return (
    <table className="table" bordered="true">
      <thead className="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Conatct</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts?.map((contact, index) => (
          <ContactTableRow contact={contact} key={index} number={index} />
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
