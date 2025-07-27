import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import accesimg from './images/AccBeige.png';
import Image from 'react-bootstrap/Image';
import TFTMETER from "../Accesspage/images/TFT Meter.png";





export const AllAccessimg = () => {

  


function AllAccessimg(props) {

    
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
       <Carousel>
      <Carousel.Item>
                  <p className="text-center text-dark text-bold">TFT Right Front Three Quarter</p>
                  <Image
                    src={TFTMETER}
                    fluid
                    thumbnail
                  />
      </Carousel.Item>
      <Carousel.Item>
                 <Image src={accesimg} thumbnail />

       
      </Carousel.Item>
      <Carousel.Item>
                 <Image src={accesimg} thumbnail />
      </Carousel.Item>
    </Carousel>

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
    <div className='text-center'>
 <Button variant="outline-warning" className='ps-5 pe-5 pt-3 pb-3' onClick={() => setModalShow(true)}>
       View All Images
      </Button>
    </div>
     

      <AllAccessimg
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default AllAccessimg;