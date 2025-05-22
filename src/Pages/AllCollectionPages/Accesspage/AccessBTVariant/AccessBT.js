import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import img1 from "./images/Accicegreenmat.png";
import img2 from "./images/Accmatblue.png";
import img3 from "./images/AccBeige.png";
import img4 from "./images/accwhite.png";
import Nav from "react-bootstrap/Nav";
import Carousel2 from "react-multi-carousel";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const swatches = [
  { color: "#2596be", name: "MAT AQUA SILVER", image: img1 },
  { color: "#13183C", name: "MATBLUE", image: img2 },
  { color: "#C89A28", name: "BEIGE WHITE", image: img3 },
  { color: "#EEEEEE", name: "WHITE", image: img4 },
];


const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

const AccessBT = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className=" mt-5 ">
        <Row className="p-2">
          <Col className="ms-1 " xs={12} md={4} lg={7}>
            <div className="product-container">
              <div className="product-header">
                <span>{`${currentIndex + 1}/${swatches.length}`}</span>
                <span className="color-name">
                  {swatches[currentIndex].name}
                </span>
              </div>

              <img
                src={swatches[currentIndex].image}
                alt="Product"
                class="img-fluid rounded mx-auto d-block "
              />
              <div className="swatch-group">
                {swatches.map((swatch, index) => (
                  <div
                    key={index}
                    className={`swatch ${
                      currentIndex === index ? "selected" : ""
                    }`}
                    style={{ backgroundColor: swatch.color }}
                    onClick={() => setCurrentIndex(index)}
                  >
                    {currentIndex === index && (
                      <span className="checkmark">✓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col xs={12} md={4} lg={4} className="p-3">
            <h1 className="mt-2">
              Access Bleutooth Edition Disc Break
            </h1>
            <p className=" text-dark">
              E20 COMPLIANT / LED HEADLAMP / LED POSITION LIGHTS /<br></br>
              SIDE STAND INTERLOCK / PREMIUM CHROME EXTERNAL FUEL LID/ <br></br>{" "}
              BLUETOOTH® ENABLED DIGITAL CONSOLE
            </p>
            <h3 className=" text-dark">SPECIFICATION:-</h3>
            <div className="tabledata">
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>
                      Engine
                      Type:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      4- Stroke, 1-Cylinder, Air Cooled
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Fuel Tank
                      Capacity:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      5 Litr{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Starter
                      System:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kick
                      and Electric
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Button
              variant="outline-success"
              className="mt-4"
              href="https://web.whatsapp.com/"
            >
              BOOK NOW
            </Button>
          </Col>
        </Row>
      </div>


      {/* ACCESS & BURGMAN BIKE SECTION SPOTLIGHT*/}
      <div className="bg-light burgmanbikesection">
        <h2 className=""> RELATED SUZUKI BIKES OF 2025</h2>
        <Nav id="nav1" className="  my-3 my-lg-0   navtxt" navbarScroll>
          <Nav.Link href="">HOME</Nav.Link>
          <Nav.Link href="ch2">NEWBIKES</Nav.Link>
          <Nav.Link href="#action1">NEWS</Nav.Link>
          <Nav.Link href="#action2">NEW1</Nav.Link>
        </Nav>

        <Carousel2 responsive={responsive} className="card-container">
          <Card className="col-xs-12 col-sm-6 col-md-4 col-lg-12 ">
            <Link to="/AccessBT">
              <Card.Img
                variant="top"
                id="newaccimagespot"
                src={img4}
                 roundedCircle
                    fluid
                style={{ cursor: "pointer" }}
              />
            </Link>

            <Card.Body>
              <Card.Title>Access Bleutooth Edition Disc Break</Card.Title>
              <p>Rs 1,25,000/-</p>
              <Link to="/AccessBT">
                <Button variant="outline-info" className="veiwmorebutton">
                  View More
                </Button>
              </Link>
            </Card.Body>
          </Card>

          <Card  className="col-xs-12 col-sm-6 col-md-4 col-lg-12 ">
            <a href="/AccessBTBlue">
              <Card.Img
                variant="top"
                id="newaccimagespot"
                src={img2}
                fluid
                style={{ cursor: "pointer" }}
              />
            </a>
            <Card.Body>
              <Card.Title>Access Special Edition Disc Break</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-dark"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="col-xs-12 col-sm-6 col-md-4 col-lg-12 ">
            <a href="/AccessBTBlue">
              <Card.Img
                variant="top"
                id="newaccimagespot"
                src={img1}
                fluid
                style={{ cursor: "pointer" }}
              />
            </a>
            <Card.Body>
              <Card.Title>Access Drum Break Edition</Card.Title>
              <p>Rs 1,05,000/-</p>
              <Button
                variant="outline-primary"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="col-xs-12 col-sm-6 col-md-4 col-lg-12  ">
            <Card.Img variant="top" id="newaccimagespot" src={img3} />
            <Card.Body>
              <Card.Title>Burgman Ex Bleutooth Top Edition</Card.Title>
              <p>Rs 1,52,000/-</p>
              <Button
                variant="outline-secondary"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="col-xs-12 col-sm-6 col-md-4 col-lg-12 ">
            <Card.Img variant="top" id="newaccimagespot" src={img1} />
            <Card.Body>
              <Card.Title>Burgman Bleutooth Edition</Card.Title>
              <p>Rs 1,35,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="col-xs-12 col-sm-6 col-md-4 col-lg-12 ">
            <Card.Img
              variant="top"
              id="newaccimagespot"
              src={img2}
            />
            <Card.Body>
              <Card.Title>Burgman Non Bleutooth Edition</Card.Title>
              <p>Rs 1,30,000/-</p>
              <Button
                variant="outline-dark"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>
        </Carousel2>
        <Button className="mt-2" variant="outline-primary">
          More
        </Button>
      </div>

    </>
  );
};

export default AccessBT;
