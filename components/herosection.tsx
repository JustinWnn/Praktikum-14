"use client"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "HealthCare",
            subtitle: "sehat",
            imageUrl: "/images/bedrs.jpg",
        },
        {
            title: "Hospitality",
            subtitle: "Hospitality",
            imageUrl: "/images/hospit.jpg",
        },
        {
            title: "Medic",
            subtitle: "Medic",
            imageUrl: "/images/lorongmedis.jpg",
        },
    ]

    return (
        <Carousel fade interval={4000} data-bs-theme="dark">
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div className="hero-item">
                        <Image 
                            src={slide.imageUrl} 
                            alt={slide.title}
                            fill
                            className="img-cover"
                            priority={index === 0}
                        />
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
                    </div>
                    <Carousel.Caption>
                        <h1 className="display-4 fw-bold text-white">{slide.title}</h1>
                        <p className="lead text-white">{slide.subtitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default HeroSection;