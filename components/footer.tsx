"use client"
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <footer className="bg-primary-custom pt-5 pb-3">
            <Container>
                <Row className="gy-4">
                    <Col md={6} lg={3}>
                        <h6 className="fw-bold text-uppercase mb-4 letter-spacing-1">Our Products</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-white-opacity">Account</a></li>
                            <li className="mb-2"><a href="#" className="text-white-opacity">Bundle</a></li>
                            <li className="mb-2"><a href="#" className="text-white-opacity">Blog</a></li>
                            <li className="mb-2"><a href="#" className="text-white-opacity">Contact</a></li>
                            <li className="mb-2"><a href="#" className="text-white-opacity">Circular</a></li>
                        </ul>
                    </Col>

                    <Col md={6} lg={3}>
                        <h6 className="fw-bold text-uppercase mb-4 letter-spacing-1">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-white-opacity">Home</a></li>
                            <li className="mb-2"><a href="#" className="text-white-opacity">About Us</a></li>
                            <li className="mb-2"><a href="#" className="text-white-opacity">Service</a></li>
                            <li className="mb-2"><a href="#" className="text-white-opacity">Work</a></li>
                            <li className="mb-2"><a href="#" className="text-white-opacity">Products</a></li>
                        </ul>
                    </Col>

                    <Col md={6} lg={3}>
                        <h6 className="fw-bold text-uppercase mb-4 letter-spacing-1">Terms</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-white-opacity">Refund Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-white-opacity">Privacy Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-white-opacity">License</a></li>
                        </ul>
                    </Col>

                    <Col md={6} lg={3}>
                        <h6 className="fw-bold text-uppercase mb-4 letter-spacing-1">Newsletter</h6>
                        <p className="small text-white-opacity mb-3">Subscribe to get the latest updates.</p>
                        <Form className="mb-4">
                            <InputGroup className="bg-white rounded overflow-hidden p-1">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Your email..." 
                                    className="border-0 shadow-none fs-6"
                                />
                                <Button variant="primary" className="rounded fw-bold text-white btn-sm px-3">
                                    Go
                                </Button>
                            </InputGroup>
                        </Form>
                        
                        <h6 className="fw-bold text-uppercase mb-3 letter-spacing-1">Follow Us</h6>
                        <div className="d-flex gap-3">
                            <a href="#" aria-label="Facebook" className="text-white-opacity"><i className="bi bi-facebook fs-5"></i></a>
                            <a href="#" aria-label="Twitter" className="text-white-opacity"><i className="bi bi-twitter fs-5"></i></a>
                            <a href="#" aria-label="Instagram" className="text-white-opacity"><i className="bi bi-instagram fs-5"></i></a>
                            <a href="#" aria-label="Youtube" className="text-white-opacity"><i className="bi bi-youtube fs-5"></i></a>
                            <a href="#" aria-label="Pinterest" className="text-white-opacity"><i className="bi bi-pinterest fs-5"></i></a>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5 pt-3 border-top border-white border-opacity-25">
                    <Col className="text-center">
                        <p className="mb-0 small text-white-opacity">
                            &copy; {new Date().getFullYear()} Justin Wintersen Nawi Ngan 535240119.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}