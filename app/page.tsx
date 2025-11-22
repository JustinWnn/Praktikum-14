"use client";
import React from "react";
import Image from "next/image";

import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";

import { Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <Navbar />
      <main className="flex-grow-1">
        <HeroSection />
        
        <section className="py-5 bg-white">
          <Container>
            <Row className="align-items-center gy-4">
              <Col md={6}>
                <h2 className="fw-bold text-primary mb-2">About Us</h2>
                <h5 className="text-info mb-4">What We Do?</h5>
                <p className="text-secondary mb-4 lh-lg">
                  Layanan kesehatan terbaik sejagat raya dan dimensi
                </p>
                <Button className="btn-primary px-4 py-2 shadow-sm rounded-pill">
                  Learn More
                </Button>
              </Col>
              
              <Col md={6} className="text-center">
                <div className="position-relative rounded-4 overflow-hidden shadow-lg mx-auto about-img-wrapper">
                  <Image 
                    src="/images/house.jpg" 
                    alt="About Us" 
                    width={450}
                    height={550}
                    className="img-fluid"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-light-blue">
          <WorkSection />
        </section>

        <section className="py-5 bg-white">
          <ServiceSection />
        </section>

        <ContactSection />

        <Footer />
      </main>
    </div>
  );
}