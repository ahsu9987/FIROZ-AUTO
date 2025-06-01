import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import img1 from "../Accesspage/images/Avenismatblk.png";
import img2 from "../Accesspage/images/Avenisblk.png";
import img3 from "../Accesspage/images/Avenisred.png";
import img4 from "../Accesspage/images/Aveniswhite.png";
import img5 from "../Accesspage/images/Avenisyellow.png";
import Carousel2 from "react-multi-carousel";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import burgmanexbrown from "../Accesspage/images/burgmanexbrown.png";
import Accdrum from "../Accesspage/images/AccessDrummatblue.png";
import Gixxersfblue from "../Accesspage/images/Gixxersfblue.png";
import Gixxernakedblk from "../Accesspage/images/gixxernakedblk.png";
import Container from "react-bootstrap/Container";
import avenismeter from "../Accesspage/images/avenismeter.png";
import keyignition from "../Accesspage/images/KeyIgnition.png";
import Accordion from "react-bootstrap/Accordion";
import avenisfrontwheel from "../Accesspage/images/avenisFrontAlloyWheel.png";
import AvenisAlloywheel from "../Accesspage/images/avenisFrontWheel.png";
import AvenisUnderseatStorage from "../Accesspage/images/avenisUnderseatstorage.png";
import AvenisSideStand from "../Accesspage/images/avenisidestand.png";
import AvenisFrontLamp from "../Accesspage/images/AvenisDaytimeLamp.png";
import AvenisKickstart from "../Accesspage/images/Kickstarter.png";
import AvenisKillswitc from "../Accesspage/images/KillSwitch.png";
import accspecial from "../Accesspage/images/accwhite.png"


const swatches = [
  { color: "#28282B", name: "Glossy Sparkle Black", image: img1 },
  { color: "#000000", name: "Glossy Sparkle Black", image: img2 },
  { color: "#FE1D37", name: "Glossy Pearl Mira Red", image: img3 },
  { color: "#F6F6F6", name: "Glossy Pearl Mira Red", image: img4 },
  { color: "#FFEA4E", name: "Champion Yellow", image: img5 },
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

const Avenis = () => {
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
            <h1 className="mt-2">Suzuki Avenis 125 Bleutooth Edition</h1>
            <p className=" text-dark">
              The Suzuki Avenis 125 is a modern sporty scooter that has been developed to take on the TVS Ntorq 125.    <br></br>
              It gets aggressive styling, good number of features and an engine that is known to offer excellent refinement and performance.<br></br>
              But the scooter is priced on the higher side. <br></br>{" "}
              BLUETOOTH® ENABLED DIGITAL CONSOLE
            </p>
            <h3 className=" text-dark">SPECIFICATION:-</h3>
            <div className="tabledata">
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>[Power & Performance]</td>
                  </tr>
                  <tr>
                    <td>
                      Displacement
                      Type:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      125CC
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Max
                      Power:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      8.3 bhp @ 6500 rpm
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Top
                      Speed:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      90 kmph
                    </td>
                  </tr>
                  <tr>
                    <td>[Brakes & Wheels]</td>
                  </tr>
                  <tr>
                    <td>
                      Braking
                      System:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      CBS
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
                      106 kg
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Fuel Tank
                      Capacity:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      5.2 litres
                    </td>
                  </tr>
                  <tr>
                    <td>[Manufacturer Warranty]</td>
                  </tr>
                  <tr>
                    <td>
                      Standard
                      Warranty:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      2 year
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
            >
              BOOK NOW
            </Button>
          </Col>
        </Row>
      </div>

      <Accordion defaultActiveKey="0">
        <Accordion.Item>
          <Accordion.Header>ALL PARTS IMAGES</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center">Avenis meter BT</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={avenismeter}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer" }}
                  />
                </Col>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center mt-3">
                    key-ignition
                  </p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={keyignition}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer" }}
                  />
                </Col>
              </Row>

              <Row>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center mt-3">Avenis front-wheel</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={avenisfrontwheel}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer" }}
                  />
                </Col>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center mt-3">Avenis front Alloy-wheel</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={AvenisAlloywheel}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer" }}
                  />
                </Col>
              </Row>

              <Row>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center mt-3">Avenis UnderseatStorage</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={AvenisUnderseatStorage}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer" }}
                  />
                </Col>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center mt-3">Avenis SideStand</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={AvenisSideStand}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer" }}
                  />
                </Col>
              </Row>

              <Row>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center mt-3">Avenis FrontLamp</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={AvenisFrontLamp}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer" }}
                  />
                </Col>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center mt-3">Avenis Kickstart</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={AvenisKickstart}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer" }}
                  />
                </Col>
              </Row>

              <Row>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center mt-3">Avenis Killswitc</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={AvenisKillswitc}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer" }}
                  />
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* ACCESS & BURGMAN BIKE SECTION SPOTLIGHT*/}
      <div className="bg-light burgmanbikesection">
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
              <Link to="/BurgmanEx">
            <Card.Img variant="top" id="newaccimagespot" src={burgmanexbrown} />
            </Link>
            <Card.Body>
              <Card.Title>Burgman Ex Bleutooth Top Edition</Card.Title>
              <p>Rs 1,52,000/-</p>
              <Button
                variant="outline-secondary"
                className="veiwmorebutton"
                href="/BurgmanEx"
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
                src={Accdrum}
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
        <Button className="mt-2" variant="outline-primary">
          More
        </Button>
      </div>
    </>
  );
};

export default Avenis;
