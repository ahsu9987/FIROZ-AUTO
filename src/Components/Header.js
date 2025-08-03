import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import logo from "../Pages/HomeAllimages/Alllogo/logofirozauto.png";
import Image from "react-bootstrap/Image";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";

function Header() {
  return (
    <>
      {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => (
        <Navbar
          fixed="top"
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3"
          style={{ backgroundColor: "black" }}
        >
          <Container>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Image src={logo} className="headerlogo" alt="Logo" />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h4 className="fw-bold">
                    FIROZ <span className="text-danger">AUTORIDES</span>
                  </h4>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Navbar.Collapse id="navbarScroll">
                <Nav className=" ms-auto my-3 my-lg-0 fw-bold " navbarScroll>
                  <NavLink to="/" className="ms-3 topnavlink">
                    HOME
                  </NavLink>
                  <NavLink to="/Newbikes" className="ms-3 topnavlink">
                    NEW BIKES
                  </NavLink>
                  <NavLink to="" className="ms-3 topnavlink">
                    NEWS&REVIEW
                  </NavLink>
                  <NavLink to="" className="ms-3 topnavlink">
                    NEW
                  </NavLink>
                </Nav>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="dark"
                    id="dropdown-basic "
                    className="ms-2"
                  >
                    ALL TWO-WHEELERS
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{ marginLeft: "10px", borderColor: "black" }}
                  >
                    <Dropdown.Item href="#/action-1" className="text-dark">
                      <a
                        href="/AccessBT"
                        style={{ textDecorationLine: "none" }}
                      >
                        SUZUKI
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2" className="text-dark">
                      HONDA
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3" className="text-dark">
                      YAMAHA
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Navbar.Collapse>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
