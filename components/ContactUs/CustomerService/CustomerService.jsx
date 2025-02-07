import React from 'react';
import styles from './CustomerService.module.css';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import { Col, Container, Row } from 'reactstrap';


const CustomerService = ({ csData }) => {
    return (
        <div className={styles.Customer_wrapper}>
            <Container className='mt-negative'>
                <div>
                    <TitleSubtitle
                        title={csData?.Title}
                        subtitle={csData?.Description}
                    />
                    {csData?.CategoryList?.map((service, index) => (
                        <div key={index} className={styles.service_cards_main}>
                            <div className={styles.service_cards_title}>
                                <img src={process.env.NEXT_PUBLIC_APP_API + service?.Image?.url} alt={service.title} />
                                <h4>{service.Title}</h4>
                            </div>
                            <Row className={styles.service_card_list}>
                                {service?.ListItem?.map((link, idx) => (
                                    <Col key={idx} lg='4' xs='12'>
                                        <a href={link.LinkUrl}>{link.LinkText} <img src='/images/reach-us/arrow-right.svg' alt='arrow' /></a>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default CustomerService;
