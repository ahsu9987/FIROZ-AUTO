import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import firozautologo from "./HomeAllimages/Alllogo/Firozauto-logo.jpg";
import burgmanmatblue from "../Pages/HomeAllimages/AllBurgmanimages/mat blue burgman.png";
import burgmanbrown from "../Pages/HomeAllimages/AllBurgmanimages/burgmanbrownex.png";
import burgmanwhite from "../images/white-burgman.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel2 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewAccicemat from "../Pages/HomeAllimages/AllAccessimages/Accicegreenmat.png";
import NewAccmatblk from "../Pages/HomeAllimages/AllAccessimages/accblack.png";
import Accesblack from "../Pages/HomeAllimages/AllAccessimages/accblack.png";
import Accessdrumblue from "../Pages/AllCollectionPages/Accesspage/images/AccessDrummatblue.png";
import Accessmatblue from "../Pages/HomeAllimages/AllAccessimages/Accmatblue.jpeg";
import burgmangreenbt from "../Pages/HomeAllimages/AllBurgmanimages/burgmangreenBT.png";
import burgmannonbtblk from "../Pages/HomeAllimages/AllBurgmanimages/burgmannonbtblk.png";
import ReactPlayer from "react-player";
import myvideo from "../assets/new video home.mp4";
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
import R15 from "../Pages/HomeAllimages/Alllogo/R15.png";
import bmw from "../Pages/HomeAllimages/Alllogo/bmwlogo.png";
import tripuh from "../Pages/HomeAllimages/Alllogo/Triumph.png";
import bajaj from "../Pages/HomeAllimages/Alllogo/bajajlogo.png";
import harleydavidson from "../Pages/HomeAllimages/Alllogo/harley.png";
import avenisvideo from "../assets/Avenisvideo.mp4";
import Reveiw1 from "../Pages/HomeAllimages/Review/Review1.png";
import Reveiw2 from "../Pages/HomeAllimages/Review/Review2.png";
import Reveiw3 from "../Pages/HomeAllimages/Review/review3.png";
import Reveiw4 from "../Pages/HomeAllimages/Review/review4.png";
import Reveiw5 from "../Pages/HomeAllimages/Review/review5.png";
import Reveiw6 from "../Pages/HomeAllimages/Review/review6.png";
import Reveiw7 from "../Pages/HomeAllimages/Review/review7.png";
import Reveiw8 from "../Pages/HomeAllimages/Review/review8.png";
import happycs5 from "../Pages/HomeAllimages/Happycsm/happycsm5.jpeg";
import happycs1 from "../Pages/HomeAllimages/Happycsm/happycsm1.jpeg";
import happycs2 from "../Pages/HomeAllimages/Happycsm/happycsm2.jpeg";
import happycs3 from "../Pages/HomeAllimages/Happycsm/happycsm3.jpeg";
import happycs4 from "../Pages/HomeAllimages/Happycsm/happycsm4.jpeg";
import happycs6 from "../Pages/HomeAllimages/Happycsm/happycsm6.jpeg";
import happycs7 from "../Pages/HomeAllimages/Happycsm/happycsm7.jpeg";
import happycs8 from "../Pages/HomeAllimages/Happycsm/happycsm8.jpeg";
import Accordion from "react-bootstrap/Accordion";
import NewAeroxwhite from "./AllCollectionPages/Aerox/images/aeroxwhitenew.jpeg";
import MyForm from "./MyForm";
import { motion } from "framer-motion";
import burgmanbannervideo from "../assets/burgmanbannervideo.mp4";
// import { fadeIn } from "../MyAnimation";


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
        <ReactPlayer
          url={myvideo}
          playing={true}
          loop={true}
          controls={false}
          muted={true}
          progressInterval={8000}
          className="react-player homevideo "
          auotplay
        />

      {/* ABOUT US */}
      <div>
        <Row>
          <Col xs={12} md={8} lg={6} className="text-light p-4 ">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              ABOUT US
            </motion.h2>
            <motion.h5
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              WELCOME TO FIROZ AUTORIDES SAFE RIDE
            </motion.h5>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
              }}
              className="txt-bold"
            >
              Welcome to Firoz AutoRides, your trusted destination for brand new
              two-wheelers. Established in 2018, Firoz AutoRides has quickly
              become a leading name in the two-wheeler Multi Brand Dealer,
              renowned for our commitment to quality, customer satisfaction, and
              innovation. <br></br>
              Since our inception, we have been dedicated to providing our
              customers with the best selection of two-wheelers, ranging from
              scooters to motorcycles. Our journey began with a simple mission:
              to make high-quality two-wheelers accessible to everyone, ensuring
              a smooth, safe, and enjoyable ride for our customers.<br></br>
              Experience the difference at Firoz AutoRides. Visit our showroom
              and explore our wide range of brand new two-wheelers. Our friendly
              and knowledgeable staff are here to help you make the right choice
              and ensure you have an unforgettable riding experience.
            </motion.p>
          </Col>

          <Col xs={12} md={8} lg={6} className="">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.9,
                delay: 0.5,
                ease: [0, 0.40, 0.2, 1.01],
              }}
            >
              <Image src={firozautologo} className="logofiroz" />
            </motion.div>
          </Col>
        </Row>
      </div>

      {/* HOME SCROLL VEHICLES */}

      <Carousel>
        <Carousel.Item interval={300}>
          <Row className="">
            <Col xs={12} md={8} lg={7} className="bg-light  allcol">
              <Image src={NewAccicemat} className="carsoulimg p-5 " />
            </Col>
            <Col xs={12} md={4} lg={5} className="bg-light p-5">
              <h1 className="Htxt text-info">
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
              <Button variant="outline-info" className="mt-4" href="/AccessBT">
                BOOK NOW
              </Button>{" "}
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item interval={300}>
          <Row>
            <Col xs={12} md={8} lg={7} className="bg-light  allcol ">
              <Image className="carsoulimg p-5" src={NewAccmatblk} />
            </Col>
            <Col xs={12} md={4} lg={5} className="bg-light p-5">
              <h1 className=" Htxt">
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
              <Button variant="outline-dark" className="mt-4" href="/AccDrum">
                BOOK NOW
              </Button>{" "}
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item interval={300}>
          <Row>
            <Col xs={12} md={8} lg={7} className="bg-light allcol">
              <Image className="carsoulimg p-5" src={burgmanbrown} />
            </Col>
            <Col xs={12} md={4} lg={5} className="bg-light p-5">
              <h1 className=" Htxt" style={{ color: "#5c371d" }}>
                THE NEW COLOUR<br></br>BURGMAN BROWN-EX
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
              <Button
                variant="outline-danger"
                className="mt-4"
                href="/BurgmanEx"
              >
                BOOK NOW
              </Button>{" "}
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item interval={300}>
          <Row>
            <Col xs={12} md={8} lg={7} className="bg-light  allcol">
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
              <Button variant="outline-primary" className="mt-4" href="/BurgBT">
                BOOK NOW
              </Button>{" "}
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item interval={100}>
          <Row>
            <Col xs={12} md={8} lg={7} className="bg-light  allcol">
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
              <Button variant="outline-dark" className="mt-4" href="/BurgBT">
                BOOK NOW
              </Button>{" "}
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>

      {/* ACCESS & BURGMAN BIKE SECTION SPOTLIGHT*/}
      <div className="bg-light burgmanbikesection">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
            duration: 0.1,
          }}
          className="mb-4 mt-3"
        >
          TRENDING BIKES OF 2025
        </motion.h2>

        <Carousel2 responsive={responsive}>
          <Card className="topbrandcard ">
            <Link to="/AccessBT">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.7 },
                  ease: "easeIn",
                  duration: 0.1,
                }}
              >
                <Card.Img
                  variant="top"
                  id="newaccimagespot"
                  src={NewAccicemat}
                  fluid
                  style={{ cursor: "pointer" }}
                />
              </motion.div>
            </Link>

            <Card.Body>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.7 },
                  ease: "easeIn",
                  duration: 0.1,
                }}
              >
                <Card.Title>Access Bleutooth Edition Disc Break</Card.Title>
                <p>Rs 1,25,000/-</p>
              </motion.div>
              <Link to="/AccessBT">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.4,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.7 },
                    ease: "easeIn",
                    duration: 0.1,
                  }}
                >
                  <Button variant="outline-info" className="veiwmorebutton">
                    View More
                  </Button>
                </motion.div>
              </Link>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <a href="/AccSE">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.7 },
                  ease: "easeIn",
                  duration: 0.1,
                }}
              >
                <Card.Img
                  variant="top"
                  id="newaccimagespot"
                  src={Accesblack}
                  fluid
                  style={{ cursor: "pointer" }}
                />
              </motion.div>
            </a>
            <Card.Body>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.7 },
                  ease: "easeIn",
                  duration: 0.1,
                }}
              >
                <Card.Title>Access Special Edition Disc Break</Card.Title>
                <p>Rs 1,20,000/-</p>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.7 },
                  ease: "easeIn",
                  duration: 0.1,
                }}
              >
                <Button
                  variant="outline-dark"
                  className="veiwmorebutton"
                  href="/AccSE"
                >
                  View More
                </Button>
              </motion.div>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <a href="/AccDrum">
               <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.7 },
                  ease: "easeIn",
                  duration: 0.1,
                }}
              >
              <Card.Img
                variant="top"
                id="newaccimagespot"
                src={Accessdrumblue}
                fluid
                style={{ cursor: "pointer" }}
              />
              </motion.div>
            </a>
            <Card.Body>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.7 },
                  ease: "easeIn",
                  duration: 0.1,
                }}
              >
              <Card.Title>Access Drum Break Edition</Card.Title>
              <p>Rs 1,05,000/-</p>
              </motion.div>

                <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.7 },
                  ease: "easeIn",
                  duration: 0.1,
                }}
              >
              <Button
                variant="outline-primary"
                className="veiwmorebutton"
                href="/AccDrum"
              >
                View More
              </Button>
              </motion.div>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <a href="/BurgmanEx">
               <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.7 },
                  ease: "easeIn",
                  duration: 0.1,
                }}
              >
              <Card.Img variant="top" id="newaccimagespot" src={burgmanbrown} />
              </motion.div>
            </a>
            <Card.Body>
               <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.7 },
                  ease: "easeIn",
                  duration: 0.1,
                }}
              >
              <Card.Title>Burgman Ex Bleutooth Top Edition</Card.Title>
              <p>Rs 1,52,000/-</p>
              </motion.div>

                <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.7 },
                  ease: "easeIn",
                  duration: 0.1,
                }}
              >
              <Button
                variant="outline-secondary"
                className="veiwmorebutton"
                href="/BurgmanEx"
              >
                View More
              </Button>
              </motion.div>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <a href="/BurgBT">
             <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.7 },
                  ease: "easeIn",
                  duration: 0.1,
                }}
              >
              <Card.Img
                variant="top"
                id="newaccimagespot"
                src={burgmangreenbt}
              />
              </motion.div>
            </a>
            <Card.Body>
                <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.7 },
                  ease: "easeIn",
                  duration: 0.1,
                }}
              >
              <Card.Title>Burgman Bleutooth Edition</Card.Title>
              <p>Rs 1,35,000/-</p>
              </motion.div>

                  <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.7 },
                  ease: "easeIn",
                  duration: 0.1,
                }}
              >
              <Button
                variant="outline-success"
                className="veiwmorebutton"
                href="/BurgBT"
              >
                View More
              </Button>
              </motion.div>
            </Card.Body>
          </Card>
        </Carousel2>
         <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.7 },
                  ease: "easeIn",
                  duration: 0.1,
                }}
              >
        <Button className="mt-4 mb-4" variant="outline-primary">
          More
        </Button>
        </motion.div>
      </div>

      {/* SPORTS BIKE SECTION*/}
      <div className="bg-light burgmanbikesection">
        <h2 className="mb-4 mt-3">GET OFFERS ON POPULAR BIKES IN SPOTLIGHT</h2>

        <Carousel2 responsive={responsive}>
          <Card className="topbrandcard ">
            <Link to="/Aerox">
              <Card.Img
                variant="top"
                id="newaccimagespot"
                src={NewAeroxwhite}
                fluid
                style={{ cursor: "pointer" }}
              />
            </Link>

            <Card.Body>
              <Card.Title>Yamaha Aerox 155</Card.Title>
              <p>Rs 1,25,000/-</p>
              <Link to="/AccessBTBlue">
                <Button
                  variant="outline-info"
                  className="veiwmorebutton"
                  href="/Aerox"
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
                id="newaccimagespot"
                src={Accesblack}
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

          <Card className="topbrandcard">
            <a href="/AccessBTBlue">
              <Card.Img
                variant="top"
                id="newaccimagespot"
                src={Accessmatblue}
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

          <Card className="topbrandcard">
            <Card.Img variant="top" id="newaccimagespot" src={burgmanbrown} />
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

          <Card className="topbrandcard">
            <Card.Img variant="top" id="newaccimagespot" src={burgmangreenbt} />
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

          <Card className="topbrandcard">
            <Card.Img
              variant="top"
              id="newaccimagespot"
              src={burgmannonbtblk}
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
        <Button className="mt-4 mb-4" variant="outline-primary">
          More
        </Button>
      </div>

      {/* Banner SECTION*/}
      <div className="mt-2 mb-3 cardgrove">
        <Image src={bannerburgmanimg} className="bannerfirstsection" />
        <Image src={bannerblkburgman} className="bannerfirstsection" />
        <Image src={banneravenis} className="bannerfirstsection" />
      </div>

      {/* brandlogo SECTION*/}
      <div className="bg-light burgmanbikesection cardgrove">
        <motion.h1 
         initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
            duration: 0.1,
          }}
        className="ms-2 mt-2 mb-2">Browse Bikes Brand</motion.h1>

  <motion.div
                initial={{ x: 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.8,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.7 },
                  ease: "easeIn",
                  duration: 0.1,
                }}
              >
        <Table striped="columns" className="logotable " border={"3px"}>
          <tbody className="cardgrove">
            <tr>
              <td style={{ width: "20px" }}>
                <a href="/AccessBT">
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
                  className="btnbrandlogo mb-2 mt-2"
                >
                  Veiw more
                </Button>
                <Collapse in={open}>
                  <Table striped="columns">
                    <tbody border="3px" className="cardgrove">
                      <tr>
                        <td style={{ width: "20px" }}>
                          <a href="/AccessBTBlue">
                            <Image src={tripuh} className="brandlogocenter" />
                          </a>
                        </td>
                        <td style={{ width: "20px" }}>
                          {" "}
                          <a href="/AccessBTBlue">
                            <Image src={bmw} className="brandlogocenter" />
                          </a>
                        </td>
                        <td style={{ width: "20px" }}>
                          {" "}
                          <a href="/AccessBTBlue">
                            <Image src={R15} className="brandlogocenter" />
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
                            <Image
                              src={harleydavidson}
                              className="brandlogocenter"
                            />
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
        </motion.div> 
      </div>

      {/* SPORTS BIKE SECTION*/}
      <div className="bg-light burgmanbikesection cardgrove">
        <h2 className="mb-4 mt-3">GET OFFERS ON POPULAR BIKES IN SPOTLIGHT</h2>
        {/* <Nav id="nav1" className="  my-3 my-lg-0   navtxt" navbarScroll>
          <Nav.Link href="">HOME</Nav.Link>
          <Nav.Link href="ch2">NEWBIKES</Nav.Link>
          <Nav.Link href="#action1">NEWS</Nav.Link>
          <Nav.Link href="#action2">NEW1</Nav.Link>
        </Nav> */}

        <Carousel2 responsive={responsive}>
          <Card className="topbrandcard ">
            <Link to="/AccessBTBlue">
              <Card.Img
                variant="top"
                id="newaccimagespot"
                src={NewAccicemat}
                fluid
                style={{ cursor: "pointer" }}
              />
            </Link>

            <Card.Body>
              <Card.Title>Access Bleutooth Edition Disc Break</Card.Title>
              <p>Rs 1,25,000/-</p>
              <Link to="/AccessBTBlue">
                <Button variant="outline-info" className="veiwmorebutton">
                  View More
                </Button>
              </Link>
            </Card.Body>
          </Card>

          <Card className="topbrandcard">
            <a href="/AccessBTBlue">
              <Card.Img
                variant="top"
                id="newaccimagespot"
                src={Accesblack}
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

          <Card className="topbrandcard">
            <a href="/AccessBTBlue">
              <Card.Img
                variant="top"
                id="newaccimagespot"
                src={Accessmatblue}
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

          <Card className="topbrandcard">
            <Card.Img variant="top" id="newaccimagespot" src={burgmanbrown} />
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

          <Card className="topbrandcard">
            <Card.Img variant="top" id="newaccimagespot" src={burgmangreenbt} />
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

          <Card className="topbrandcard">
            <Card.Img
              variant="top"
              id="newaccimagespot"
              src={burgmannonbtblk}
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
        <Button className="mt-4 mb-4" variant="outline-primary">
          More
        </Button>
      </div>

  <ReactPlayer
          url={avenisvideo}
          playing={true}
          loop={true}
          controls={false}
          muted={true}
          progressInterval={8000}
          className="react-player homevideo "
          auotplay
        />

      {/* testimonial*/}
      <div className="bg-light testimonialsection cardgrove">
        <motion.h1 
         initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.4 },
            ease: "easeIn",
            duration: 0.1,
          }}
        className="text-center mb-4 mt-4 reviewfont">
          <span style={{ color: "#ffdb0f" }}>******</span>CUSTOMER REVIEW
          <span style={{ color: "#ffdb0f" }}>******</span>
        </motion.h1>

        <Carousel2 responsive={responsive}>
          <motion.Card 
           initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.4 },
            ease: "easeIn",
            duration: 0.1,
          }}
          className="Reveiwcard " id="newaccimagespot">
            <Card.Img
              variant="top"
              className="reviewimages"
              src={Reveiw1}
              fluid
              style={{ cursor: "pointer" }}
            />
          </motion.Card>

          <Card className="Reveiwcard" id="newaccimagespot">
            <Card.Img
              variant="top"
              className="reviewimages"
              src={Reveiw2}
              fluid
              style={{ cursor: "pointer" }}
            />
          </Card>

          <Card className="Reveiwcard " id="newaccimagespot">
            <Card.Img
              variant="top"
              className="reviewimages"
              src={Reveiw3}
              fluid
              style={{ cursor: "pointer" }}
            />
          </Card>

          <Card className="Reveiwcard " id="newaccimagespot">
            <Card.Img
              variant="top"
              className="reviewimages"
              src={Reveiw4}
              fluid
              style={{ cursor: "pointer" }}
            />
          </Card>

          <Card className="Reveiwcard " id="newaccimagespot">
            <Card.Img
              variant="top"
              className="reviewimages"
              src={Reveiw5}
              fluid
              style={{ cursor: "pointer" }}
            />
          </Card>

          <Card className="Reveiwcard " id="newaccimagespot">
            <Card.Img
              variant="top"
              className="reviewimages"
              src={Reveiw6}
              fluid
              style={{ cursor: "pointer" }}
            />
          </Card>

          <Card className="Reveiwcard " id="newaccimagespot">
            <Card.Img
              variant="top"
              className="reviewimages"
              src={Reveiw7}
              fluid
              style={{ cursor: "pointer" }}
            />
          </Card>

          <Card className="Reveiwcard " id="newaccimagespot">
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
          className="mt-4 ms-5 mb-4"
          variant="outline-primary"
          href="https://www.google.com/maps/place/Firoz+autoriders/@18.9653402,72.8262387,17z/data=!4m18!1m9!3m8!1s0x3be7cfb356591615:0xb080cc0812f74994!2sFiroz+autoriders!8m2!3d18.9653402!4d72.8288136!9m1!1b1!16s%2Fg%2F11nsb0_d0h!3m7!1s0x3be7cfb356591615:0xb080cc0812f74994!8m2!3d18.9653402!4d72.8288136!9m1!1b1!16s%2Fg%2F11nsb0_d0h?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
        >
          More
        </Button>
      </div>

      {/*HAPPY CUSTOMERS*/}
      <div className="bg-light burgmanbikesection cardgrove">
        <div>
          <motion.h1 
               initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.4 },
            ease: "easeIn",
            duration: 0.1,
          }}
          className="text-center mb-5 mt-2 reviewfont">
            <span style={{ color: "#ffdb0f" }}>******</span>HAPPY CUSTOMERS
            <span style={{ color: "#ffdb0f" }}>******</span>
            <br></br>
            <p style={{ fontSize: "15px" }}>Firoz AutoRides</p>
          </motion.h1>
        </div>

        <Container>
          <Row className="">
            <Col lg={4} xs={12} md={8} className="mb-2">
              {" "}
              <Card 
              className="">
                <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0, 0.40, 0.2, 1.01],
            }}
                >
