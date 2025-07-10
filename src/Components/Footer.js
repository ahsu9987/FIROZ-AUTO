import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import whatsaplogo from "../Pages/HomeAllimages/Alllogo/whatsapplogo.png";
import instalogo from "../Pages/HomeAllimages/Alllogo/instalogo.png";
import fblogo from "../Pages/HomeAllimages/Alllogo/facebooklogo.png";
import calllogo from "../Pages/HomeAllimages/Alllogo/calllogo.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <Container className="mb-5 mt-5">
        <Row className="text-light">
          <Col xs={3}>
            <Image src={whatsaplogo} alt="Logo" />
          </Col>
          <Col xs={3}>
            {" "}
            <Image src={instalogo} alt="Logo" />
          </Col>
          <Col xs={3}>
            {" "}
            <Image src={fblogo} alt="Logo" />
          </Col>
          <Col xs={3}>
            {" "}
            <Image src={calllogo} alt="Logo" />
          </Col>
        </Row>
      </Container>
      <div className="container mx-auto px-4">
        {/* ---------- Top section ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact & social icons */}
          <div className="text-light">
            <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
            <p className="text-sm">Phone: +91‑843352‑5372</p>
            <p className="text-sm mb-4">Email: support@firozauto.com</p>
          </div>
        </div>

        {/* ---------- Bottom section ---------- */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-secondary">
          © 2025 Firoz Auto. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
