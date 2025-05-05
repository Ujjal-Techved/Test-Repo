import React from 'react'
import styles from './ReachUsDigital.module.css';
import { Col, Container, Row } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';

const ReachUsDigitalContact = ({ reachUsCard, title, subtitle }) => {
    return (
        <Container className='pd-t'>
            <TitleSubtitle
                title={title}
                subtitle={subtitle}
            />
            <Row className={styles.reach_cards_row}>
                {/* Card 1 */}
                <Col className="d-flex" xs="12" lg="4">
                    <div className={styles.reach_cards_parent}>
                        <div className={styles.reach_cards}>
                            <div className={styles.reach_us_text}>
                                <h3 className={styles.reach_us_title}>
                                    {reachUsCard[0]?.Title}
                                    <img
                                        className={styles.reach_us_img}
                                        src={process.env.NEXT_PUBLIC_APP_API + reachUsCard[0]?.Image?.url}
                                        alt={reachUsCard[0]?.Image?.alternativeText}
                                    />
                                </h3>
                                <p className={styles.reach_us_desc}>
                                    {reachUsCard[0]?.Description}
                                </p>
                            </div>
                            <div className={styles.reach_us_link}>
                                <a href={reachUsCard[0]?.Link} className={styles.reach_us_linktext}>
                                    <span>{reachUsCard[0]?.LinkText}</span>
                                    <img
                                        className={styles.reach_us_arrow}
                                        src="/images/reach-us/arrow-right.svg"
                                        alt="Arrow"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className={styles.reach_cards}>
                            <div className={styles.reach_us_text}>
                                <h3 className={styles.reach_us_title}>
                                    {reachUsCard[2]?.Title}
                                    <img
                                        className={styles.reach_us_img}
                                        src={process.env.NEXT_PUBLIC_APP_API + reachUsCard[2]?.Image?.url}
                                        alt={reachUsCard[2]?.Image?.alternativeText}
                                    />
                                </h3>
                                <p className={styles.reach_us_desc}>
                                    {reachUsCard[2]?.Description}
                                </p>
                            </div>
                            <div className={styles.reach_us_link}>
                                <a href={reachUsCard[2]?.Link} className={styles.reach_us_linktext}>
                                    <span>{reachUsCard[2]?.LinkText}</span>
                                    <img
                                        className={styles.reach_us_arrow}
                                        src="/images/reach-us/arrow-right.svg"
                                        alt="Arrow"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                </Col>

                {/* Card 2 */}
                <Col className="d-flex" xs="12" lg="4">
                    <div className={styles.reach_cards_parent}>
                        <div className={styles.reach_cards}>
                            <div className={styles.reach_us_text}>
                                <h3 className={styles.reach_us_title}>
                                    {reachUsCard[1]?.Title}
                                    <img
                                        className={styles.reach_us_img}
                                        src={process.env.NEXT_PUBLIC_APP_API + reachUsCard[1]?.Image?.url}
                                        alt={reachUsCard[1]?.Image?.alternativeText}
                                    />
                                </h3>
                                <p className={styles.reach_us_desc}>
                                    {reachUsCard[1]?.Description}
                                </p>
                            </div>
                            <div className={styles.reach_us_link}>
                                <a href={reachUsCard[1]?.Link} className={styles.reach_us_linktext}>
                                    <span>{reachUsCard[1]?.LinkText}</span>
                                    <img
                                        className={styles.reach_us_arrow}
                                        src="/images/reach-us/arrow-right.svg"
                                        alt="Arrow"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className={styles.reach_cards}>
                            <div className={styles.reach_us_text}>
                                <h3 className={styles.reach_us_title}>
                                    {reachUsCard[3]?.Title}
                                    <img
                                        className={styles.reach_us_img}
                                        src={process.env.NEXT_PUBLIC_APP_API + reachUsCard[3]?.Image?.url}
                                        alt={reachUsCard[3]?.Image?.alternativeText}
                                    />
                                </h3>
                                <p className={styles.reach_us_desc}>
                                    {reachUsCard[3]?.Description}
                                </p>
                            </div>
                            <div className={styles.reach_us_link}>
                                <a href={reachUsCard[3]?.Link} className={styles.reach_us_linktext}>
                                    <span>{reachUsCard[3]?.LinkText}</span>
                                    <img
                                        className={styles.reach_us_arrow}
                                        src="/images/reach-us/arrow-right.svg"
                                        alt="Arrow"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>

                {/* Card 3 */}
                <Col className="d-flex" xs="12" lg="4">
                    <div className={styles.reach_cards_parent}>
                        <div className={styles.reach_cards}>
                            <div className={styles.reach_us_text}>
                                <h3 className={styles.reach_us_title}>
                                    {reachUsCard[4]?.Title}
                                    <img
                                        className={styles.reach_us_img}
                                        src={process.env.NEXT_PUBLIC_APP_API + reachUsCard[4]?.Image?.url}
                                        alt={reachUsCard[4]?.Image?.alternativeText}
                                    />
                                </h3>
                                <p className={styles.reach_us_desc}>
                                    {reachUsCard[4]?.Description}
                                </p>
                                <img className={styles.qr_code}
                                    src={process.env.NEXT_PUBLIC_APP_API + reachUsCard[4]?.QRImage?.url}
                                    alt={reachUsCard[4]?.QRImage?.alternativeText}
                                />
                            </div>
                            <div className={styles.reach_us_link}>
                                <a href={reachUsCard[4]?.Link} className={styles.reach_us_linktext}>
                                    <span>{reachUsCard[4]?.LinkText}</span>
                                    <img
                                        className={styles.reach_us_arrow}
                                        src="/images/reach-us/arrow-right.svg"
                                        alt="Arrow"
                                    />
                                </a>
                            </div>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ReachUsDigitalContact;
