"use client"
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Image from 'next/image';

const works = [
    {
        id: 1,
        title: "Baby Healthcare",
        desc: "Memproses kelahiran,kesehatan bayi, dan tumbuh kembang bayi",
        image: "/images/babyai.jpg"
    },
    {
        id: 2,
        title: "Best Doctor",
        desc: "Mempunyai lebih dari 1000 dokter terbaik yang bisa menyembuhkan segala penyakit",
        image: "/images/gooddoctor.jpg"
    },
    {
        id: 3,
        title: "Elderly Care",
        desc: "Fasilitas kesehatan khusus lansia dengan pelayanan terbaik",
        image: "/images/lansia.jpg"
    }
]

function WorkSection() {
    return (
        <Container className="my-5">
            <Row className='mb-4'>
                <Col md={12} className="text-center">
                    <h2 className="fw-bold text-primary">What We Work</h2>
                    <p className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, officiis?</p>
                </Col>
            </Row>
            <Row className="g-4">
                {works.map((item) => (
                    <Col md={4} key={item.id}>
                        <Card className="h-100 border-0 shadow-sm overflow-hidden">
                            <div className="card-img-wrapper">
                                <Image 
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="img-cover"
                                />
                            </div>
                            <Card.Body className="d-flex flex-column p-4">
                                <Card.Title className="fw-bold text-dark mb-3">
                                    {item.title}
                                </Card.Title>
                                <Card.Text className="text-secondary flex-grow-1">
                                    {item.desc}
                                </Card.Text>
                                <Button variant="primary" className="rounded-pill fw-bold mt-3">
                                    Read More
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default WorkSection;