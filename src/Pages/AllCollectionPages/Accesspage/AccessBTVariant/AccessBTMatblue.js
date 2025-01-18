import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import NewAccBTBlue from './images/NewAccessmatblue.jpg';
import Table from 'react-bootstrap/Table';






function AccessBTMatblue  (){
 

    return(
        <>
         <Container className=" p-5 mt-5">
      <Row >
        <Col className="p-2 "  xs={12} md={4} lg={7}>
        <Image id="pic" variant="top"   src={NewAccBTBlue} rounded  fluid/>
      <Button variant="outline-primary"  className="me-2 mt-2">Primary</Button>
      <Button variant="outline-secondary"  className="me-2 mt-2">Secondary</Button>
      <Button variant="outline-success" className="me-2 mt-2">Success</Button>
      <Button variant="outline-warning"  className="me-2 mt-2">Warning</Button>
      <Button variant="outline-danger"  className="me-2 mt-2">Danger</Button>
      <Button variant="outline-info"  className="me-2 mt-2">Info</Button>
        </Col>

    

        <Col xs={12} md={4} lg={5}  >
        <h1 className="mt-4" style={{ color: "#87D8C3" }}>
                THE NEW COLOUR<br></br>ACCESS ICE-GREEN BT
              </h1>
              <p className=" text-dark">
                E20 COMPLIANT / LED HEADLAMP / LED POSITION LIGHTS /<br></br>
                SIDE STAND INTERLOCK / PREMIUM CHROME EXTERNAL FUEL LID/{" "}
                <br></br> BLUETOOTH® ENABLED DIGITAL CONSOLE
              </p>
              <h3 className=" text-dark">SPECIFICATION:-</h3>
              <div  className="tabledata">
<Table striped bordered hover  >
    
      <tbody>
        <tr>
          <td >Engine Type:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4- Stroke, 1-Cylinder, Air Cooled</td>
        </tr>
        <tr>
          <td>Fuel Tank Capacity:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 Litr </td>
        </tr>
        <tr>
          <td>Starter System:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kick and Electric</td>
        </tr>
      </tbody>
    </Table>
</div>
              <Button variant="outline-success" className="mt-4" href="https://web.whatsapp.com/">
                BOOK NOW
              </Button>
        </Col>
      </Row>
      
    </Container>


    
        </>
    )
}

export default AccessBTMatblue ;