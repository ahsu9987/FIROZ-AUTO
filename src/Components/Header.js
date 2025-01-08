import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <>
      <Navbar expand="lg"  style={{backgroundColor:'lightgray', opacity:'0.8'}} fixed="top">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
           
              <h4 href="#action1" className="fw-bold">FIROZ AUTORIDES</h4>

            <Nav
              className=" ms-auto my-3 my-lg-0 fw-bold "
              navbarScroll
            >
              <Nav.Link href="#action2" className="me-3">HOME</Nav.Link>
              <Nav.Link href="#action1" className="me-3">NEW BIKES</Nav.Link>
              <Nav.Link href="#action1" className="me-3">NEWS&REVIEW</Nav.Link>
              <Nav.Link href="#action2" className="me-3">NEW</Nav.Link>
              <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}

    

    </>
  );
}

export default Header;
