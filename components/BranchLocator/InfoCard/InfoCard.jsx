import React from 'react';
import styles from './InfoCard.module.css';
import { Col, Row } from 'reactstrap';
import { richTextToHtml } from '@/utils/richTextToHtml';

const InfoCard = ({infoCardDetails}) => {

    return (
        <Row className={styles.info_cards_row}>
            {infoCardDetails?.map((item, index) => (
                <Col className={styles.info_cards_section} xs="12" lg="4" key={index}>
                    <div className={styles.info_cards}>
                        <h3 className={styles.info_cards_title}>{item?.Title}</h3>
                        <div className={styles.info_cards_subtitle + " cms-data"}>{richTextToHtml(item?.Description)}</div>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

export default InfoCard;
