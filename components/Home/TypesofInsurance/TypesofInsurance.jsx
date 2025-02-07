import React from 'react';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import styles from './TypesofInsurance.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const insuranceTypes = [
    {
        title: "Retirement",
        description: "Ensure financial security post-retirement with steady income for a worry-free future",
        image: "images/home/Retirement.png",
        link: "/"
    },
    {
        title: "Savings",
        description: "Build guaranteed funds to meet financial needs and achieve your future goals",
        image: "images/home/Savings.png",
        link: "/"
    },
    {
        title: "Group",
        description: "Comprehensive life insurance benefits for groups, employees, or organization members",
        image: "images/home/Group.png",
        link: "/"
    },
    {
        title: "Term",
        description: "Secure your family's future with pure protection against life’s uncertainties",
        image: "images/home/Term.png",
        link: "/"
    },
    {
        title: "Retirement",
        description: "Ensure financial security post-retirement with steady income for a worry-free future",
        image: "images/home/Retirement.png",
        link: "/"
    },
    {
        title: "Savings",
        description: "Build guaranteed funds to meet financial needs and achieve your future goals",
        image: "images/home/Savings.png",
        link: "/"
    },
];

const sliderSettings = {
    arrows:false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.2, // Changed from 3.2 to 3
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


const TypesofInsurance = () => {
    return (
        <div className="types-insurance-wrapper">
            <Container>
                <TitleSubtitle
                    title="Explore Different Types of Life Insurance"
                    subtitle="Find the plan that fits your needs and secures your future"
                />
                <Slider {...sliderSettings} className={styles.slider}>
                    {insuranceTypes.map((type, index) => (
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
