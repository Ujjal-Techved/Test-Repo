import React, { useState } from 'react';
import styles from './Joinculture.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Joinculture = ({ joinCultureData }) => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Prevent rendering if `joinCultureData` is missing
    if (!joinCultureData?.JoinCulture) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description, FeatureList, SliderSection } = joinCultureData?.JoinCulture;

    // Settings for the slick carousel
    const settings = {
        infinite: true,         // Enables infinite loop
        speed: 1000,           // Transition speed for slides
        slidesToShow: 5,       // Number of slides visible at a time
        slidesToScroll: 1,     // Number of slides to scroll at a time
        autoplay: true,        // Enables autoplay
        autoplaySpeed: 1000,   // Speed for autoplay transition (1 second)
        cssEase: "ease",       // Smooth transition effect
        pauseOnHover: true,    // Stops autoplay when hovered
        centerMode: false,     // Disables center mode
        variableWidth: false,  // Disables variable width for slides
        responsive: [          // Responsive settings for different screen sizes
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3, // Adjusts for medium screens
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // Adjusts for tablets
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.2, // Adjusts for mobile screens
                }
            }
        ]
    };

    return (
        <div className={styles.Joinculture_pt}>
            <Container>
                {/* Section title with a subtitle */}
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />

                {/* Feature List Section */}
                <div className={styles.joinculture_wrapper}>
                    {FeatureList?.map((item, index) => (
                        <div key={index} className={styles.joinculture_cards}>
                            <span>
                                {/* Feature Icon and Title */}
                                <img 
                                    src={process.env.NEXT_PUBLIC_APP_API + item?.Image?.url}  
                                    alt={item?.Title} 
                                /> 
                                {item?.Title}
                            </span>
                            <p>{item?.Description}</p> {/* Feature Description */}
                        </div>
                    ))}
                </div>
            </Container>

            {/* Joinculture Slick Slider */}
            <div className={styles.slider_container}>
                <Slider {...settings}>
                    {SliderSection?.map((image, index) => (
                        <div
                            key={index}
                            className={`${styles.slider_item} ${hoveredIndex === index ? styles.hovered : ""}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Slider Image */}
                            <img  
                                src={process.env.NEXT_PUBLIC_APP_API + image?.Image?.url} 
                                alt={`Slide ${index + 1}`} 
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Joinculture;
