import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from './SocialResponsibility.module.css';
import Slider from 'react-slick';

const SocialResponsibility = ({ socialResponsibility }) => {

    // Prevent rendering if `socialResponsibility` data is missing to avoid errors
    if (!socialResponsibility?.CorporateSocial) {
        return null;
    }

    // Destructure API response data for cleaner and more readable code
    const { Title, Description, CorporateSocialCards } = socialResponsibility?.CorporateSocial;

    // Slider settings for responsive behavior
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, // Auto-play is disabled for better user control
        autoplaySpeed: 3000,
        arrows: true,
        centerMode: true, // Enables partial visibility of next/prev slides
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2, // Show 2 slides on medium screens
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    centerMode: false, 
                    arrows: false,
                    slidesToShow: 2, // Show 2 slides on tablets
                }
            },
            {
                breakpoint: 520,
                settings: {
                    infinite: false,
                    centerMode: false, 
                    arrows: false,
                    slidesToShow: 1.1, // Show 1 full slide with partial next slide on mobile
                }
            }
        ]
    };

    return (
        <div className='social-res-wrapper pd-t pd-b'>
            <Container>
                {/* Section Title and Description */}
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />

                {/* Social Responsibility Slider */}
                <div className={styles.social_res_slider}>
                    <Slider {...settings}>
                        {CorporateSocialCards?.map((item) => (
                            <div className={styles.social_res_main} key={item.id}>
                                <div className={styles.social_res_card}>
                                    <Row>
                                        {/* Left Column - Text Content */}
                                        <Col lg="6">
                                            <div className={styles.social_desc_section}>
                                                <h5>{item?.Title}</h5>
                                                <p>{item?.Description}</p>
                                                <a href={item?.LinkUrl} className='redBtn'>{item?.LinkText}</a>
                                            </div>
                                        </Col>

                                        {/* Right Column - Image */}
                                        <Col lg="6">
                                            <div className={styles.social_img_section}>
                                                <img 
                                                    src={process.env.NEXT_PUBLIC_APP_API + item?.Image.url} 
                                                    alt={item?.Image.alternativeText} 
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default SocialResponsibility;
