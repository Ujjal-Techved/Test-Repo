import React from 'react'
import styles from './ReachUsDigital.module.css';
import { Col, Row } from 'reactstrap';

const ReachUsDigital = () => {

    const reachUsCard = [
        {
            title: 'Toll Free',
            contact: '1800 102 2355',
            link: '',
            arrow: '/images/reach-us/arrow-right.svg',
            img: '/images/reach-us/phone.svg',
        },
        {
            title: 'Email',
            contact: 'care@futuregenerali.in',
            link: '',
            arrow: '/images/reach-us/arrow-right.svg',
            img: '/images/reach-us/phone.svg',
        },
        {
            title: 'WhatsApp',
            contact: '+91-8108198633',
            link: '',
            arrow: '/images/reach-us/arrow-right.svg',
            img: '/images/reach-us/phone.svg',
        },
        {
            title: 'Locate Us',
            contact: 'Find Branch',
            link: '',
            arrow: '/images/reach-us/arrow-right.svg',
            img: '/images/reach-us/map.svg',
        },

    ];


    return (
        <Row className={styles.reach_cards_row}>
            {reachUsCard.map((item, index) => (
                <Col className={styles.reach_cards_section} xs="12" sm="6" md="3" lg="3" key={index}>
                    <div className={styles.reach_cards}>
                        <div className={styles.reach_us_text}>
                                <h3 className={styles.reach_us_title}>{item.title}</h3>
                                <img className={styles.reach_us_img} src={item.img}></img>
                        </div>
                        <div className={styles.reach_us_link}>
                                <h3 className={styles.reach_us_linktitle}>{item.contact}</h3>
                                <img className={styles.reach_us_arrow} src={item.arrow}></img>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}

export default ReachUsDigital