import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import Image from "react-bootstrap/Image";
import Carousel2 from "react-multi-carousel";
import accwhitetft from "../Accesspage/images/accesswhitebttft.jpeg";
import accmatbluetft from "../Accesspage/images/accmatbluetft.jpeg";
import accblktft from "../Accesspage/images/accblktft.jpeg";
import accicegreentft from "../Accesspage/images/accicegreentft.jpeg";
import accbluetft from "../Accesspage/images/accessbluetft.jpeg";
import accwhite from "../Accesspage/images/accwhitetft.jpeg";
import tftmeter from "../Accesspage/images/TFT Meter.png";
import normalbtmeter from "../Accesspage/images/Normalmeter.png";
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

export const AllAccessimg = () => {
  function AllAccessimg(props) {
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

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Access Images
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel2 responsive={responsive}>
            <Image
              variant="top"
              src={accwhitetft}
              fluid
              style={{ cursor: "pointer" }}
            />

            <Image
              variant="top"
              src={accmatbluetft}
              fluid
              style={{ cursor: "pointer" }}
            />

            <Image
              variant="top"
              src={accblktft}
              fluid
              style={{ cursor: "pointer" }}
            />

            <Image
              variant="top"
              src={accicegreentft}
              fluid
              style={{ cursor: "pointer" }}
            />

            <Image
              variant="top"
              src={accbluetft}
              fluid
              style={{ cursor: "pointer" }}
            />

            <Image
              variant="top"
              src={accwhite}
              fluid
              style={{ cursor: "pointer" }}
            />

            <div>
              <Image
                variant="top"
                src={tftmeter}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                TFT Right Front Three Quarter
              </p>
            </div>

            <div>
              <Image
                variant="top"
                src={normalbtmeter}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                Touchscreen Instrument Cluster
              </p>
            </div>

            <div>
              <Image
                variant="top"
                src={starterbtn}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                {" "}
                Right Side Throttle Grip
              </p>
            </div>

            <div>
              <Image
                variant="top"
                src={HazardLights}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                {" "}
                Hazard Lights Switch
              </p>
            </div>

            <div>
              <Image
                variant="top"
                src={usbcharger}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                {" "}
                USB Charging Port
              </p>
            </div>

            <div>
              <Image
                variant="top"
                src={FrontHook}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                {" "}
                Front Luggage Hook
              </p>
            </div>

            <div>
              <Image
                variant="top"
                src={GloveBox}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                {" "}
                Glove Box
              </p>
            </div>

            <div>
              <Image
                variant="top"
                src={UnderseatStorage}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                {" "}
                Underseat Storage
              </p>
            </div>

            <div>
              <Image
                variant="top"
                src={HeatProtector}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                {" "}
                HeatProtector
              </p>
            </div>

            <div>
              <Image
                variant="top"
                src={frontwheel}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                {" "}
                front wheel
              </p>
            </div>

            <div>
              <Image
                variant="top"
                src={frontalloywheel}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                {" "}
                Front Alloy Wheel
              </p>
            </div>

            <div>
              <Image
                variant="top"
                src={CloseFuel}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                {" "}
                Close Fuel Flape
              </p>
            </div>
          </Carousel2>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="text-center">
        <Button
          variant="outline-warning"
          className="ps-5 pe-5 pt-3 pb-3"
          onClick={() => setModalShow(true)}
        >
          View More Images
        </Button>
      </div>

      <AllAccessimg show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default AllAccessimg;
