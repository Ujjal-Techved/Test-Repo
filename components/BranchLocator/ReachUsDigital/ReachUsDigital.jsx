import React from 'react'
import styles from './ReachUsDigital.module.css';
import { Col, Container, Row } from 'reactstrap';

const ReachUsDigital = ({ reachUsCard, AIcontactUs }) => {
    return (
        <Container>
            {/* Row for displaying reach us cards, with additional styling if AIcontactUs is true */}
            <Row className={`${styles.reach_cards_row} ${AIcontactUs && styles.ai_contactUs}`}>
                {/* Loop through reachUsCard array and render each item */}
                {reachUsCard?.map((item, index) => (
                    <Col className={"d-flex"} xs="12" lg="4" key={index}>
                        <div className={styles.reach_cards}>
                            <div className={styles.reach_us_text}>
                                {/* Title with image inside */}
                                <h3 className={styles.reach_us_title}>
                                    {item?.Title}
                                    <img 
                                        className={styles.reach_us_img} 
                                        src={process.env.NEXT_PUBLIC_APP_API + item?.Image?.url} 
                                        alt="Reach Us" 
                                    />
                                </h3>
                                {/* Description with optional contact info */}
                                <p className={styles.reach_us_desc}>
                                    {item?.Description}
                                    <span className={styles.reach_us_contact}>{item?.Description_Contact}</span>
                                </p>
                            </div>
                            {/* Link section */}
                            <div className={styles.reach_us_link}>
                                <a href={item?.LinkUrl} className={styles.reach_us_linktext}>
                                    {item?.LinkText}
                                    <img 
                                        className={styles.reach_us_arrow} 
                                        src={'/images/reach-us/arrow-right.svg'} 
                                        alt="Arrow"
                                    />
                                </a>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ReachUsDigital;
