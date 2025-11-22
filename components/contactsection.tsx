"use client"
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function ContactSection() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-overlay"></div>
            <Container className="contact-content">
                <Row className='justify-content-center'>
                    <Col md={8} lg={6}>
                        <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="bg-primary p-4 text-center text-white">
                                <h2 className="fw-bold text-white mb-2">Contact Us</h2>
                                <p className="mb-0 opacity-75">
                                    Have questions? We'd love to hear from you.
                                </p>
                            </div>
                            
                            <Card.Body className="p-4 p-md-5 bg-white">
                                <Form>
                                    <Form.Group className="mb-4" controlId="formName">
                                        <Form.Label className="fw-semibold text-secondary small">FULL NAME</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Enter your name" 
                                            required 
                                            className="py-2 bg-light border-0"
                                        />
                                    </Form.Group>
                                    
                                    <Form.Group className="mb-4" controlId="formEmail">
                                        <Form.Label className="fw-semibold text-secondary small">EMAIL ADDRESS</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            placeholder="Enter your email" 
                                            required 
                                            className="py-2 bg-light border-0"
                                        />
                                    </Form.Group>    
                                    
                                    <Form.Group className="mb-4" controlId="formMessage">
                                        <Form.Label className="fw-semibold text-secondary small">MESSAGE</Form.Label>
                                        <Form.Control 
                                            as="textarea" 
                                            rows={5} 
                                            placeholder="Write your message here..." 
                                            required 
                                            className="py-2 bg-light border-0 resize-none"
                                        />
                                    </Form.Group>

                                    <div className="d-grid">
                                        <Button variant="primary" type="submit" size="lg" className="rounded-pill shadow-sm fw-bold">
                                            Send Message
                                        </Button>
                                    </div>
                                </Form> 
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactSection;