import React from 'react';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import styles from './TypesofInsurance.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TypesofInsurance = ({insurancetypesData}) => {

    
const sliderSettings = {
    arrows:false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    // centerMode: true,  // Ensures the first slide is properly aligned
    // centerPadding: "30px", // Adds padding on the left and right for visibility
    responsive: [
        {
            breakpoint: 992,
            settings: {
         
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
        
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1.2,
            }
        }
    ]
};

    return (
        <div className="types-insurance-wrapper">
            <Container>
                <TitleSubtitle
                    title="Explore Different Types of Life Insurance"
                    subtitle="Find the plan that fits your needs and secures your future"
                />
                <Slider {...sliderSettings} className={styles.slider}>
                    {insurancetypesData.map((type, index) => (
                        <div key={index} className={styles.types_insurance_cards}>
                            <span>{type.title}</span>
                            <p>{type.description}</p>
                            <div className={styles.types_insurance_imgsrc}>
                                <img src={type.image} alt={type.title} />
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
