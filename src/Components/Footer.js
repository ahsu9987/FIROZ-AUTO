import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import whatsaplogo from "../Pages/HomeAllimages/Alllogo/whatsapplogo.png";
import instalogo from "../Pages/HomeAllimages/Alllogo/instalogo.png";
import fblogo from "../Pages/HomeAllimages/Alllogo/facebooklogo.png";
import calllogo from "../Pages/HomeAllimages/Alllogo/calllogo.png";
import call from "../Pages/HomeAllimages/Alllogo/call.png";
import mail from "../Pages/HomeAllimages/Alllogo/mail.png";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <Container className="mb-5 mt-5">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0, 0.4, 0.2, 1.01],
          }}
          className=" reachcolor text-xl font-semibold text-white text-center mb-4"
        >
          Reach out to us on
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.7,
            ease: [0, 0.4, 0.2, 1.01],
          }}
        >
          <Row
            className="text-light"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.7,
              ease: [0, 0.4, 0.2, 1.01],
            }}
          >
            <Col xs={3}>
              <a href="whatsapp:contact=7678094646@s.whatsapp.com&message=I'd like to chat with you">
                <Image src={whatsaplogo} alt="Logo" className="footerlogo" />
              </a>
            </Col>
            <Col xs={3}>
              {" "}
              <Image src={fblogo} alt="Logo" className="footerlogo" />
            </Col>
            <Col xs={3}>
              {" "}
              <Image src={instalogo} alt="Logo" className="footerlogo" />
            </Col>
            <Col xs={3}>
              {" "}
              <a href="tel:767-809-4646">
                <Image
                  src={calllogo}
                  alt="Logo 767-809-4646"
                  className="footerlogo"
                />
              </a>
            </Col>
          </Row>
        </motion.div>
      </Container>
      <div className="container mx-auto px-4">
        {/* ---------- Top section ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact & social icons */}
          <div className="text-light">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="reachcolor text-xl font-semibold text-white mb-4 mt-5"
            >
              Contact
            </motion.h2>
            <p className="text-sm mt-3">
                                                        <Image src={call} alt="Logo"  />
 
              <a
                href="tel:767-809-4646"
                className="text-success"
                style={{ textDecorationLine: "none" }}
              >
                  +91-76780 94646
              </a>{" "}
              /{" "}
              <a
                href="tel:843-352-5372"
                className="text-success"
                style={{ textDecorationLine: "none" }}
              >
                +91‑8433525372
              </a>
            </p>
            <p className="text-sm mb-4 mt-3">
                                          <Image src={mail} alt="Logo"  />

              <a
                href="mailto:firozautorides@gmail.com"
                style={{ textDecorationLine: "none" }}
              >
                <span className="text-info"> firozautorides@gmail.com</span>
              </a>{" "}
            </p>
          </div>
        </div>

        {/* ---------- Bottom section ---------- */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-secondary mb-3">
          © 2025 Firoz Auto. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
export default Footer;
