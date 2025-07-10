import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm.js";
import logo from "../assets/images/Luky.svg";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mochamad-luky-adithia-7a31b1344/" target="_blank"><img src={navIcon1} alt=""/></a>
                <a href="https://github.com/MochamadLukyAdithia" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/mochamadlukyadithia" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
