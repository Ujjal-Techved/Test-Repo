import React from 'react'
import styles from './Awards.module.css'
import { Container } from 'reactstrap'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'
import Slider from 'react-slick'

const Awards = ({ awardData }) => {

    // Truncate title 
    const truncateTitle = (text, maxLength = 43) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    //   Truncate description
    const truncateDesciption = (text, maxLength = 95) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    const sliderSettings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
                    slidesToShow: 1.1,
                }
            }
        ]
    };


    return (
        <div className="types-insurance-wrapper awards pd-t pd-b">
            <Container>
                <TitleSubtitle
                    title={"Awards & Recognitions"}
                    subtitle={"Recognized for excellence, commitment, and innovation in the insurance industry"}
                />
                <Slider {...sliderSettings} className={styles.slider}>
                    {awardData.map((type, index) => (
                        <div key={index} className={styles.types_insurance_cards}>
                            <div className={styles.types_insurance_imgsrc}>
                                <img src={type.image} alt={type.title} />
                            </div>
                            <span>{truncateTitle(type.title)}</span>
                            <p>{truncateDesciption(type.description)}</p>
                        </div>
                    ))}
                </Slider>
                <a href='/' className='show-more pt-4'>Show More +</a>
            </Container>
        </div>
    )
}

export default Awards