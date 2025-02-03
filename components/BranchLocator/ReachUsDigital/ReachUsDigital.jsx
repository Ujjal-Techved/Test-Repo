import React from 'react'
import styles from './ReachUsDigital.module.css';
import { Col, Container, Row } from 'reactstrap';

const ReachUsDigital = ({ reachUsCard, AIcontactUs }) => {

    return (
        <Container>
            <Row className={`${styles.reach_cards_row} ${AIcontactUs && styles.ai_contactUs}`}>
                {reachUsCard.map((item, index) => (
                    <Col className={" d-flex"} xs="12" lg="4" key={index}>
                        <div className={styles.reach_cards}>
                            <div className={styles.reach_us_text}>
                                <h3 className={styles.reach_us_title}>{item?.Title}
                                    <img className={styles.reach_us_img} src={process.env.NEXT_PUBLIC_APP_API + item?.Image?.url}></img>
                                </h3>
                                <p className={styles.reach_us_desc}>{item?.Description}
                                    <span className={styles.reach_us_contact}>{item?.Contact}</span>
                                </p>
                            </div>
                            <div className={styles.reach_us_link}>
                                <a href={item?.Link} className={styles.reach_us_linktext}>
                                    {item?.LinkText}
                                    <img className={styles.reach_us_arrow} src={'/images/reach-us/arrow-right.svg'}/>
                                </a>

                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ReachUsDigital