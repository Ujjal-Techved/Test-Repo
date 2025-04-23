import React, { useState, useEffect } from 'react';
import styles from './CustomerService.module.css';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import { Col, Container, Row } from 'reactstrap';

const CustomerService = ({ csData }) => {
    const [openIndex, setOpenIndex] = useState(null); // Only one index open
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size for mobile responsiveness
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 992);
        };

        checkMobile(); // Initial check
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleService = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Close if already open
        } else {
            setOpenIndex(index); // Open selected, close previous
        }
    };

    return (
        <div className={styles.Customer_wrapper}>
            <Container className=''>
                <div>
                    <TitleSubtitle
                        title={csData?.Title}
                        subtitle={csData?.Description}
                        extraClass="desc-max-60"
                    />

                    <div className={styles.service_card_wrap}>
                        {csData?.CategoryList?.map((service, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} className={styles.service_cards_main}>
                                    <div className={styles.service_cards_title}>
                                        <div className={styles.service_left_title}>
                                            <img
                                                src={process.env.NEXT_PUBLIC_APP_API + service?.Image?.url}
                                                alt={service.title}
                                            />
                                            <h4>{service.Title}</h4>
                                        </div>

                                        {/* Toggle button only visible on mobile */}
                                        {isMobile && (
                                            <button
                                                className={`${styles.arrow_btn} d-lg-none d-block`}
                                                onClick={() => toggleService(index)}
                                            >
                                                <img
                                                    src='/images/contact-us/arrow.png'
                                                    alt='toggle'
                                                    className={isOpen ? styles.rotated_arrow : ''}
                                                />
                                            </button>
                                        )}
                                    </div>

                                    {/* Service list visibility based on device & toggle */}
                                    <Row
                                        className={styles.service_card_list}
                                        style={{
                                            display: isMobile ? (isOpen ? 'flex' : 'none') : 'flex'
                                        }}
                                    >
                                        {service?.ListItem?.map((link, idx) => (
                                            <Col key={idx} lg='4' xs='12'>
                                                <a href={link.LinkUrl}>
                                                    {link.LinkText}
                                                    <img src='/images/reach-us/arrow-right.svg' alt='arrow' />
                                                </a>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CustomerService;
