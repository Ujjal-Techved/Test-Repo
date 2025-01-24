import React from 'react'
import styles from './ReachUsDigital.module.css';
import { Col, Row } from 'reactstrap';

const ReachUsDigital = () => {

    const reachUsCard = [
        {
            title: 'WhatsApp Support',
            desc: 'Message us anytime at your convenience.',
            contact: '',
            linktext:'Chat with Us',
            link: '/',
            arrow: '/images/reach-us/arrow-right.svg',
           
        },
        {
            title: 'Customer Support',
            desc: 'Available 24*7 at',
            contact: ' 1800 102 2355',
            linktext:'Call Us',
            link: '/',
            arrow: '/images/reach-us/arrow-right.svg',
          
        },
        {
            title: 'Drop Us an Email',
            desc: 'Send your queries to: ',
            contact: 'care@futuregenerali.in',
            linktext:'Email Us',
            link: 'care@futuregenerali.in',
            arrow: '/images/reach-us/arrow-right.svg',
           
        },
        {
            title: 'Visit Us',
            desc: 'Monday to Friday 9:30 am to 5:30 pm',
            contact: '',
            linktext:'Locate Us',
            link: '/',
            arrow: '/images/reach-us/arrow-right.svg',
            
        },

    ];


    return (
        <Row className={styles.reach_cards_row}>
            {reachUsCard.map((item, index) => (
                <Col className={styles.reach_cards_section + " d-flex"} xs="12"  lg="3" key={index}>
                    <div className={styles.reach_cards}>
                        <div className={styles.reach_us_text}>
                                <h3 className={styles.reach_us_title}>{item.title}</h3>
                                <p className={styles.reach_us_desc}>{item.desc} 
                                    <span className={styles.reach_us_contact}>{item.contact}</span>
                                </p>
                                {/* <img className={styles.reach_us_img} src={item.img}></img> */}
                        </div>
                        <div className={styles.reach_us_link}>
                                <a href={item.link} className={styles.reach_us_linktext}>
                                    {item.linktext}
                                    <img className={styles.reach_us_arrow} src={item.arrow}></img>
                                </a>
                                
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}

export default ReachUsDigital