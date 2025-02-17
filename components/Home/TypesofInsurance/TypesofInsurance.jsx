import React from 'react';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import styles from './TypesofInsurance.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TypesofInsurance = ({ insurancetypesData }) => {

    // Prevent rendering if `insurancetypesData` is missing
    if (!insurancetypesData) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description, CardList } = insurancetypesData?.TypeInsurance;
    
    // Slider settings for the carousel
    const sliderSettings = {
        arrows: false, // Hide navigation arrows
        dots: false,   // Hide pagination dots
        infinite: false, // Disable infinite looping
        speed: 500,  // Slide transition speed
        slidesToShow: 4.2, // Show 4.2 slides at once on large screens
        slidesToScroll: 1, // Scroll 1 slide at a time
        autoplay: false, // Disable autoplay
        autoplaySpeed: 3000, // Autoplay interval
        responsive: [
            // Settings for screens less than 992px wide
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2, // Show 2 slides on medium screens
                }
            },
            // Settings for screens less than 768px wide
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // Show 2 slides on smaller screens
                }
            },
            // Settings for screens less than 520px wide
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1.2, // Show 1.2 slides on mobile screens
                }
            }
        ]
    };

    return (
        <div className="types-insurance-wrapper">
            <Container>
                {/* Title and subtitle rendered using the TitleSubtitle component */}
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />
                {/* Slider component to display insurance types in a carousel */}
                <Slider {...sliderSettings} className={styles.slider}>
                    {/* Map through CardList and render each insurance type as a slide */}
                    {CardList?.map((type, index) => (
                        <div key={index} className={styles.types_insurance_cards}>
                            {/* Display the text and description of the insurance type */}
                            <span>{type?.Text}</span>
                            <p>{type?.Description}</p>
                            <div className={styles.types_insurance_imgsrc}>
                                {/* Image for the insurance type */}
                                <img src={process.env.NEXT_PUBLIC_APP_API + type?.Image?.url} alt={type?.Image?.alternativeText} />
                                {/* Link to view plans for the insurance type */}
                                <a href={type.link}>View Plans</a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    );
};

export default TypesofInsurance;
