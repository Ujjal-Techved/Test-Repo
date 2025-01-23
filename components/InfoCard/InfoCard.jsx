import React from 'react';
import styles from './InfoCard.module.css';
import { Col, Row } from 'reactstrap';

const InfoCard = () => {
    const infoCardDetails = [
        {
            title: 'Essential Documents',
            description: 'Important documents to carry if visiting for Loan, Surrender, Payout related inquiries- Original copy of ID/Address proof Original policy bond Cancelled cheque leaf with pre printed name.',
        },
        {
            title: 'Nearest Branch',
            description: 'Timings: Monday to Friday 9:30 am to 5:30 pm and The Last Saturday of the month, rest Saturday 9:30 am to 1:30 pm Contact no: 1800 102 2355',
        },
        {
            title: 'Payment Centers',
            description: 'Nearest Premium Payment Centers: Axis Bank Branches - Click here',
        }
    ];

    return (
        <Row className={styles.info_cards_row}>
            {infoCardDetails.map((item, index) => (
                <Col className={styles.info_cards_section} xs="12" sm="6" md="4" lg="4" key={index}>
                    <div className={styles.info_cards}>
                        <h3 className={styles.info_cards_title}>{item.title}</h3>
                        <p className={styles.info_cards_subtitle}>{item.description}</p>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

export default InfoCard;
