import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import firozlogo from "../images/firozautologo.jpeg";
// import { Image } from "react-bootstrap";

export const MyForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    alert("Thank you for Submitted");

    emailjs
      .sendForm("service_mpe3wb3", "template_kczguax", form.current, {
        publicKey: "EjgRgHec6EBmCnMQZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  function MyForm(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your Form is Submitted
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Thank you for send Mail</h4>
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
      <Container className="bg-light myform">
        <h1>GET IN TOUCH</h1>
        <Row >
          <Col xs={12} md={8} lg={4}  className="bg-dark p-3 m-3 " >
            <form id="messageForm" ref={form} onSubmit={sendEmail}>
              <input type="text" name="form_name" placeholder="Your name.." />
              <input
                type="email"
                name="form_email"
                placeholder="Your email addres.."
              ></input>{" "}
              <input
                type="text"
                id="quantity"
                name="from_Number"
                placeholder="Your number.."
              ></input>
              <input
                type="text"
                name="from_place"
                placeholder="Your place name.."
              />
              <input
                type="text"
                id="quantity"
                name="from_zip"
                placeholder="Your pin code.."
              ></input>
              <textarea
                id="subject"
                name="message"
                placeholder="Write something.."
                style={{ height: "200px" }}
              ></textarea>
              <Button
                type="submit"
                variant="primary"
                onClick={() => setModalShow(true)}
              >
                send
              </Button>
            </form>
          </Col>
          <Col xs={12} md={8} lg={6} className="bg-light">
            {/* <Image src={firozlogo} className="logofiroz" /> */}
          </Col>
        </Row>
      </Container>
      <MyForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default MyForm;
