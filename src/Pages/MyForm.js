import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const MyForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
function MyForm (props) {
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
        <Row>
          <Col className="bg-dark p-3 m-3 ">
            <form id="messageForm" ref={form} onSubmit={sendEmail}>
              <input type="text" name="form_name" placeholder="Your name.."/>
              <input type="email" name="form_email" placeholder="Your email addres.."></input> />
              <input type="text" id="quantity" name="from_Number" placeholder="Your number.."></input>
              <input type="text" name="from_place"  placeholder="Your place name.." />
              <input type="text" id="quantity" name="from_zip" placeholder="Your pin code.."></input>
                <textarea id="subject" name="message" placeholder="Write something.." style={{height:'200px'}}></textarea>
              {/* <input type="submit" value="Send" /> */}
               <Button type="submit"  variant="primary" onClick={() => setModalShow(true)}>
        send
      </Button>
              
            </form>
          </Col>
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.2324207187935!2d72.82623867504915!3d18.96534018221662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfb356591615%3A0xb080cc0812f74994!2sFiroz%20autoriders!5e0!3m2!1sen!2sin!4v1745146126841!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="firozmap"
            ></iframe>
          </Col>
        </Row>
      </Container>
    


      <MyForm
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default MyForm;
