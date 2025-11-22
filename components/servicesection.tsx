"use client";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from "next/image";

const services = [
    {
        id: 1,
        image: "/images/babyai.jpg",
        title: "free healthcare",
        desc: "dapatkan layanan kesehatan gratis pada kunjungan pertama"
    },
    {
        id: 2,
        image: "/images/babyai.jpg",
        title: "ugd dan igd 24 jam",
        desc: "melayani pasien selama 24 jam penuh setiap hari"
    },
    {
        id: 3,
        image: "/images/babyai.jpg",
        title: "operasi otak",
        desc: "spesialis operasi otak"
    }
];

function ServiceSection() {
    return (
        <Container className='my-5'>
            <Row className="g-4">
                {services.map((item) => (
                    <Col md={4} key={item.id}>
                        <Card className="h-100 text-center border-0 shadow-sm">
                            <div className="d-flex justify-content-center mt-3">
                                <Image 
                                    src={item.image} 
                                    alt={item.title} 
                                    width={100} 
                                    height={100}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                            <Card.Body>
                                <h3 className="h4 fw-bold mb-3 text-primary">{item.title}</h3>
                                <p className="text-muted mb-0">{item.desc}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ServiceSection;