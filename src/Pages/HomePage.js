import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import accesicegreen from "../images/acces-icegreen.png";
import accesmatblack from "../images/access mat blk.png";
import burgmanmatred from "../images/mat red burgman.png";
import burgmanmatblue from "../images/mat blue burgman.png";
import burgmanwhite from "../images/white-burgman.png";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Nav from "react-bootstrap/Nav";


function HomePage() {
  return (
    <>
      <Carousel className="boxshadow">
        <Carousel.Item interval={3000}>
          <Row className="bg-light">
            <Col xs={12} md={8} lg={7} className="bg-light p-5 allcol">
              <Image
                src={accesicegreen} className="carsoulimg p-5 "
                // style={{ width: "90%", height: "500px" }}
              />
            </Col>
            <Col xs={12} md={4} lg={5} className="bg-light p-5 ">
              <h1 className="Htxt" style={{ color: "#87D8C3"}}>
                THE NEW COLOUR<br></br>ACCESS ICE-GREEN BT
              </h1>
              <p className=" text-dark">
                E20 COMPLIANT / LED HEADLAMP / LED POSITION LIGHTS /<br></br>
                SIDE STAND INTERLOCK / PREMIUM CHROME EXTERNAL FUEL LID/{" "}
                <br></br> BLUETOOTH® ENABLED DIGITAL CONSOLE
              </p>
              <h3 className=" text-dark">SPECIFICATION:-</h3>
              <p className=" text-dark">
                Engine Type:- 4- Stroke, 1-Cylinder, Air Cooled <br></br>Fuel
                Tank Capacity 5 L <br></br>Starter System Kick and Electric
              </p>
              <Button variant="outline-success" className="mt-4">
                BOOK NOW
              </Button>{" "}
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <Row >
            <Col xs={12} md={8} lg={7} className="bg-light p-3 allcol ">
              <Image className="carsoulimg p-5"
                src={accesmatblack}

                // style={{ width: "90%", height: "500px" }}
              />
            </Col>
            <Col xs={12} md={4} lg={5} className="bg-light p-5">
              <h1 className="text-danger Htxt" >
                THE NEW COLOUR<br></br>ACCESS MAT-BLACK
              </h1>
              <p className=" text-dark">
                E20 COMPLIANT / LED HEADLAMP / LED POSITION LIGHTS /<br></br>
                SIDE STAND INTERLOCK / PREMIUM CHROME EXTERNAL FUEL LID/{" "}
                <br></br> BLUETOOTH® ENABLED DIGITAL CONSOLE
              </p>
              <h3 className=" text-dark">SPECIFICATION:-</h3>
              <p className=" text-dark">
                Engine Type:- 4- Stroke, 1-Cylinder, Air Cooled <br></br>Fuel
                Tank Capacity 5 L <br></br>Starter System Kick and Electric
              </p>
              <Button variant="outline-danger" className="mt-4">
                BOOK NOW
              </Button>{" "}
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <Row>
            <Col xs={12} md={8} lg={7} className="bg-light p-3 allcol">
              <Image className="carsoulimg p-5"
                src={burgmanmatred}
                // style={{ width: "80%", height: "520px" }}
              />
            </Col>
            <Col xs={12} md={4} lg={5} className="bg-light p-5">
              <h1 className=" Htxt" style={{ color: "#841b2d" }}>
                THE NEW COLOUR<br></br>BURGMAN MAT-RED
              </h1>
              <p className=" text-dark">
                E20 COMPLIANT / LED HEADLAMP / LED POSITION LIGHTS /<br></br>
                SIDE STAND INTERLOCK / PREMIUM CHROME EXTERNAL FUEL LID/{" "}
                <br></br> BLUETOOTH® ENABLED DIGITAL CONSOLE
              </p>
              <h3 className=" text-dark">SPECIFICATION:-</h3>
              <p className=" text-dark">
                Engine Type:- 4- Stroke, 1-Cylinder, Air Cooled <br></br>Fuel
                Tank Capacity 5 L <br></br>Starter System Kick and Electric
              </p>
              <Button variant="outline-danger" className="mt-4">
                BOOK NOW
              </Button>{" "}
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <Row>
            <Col xs={12} md={8} lg={7} className="bg-light p-3 allcol">
              <Image className="carsoulimg p-5"
                src={burgmanmatblue}
                // style={{ width: "80%", height: "520px" }}
              />
            </Col>
            <Col xs={12} md={4} lg={5} className="bg-light p-5">
              <h1 className="Htxt" style={{ color: "#2c6fbb" }}>
                THE NEW COLOUR<br></br>BURGMAN MAT-BLUE
              </h1>
              <p className=" text-dark">
                E20 COMPLIANT / LED HEADLAMP / LED POSITION LIGHTS /<br></br>
                SIDE STAND INTERLOCK / PREMIUM CHROME EXTERNAL FUEL LID/{" "}
                <br></br> BLUETOOTH® ENABLED DIGITAL CONSOLE
              </p>
              <h3 className=" text-dark">SPECIFICATION:-</h3>
              <p className=" text-dark">
                Engine Type:- 4- Stroke, 1-Cylinder, Air Cooled <br></br>Fuel
                Tank Capacity 5 L <br></br>Starter System Kick and Electric
              </p>
              <Button variant="outline-primary" className="mt-4">
                BOOK NOW
              </Button>{" "}
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <Row>
            <Col xs={12} md={8} lg={7} className="bg-light p-3 allcol">
              <Image className="carsoulimg p-5"
                src={burgmanwhite}
                // style={{ width: "80%", height: "520px" }}
              />
            </Col>
            <Col xs={12} md={4} lg={5} className="bg-light p-5">
              <h1 className="Htxt text-dark">
                THE NEW COLOUR<br></br>BURGMAN WHITE
              </h1>
              <p className=" text-dark">
                E20 COMPLIANT / LED HEADLAMP / LED POSITION LIGHTS /<br></br>
                SIDE STAND INTERLOCK / PREMIUM CHROME EXTERNAL FUEL LID/{" "}
                <br></br> BLUETOOTH® ENABLED DIGITAL CONSOLE
              </p>
              <h3 className=" text-dark">SPECIFICATION:-</h3>
              <p className=" text-dark">
                Engine Type:- 4- Stroke, 1-Cylinder, Air Cooled <br></br>Fuel
                Tank Capacity 5 L <br></br>Starter System Kick and Electric
              </p>
              <Button variant="outline-dark" className="mt-4">
                BOOK NOW
              </Button>{" "}
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>

      {/* ABOUT US */}
      <Row >
        <Col xs={12} md={8} lg={6} className="bg-light p-5">
          <h1>ABOUT US</h1>
          <h3>WELCOME TO FIROZ AUTORIDES SAFE RIDE</h3>
          <h6>
          Welcome to Firoz AutoRides, your trusted destination for brand new two-wheelers.
           Established in 2018, Firoz AutoRides has quickly become a leading name in the 
           two-wheeler Multi Brand Dealer, renowned for our commitment to quality, customer satisfaction, 
           and innovation. <br></br>
           Since our inception, we have been dedicated to providing our customers with the best selection
          of two-wheelers, ranging from scooters to motorcycles. Our journey began with a simple mission: 
          to make high-quality two-wheelers accessible to everyone, ensuring a smooth, safe, and enjoyable ride for our customers.<br></br>
          Experience the difference at Firoz AutoRides. Visit our showroom and explore our wide range of brand new two-wheelers. Our friendly
           and knowledgeable staff are here to help you make the right choice and ensure you have an unforgettable riding experience.
          </h6>
        </Col>
        <Col xs={12} md={8} lg={6} className="bg-light "  >
          <Image src={burgmanwhite} className="burgmanwhite" />
        </Col>
      </Row>


          {/* ALL BRANDS IMG*/} 
          <h1 className="ms-5 mt-4">Top Bikes in Spotlight</h1>


    <Carousel  className="bg-light p-2"    variant="none"  autoPlay={true} interval={20000} controls={false} indicators={true} >
    <Nav
              className=" ms-auto my-3 my-lg-0  navtxt" 
              navbarScroll
            >
              <Nav.Link href="#carousel1">HOME</Nav.Link>
              <Nav.Link href="#carousel2" >NEWBIKES</Nav.Link>
              <Nav.Link href="#action1" >NEWS</Nav.Link>
              <Nav.Link href="#action2" >NEW1</Nav.Link>
            </Nav>

      <Carousel.Item  >

<div className="scrollleft d-flex ">
            
            <a href="#">
            <Card className="ms-1" style={{ width: '18rem ' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </a>
            <a href="#">
            <Card className="ms-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </a>
            <a href="#">
            <Card className="ms-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </a>
            <a href="#">
            <Card className="ms-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </a>
            <a href="#">
            <Card className="ms-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </a>

            <a href="#">
            <Card className="ms-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </a>


          </div>

      </Carousel.Item>


      <Carousel.Item id="carousel2">
      <h1>first 2</h1>
      </Carousel.Item>
    </Carousel>


    
           
            
         
          
              </>
  );
}

export default HomePage ;
