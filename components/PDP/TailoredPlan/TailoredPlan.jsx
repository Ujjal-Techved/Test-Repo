import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from './TailoredPlan.module.css';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';

const TailoredPlan = () => {

// Array for planDetail data

    const planDetailData = [
        {
            img: '/images/product-detail/MaturityAge.png',
            title: 'Maturity Age',
            description: '30-100 years',
        },
        {
            img: '/images/product-detail/PremiumPaymentTerm.png',
            title: 'Premium Payment Term (PPT)',
            description: '8 or 10 years',
        },
        {
            img: '/images/product-detail/PolicyTerm.png',
            title: 'Policy Term',
            description: '30 or 40 or 50 years',
        },
        {
            img: '/images/product-detail/PremiumPaymentType.png',
            title: 'Premium Payment Type',
            description: 'Limited Pay',
        },
        {
            img: '/images/product-detail/SumAssured.png',
            title: 'Sum Assured',
            description: '₹ 2,00,000 - No Limit (As per Board Approved Underwriting Policy)',
        },
        {
            img: '/images/product-detail/PremiumPaymentFrequency.png',
            title: 'Premium Payment Frequency',
            description: 'Yearly, Half Yearly, Quarterly and Monthly',
        }
    ];

    const data = [
        { year: "1-10", "30 years": "0%", "40 years": "0%", "50 years": "0%" },
        { year: "11-15", "30 years": "50%", "40 years": "50%", "50 years": "50%" },
        { year: "16-20", "30 years": "100%", "40 years": "100%", "50 years": "100%" },
        { year: "21-25", "30 years": "150%", "40 years": "150%", "50 years": "150%" },
        { year: "26-30", "30 years": "200%", "40 years": "200%", "50 years": "200%" },
        { year: "31-35", "30 years": "250%", "40 years": "250%", "50 years": "250%" },
        { year: "36-40", "30 years": "300%", "40 years": "300%", "50 years": "300%" },
        { year: "41-45", "30 years": "", "40 years": "350%", "50 years": "350%" },
        { year: "46-50", "30 years": "", "40 years": "", "50 years": "400%" },
      ];

    return (
        <div className='pd-t pd-b'>
            <Container>
                <TitleSubtitle
                    title={"Tailored plans to secure your future"}
                    subtitle={"Choose the plan that fits your life"}
                />
                {/* Common Points Section */}
                <div className={styles.common_point_wrapper}>
                    <p>
                        <img src='/images/product-detail/down-arrow.png' alt='pointer' /> Some common points
                    </p>
                    <Row className={styles.common_point_row}>
                        {planDetailData.map((plan, index) => (
                            <Col lg="4" key={index}>
                                <div className={styles.common_point_card}>
                                    <img src={plan.img} alt={plan.title} />
                                    <div className={styles.point_description}>
                                        <span>{plan.title}</span>
                                        <p>{plan.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                
            </Container>
        </div>
    );
};

export default TailoredPlan;
