import React, { useState, useEffect } from 'react';
import styles from './CustomerService.module.css';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import { Col, Container, Row } from 'reactstrap';

const CustomerService = ({ csData }) => {
    // State to manage which category (if any) is expanded on mobile
    const [openIndex, setOpenIndex] = useState(null);

    // State to track if the device is mobile (screen width < 992px)
    const [isMobile, setIsMobile] = useState(false);

    // Check screen width on initial render and on window resize
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 992);
        checkMobile(); // Run once on mount
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Toggle function to expand/collapse categories on mobile
    const toggleService = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    // Exit early if data is not available
    if (!csData) return null;

    const { PageTitle, PageDesc, CustomerService } = csData;

    return (
        <div className={styles.Customer_wrapper}>
            <Container>
                {/* Section Heading */}
                <TitleSubtitle
                    title={PageTitle}
                    subtitle={PageDesc}
                    extraClass="desc-max-60"
                />

                {/* List of customer service categories */}
                <div className={styles.service_card_wrap}>
                    {CustomerService?.CategoryList?.map((service, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={index} className={styles.service_cards_main}>
                                {/* Card Header */}
                                <div className={styles.service_cards_title}>
                                    <div className={styles.service_left_title}>
                                        <img
                                            src={process.env.NEXT_PUBLIC_APP_API + service?.Image?.url}
                                            alt={service?.Image?.alternativeText || service?.Title}
                                        />
                                        <h4>{service?.Title}</h4>
                                    </div>

                                    {/* Mobile Toggle Arrow */}
                                    {isMobile && (
                                        <button
                                            className={`${styles.arrow_btn} d-lg-none d-block`}
                                            onClick={() => toggleService(index)}
                                        >
                                            <img
                                                src='/images/contact-us/arrow.png'
                                                alt='toggle arrow'
                                                className={isOpen ? styles.rotated_arrow : ''}
                                            />
                                        </button>
                                    )}
                                </div>

                                {/* Card Content: List of service links */}
                                <Row
                                    className={styles.service_card_list}
                                    style={{
                                        display: isMobile ? (isOpen ? 'flex' : 'none') : 'flex',
                                    }}
                                >
                                    {service?.ListItem?.map((link, idx) => (
                                        <Col key={idx} lg='4' xs='12'>
                                            <a href={link.LinkUrl}>
                                                {link.LinkText}
                                                <img
                                                    src='/images/reach-us/arrow-right.svg'
                                                    alt='arrow'
                                                />
                                            </a>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
};

export default CustomerService;
