import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import firozautologo from "./HomeAllimages/Alllogo/logofirozauto.png";
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
// import bannerburgmanimg from "../images/bannerburgmanimg.jpg";
// import bannerblkburgman from "../images/bannerblkburgman.jpeg";
import banneracessimg from "../images/bannerimgaccess.jpeg";
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
      <div style={{marginTop:"85px"}}>
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
      </div>

      {/* ABOUT US */}
      <div>
        <Row>
          <Col xs={12} md={8} lg={6} className="text-light p-4 ">
            <motion.h2
              style={{ fontFamily: "Franklin Gothic Medium" }}
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
              style={{ fontFamily: "Bahnschrift SemiBold" }}
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
              WELCOME TO{" "}
              <span style={{ fontFamily: "Arial Black" }}>FIROZ</span>{" "}
              <span
                className="text-danger"
                style={{ fontFamily: "Arial Black" }}
              >
                AUTORIDES
              </span>{" "}
              SAFE RIDE
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
              style={{ fontFamily: "Bahnschrift SemiBold" }}
            >
              Welcome to
              <span style={{ fontFamily: "Arial Black" }}> Firoz</span>
              <span
                className="text-danger "
                style={{ fontFamily: "Arial Black" }}
              >
                AutoRides
              </span>
              , your trusted destination for brand new two-wheelers. Established
              in
              <span
                className="text-warning"
                style={{ fontFamily: "Arial Black" }}
              >
                2018
              </span>
              ,<span style={{ fontFamily: "Arial Black" }}> Firoz</span>
              <span
                className="text-danger "
                style={{ fontFamily: "Arial Black" }}
              >
                AutoRides
              </span>
              , has quickly become a leading name in the{" "}
              <span style={{ fontFamily: "Arial Black" }}>two-</span>
              <span className="text-info" style={{ fontFamily: "Arial Black" }}>
                wheeler
              </span>{" "}
              Multi Brand Dealer, renowned for our commitment to quality,
              customer satisfaction, and innovation. <br></br>
              Since our inception, we have been dedicated to providing our
              customers with the best selection of{" "}
              <span style={{ fontFamily: "Arial Black" }}>two-</span>
              <span className="text-info" style={{ fontFamily: "Arial Black" }}>
                wheelers
              </span>
              , ranging from scooters to motorcycles. Our journey began with a
              simple mission: to make high-quality{" "}
              <span style={{ fontFamily: "Arial Black" }}>two-</span>
              <span className="text-info" style={{ fontFamily: "Arial Black" }}>
                wheelers
              </span>{" "}
              accessible to everyone, ensuring a smooth, safe, and enjoyable
              ride for our customers.<br></br>
              Experience the difference at{" "}
              <span style={{ fontFamily: "Arial Black" }}> Firoz</span>
              <span
                className="text-danger "
                style={{ fontFamily: "Arial Black" }}
              >
                AutoRides
              </span>
              ,. Visit our showroom and explore our wide range of brand new{" "}
              <span style={{ fontFamily: "Arial Black" }}>two-</span>
              <span className="text-info" style={{ fontFamily: "Arial Black" }}>
                wheelers
              </span>
              . Our friendly and knowledgeable staff are here to help you make
              the right choice and ensure you have an unforgettable riding
              experience.
            </motion.p>
          </Col>

          <Col xs={12} md={8} lg={6} className="">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.5,
                ease: [0, 0.4, 0.2, 1.01],
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
          <Row>
            <Col xs={12} md={8} lg={7} className="  allcol">
              <Image src={NewAccicemat} className="carsoulimg p-5 " />
            </Col>
            <Col xs={12} md={4} lg={5} className="allcols p-5">
              <h1
                className="Htxt text-info"
                style={{ fontFamily: "Arial Black" }}
              >
                THE NEW COLOUR<br></br>ACCESS ICE-GREEN BT
              </h1>
              <p
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                E20 COMPLIANT / LED HEADLAMP / LED POSITION LIGHTS /<br></br>
                SIDE STAND INTERLOCK / PREMIUM CHROME EXTERNAL FUEL LID/{" "}
                <br></br> BLUETOOTH® ENABLED DIGITAL CONSOLE
              </p>
              <h3
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                SPECIFICATION:-
              </h3>
              <p
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
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
            <Col xs={12} md={8} lg={7} className="  allcol ">
              <Image className="carsoulimg p-5" src={NewAccmatblk} />
            </Col>
            <Col xs={12} md={4} lg={5} className="allcols p-5">
              <h1 className=" Htxt" style={{ fontFamily: "Arial Black" }}>
                THE NEW COLOUR<br></br>ACCESS MAT-BLACK
              </h1>
              <p
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                E20 COMPLIANT / LED HEADLAMP / LED POSITION LIGHTS /<br></br>
                SIDE STAND INTERLOCK / PREMIUM CHROME EXTERNAL FUEL LID/{" "}
                <br></br> BLUETOOTH® ENABLED DIGITAL CONSOLE
              </p>
              <h3
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                SPECIFICATION:-
              </h3>
              <p
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
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
            <Col xs={12} md={8} lg={7} className=" allcol">
              <Image className="carsoulimg p-5" src={burgmanbrown} />
            </Col>
            <Col xs={12} md={4} lg={5} className="allcols p-5">
              <h1
                className=" Htxt"
                style={{ color: "#5c371d", fontFamily: "Arial Black" }}
              >
                THE NEW COLOUR<br></br>BURGMAN BROWN-EX
              </h1>
              <p
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                E20 COMPLIANT / LED HEADLAMP / LED POSITION LIGHTS /<br></br>
                SIDE STAND INTERLOCK / PREMIUM CHROME EXTERNAL FUEL LID/{" "}
                <br></br> BLUETOOTH® ENABLED DIGITAL CONSOLE
              </p>
              <h3
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                SPECIFICATION:-
              </h3>
              <p
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
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
            <Col xs={12} md={8} lg={7} className="  allcol">
              <Image className="carsoulimg p-5" src={burgmanmatblue} />
            </Col>
            <Col xs={12} md={4} lg={5} className="allcols p-5">
              <h1
                className="Htxt"
                style={{ color: "#2c6fbb", fontFamily: "Arial Black" }}
              >
                THE NEW COLOUR<br></br>BURGMAN MAT-BLUE
              </h1>
              <p
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                E20 COMPLIANT / LED HEADLAMP / LED POSITION LIGHTS /<br></br>
                SIDE STAND INTERLOCK / PREMIUM CHROME EXTERNAL FUEL LID/{" "}
                <br></br> BLUETOOTH® ENABLED DIGITAL CONSOLE
              </p>
              <h3
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                SPECIFICATION:-
              </h3>
              <p
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
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
            <Col xs={12} md={8} lg={7} className="  allcol">
              <Image className="carsoulimg p-5" src={burgmanwhite} />
            </Col>
            <Col xs={12} md={4} lg={5} className=" p-5 allcols">
              <h1
                className="Htxt text-dark"
                style={{ fontFamily: "Arial Black" }}
              >
                THE NEW COLOUR<br></br>BURGMAN WHITE
              </h1>
              <p
                className=" text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                E20 COMPLIANT / LED HEADLAMP / LED POSITION LIGHTS /<br></br>
                SIDE STAND INTERLOCK / PREMIUM CHROME EXTERNAL FUEL LID/{" "}
                <br></br> BLUETOOTH® ENABLED DIGITAL CONSOLE
              </p>
              <h3
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                SPECIFICATION:-
              </h3>
              <p
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
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

      {/* ACCESS & TRENDING SPOTLIGHT*/}
      <div className=" burgmanbikesection mb-5">
        <motion.h2
          initial={{ y: -20, opacity: 0.9 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
            duration: 0.1,
          }}
          className="mb-4 mt-3 text-light"
          style={{ fontFamily: "Bahnschrift SemiBold" }}
        >
          TRENDING BIKES OF 2025
        </motion.h2>

        <Carousel2 responsive={responsive}>
          <Card className="topbrandcard" style={{ backgroundColor: "#000" }}>
            <a href="/AccessBT">
              <motion.div
                initial={{ x: 100, opacity: 0.1 }}
                whileInView={{ x: 0.1, opacity: 1 }}
                transition={{
                  delay: 0.9,
                  x: { type: "spring", stiffness: 15 },
                  opacity: { duration: 0.9 },
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
            </a>

            <Card.Body>
              <motion.div
                initial={{ x: -50, opacity: 0.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.8,
                  x: { type: "spring", stiffness: 20 },
                  opacity: { duration: 0.7 },
                  ease: "easeIn",
                  duration: 0.1,
                }}
              >
                <Card.Title
                  className="text-light"
                  style={{ fontFamily: "Bahnschrift SemiBold" }}
                >
                  Access Bleutooth Edition Disc Break
                </Card.Title>
              </motion.div>
            </Card.Body>
          </Card>

          <Card className="topbrandcard" style={{ backgroundColor: "#000" }}>
            <a href="/AccSE">
              <Card.Img
                variant="top"
                id="newaccimagespot"
                src={Accesblack}
                fluid
                style={{ cursor: "pointer" }}
              />
            </a>
            <Card.Body>
              <Card.Title
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                Access Special Edition Disc Break
              </Card.Title>
            </Card.Body>
          </Card>

          <Card className="topbrandcard" style={{ backgroundColor: "#000" }}>
            <a href="/AccDrum">
              <Card.Img
                variant="top"
                id="newaccimagespot"
                src={Accessdrumblue}
                fluid
                style={{ cursor: "pointer" }}
              />
            </a>
            <Card.Body>
              <Card.Title
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                Access Drum Break Edition
              </Card.Title>
            </Card.Body>
          </Card>

          <Card className="topbrandcard" style={{ backgroundColor: "#000" }}>
            <a href="/BurgmanEx">
              <Card.Img variant="top" id="newaccimagespot" src={burgmanbrown} />
            </a>
            <Card.Body>
              <Card.Title
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                Burgman Ex Bleutooth Top Edition
              </Card.Title>
            </Card.Body>
          </Card>

          <Card className="topbrandcard" style={{ backgroundColor: "#000" }}>
            <a href="/BurgBT">
              <Card.Img
                variant="top"
                id="newaccimagespot"
                src={burgmangreenbt}
              />
            </a>
            <Card.Body>
              <Card.Title
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                Burgman Bleutooth Edition
              </Card.Title>
            </Card.Body>
          </Card>
        </Carousel2>

        <Button className="mb-2 ms-2" variant="outline-danger">
          More
        </Button>
      </div>

      {/* SPORTS BIKE SECTION*/}
      <div className=" burgmanbikesection">
        <h2
          className="mb-4 mt-3 text-light"
          style={{ fontFamily: "Bahnschrift SemiBold" }}
        >
          GET OFFERS ON POPULAR BIKES IN SPOTLIGHT
        </h2>

        <Carousel2 responsive={responsive}>
          <Card className="topbrandcard " style={{ backgroundColor: "#000" }}>
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
              <Card.Title
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                Yamaha Aerox 155
              </Card.Title>

              <Link to="/AccessBTBlue"></Link>
            </Card.Body>
          </Card>

          <Card className="topbrandcard" style={{ backgroundColor: "#000" }}>
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
              <Card.Title
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                Access Special Edition Disc Break
              </Card.Title>
            </Card.Body>
          </Card>

          <Card className="topbrandcard" style={{ backgroundColor: "#000" }}>
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
              <Card.Title
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                Access Drum Break Edition
              </Card.Title>
            </Card.Body>
          </Card>

          <Card className="topbrandcard" style={{ backgroundColor: "#000" }}>
            <Card.Img variant="top" id="newaccimagespot" src={burgmanbrown} />
            <Card.Body>
              <Card.Title
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                Burgman Ex Bleutooth Top Edition
              </Card.Title>
            </Card.Body>
          </Card>

          <Card className="topbrandcard" style={{ backgroundColor: "#000" }}>
            <Card.Img variant="top" id="newaccimagespot" src={burgmangreenbt} />
            <Card.Body>
              <Card.Title
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                Burgman Bleutooth Edition
              </Card.Title>
            </Card.Body>
          </Card>

          <Card className="topbrandcard" style={{ backgroundColor: "#000" }}>
            <Card.Img
              variant="top"
              id="newaccimagespot"
              src={burgmannonbtblk}
            />
            <Card.Body>
              <Card.Title
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                Burgman Non Bleutooth Edition
              </Card.Title>
            </Card.Body>
          </Card>
        </Carousel2>
        <Button className="mb-2 ms-2" variant="outline-danger">
          More
        </Button>
      </div>

      {/* Banner SECTION*/}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.9,
          delay: 0.7,
          ease: [0, 0.4, 0.2, 1.01],
        }}
      >
        <Row xs={12} md={8} className="p-4">
          <Image src={banneracessimg} />
        </Row>
      </motion.div>

      {/* brandlogo SECTION*/}
      <div className="burgmanbikesection mb-5">
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
          className="ms-2 mt-2 mb-3 text-light"                 style={{ fontFamily: "Bahnschrift SemiBold" }}

        >
          Browse Bikes Brand
        </motion.h1>

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
          <Table striped="columns" className="logotable" border={"2px"}>
            <tbody className="cardgrove" style={{ backgroundColor: "#000" }}>
              <tr>
                <td style={{ width: "20px", backgroundColor: "#000" }}>
                  <a href="/AccessBT">
                    <Image src={suzukilogo} className="brandlogocenter" />
                  </a>
                </td>
                <td style={{ width: "20px", backgroundColor: "#000" }}>
                  {" "}
                  <a href="/AccessBTBlue">
                    <Image src={tvslogo} className="brandlogocenter" />
                  </a>
                </td>
                <td style={{ width: "20px", backgroundColor: "#000" }}>
                  {" "}
                  <a href="/AccessBTBlue">
                    <Image src={royalelogo} className="brandlogocenter" />
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ width: "20px", backgroundColor: "#000" }}>
                  <a href="/AccessBTBlue">
                    <Image src={honda} className="brandlogocenter" />
                  </a>
                </td>
                <td style={{ width: "20px", backgroundColor: "#000" }}>
                  {" "}
                  <a href="/AccessBTBlue">
                    <Image src={hero} className="brandlogocenter" />
                  </a>
                </td>
                <td style={{ width: "20px", backgroundColor: "#000" }}>
                  {" "}
                  <a href="/AccessBTBlue">
                    <Image src={kawasaki} className="brandlogocenter" />
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ width: "20px", backgroundColor: "#000" }}>
                  <a href="/AccessBTBlue">
                    <Image src={yamaha} className="brandlogocenter" />
                  </a>
                </td>
                <td style={{ width: "20px", backgroundColor: "#000" }}>
                  {" "}
                  <a href="/AccessBTBlue">
                    <Image src={vespa} className="brandlogocenter" />
                  </a>
                </td>
                <td style={{ width: "20px", backgroundColor: "#000" }}>
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
                    variant="outline-danger"
                    className="btnbrandlogo mt-2 mb-2 ms-2"
                  >
                    Veiw more
                  </Button>
                  <Collapse in={open}>
                    <Table striped="columns">
                      <tbody
                        className="cardgrove"
                        style={{ backgroundColor: "#000" }}
                      >
                        <tr>
                          <td
                            style={{ width: "20px", backgroundColor: "#000" }}
                          >
                            <a href="/AccessBTBlue">
                              <Image src={tripuh} className="brandlogocenter" />
                            </a>
                          </td>
                          <td
                            style={{ width: "20px", backgroundColor: "#000" }}
                          >
                            {" "}
                            <a href="/AccessBTBlue">
                              <Image src={bmw} className="brandlogocenter" />
                            </a>
                          </td>
                          <td
                            style={{ width: "20px", backgroundColor: "#000" }}
                          >
                            {" "}
                            <a href="/AccessBTBlue">
                              <Image src={R15} className="brandlogocenter" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "20px", backgroundColor: "#000" }}
                          >
                            <a href="/AccessBTBlue">
                              <Image src={bajaj} className="brandlogocenter" />
                            </a>
                          </td>
                          <td
                            style={{ width: "20px", backgroundColor: "#000" }}
                          >
                            {" "}
                            <a href="/AccessBTBlue">
                              <Image
                                src={harleydavidson}
                                className="brandlogocenter"
                              />
                            </a>
                          </td>
                          <td
                            style={{ width: "20px", backgroundColor: "#000" }}
                          >
                            {" "}
                            <a href="/AccessBTBlue">
                              <Image src={bajaj} className="brandlogocenter" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "20px", backgroundColor: "#000" }}
                          >
                            <a href="/AccessBTBlue">
                              <Image src={bajaj} className="brandlogocenter" />
                            </a>
                          </td>
                          <td
                            style={{ width: "20px", backgroundColor: "#000" }}
                          >
                            {" "}
                            <a href="/AccessBTBlue">
                              <Image src={bajaj} className="brandlogocenter" />
                            </a>
                          </td>
                          <td
                            style={{ width: "20px", backgroundColor: "#000" }}
                          >
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
      <div className=" burgmanbikesection">
        <h2
          className="mb-4 mt-3 text-light"
          style={{ fontFamily: "Bahnschrift SemiBold" }}
        >
          GET OFFERS ON POPULAR BIKES IN SPOTLIGHT
        </h2>

        <Carousel2 responsive={responsive}>
          <Card className="topbrandcard " style={{ backgroundColor: "#000" }}>
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
              <Card.Title
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                Yamaha Aerox 155
              </Card.Title>

              <Link to="/AccessBTBlue"></Link>
            </Card.Body>
          </Card>

          <Card className="topbrandcard" style={{ backgroundColor: "#000" }}>
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
              <Card.Title
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                Access Special Edition Disc Break
              </Card.Title>
            </Card.Body>
          </Card>

          <Card className="topbrandcard" style={{ backgroundColor: "#000" }}>
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
              <Card.Title
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                Access Drum Break Edition
              </Card.Title>
            </Card.Body>
          </Card>

          <Card className="topbrandcard" style={{ backgroundColor: "#000" }}>
            <Card.Img variant="top" id="newaccimagespot" src={burgmanbrown} />
            <Card.Body>
              <Card.Title
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                Burgman Ex Bleutooth Top Edition
              </Card.Title>
            </Card.Body>
          </Card>

          <Card className="topbrandcard" style={{ backgroundColor: "#000" }}>
            <Card.Img variant="top" id="newaccimagespot" src={burgmangreenbt} />
            <Card.Body>
              <Card.Title
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                Burgman Bleutooth Edition
              </Card.Title>
            </Card.Body>
          </Card>

          <Card className="topbrandcard" style={{ backgroundColor: "#000" }}>
            <Card.Img
              variant="top"
              id="newaccimagespot"
              src={burgmannonbtblk}
            />
            <Card.Body>
              <Card.Title
                className="text-light"
                style={{ fontFamily: "Bahnschrift SemiBold" }}
              >
                Burgman Non Bleutooth Edition
              </Card.Title>
            </Card.Body>
          </Card>
        </Carousel2>
        <Button className="mb-2 ms-2" variant="outline-danger">
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
        className="react-player homevideo  "
        auotplay
      />

      {/* testimonial*/}
      <div
        className=" testimonialsection cardgrove mb-5 mt-5"
        style={{ backgroundColor: "black" }}
      >
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
          className="text-center mb-4 mt-4 reviewfont"
        >
          <span style={{ color: "#ffdb0f" }}>******</span>
          <span style={{ color: "white" }}>CUSTOMER</span>{" "}
          <span style={{ color: "red" }}>REVIEW</span>
          <span style={{ color: "#ffdb0f" }}>******</span>
        </motion.h1>

        <Carousel2 responsive={responsive}>
          <motion.Card
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.4 },
              ease: "easeIn",
              duration: 0.1,
            }}
            className="Reveiwcard "
            id="newaccimagespot"
          >
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
      <div className=" burgmanbikesection cardgrove mb-5">
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
            className="text-center mb-5 mt-2 reviewfont text-light"
          >
            <span style={{ color: "#ffdb0f" }}>******</span>HAPPY CUSTOMERS
            <span style={{ color: "#ffdb0f" }}>******</span>
            <br></br>
            <p style={{ fontSize: "15px" }}>
              Firoz<span style={{ color: "red" }}>AutoRides</span>
            </p>
          </motion.h1>
        </div>

        <Container>
          <Row className="">
            <Col lg={4} xs={12} md={8} className="mb-3">
              {" "}
              <Card className="">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4,
                    ease: [0, 0.4, 0.2, 1.01],
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
            <Col lg={4} xs={12} md={8} className="mb-3">
              {" "}
              <Card className="">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4,
                    ease: [0, 0.4, 0.2, 1.01],
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
            <Col lg={4} xs={12} md={8} className="mb-3">
              {" "}
              <Card className="">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4,
                    ease: [0, 0.4, 0.2, 1.01],
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

            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              variant="outline-light"
              className="btnbrandlogo mb-2 mt-2"
            >
              Veiw more Images
            </Button>

            <Collapse in={open}>
              <Table striped="columns">
                <Col lg={4} xs={12} md={8} className="mb-2">
                  {" "}
                  <Card className="">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.4,
                        ease: [0, 0.4, 0.2, 1.01],
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
                        ease: [0, 0.4, 0.2, 1.01],
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
                        ease: [0, 0.4, 0.2, 1.01],
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
                        ease: [0, 0.4, 0.2, 1.01],
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
                        ease: [0, 0.4, 0.2, 1.01],
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
                        ease: [0, 0.4, 0.2, 1.01],
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
              </Table>
            </Collapse>
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

      <div className="p-3 mt-5">
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
