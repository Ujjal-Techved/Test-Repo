import React from 'react'
import styles from './ReachUsDigital.module.css';
import { Col, Container, Row } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';

const ReachUsDigitalContact = ({ reachUsCard, AIcontactUs }) => {
    return (
        // <Container>
        //     {/* Row for displaying reach us cards, with additional styling if AIcontactUs is true */}
        //     {/* <Row className={`${styles.reach_cards_row} ${AIcontactUs && styles.ai_contactUs}`}> */}
        //     <Row className={`${styles.reach_cards_row}`}>
        //         {/* Loop through reachUsCard array and render each item */}
        //         {reachUsCard?.map((item, index) => (
        //             <Col className={"d-flex"} xs="12" lg="4" key={index}>
        //                 <div className={styles.reach_cards}>
        //                     <div className={styles.reach_us_text}>
        //                         {/* Title with image inside */}
        //                         <h3 className={styles.reach_us_title}>
        //                             {item?.Title}
        //                             <img 
        //                                 className={styles.reach_us_img} 
        //                                 src={process.env.NEXT_PUBLIC_APP_API + item?.Image?.url} 
        //                                 alt="Reach Us" 
        //                             />
        //                         </h3>
        //                         {/* Description with optional contact info */}
        //                         <p className={styles.reach_us_desc}>
        //                             {item?.Description}
        //                             <span className={styles.reach_us_contact}>{item?.Description_Contact}</span>
        //                         </p>
        //                     </div>
        //                     {/* Link section */}
        //                     <div className={styles.reach_us_link}>
        //                         <a href={item?.LinkUrl} className={styles.reach_us_linktext}>
        //                             {item?.LinkText}
        //                             <img 
        //                                 className={styles.reach_us_arrow} 
        //                                 src={'/images/reach-us/arrow-right.svg'} 
        //                                 alt="Arrow"
        //                             />
        //                         </a>
        //                     </div>
        //                 </div>
        //             </Col>
        //         ))}
        //     </Row>
        // </Container>
        <Container>
            <TitleSubtitle
                title="Reach us Digitally"
                subtitle="Reach out through the channel that suits you best—we’re just a chat, call, or email away!"
            />
            <Row className={styles.reach_cards_row}>
                {/* Card 1 */}
                <Col className="d-flex" xs="12" lg="4">
                    <div className={styles.reach_cards_parent}>
                        <div className={styles.reach_cards}>
                            <div className={styles.reach_us_text}>
                                <h3 className={styles.reach_us_title}>
                                    Customer Support
                                    <img
                                        className={styles.reach_us_img}
                                        src="/images/reach-us/support-icon.png"
                                        alt="Support"
                                    />
                                </h3>
                                <p className={styles.reach_us_desc}>
                                    Available 24*7 at
                                    <span className={styles.reach_us_contact}>1800 102 2355</span>
                                </p>
                            </div>
                            <div className={styles.reach_us_link}>
                                <a href="#" className={styles.reach_us_linktext}>
                                    <span>Call Us</span>
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
                                    Customer Portal
                                    <img
                                        className={styles.reach_us_img}
                                        src="/images/reach-us/support-icon.png"
                                        alt="Support"
                                    />
                                </h3>
                                <p className={styles.reach_us_desc}>
                                    Access your policy anytime, anywhere.
                                    <span className={styles.reach_us_contact}></span>
                                </p>
                            </div>
                            <div className={styles.reach_us_link}>
                                <a href="#" className={styles.reach_us_linktext}>
                                    <span>Login</span>
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
                                    Drop Us an Email
                                    <img
                                        className={styles.reach_us_img}
                                        src="/images/reach-us/support-icon.png"
                                        alt="Support"
                                    />
                                </h3>
                                <p className={styles.reach_us_desc}>
                                    Send your queries to:
                                    <span className={styles.reach_us_contact}>care@futuregenerali.in</span>
                                </p>
                            </div>
                            <div className={styles.reach_us_link}>
                                <a href="#" className={styles.reach_us_linktext}>
                                    <span>Email Us</span>
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
                                    Branch Locator
                                    <img
                                        className={styles.reach_us_img}
                                        src="/images/reach-us/support-icon.png"
                                        alt="Support"
                                    />
                                </h3>
                                <p className={styles.reach_us_desc}>
                                    Find a branch near you easily.
                                    <span className={styles.reach_us_contact}></span>
                                </p>
                            </div>
                            <div className={styles.reach_us_link}>
                                <a href="#" className={styles.reach_us_linktext}>
                                    <span>Locate Now</span>
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
                                    WhatsApp Support
                                    <img
                                        className={styles.reach_us_img}
                                        src="/images/reach-us/support-icon.png"
                                        alt="Support"
                                    />
                                </h3>
                                <p className={styles.reach_us_desc}>
                                    Scan this QR code or send ‘Hi’ on WhatsApp number
                                    <span className={styles.reach_us_contact}>+91 7777777777</span>
                                </p>
                                <img className={styles.qr_code} src='/images/contact-us/qr.png' />
                            </div>
                            <div className={styles.reach_us_link}>
                                <a href="#" className={styles.reach_us_linktext}>
                                    <span>Chat With Us</span>
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
