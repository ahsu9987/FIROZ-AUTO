import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import img1 from "../GixxerSF&Naked/images/gixxernakedblk.png";
import img2 from "../GixxerSF&Naked/images/gixxernakedblue.png";
import img3 from "../GixxerSF&Naked/images/gixxernakedgreen.png";
import Carousel2 from "react-multi-carousel";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import burgmanexbrown from "../Accesspage/images/burgmanexbrown.png";
import Accdrum from "../Accesspage/images/AccessDrummatblue.png";
import Gixxersfblue from "../GixxerSF&Naked/images/Gixxersfblue.png";
import Gixxernakedblk from "../GixxerSF&Naked/images/gixxernakedblk.png";
import accspecial from "../Accesspage/images/accwhite.png";
import Avenisblknew from "../Accesspage/images/Avenisbllknew.png";

const swatches = [
  {
    color: "#000000",
    name: "Glass Sparkle Black",
    image: img1,
  },
  { color: "#4a9ce0", name: "Met Triton Blue and Pearl Glacier White", image: img2 },
  { color: "#92e04a ", name: "Met Oort Gray and Met Lush Green", image: img3 },
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

const GixxerNaked = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className=" mt-5 ">
        <Row className="p-2">
          <Col className="ms-1 bg-white " xs={12} md={4} lg={7}>
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
                    style={{
                      backgroundColor: swatch.color,
                      border: "groove",
                      borderColor: "black",
                    }}
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
            <h1 className="mt-2 text-light">
              Suzuki Gixxer-Naked 155cc Bleutooth Edition
            </h1>
            <p className="text-light">
              The Gixxer SF is a fully-faired premium motorcycle from Suzuki
              that has recently received a design overhaul giving it a fresh
              look. Despite its sporty looks, the motorcycle offers comfortable
              riding stance for everyday riding. It also packs a potent motor
              and agile handling attributes which make it an interesting
              motorcycle.
            </p>
            <h3 className="text-light mt-3 mb-3">SPECIFICATION:-</h3>
            <div className="tabledata">
              <Table striped bordered style={{ border: "groove" }}>
                <tbody>
                  <tr>
                    <td>[Power & Performance]</td>
                  </tr>
                  <tr>
                    <td>
                      Displacement
                      Type:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      155 cc
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Max
                      Power:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      13.4 bhp @ 8000 rpm
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Top
                      Speed:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      125 kmph
                    </td>
                  </tr>
                  <tr>
                    <td>[Brakes & Wheels]</td>
                  </tr>
                  <tr>
                    <td>
                      Braking
                      System:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      Single Channel ABS
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Front Brake
                      Type:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      Disc
                    </td>
                  </tr>
                  <tr>
                    <td>[Dimensions]</td>
                  </tr>
                  <tr>
                    <td>
                      Kerb
                      Weight:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      148 kg
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Fuel Tank
                      Capacity:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      12 L
                    </td>
                  </tr>
                  <tr>
                    <td>[Manufacturer Warranty]</td>
                  </tr>
                  <tr>
                    <td>
                      Standard
                      Warranty:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      30000 km
                    </td>
                  </tr>
                  <tr>
                    <td>[Service & Maintenance Schedule]</td>
                  </tr>
                  <tr>
                    <td>
                      1st
                      Service:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      750-1000 Kms/30-45 Days
                    </td>
                  </tr>
                  <tr>
                    <td>
                      2nd
                      Service:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      3500-4000 Kms/120-135 Days
                    </td>
                  </tr>
                  <tr>
                    <td>
                      3rd
                      Service:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      7500-8000 Kms/210-225 Days
                    </td>
                  </tr>
                  <tr>
                    <td>
                      4th
                      Service:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      9500-12000 Kms
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Button
              variant="outline-success"
              className="mt-4"
              href="https://web.whatsapp.com/"
              style={{ border: "groove" }}
            >
              BOOK NOW
            </Button>
          </Col>
        </Row>
      </div>

      {/* ACCESS & BURGMAN BIKE SECTION SPOTLIGHT*/}
      <div className="bg-light burgmanbikesection cardgrove">
        <h2 className="mb-4 mt-3"> RELATED SUZUKI BIKES OF 2025</h2>

        <Carousel2 responsive={responsive} className="card-container">
          <Card className="col-xs-12 col-sm-6 col-md-4 col-lg-12 ">
            <Link to="/AccDrum">
              <Card.Img
                variant="top"
                id="newaccimagespot"
                src={Accdrum}
                roundedCircle
                fluid
                style={{ cursor: "pointer" }}
              />
            </Link>

            <Card.Body>
              <Card.Title>Access Drum Break Edition</Card.Title>
              <p>Rs 1,05,000/-</p>
              <Link to="/AccDrum">
                <Button variant="outline-info" className="veiwmorebutton">
                  View More
                </Button>
              </Link>
            </Card.Body>
          </Card>

          <Card className="col-xs-12 col-sm-6 col-md-4 col-lg-12  ">
            <Card.Img variant="top" id="newaccimagespot" src={burgmanexbrown} />
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
            <a href="/AccessBT">
              <Card.Img
                variant="top"
                id="newaccimagespot"
                src={accspecial}
                fluid
                style={{ cursor: "pointer" }}
              />
            </a>
            <Card.Body>
              <Card.Title>Access Bleutooth Edition Disc Break</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-dark"
                className="veiwmorebutton"
                href="/AccessBT"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="col-xs-12 col-sm-6 col-md-4 col-lg-12 ">
            <a href="/Avenis">
              <Card.Img
                variant="top"
                id="newaccimagespot"
                src={Avenisblknew}
                fluid
                style={{ cursor: "pointer" }}
              />
            </a>
            <Card.Body>
              <Card.Title>Avenis Disc Break Bleutooth Edition</Card.Title>
              <p>Rs 1,10,000/-</p>
              <Button
                variant="outline-primary"
                className="veiwmorebutton"
                href="/Avenis"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="col-xs-12 col-sm-6 col-md-4 col-lg-12 ">
            <Card.Img variant="top" id="newaccimagespot" src={Gixxersfblue} />
            <Card.Body>
              <Card.Title>Gixxer-SF Bleutooth Edition</Card.Title>
              <p>Rs 2,25,000/-</p>
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
            <Card.Img variant="top" id="newaccimagespot" src={Gixxernakedblk} />
            <Card.Body>
              <Card.Title>Gixxer Naked Bleutooth Edition</Card.Title>
              <p>Rs 2,20,000/-</p>
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
        <Button className="mt-3 mb-3" variant="outline-primary">
          More
        </Button>
      </div>
    </>
  );
};

export default GixxerNaked;
