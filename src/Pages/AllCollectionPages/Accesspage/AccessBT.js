import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import img1 from "../Accesspage/images/Accicegreenmat.png";
import img2 from "../Accesspage/images/Accmatblue.png";
import img3 from "../Accesspage/images/AccBeige.png";
import img4 from "../Accesspage/images/accwhite.png";
import img5 from "../Accesspage/images/accblack.png";
import Carousel2 from "react-multi-carousel";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import burgmanexbrown from "../Accesspage/images/burgmanexbrown.png";
import Avenisimg from "../Accesspage/images/Avenisbllknew.png";
import Gixxersfblue from "../GixxerSF&Naked/images/Gixxersfblue.png";
import Gixxernakedblk from "../GixxerSF&Naked/images/gixxernakedblk.png";
import Container from "react-bootstrap/Container";
import TFTMETER from "../Accesspage/images/TFT Meter.png";
import Normalmeter from "../Accesspage/images/Normalmeter.png";
import Accordion from "react-bootstrap/Accordion";
import starterbtn from "../Accesspage/images/rightsidestarter.png";
import HazardLights from "../Accesspage/images/HazardLights.png";
import usbcharger from "../Accesspage/images/usbcharger.png";
import FrontHook from "../Accesspage/images/FrontHook.png";
import GloveBox from "../Accesspage/images/GloveBox.png";
import UnderseatStorage from "../Accesspage/images/UnderseatStorage.png";
import HeatProtector from "../Accesspage/images/HeatProtector.png";
import frontwheel from "../Accesspage/images/frontwheel.png";
import frontalloywheel from "../Accesspage/images/frontalloywheel.png";
import CloseFuel from "../Accesspage/images/CloseFuelLid.png";

const swatches = [
  { color: "#2596be", name: "MAT AQUA SILVER", image: img1 },
  { color: "#13183C", name: "MATBLUE", image: img2 },
  { color: "#C89A28", name: "BEIGE WHITE", image: img3 },
  { color: "#EEEEEE", name: "WHITE", image: img4 },
  { color: "#28282B", name: "MAT BLACK", image: img5 },
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
        <Row className="p-2 ">
          <Col className="ms-1 bg-white" xs={12} md={4} lg={7}>
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
              <div className="swatch-group" >
                {swatches.map((swatch, index) => (
                  <div
                    key={index}
                    className={`swatch ${
                      currentIndex === index ? "selected" : ""
                    }`}
                    style={{ backgroundColor: swatch.color , border: "groove",borderColor:"black" }}
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
            <h1 className="mt-2 text-light">Access Bleutooth Edition Disc Break</h1>
            <p className=" text-light">
              E20 COMPLIANT / LED HEADLAMP / LED POSITION LIGHTS /<br></br>
              SIDE STAND INTERLOCK / PREMIUM CHROME EXTERNAL FUEL LID/ <br></br>{" "}
              BLUETOOTH® ENABLED DIGITAL CONSOLE
            </p>
            <h3 className="text-light mt-3 mb-3">SPECIFICATION:-</h3>
            <div className="tabledata">
              <Table striped bordered  style={{ border: "groove" }}>
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
                      5.3 litres
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
              style={{ border: "groove" }}
            >
              BOOK NOW
            </Button>
          </Col>
        </Row>
      </div>

      <Accordion defaultActiveKey="0">
        <Accordion.Item className="bg-dark">
          <Accordion.Header>ALL PARTS IMAGES</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center text-light">TFT Right Front Three Quarter</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={TFTMETER}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer", border: "groove" }}
                  />
                </Col>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center  text-light mt-3">
                    TFT Touchscreen Instrument Cluster
                  </p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={Normalmeter}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer" ,border: "groove"}}
                  />
                </Col>
              </Row>

              <Row>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center  text-light mt-3">Right Side Throttle Grip</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={starterbtn}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer",border: "groove" }}
                  />
                </Col>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center  text-light mt-3">Hazard Lights Switch</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={HazardLights}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer",border: "groove" }}
                  />
                </Col>
              </Row>

              <Row>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center  text-light mt-3">USB Charging Port</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={usbcharger}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer",border: "groove" }}
                  />
                </Col>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center  text-light mt-3">Front Luggage Hook</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={FrontHook}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer",border: "groove" }}
                  />
                </Col>
              </Row>

              <Row>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center  text-light mt-3">Glove Box</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={GloveBox}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer",border: "groove" }}
                  />
                </Col>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center  text-light mt-3">Underseat Storage</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={UnderseatStorage}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer",border: "groove" }}
                  />
                </Col>
              </Row>

              <Row>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center  text-light mt-3">HeatProtector</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={HeatProtector}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer",border: "groove" }}
                  />
                </Col>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center  text-light mt-3">front wheel</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={frontwheel}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer",border: "groove" }}
                  />
                </Col>
              </Row>

              <Row>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center  text-light mt-3">Front Alloy Wheel</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={frontalloywheel}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer",border: "groove" }}
                  />
                </Col>
                <Col lg={6} xs={12} md={4}>
                  <p className="text-center  text-light mt-3">Close Fuel Lid</p>
                  <Card.Img
                    variant="top"
                    id="newaccimagespot"
                    src={CloseFuel}
                    roundedCircle
                    fluid
                    style={{ cursor: "pointer",border: "groove" }}
                  />
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* ACCESS & BURGMAN BIKE SECTION SPOTLIGHT*/}
      <div className="bg-light burgmanbikesection cardgrove">
        <h2 className="mb-4 mt-3"> RELATED SUZUKI BIKES OF 2025</h2>

        <Carousel2 responsive={responsive} className="card-container " >
          <Card className="col-xs-12 col-sm-6 col-md-4 col-lg-12 " >
            <Link to="/AccDrum">
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
              <Card.Title>Access Drum Break Edition</Card.Title>
              <p>Rs 1,05,000/-</p>
              <Link to="/AccDrum">
                <Button variant="outline-info" className="veiwmorebutton">
                  View More
                </Button>
              </Link>
            </Card.Body>
          </Card>

          <Card className="col-xs-12 col-sm-6 col-md-4 col-lg-12 ">
            <a href="/Avenis">
              <Card.Img
                variant="top"
                id="newaccimagespot"
                src={Avenisimg}
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
            <a href="/AccSE">
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
                href="/AccSE"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="col-xs-12 col-sm-6 col-md-4 col-lg-12  ">
            <a href="/BurgmanEx">
            <Card.Img variant="top" id="newaccimagespot" src={burgmanexbrown} />
            </a>
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

export default AccessBT;
