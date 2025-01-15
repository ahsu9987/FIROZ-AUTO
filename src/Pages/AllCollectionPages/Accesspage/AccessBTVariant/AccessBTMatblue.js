import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";
import accesicegreen from '../AccessBTVariant/images/acces ice green BT.avif';



function AccessBTMatblue (){
    return(
        <>
         <Container className="p-5">
      <Row style={{backgroundColor:'green'}}>
        <Col style={{backgroundColor:'red'}}>
        <Image
                src={accesicegreen} fluid
                className=" "
              />
        </Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
        </>
    )
}

export default AccessBTMatblue;