<Card.Img
                  variant="top"
                  className="cardgrove"
                  src={happycs5}
                  fluid
                  style={{ height: "370px" }}
                />
                </motion.div>
                
              </Card>
            </Col>
            <Col lg={4} xs={12} md={8} className="mb-2">
              {" "}
              <Card className="">
                     <motion.div
                       initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0, 0.40, 0.2, 1.01],
            }}
                >
                <Card.Img
                  variant="top"
                  className="cardgrove"
                  src={happycs5}
                  fluid
                  style={{ height: "370px" }}
                />
                </motion.div>
              </Card>
            </Col>
            <Col lg={4} xs={12} md={8} className="mb-2">
              {" "}
              <Card className="">
                        <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0, 0.40, 0.2, 1.01],
            }}
                >
                <Card.Img
                  variant="top"
                  className="cardgrove"
                  src={happycs1}
                  fluid
                  style={{ height: "370px" }}
                />
                </motion.div>
              </Card>
            </Col>
            <Col lg={4} xs={12} md={8} className="mb-2">
              {" "}
              <Card className="">
                        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0, 0.40, 0.2, 1.01],
            }}
                >
                <Card.Img
                  variant="top"
                  className="cardgrove"
                  src={happycs2}
                  fluid
                  style={{ height: "370px" }}
                />
                </motion.div>
              </Card>
            </Col>
            <Col lg={4} xs={12} md={8} className="mb-2">
              {" "}
              <Card className="">
                            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0, 0.40, 0.2, 1.01],
            }}
                >
                <Card.Img
                  variant="top"
                  className="cardgrove"
                  src={happycs3}
                  fluid
                  style={{ height: "370px" }}
                />
                </motion.div>
              </Card>
            </Col>
            <Col lg={4} xs={12} md={8} className="mb-2">
              {" "}
              <Card className="">
                            <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0, 0.40, 0.2, 1.01],
            }}
                >
                <Card.Img
                  variant="top"
                  className="cardgrove"
                  src={happycs4}
                  fluid
                  style={{ height: "370px" }}
                />
                </motion.div>
              </Card>
            </Col>
            <Col lg={4} xs={12} md={8} className="mb-2">
              {" "}
              <Card className="">
                            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0, 0.40, 0.2, 1.01],
            }}
                >
                <Card.Img
                  variant="top"
                  className="cardgrove"
                  src={happycs6}
                  fluid
                  style={{ height: "370px" }}
                />
                </motion.div>
              </Card>
            </Col>
            <Col lg={4} xs={12} md={8} className="mb-2">
              {" "}
              <Card className="">
                            <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0, 0.40, 0.2, 1.01],
            }}
                >
                <Card.Img
                  variant="top"
                  className="cardgrove"
                  src={happycs7}
                  fluid
                  style={{ height: "370px" }}
                />
                </motion.div>
              </Card>
            </Col>
            <Col lg={4} xs={12} md={8} className="mb-2">
              {" "}
              <Card className="">
                              <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0, 0.40, 0.2, 1.01],
            }}
                >
                <Card.Img
                  variant="top"
                  className="cardgrove"
                  src={happycs8}
                  fluid
                  style={{ height: "370px" }}
                />
                </motion.div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

        <ReactPlayer
          url={burgmanbannervideo}
          playing={true}
          loop={true}
          controls={false}
          muted={true}
          progressInterval={8000}
          className="react-player homevideo "
          auotplay
        />

      <div className="p-3">
        <h2 className="text-light">Suzuki Access 125 FAQs</h2>
        <Accordion defaultActiveKey="0" className="cardgrove">
          <Accordion.Item eventKey="0" className="bg-info">
            <Accordion.Header>
              Q: What is the on-road price of Suzuki Access 125 in 2025?
            </Accordion.Header>
            <Accordion.Body>
              A: The 2025 on-road price of Suzuki Access 125 in Mumbai is Rs.
              1,03,041. This Suzuki Access 125 price includes the ex-showroom
              price, RTO and insurance charges.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="bg-info">
            <Accordion.Header>
              Q: What is the actual mileage of Suzuki Access 125?
            </Accordion.Header>
            <Accordion.Body>
              A: According to the user reported data, Suzuki Access 125 gives an
              average mileage of 46 kmpl.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="bg-info">
            <Accordion.Header>
              Q: Which is better Suzuki Access 125 or Honda Activa 125?
            </Accordion.Header>
            <Accordion.Body>
              A: Suzuki Access 125 is priced at Rs. 85,470, has a 124 cc engine,
              gives a mileage of 46 kmpl and weighs 106 kg, whereas, the price
              of Honda Activa 125 is Rs. 85,196 with a 123.92 cc engine, giving
              a mileage of 47 kmpl and weighing 110 kg.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="bg-info">
            <Accordion.Header>
              Q: What are the colour options of Suzuki Access 125?
            </Accordion.Header>
            <Accordion.Body>
              A: Suzuki Access 125 is available in 5 colours which are Metallic
              Mat Black, Pearl Grace White, Metallic Mat Stellar Blue, Solid Ice
              Green and Pearl Shiny Beige.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="bg-info">
            <Accordion.Header>
              Q: What are the key specifications of Suzuki Access 125?
            </Accordion.Header>
            <Accordion.Body>
              A: Suzuki Access 125 is a Scooter that weighs 106 kg, has a 124 cc
              BS6 Phase 2B engine and a fuel capacity of 5.3 litres.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <MyForm />
    </>
  );
}

export default HomePage;
