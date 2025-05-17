import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import NewAccBTBlue from "./images/NewAccessmatblue.jpg";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Carousel2 from "react-multi-carousel";

// import access from './images/acces ice green BT.avif';

  function AccessBTMatblue (){

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
  
    // Define image URLs
    const images = {
      image1: {NewAccBTBlue},
      image2: "https://images6.alphacoders.com/549/thumb-1920-549198.jpg",
      image3: "https://wonderfulengineering.com/wp-content/uploads/2013/12/bike-wallpaper.jpg",
      image4: "https://images6.alphacoders.com/549/thumb-1920-549198.jpg",
      image5: "https://images6.alphacoders.com/549/thumb-1920-549198.jpg",
      image6: "https://images6.alphacoders.com/549/thumb-1920-549198.jpg",

    };
  
    // State to store the current image
    const [currentImage, setCurrentImage] = useState(images.image1);
  
    // Function to handle image change
    const handleImageChange = (imageKey) => {
      setCurrentImage(images[imageKey]);
    };
    return (
    <>
      <div className=" p-5 mt-5">
        <Row>
          <Col className="p-2 " xs={12} md={4} lg={7}>
            {/* <Image id="pic" variant="top" src={NewAccBTBlue} rounded fluid /> */}
            <Image  id="pic" src={currentImage} alt="Current Display"   rounded fluid/>

            <Button variant="outline-primary" className="me-2 mt-2" onClick={() => handleImageChange("image1")}>
              Primary
            </Button>
            <Button variant="outline-secondary" className="me-2 mt-2" onClick={() => handleImageChange("image2")}>
              Secondary
            </Button>
            <Button variant="outline-success" className="me-2 mt-2" onClick={() => handleImageChange("image3")}>
              Success
            </Button>
            <Button variant="outline-warning" className="me-2 mt-2" onClick={() => handleImageChange("image2")}>
              Warning
            </Button>
            <Button variant="outline-danger" className="me-2 mt-2" onClick={() => handleImageChange("image2")}>
              Danger
            </Button>
            <Button variant="outline-info" className="me-2 mt-2" onClick={() => handleImageChange("image2")}>
              Info
            </Button>
          </Col>

          <Col xs={12} md={4} lg={5}>
            <h1 className="mt-4" style={{ color: "#87D8C3" }}>
              THE NEW COLOUR<br></br>ACCESS ICE-GREEN BT
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


       {/* Bikes in Spotlight BIKE SECTION*/}
       <div className="bg-light burgmanbikesection">
        <h2 className="">MORE MODALS IN SPOTLIGHT</h2>
        <Nav id="nav1" className="  my-3 my-lg-0   navtxt" navbarScroll>
          <Nav.Link href="">HOME</Nav.Link>
          <Nav.Link href="ch2">NEWBIKES</Nav.Link>
          <Nav.Link href="#action1">NEWS</Nav.Link>
          <Nav.Link href="#action2">NEW1</Nav.Link>
        </Nav>

        <Carousel2 responsive={responsive}>
          <Card className="topbrandcard ">
          <Link to="/AccessBTBlue"> 
              <Card.Img
                variant="top"
                id="newaccbluespot"
                src={NewAccBTBlue}
                fluid
                style={{ cursor: "pointer" }}
              />
            </Link>

            <Card.Body>
              <Card.Title>Newly launch Access BT Blue</Card.Title>
              <p>Rs 1,25,000/-</p>
              <Link to="/AccessBTBlue"> 
              <Button
                variant="outline-success"
                className="veiwmorebutton"
              >
                View More
              </Button>
              </Link>

            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <a href="/AccessBTBlue">
              <Card.Img
                variant="top"
                src={NewAccBTBlue}
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
                src={NewAccBTBlue}
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
            <Card.Img variant="top" src={NewAccBTBlue} />
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
            <Card.Img variant="top" src={NewAccBTBlue} />
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
            <Card.Img variant="top" src={NewAccBTBlue} />
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
            <Card.Img variant="top" src={NewAccBTBlue} />
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



      
    </>
  );
}

export default  AccessBTMatblue;
