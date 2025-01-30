import React, { useState } from 'react';
import styles from './Joinculture.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const joincultureData = [
    {
        icon: '/images/careers/inclusion.webp',
        title: 'Inclusion',
        description: 'Everyone feels welcome and valued'
    },
    {
        icon: '/images/careers/encouragement.webp',
        title: 'Encouragement',
        description: 'Grow your skills and career'
    },
    {
        icon: '/images/careers/flexibility.webp',
        title: 'Flexibility',
        description: 'Explore roles beyond your expertise'
    },
    {
        icon: '/images/careers/work-life-balance.webp',
        title: 'Work-life Balance',
        description: 'Collaboration and support come naturally'
    },
    {
        icon: '/images/careers/flexibility.webp',
        title: 'Fostering Teamwork',
        description: 'Balance professional and personal priorities'
    }
];

// Local static images
const sliderImages = [
    "/images/careers/slide1.png",
    "/images/careers/slide2.png",
    "/images/careers/slide3.png",
    "/images/careers/slide4.png",
    "/images/careers/slide1.png",
    "/images/careers/slide2.png",
    "/images/careers/slide3.png",
    "/images/careers/slide4.png",
    "/images/careers/slide1.png",
    "/images/careers/slide2.png"
];


const settings = {
    infinite: true,         // Enable infinite loop
    speed: 1000,            // Slide transition speed
    slidesToShow: 5,        // Number of slides visible at a time
    slidesToScroll: 1,      // Number of slides to scroll
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 1000,    // Time interval for autoplay
    cssEase: "linear",      // Smooth transition effect
    pauseOnHover: true,     // Stops autoplay when hovered
    centerMode: false,      // Disable center mode
    variableWidth: false,   // Disable variable width
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3, // Adjust for smaller screens
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.2,
            }
        }
    ]
};

const Joinculture = () => {
    
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div>
            <Container>
                <TitleSubtitle
                    title={"Join a Culture of Growth"}
                    subtitle={"Empowering Your Growth, Well-Being, and Success Every Step of the Way"}
                />

                {/* Joinculture card data */}
                <div className={styles.joinculture_wrapper}>
                    {joincultureData.map((item, index) => (
                        <div key={index} className={styles.joinculture_cards}>
                            <span>
                                <img src={item.icon} alt={item.title} /> {item.title}
                            </span>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
                </Container>
                {/* Joinculture Slick Slider */}
                <div className={styles.slider_container}>
                    <Slider {...settings}>
                        {sliderImages.map((image, index) => (
                            <div 
                                key={index}
                                className={`${styles.slider_item} ${hoveredIndex === index ? styles.hovered : ""}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <img src={image} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
          
        </div>
    );
};

export default Joinculture;
