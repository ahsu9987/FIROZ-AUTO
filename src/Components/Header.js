// import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import logo from "../Pages/HomeAllimages/Alllogo/Firozauto-logo.jpg";
import Image from "react-bootstrap/Image";

function Header() {
  return (
    <>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "lightgray", opacity: "0.8" }}
        fixed="top"
      >
        <Container>
          <Navbar.Toggle  />
          <Image src={logo} className="headerlogo" alt="Logo" />;
          <Navbar.Collapse id="navbarScroll">
            <h4 href="#action1" className="fw-bold">
              FIROZ AUTORIDES
            </h4>
            <Nav className=" ms-auto my-3 my-lg-0 fw-bold " navbarScroll>
              <NavLink to="/" className="me-3 topnavlink">
                HOME
              </NavLink>
              <NavLink to="/Newbikes" className="me-3 topnavlink">
                NEW BIKES
              </NavLink>
              <NavLink to="" className="me-3 topnavlink">
                NEWS&REVIEW
              </NavLink>
              <NavLink to="" className="me-3 topnavlink">
                NEW
              </NavLink>
              <Form className="d-flex">
                {/* <Form.Control
                  type="text"
                  placeholder="Search..."
                  className="me-2"
                  aria-label="Search"
                  onChange={getData}
                /> */}

                <Form.Control
                  type="search"
                  placeholder="Search..."
                  className="me-2"
                  aria-label="Search"
                />

                {/* <Button variant="outline-dark">Search</Button> */}
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
