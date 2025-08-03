import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Image from "react-bootstrap/Image";
import Carousel2 from "react-multi-carousel";
import Burgmanexblue from "../Accesspage/images/BurgmanExnewMatblue.png";
import burgmanexbrown from "../Accesspage/images/burgmanexbrown.png";
import burgmanexblk from "../Accesspage/images/burgmanexblk.png";
import burgmanmeter from "../Accesspage/images/burgmanexmeter.png";
import burgmanexfrontwheel from "../Burgmanpage/images/burgmanexFront View.png";
import burgmanexdashboard from "../Burgmanpage/images/burgmanexdashboard.png";
import burgmanfrontpocket from "../Burgmanpage/images/burgmanfrontpocket.png";
import burgmanfoot from "../Burgmanpage/images/burgmanfrontfoot.png";
import usbcharger from "../Accesspage/images/usbcharger.png";
import FrontHook from "../Accesspage/images/FrontHook.png";
import BurgmanCylenser from "../Burgmanpage/images/burgmanexcylenser.png";
import UnderseatStorage from "../Burgmanpage/images/burgmanunderstorage.png";
import burgmanhandle from "../Burgmanpage/images/burgmanhandle.png";

export const AllBurgmanImage = () => {
  function AllBurgmanImage(props) {
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
            Burgman Images
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel2 responsive={responsive}>
            <Image
              variant="top"
              src={Burgmanexblue}
              fluid
              style={{ cursor: "pointer" }}
            />

            <Image
              variant="top"
              src={burgmanexbrown}
              fluid
              style={{ cursor: "pointer" }}
            />

            <Image
              variant="top"
              src={burgmanexblk}
              fluid
              style={{ cursor: "pointer" }}
            />

            <div>
              <Image
                variant="top"
                src={burgmanmeter}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                Digital Connectivity meter
              </p>
            </div>

            <div>
              <Image
                variant="top"
                src={burgmanexfrontwheel}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                Front Wheel
              </p>
            </div>

            <div>
              <Image
                variant="top"
                src={burgmanexdashboard}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                {" "}
                Front premium Dashboard
              </p>
            </div>

            <div>
              <Image
                variant="top"
                src={burgmanfoot}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                {" "}
                Front Foot Section
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
                src={burgmanfrontpocket}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                {" "}
                Front Store Pocket
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
                src={BurgmanCylenser}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                {" "}
                Classic Cylenser
              </p>
            </div>

            <div>
              <Image
                variant="top"
                src={burgmanhandle}
                fluid
                style={{ cursor: "pointer" }}
              />
              <p
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                className="text-center mt-3 text-danger"
              >
                {" "}
                front Handle Veiwgit
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

      <AllBurgmanImage show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default AllBurgmanImage;
