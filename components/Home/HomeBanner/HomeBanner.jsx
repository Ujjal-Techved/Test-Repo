import React, { useState } from 'react'
import styles from './HomeBanner.module.css'
import { Col, Container, Row } from 'reactstrap'

const HomeBanner = ({ homeBannerData }) => {

    // State to track the active index of the clicked button
    const [activeIndex, setActiveIndex] = useState('');

    // Prevent rendering if `homeBannerData` is missing
    if (!homeBannerData) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description } = homeBannerData;

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
                        {/* Left Column: Display main content */}
                        <Col lg="5">
                            <div className={styles.Home_banner_main}>
                                <p>{Description}</p>
                                <h1>{Title}</h1>
                            </div>
                        </Col>
                        {/* Right Column: Chatbot and guide options */}
                        <Col lg="7">
                            <div className={styles.Home_banner_section}>
                                {/* Chatbot section */}
                                <div className={styles.Home_banner_chatbot}>
                                    <div className={styles.Home_banner_innerbot}>
                                        <img src='images/home/chatbot.gif' alt='chatbot' />
                                        <div className={styles.chabot_title}>
                                            <p>Have questions?</p>
                                            <a href='/'>Let’s Chat <img src='images/home/chatarrow.png' alt="arrow" /></a>
                                        </div>
                                    </div>
                                </div>
                                {/* Guide options section */}
                                <div className={styles.Home_banner_guide}>
                                    <h5>Hi there! I’m Trusty. <br /> What brings you here? Let me guide you!</h5>
                                    <div className="home-guide-list">
                                        {/* Render guide buttons dynamically */}
                                        {guideListData.map((text, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                className={`guide-btn ${activeIndex === index ? "active" : ""}`}
                                                onClick={() => setActiveIndex(index)} // Set active index on button click
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

export default HomeBanner;
