import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import firozlogo from "../images/logofiroz.jpg";
import accesicegreen from "../images/acces-icegreen.png";
import accesmatblack from "../images/access mat blk.png";
import burgmanmatred from "../images/mat red burgman.png";
import burgmanmatblue from "../images/mat blue burgman.png";
import burgmanwhite from "../images/white-burgman.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Carousel2 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AccessBTmatblue from "./HomeAllimages/AllAccessimages/AccmatblueBT.png";
import NewAccBTBlue from "../images/NewAccessmatblue.jpg";
import AccesBTwhite from "./HomeAllimages/AllAccessimages/AccwhiteBT.png";
import ReactPlayer from "react-player";
import myvideo from "../assets/accesicegreen.mp4";
import bannerburgmanimg from "../images/bannerburgmanimg.jpg";
import bannerblkburgman from "../images/bannerblkburgman.jpeg";
import banneravenis from "../images/banneravenis.jpeg";
import Table from "react-bootstrap/Table";
import Collapse from "react-bootstrap/Collapse";
import suzukilogo from "../Pages/HomeAllimages/Alllogo/suzukilogo.png";
import tvslogo from "../Pages/HomeAllimages/Alllogo/tvslogo.png";
import royalelogo from "../Pages/HomeAllimages/Alllogo/royallogo.png";
import honda from "../Pages/HomeAllimages/Alllogo/hondalogo.png";
import hero from "../Pages/HomeAllimages/Alllogo/herologo.png";
import kawasaki from "../Pages/HomeAllimages/Alllogo/kawasakilogo.png";
import yamaha from "../Pages/HomeAllimages/Alllogo/yamhalogo.png";
import vespa from "../Pages/HomeAllimages/Alllogo/vespalogo.png";
import ktm from "../Pages/HomeAllimages/Alllogo/ktmlogo.png";
import bajaj from "../Pages/HomeAllimages/Alllogo/bajajlogo.png";
import Reveiw1 from "../Pages/HomeAllimages/Review/Review1.png";
import Reveiw2 from "../Pages/HomeAllimages/Review/Review2.png";
import Reveiw3 from "../Pages/HomeAllimages/Review/review3.png";
import Reveiw4 from "../Pages/HomeAllimages/Review/review4.png";
import Reveiw5 from "../Pages/HomeAllimages/Review/review5.png";
import Reveiw6 from "../Pages/HomeAllimages/Review/review6.png";
import Reveiw7 from "../Pages/HomeAllimages/Review/review7.png";
import Reveiw8 from "../Pages/HomeAllimages/Review/review8.png";
import happycs5 from "../Pages/HomeAllimages/Happycsm/happycsm5.jpeg";

