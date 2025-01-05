import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar expand="lg"  style={{backgroundColor:'lightgray', opacity:'0.8'}} fixed="top">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto  my-1 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <h4 href="#action1" className="fw-bold">FIROZ AUTORIDES</h4>
            </Nav>

            <Nav
              className=" ms-auto my-3 my-lg-0 fw-bold "
              navbarScroll
            >
              <Nav.Link href="#action2" className="me-4">HOME</Nav.Link>
              <Nav.Link href="#action1" className="me-4">NEW BIKES</Nav.Link>
              <Nav.Link href="#action1" className="me-4">NEWS&REVIEW</Nav.Link>
              <Nav.Link href="#action2" className="me-4">NEW</Nav.Link>
              <Nav.Link href="#action1" className="me-4">Home</Nav.Link>
              <Nav.Link href="#action2" className="me-4">MORE</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}

    </>
  );
}

export default Header;
