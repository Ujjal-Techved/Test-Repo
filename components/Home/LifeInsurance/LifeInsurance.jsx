import React from 'react';
import styles from './LifeInsurance.module.css';
import { Col, Container, Row } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';

const LifeInsurance = () => {
    // Array containing data for all cards
    const insuranceData = [
        {
            imgSrc: 'images/home/branches.png',
            value: '1366',
            text: 'Self & Partner Branches',
        },
        {
            imgSrc: 'images/home/livecovered.png',
            value: '1.6 Mn+',
            text: 'Lives Covered Since Inception',
        },
        {
            imgSrc: 'images/home/asset.png',
            value: '₹79.58 Bn',
            text: 'Worth of Asset Under Management',
        },
        {
            imgSrc: 'images/home/claims.png',
            value: '96.08%',
            text: 'Claims Settlement Ratio',
        }
    ];

    return (
        <div>
            <Container>
                <TitleSubtitle
                    title={"Future Generali India Life Insurance"}
                    subtitle={"offers easy-to-understand plans tailored for protection, savings, investments, and health, ensuring your financial peace of mind."}
                />
                <Row className={styles.life_insure_row}>
                    {insuranceData.map((item, index) => (
                        <Col key={index} lg="3" xs="6" className={styles.life_insure_col}>
                            <div className={styles.life_insure_Card}>
                                <img src={item.imgSrc} alt={item.text} />
                                <span>{item.value}</span>
                                <p>{item.text}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default LifeInsurance;
