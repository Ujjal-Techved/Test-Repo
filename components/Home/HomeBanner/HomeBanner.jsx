import React, { useState } from 'react'
import styles from './HomeBanner.module.css'
import { Col, Container, Row } from 'reactstrap'

const HomeBanner = () => {

    const [activeIndex, setActiveIndex] = useState('');

    // Guidelist array data
    
    const guideListData = [
        "Learn about life insurance",
        "Calculate my premium",
        "Explore plans for my needs",
        "Get an instant quote",
        "Others"
    ];

    return (
        <div className={styles.Home_banner}> 
            <Container>
                <div className={styles.Home_banner_wrapper}>
                    <Row>
                        <Col lg="5">
                            <div className={styles.Home_banner_main}>
                                <p>Welcome to Future Generali</p>
                                <h1>Trusted Guide for Financial Security</h1>
                            </div>
                        </Col>
                        <Col lg="7">
                            <div className={styles.Home_banner_section}>
                                <div className={styles.Home_banner_chatbot}>
                                    <div className={styles.Home_banner_innerbot}>
                                        <img src='images/home/chatbot.gif' alt='chatbot' />
                                        <div className={styles.chabot_title}>
                                            <p>Have questions?</p>
                                            <a href='/'>Let’s Chat <img src='images/home/chatarrow.png'></img></a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.Home_banner_guide}>
                                    <h5>Hi there! I’m Trusty. <br /> What brings you here? Let me guide you!</h5>
                                    <div className="home-guide-list">
                                        {guideListData.map((text, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                className={`guide-btn ${activeIndex === index ? "active" : ""}`}
                                                onClick={() => setActiveIndex(index)}
                                            >
                                                {text}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default HomeBanner