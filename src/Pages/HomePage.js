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
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Carousel2 from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AccessBTmatblue from './HomeAllimages/AllAccessimages/AccmatblueBT.png';
import NewAccBTBlue from '../images/NewAccessmatblue.jpg';
import AccesBTwhite from './HomeAllimages/AllAccessimages/AccwhiteBT.png';
import ReactPlayer from "react-player";
import myvideo from "../assets/bannervideo.mp4";



function HomePage() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 2 ,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      // slidesToSlide: 2 ,
    },
  };


  return (
    <>
    <div className='homevideo'>
      <ReactPlayer url={myvideo}  playing={true} loop={false} controls={false} muted={true} progressInterval={1000} className='react-player' />
    </div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <Row className="bg-dark">
            <Col xs={12} md={8} lg={7} className="bg-light p-3 allcol">
              <Image
                src={accesicegreen}
                className="carsoulimg p-5 "
              />
            </Col>
            <Col xs={12} md={4} lg={5} className="bg-light p-5 ">
              <h1 className="Htxt" style={{ color: "#87D8C3" }}>
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
          <Row>
            <Col xs={12} md={8} lg={7} className="bg-light p-3 allcol ">
              <Image
                className="carsoulimg p-5"
                src={accesmatblack}
              />
            </Col>
            <Col xs={12} md={4} lg={5} className="bg-light p-5">
              <h1 className="text-danger Htxt">
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
              <Image
                className="carsoulimg p-5"
                src={burgmanmatred}
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
              <Image
                className="carsoulimg p-5"
                src={burgmanmatblue}
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
              <Image
                className="carsoulimg p-5"
                src={burgmanwhite}
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
            Welcome to Firoz AutoRides, your trusted destination for brand new
            two-wheelers. Established in 2018, Firoz AutoRides has quickly
            become a leading name in the two-wheeler Multi Brand Dealer,
            renowned for our commitment to quality, customer satisfaction, and
            innovation. <br></br>
            Since our inception, we have been dedicated to providing our
            customers with the best selection of two-wheelers, ranging from
            scooters to motorcycles. Our journey began with a simple mission: to
            make high-quality two-wheelers accessible to everyone, ensuring a
            smooth, safe, and enjoyable ride for our customers.<br></br>
            Experience the difference at Firoz AutoRides. Visit our showroom and
            explore our wide range of brand new two-wheelers. Our friendly and
            knowledgeable staff are here to help you make the right choice and
            ensure you have an unforgettable riding experience.
          </h6>
        </Col>
        <Col xs={12} md={8} lg={6} className="bg-light">
          <Image src={burgmanwhite} className="burgmanwhite" />
        </Col>
      </Row>


           {/* Bikes in Spotlight BIKE SECTION*/}
          <div className="bg-light burgmanbikesection">
      <h1 className="">BIKE IN SPOTLIGHT</h1>
        <Nav id="nav1" className="  my-3 my-lg-0   navtxt" navbarScroll>
          <Nav.Link href="">HOME</Nav.Link>
          <Nav.Link href="ch2">NEWBIKES</Nav.Link>
          <Nav.Link href="#action1">NEWS</Nav.Link>
          <Nav.Link href="#action2">NEW1</Nav.Link>
        </Nav>

        <Carousel2
          responsive={responsive}
        >
                <Card className="topbrandcard " >
                  <Card.Img variant="top" id="newaccbluespot" src={NewAccBTBlue} fluid/>
                  <Card.Body>
                    <Card.Title>Newly launch Access BT Blue</Card.Title>
                    <p>
                     Rs 1,25,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/AccessBTBlue">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

        </Carousel2>
        <Button
        className="mt-2"
       variant="outline-primary">
      More
    </Button>
      </div>


      {/* ACCESS BIKE SECTION*/}
      <div className="bg-light burgmanbikesection">
      <h1 className="">BRAND NEW ALL ACCESS & BURGMAN</h1>
        <Nav id="nav1" className="  my-3 my-lg-0   navtxt" navbarScroll>
          <Nav.Link href="">HOME</Nav.Link>
          <Nav.Link href="ch2">NEWBIKES</Nav.Link>
          <Nav.Link href="#action1">NEWS</Nav.Link>
          <Nav.Link href="#action2">NEW1</Nav.Link>
        </Nav>

        <Carousel2
          responsive={responsive}
        >
                <Card className="topbrandcard">
                  <Card.Img variant="top"  src={AccessBTmatblue}   fluid/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth Blue</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

        </Carousel2>
        <Button
        className="mt-2"
       variant="outline-primary">
      More
    </Button>
      </div>


      
     
      {/* BURGMAN BIKE SECTION*/}
      <div className="bg-light burgmanbikesection">
      <h1 className="">BRAND NEW ALL BURGMAN BIKE</h1>
        <Nav id="nav1" className="  my-3 my-lg-0   navtxt" navbarScroll>
          <Nav.Link href="">HOME</Nav.Link>
          <Nav.Link href="ch2">NEWBIKES</Nav.Link>
          <Nav.Link href="#action1">NEWS</Nav.Link>
          <Nav.Link href="#action2">NEW1</Nav.Link>
        </Nav>

        <Carousel2
          responsive={responsive}
        >
                <Card className="topbrandcard">
                  <Card.Img variant="top"  src={AccessBTmatblue}   fluid/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth Blue</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

                <Card className="topbrandcard">
                  <Card.Img variant="top" src={AccesBTwhite}/>
                  <Card.Body>
                    <Card.Title>Access Bleutooth White</Card.Title>
                    <p>
                     Rs 1,20,000/-
                    </p>
                    <Button variant="outline-success"  className="veiwmorebutton" href="/NewBike">View More</Button>
                  </Card.Body>
                </Card>

        </Carousel2>
        <Button
        className="mt-2"
       variant="outline-primary">
      More
    </Button>
      </div>  
    </>


    
  );

  

}


export default HomePage;
