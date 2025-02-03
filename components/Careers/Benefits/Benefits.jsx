import React from 'react';
import styles from './Benefits.module.css';
import { Col, Container, Row } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';

const benefitsData = [
    { imgSrc: '/images/careers/benefit1.png', title: 'Paternity Leaves' },
    { imgSrc: '/images/careers/benefit2.png', title: 'Child Adoption Assistance Scheme' },
    { imgSrc: '/images/careers/benefit3.png', title: 'Support for Children with Special Needs' },
    { imgSrc: '/images/careers/benefit4.png', title: 'FG Cub Scholarship Program' },
    { imgSrc: '/images/careers/benefit5.png', title: 'Sports Scholarship for Children' }
];

const Benefits = () => {
    return (
        <div>
            <Container>
                <TitleSubtitle
                    title={"Benefits Built Around You"}
                    subtitle={"A set of guiding principles and fundamental beliefs that help FGILI to function together as a team and work toward a common business goal"}
                />
                <div className={styles.benefits_wrapper}>
                    <Row className={styles.benefits_main}>
                        {benefitsData.map((benefit, index) => (
                            <Col key={index} lg="4" xs="12">
                                <div className={styles.benefits_card}>
                                    <img src={benefit.imgSrc} alt={benefit.title} />
                                    <p>{benefit.title}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Benefits;