function HomePage() {
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
      // slidesToSlide: 2 ,
    },
  };

  const [open, setOpen] = useState(false); //logosection

  return (
    <>
      {/* HOMEVIDEO*/}
      <div className="homevideo d-flex">
        <ReactPlayer
          url={myvideo}
          playing={true}
          loop={true}
          controls={false}
          muted={true}
          progressInterval={8000}
          className="react-player"
          auotplay
        />
      </div>

      {/* ABOUT US */}
      <Row>
        <Col xs={12} md={8} lg={6} className="bg-light p-4">
          <h2>ABOUT US</h2>
          <h5>WELCOME TO FIROZ AUTORIDES SAFE RIDE</h5>
          <p className="txt-bold">
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
          </p>
        </Col>
        <Col xs={12} md={8} lg={6} className="bg-light">
          <Image src={firozlogo} className="logofiroz" />
        </Col>
      </Row>

      {/* HOME SCROLL VEHICLES */}

      <Carousel>
        <Carousel.Item interval={1000}>
          <Row className="">
            <Col xs={12} md={8} lg={7} className="bg-light p-2 allcol">
              <Image src={accesicegreen} className="carsoulimg p-5 " />
            </Col>
            <Col xs={12} md={4} lg={5} className="bg-light p-5">
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
            <Col xs={12} md={8} lg={7} className="bg-light p-2 allcol ">
              <Image className="carsoulimg p-5" src={accesmatblack} />
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
            <Col xs={12} md={8} lg={7} className="bg-light p-2 allcol">
              <Image className="carsoulimg p-5" src={burgmanmatred} />
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
            <Col xs={12} md={8} lg={7} className="bg-light p-2 allcol">
              <Image className="carsoulimg p-5" src={burgmanmatblue} />
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
            <Col xs={12} md={8} lg={7} className="bg-light p-2 allcol">
              <Image className="carsoulimg p-5" src={burgmanwhite} />
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

      {/* Bikes in Spotlight BIKE SECTION*/}
      <div className="bg-light burgmanbikesection">
        <h2 className="">BIKE IN SPOTLIGHT</h2>
        <Nav id="nav1" className="  my-3 my-lg-0   navtxt" navbarScroll>
          <Nav.Link href="">HOME</Nav.Link>
          <Nav.Link href="ch2">NEWBIKES</Nav.Link>
          <Nav.Link href="#action1">NEWS</Nav.Link>
          <Nav.Link href="#action2">NEW1</Nav.Link>
        </Nav>

        <Carousel2 responsive={responsive}>
          <Card className="topbrandcard ">
            <a href="/AccessBTBlue">
              <Card.Img
                variant="top"
                id="newaccbluespot"
                src={NewAccBTBlue}
                fluid
                style={{ cursor: "pointer" }}
              />
            </a>

            <Card.Body>
              <Card.Title>Newly launch Access BT Blue</Card.Title>
              <p>Rs 1,25,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/AccessBTBlue"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <a href="/AccessBTBlue">
              <Card.Img
                variant="top"
                src={AccesBTwhite}
                fluid
                style={{ cursor: "pointer" }}
              />
            </a>
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <a href="/AccessBTBlue">
              <Card.Img
                variant="top"
                src={AccesBTwhite}
                fluid
                style={{ cursor: "pointer" }}
              />
            </a>
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccesBTwhite} />
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccesBTwhite} />
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccesBTwhite} />
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccesBTwhite} />
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
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

      {/* ACCESS BIKE SECTION*/}
      <div className="bg-light burgmanbikesection">
        <h2 className="">BRAND NEW ALL ACCESS & BURGMAN</h2>
        <Nav id="nav1" className="  my-3 my-lg-0   navtxt" navbarScroll>
          <Nav.Link href="">HOME</Nav.Link>
          <Nav.Link href="ch2">NEWBIKES</Nav.Link>
          <Nav.Link href="#action1">NEWS</Nav.Link>
          <Nav.Link href="#action2">NEW1</Nav.Link>
        </Nav>

        <Carousel2 responsive={responsive}>
          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccessBTmatblue} fluid />
            <Card.Body>
              <Card.Title>Access Bleutooth Blue</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccesBTwhite} />
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccesBTwhite} />
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccesBTwhite} />
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccesBTwhite} />
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccesBTwhite} />
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccesBTwhite} />
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
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

      {/* Banner SECTION*/}
      <div className="mt-2 mb-3">
        <Image src={bannerburgmanimg} className="bannerfirstsection" />
        <Image src={bannerblkburgman} className="bannerfirstsection" />
        <Image src={banneravenis} className="bannerfirstsection" />
      </div>

      {/* BURGMAN BIKE SECTION*/}
      <div className="bg-light burgmanbikesection">
        <h2 className="">BRAND NEW ALL OTHERS</h2>
        <Nav id="nav1" className="  my-3 my-lg-0   navtxt" navbarScroll>
          <Nav.Link href="">HOME</Nav.Link>
          <Nav.Link href="ch2">NEWBIKES</Nav.Link>
          <Nav.Link href="#action1">NEWS</Nav.Link>
          <Nav.Link href="#action2">NEW1</Nav.Link>
        </Nav>

        <Carousel2 responsive={responsive}>
          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccessBTmatblue} fluid />
            <Card.Body>
              <Card.Title>Access Bleutooth Blue</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccesBTwhite} />
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccesBTwhite} />
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccesBTwhite} />
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccesBTwhite} />
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccesBTwhite} />
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/NewBike"
              >
                View More
              </Button>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <Card.Img variant="top" src={AccesBTwhite} />
            <Card.Body>
              <Card.Title>Access Bleutooth White</Card.Title>
              <p>Rs 1,20,000/-</p>
              <Button
                variant="outline-success"
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

      {/* brandlogo SECTION*/}
      <div className="bg-light burgmanbikesection">
        <h1 className="ms-5">Browse Bikes Brand</h1>

        <Table striped="columns" className="logotable" border={"3px"}>
          <tbody>
            <tr>
              <td style={{ width: "20px" }}>
                <a href="/AccessBTBlue">
                  <Image src={suzukilogo} className="brandlogocenter" />
                </a>
              </td>
              <td style={{ width: "20px" }}>
                {" "}
                <a href="/AccessBTBlue">
                  <Image src={tvslogo} className="brandlogocenter" />
                </a>
              </td>
              <td style={{ width: "20px" }}>
                {" "}
                <a href="/AccessBTBlue">
                  <Image src={royalelogo} className="brandlogocenter" />
                </a>
              </td>
            </tr>
            <tr>
              <td style={{ width: "20px" }}>
                <a href="/AccessBTBlue">
                  <Image src={honda} className="brandlogocenter" />
                </a>
              </td>
              <td style={{ width: "20px" }}>
                {" "}
                <a href="/AccessBTBlue">
                  <Image src={hero} className="brandlogocenter" />
                </a>
              </td>
              <td style={{ width: "20px" }}>
                {" "}
                <a href="/AccessBTBlue">
                  <Image src={kawasaki} className="brandlogocenter" />
                </a>
              </td>
            </tr>
            <tr>
              <td style={{ width: "20px" }}>
                <a href="/AccessBTBlue">
                  <Image src={yamaha} className="brandlogocenter" />
                </a>
              </td>
              <td style={{ width: "20px" }}>
                {" "}
                <a href="/AccessBTBlue">
                  <Image src={vespa} className="brandlogocenter" />
                </a>
              </td>
              <td style={{ width: "20px" }}>
                {" "}
                <a href="/AccessBTBlue">
                  <Image src={ktm} className="brandlogocenter" />
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  variant="outline-dark"
                  className="btnbrandlogo"
                >
                  Veiw more
                </Button>
                <Collapse in={open}>
                  <Table striped="columns">
                    <tbody border="3px">
                      <tr>
                        <td style={{ width: "20px" }}>
                          <a href="/AccessBTBlue">
                            <Image src={bajaj} className="brandlogocenter" />
                          </a>
                        </td>
                        <td style={{ width: "20px" }}>
                          {" "}
                          <a href="/AccessBTBlue">
                            <Image src={bajaj} className="brandlogocenter" />
                          </a>
                        </td>
                        <td style={{ width: "20px" }}>
                          {" "}
                          <a href="/AccessBTBlue">
                            <Image src={bajaj} className="brandlogocenter" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "20px" }}>
                          <a href="/AccessBTBlue">
                            <Image src={bajaj} className="brandlogocenter" />
                          </a>
                        </td>
                        <td style={{ width: "20px" }}>
                          {" "}
                          <a href="/AccessBTBlue">
                            <Image src={bajaj} className="brandlogocenter" />
                          </a>
                        </td>
                        <td style={{ width: "20px" }}>
                          {" "}
                          <a href="/AccessBTBlue">
                            <Image src={bajaj} className="brandlogocenter" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "20px" }}>
                          <a href="/AccessBTBlue">
                            <Image src={bajaj} className="brandlogocenter" />
                          </a>
                        </td>
                        <td style={{ width: "20px" }}>
                          {" "}
                          <a href="/AccessBTBlue">
                            <Image src={bajaj} className="brandlogocenter" />
                          </a>
                        </td>
                        <td style={{ width: "20px" }}>
                          {" "}
                          <a href="/AccessBTBlue">
                            <Image src={bajaj} className="brandlogocenter" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Collapse>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* testimonial*/}
      <div className="bg-light testimonialsection">
        <h1 className="text-center mb-4 mt-4 reviewfont">
          <span style={{ color: "#ffdb0f" }}>******</span>CUSTOMER REVIEW
          <span style={{ color: "#ffdb0f" }}>******</span>
        </h1>

        <Carousel2 responsive={responsive}>
          <Card className="Reveiwcard">
            <Card.Img
              variant="top"
              className="reviewimages"
              src={Reveiw1}
              fluid
              style={{ cursor: "pointer" }}
            />
          </Card>

          <Card className="Reveiwcard ">
            <Card.Img
              variant="top"
              className="reviewimages"
              src={Reveiw2}
              fluid
              style={{ cursor: "pointer" }}
            />
          </Card>

          <Card className="Reveiwcard ">
            <Card.Img
              variant="top"
              className="reviewimages"
              src={Reveiw3}
              fluid
              style={{ cursor: "pointer" }}
            />
          </Card>

          <Card className="Reveiwcard ">
            <Card.Img
              variant="top"
              className="reviewimages"
              src={Reveiw4}
              fluid
              style={{ cursor: "pointer" }}
            />
          </Card>

          <Card className="Reveiwcard ">
            <Card.Img
              variant="top"
              className="reviewimages"
              src={Reveiw5}
              fluid
              style={{ cursor: "pointer" }}
            />
          </Card>

          <Card className="Reveiwcard ">
            <Card.Img
              variant="top"
              className="reviewimages"
              src={Reveiw6}
              fluid
              style={{ cursor: "pointer" }}
            />
          </Card>

          <Card className="Reveiwcard ">
            <Card.Img
              variant="top"
              className="reviewimages"
              src={Reveiw7}
              fluid
              style={{ cursor: "pointer" }}
            />
          </Card>

          <Card className="Reveiwcard ">
            <Card.Img
              variant="top"
              className="reviewimages"
              src={Reveiw8}
              fluid
              style={{ cursor: "pointer" }}
            />
          </Card>
        </Carousel2>
        <Button
          className="mt-2"
          variant="outline-primary"
          href="https://www.google.com/maps/place/Firoz+autoriders/@18.9653402,72.8262387,17z/data=!4m18!1m9!3m8!1s0x3be7cfb356591615:0xb080cc0812f74994!2sFiroz+autoriders!8m2!3d18.9653402!4d72.8288136!9m1!1b1!16s%2Fg%2F11nsb0_d0h!3m7!1s0x3be7cfb356591615:0xb080cc0812f74994!8m2!3d18.9653402!4d72.8288136!9m1!1b1!16s%2Fg%2F11nsb0_d0h?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
        >
          More
        </Button>
      </div>

      {/*HAPPY CUSTOMERS*/}
      <div className="bg-light burgmanbikesection">
        <h1 className="text-center mb-5 mt-2 reviewfont">
          <span style={{ color: "#ffdb0f" }}>******</span>HAPPY CUSTOMERS
          <span style={{ color: "#ffdb0f" }}>******</span>
        </h1>
        <Container>
          <Row className="">
          <Col lg={4} xs={12} md={8}  className="mb-2">
              {" "}
              <Card className=""           
              >
                <Card.Img
                  variant="top"
                  className=""
                  src={happycs5}
                  fluid
                  style={{  height: "300px" }}
                />
              </Card>
            </Col>
            <Col lg={4} xs={12} md={8}  className="mb-2">
              {" "}
              <Card className="">
                <Card.Img
                  variant="top"
                  className=""
                  src={happycs5}
                  fluid
                  style={{  height: "300px" ,   }}
                />
              </Card>
            </Col>
            <Col lg={4} xs={12} md={8}  className="mb-2">
              {" "}
              <Card className="">
                <Card.Img
                  variant="top"
                  className=""
                  src={happycs5}
                  fluid
                  style={{  height: "300px" ,   }}
                />
              </Card>
            </Col>
            <Col lg={4} xs={12} md={8}  className="mb-2">
              {" "}
              <Card className="">
                <Card.Img
                  variant="top"
                  className=""
                  src={happycs5}
                  fluid
                  style={{  height: "300px" ,   }}
                />
              </Card>
            </Col>
            <Col lg={4} xs={12} md={8}  className="mb-2">
              {" "}
              <Card className="">
                <Card.Img
                  variant="top"
                  className=""
                  src={happycs5}
                  fluid
                  style={{  height: "300px" ,   }}
                />
              </Card>
            </Col>
            <Col lg={4} xs={12} md={8}  className="mb-2">
              {" "}
              <Card className="">
                <Card.Img
                  variant="top"
                  className=""
                  src={happycs5}
                  fluid
                  style={{  height: "300px" ,   }}
                />
              </Card>
            </Col>
            <Col lg={4} xs={12} md={8}  className="mb-2">
              {" "}
              <Card className="">
                <Card.Img
                  variant="top"
                  className=""
                  src={happycs5}
                  fluid
                  style={{  height: "300px" ,   }}
                />
              </Card>
            </Col>
            <Col lg={4} xs={12} md={8}  className="mb-2">
              {" "}
              <Card className="">
                <Card.Img
                  variant="top"
                  className=""
                  src={happycs5}
                  fluid
                  style={{  height: "300px" ,   }}
                />
              </Card>
            </Col>
            <Col lg={4} xs={12} md={8}  className="mb-2">
              {" "}
              <Card className="">
                <Card.Img
                  variant="top"
                  className=""
                  src={happycs5}
                  fluid
                  style={{  height: "300px" ,   }}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
