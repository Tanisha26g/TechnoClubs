import { FaFacebookF, FaTwitter, FaSkype, FaLinkedinIn } from "react-icons/fa";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="gy-4">
          <Col md={3}>
            <h2 className="text-primary fw-bold">E-Deewar</h2>
            <p className="text-light">
              We are a community of tech enthusiasts, working to build and share
              innovative tech solutions and projects.
            </p>
            <div className="d-flex gap-3 mt-3">
              <FaFacebookF className="text-light hover-effect" />
              <FaTwitter className="text-light hover-effect" />
              <FaSkype className="text-primary hover-effect" />
              <FaLinkedinIn className="text-light hover-effect" />
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h5 className="fw-semibold">QUICK LINKS</h5>
            <ul className="list-unstyled text-light">
              <li className="hover-effect" ><Link to="/about" className = "hover-effect" text-decoration-none>About Us</Link></li>
              <li className="hover-effect"><Link to="/faqs" className = "hover-effect" text-decoration-none>FAQs</Link></li>
              <li className="hover-effect"><Link to="/browse" className = "hover-effect" text-decoration-none>Listings</Link></li>
              <li className="hover-effect"><Link to="/profile" className = "hover-effect" text-decoration-none>Profile</Link></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3}>
            <h5 className="fw-semibold">CONTACT INFO</h5>
            <ul className="list-unstyled text-light">
              <li>E-Deewar, ABC University</li>
              <li>+1 234 567 890</li>
              <li>📧 edeewar@abcuniversity.in</li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col md={3}>
            <h5 className="fw-semibold">NEWSLETTER</h5>
            <p className="text-light">Stay updated with the latest tech news and events.</p>
            <Form>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                className="mb-2"
              />
              <Button variant="primary" className="w-100">
                SUBSCRIBE NOW
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="text-center text-secondary mt-4 pt-3 border-top">
          <p>© 2025 E-Deewar. All Rights Reserved</p>
          <div className="d-flex justify-content-center gap-3">
            <span className="hover-effect">Privacy Policy</span>
            <span className="hover-effect">Terms of Service</span>
          </div>
        </div>
      </Container>

      {/* Custom Styles */}
      <style>
        {`
          .hover-effect {
            cursor: pointer;
            transition: color 0.3s ease-in-out;
          }
          .hover-effect:hover {
            color: #007bff !important;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
