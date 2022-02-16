import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import ContactForm from "../components/ContactForm";
import ContactTable from "../components/ContactTable";

const Home = () => {
  return (
    <MDBContainer fluid>
      <MDBRow className="mt-5 d-flex  justify-content-center align-items-center p-2">
        <MDBCol md="6">
          <ContactForm />
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-5 d-flex  justify-content-center align-items-center p-2">
        <MDBCol md="8">
          <ContactTable />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;
