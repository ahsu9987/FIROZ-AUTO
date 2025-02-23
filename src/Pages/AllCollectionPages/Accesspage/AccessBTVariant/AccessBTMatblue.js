import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import NewAccBTBlue from "./images/NewAccessmatblue.jpg";
import Table from "react-bootstrap/Table";
// import access from './images/acces ice green BT.avif';

  const AccessBTMatblue = () => {
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


      
    </>
  );
}

export default  AccessBTMatblue;
