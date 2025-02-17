import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from './SocialResponsibility.module.css';
import Slider from 'react-slick';

const socialResponsibilityData = [
    {
        id: 1,
        title: "1With the objective of making a positive and long-term, sustainable impact on the community,",
        description: "Future Generali India Life Insurance initiated its first CSR project in Maharashtra. This project has been launched in partnership with The Energy Resource",
        imageUrl: '/images/about-us/csr-project.png'
    },
    {
        id: 2,
        title: "2Awarded two the Fastest Growing Insurance Company of 2024 by ASSOCHAM",
        description: "Future Generali India Life Insurance has been awarded the Fastest Growing Insurance Company of 2024 at the 6th edition of ASSOCHAM Insurance Leaders Meet 2024 & Excellence",
        imageUrl: '/images/about-us/csr-project.png'
    },
    {
        id: 3,
        title: "3Awarded three the Fastest Growing Insurance Company of 2024 by ASSOCHAM",
        description: "Future Generali India Life Insurance has been awarded the Fastest Growing Insurance Company of 2024 at the 6th edition of ASSOCHAM Insurance Leaders Meet 2024 & Excellence",
        imageUrl: '/images/about-us/csr-project.png'
    },
];

const SocialResponsibility = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        centerMode: true, 
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    centerMode: false, 
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    infinite: false,
                    centerMode: false, 
                    arrows: false,
                    slidesToShow: 1.1,
                }
            }
        ]
    };


    return (
        <div className='social-res-wrapper'>
            <Container>
                <TitleSubtitle
                    title={"Corporate Social Responsibility"}
                    subtitle={"Driving meaningful change through sustainable initiatives and community-focused efforts"}
                />
                <div className={styles.social_res_slider}>
                    <Slider {...settings}>
                        {socialResponsibilityData.map((item) => (
                            <div className={styles.social_res_main}>
                                <div className={styles.social_res_card} key={item.id}>
                                    <Row>
                                        <Col lg="6">
                                            <div className={styles.social_desc_section}>
                                                <h5>{item.title}</h5>
                                                <p>{item.description}</p>
                                                <a className='redBtn'>Read More</a>
                                            </div>
                                        </Col>
                                        <Col lg="6">
                                            <div className={styles.social_img_section}>
                                                <img src={item.imageUrl} alt='csr-project' />
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
