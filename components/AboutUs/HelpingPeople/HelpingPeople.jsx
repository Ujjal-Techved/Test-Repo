import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from './HelpingPeople.module.css'

const HelpingPeople = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={styles.people_wrapper + ' pd-t pd-b'}>
            <Container>
                <div className={styles.helping_people_wrapper}>
                    <Row>
                        <Col lg="6" xs="12">
                            <div className={styles.helping_section}>
                                <div className={styles.helping_title}>
                                    {!isMobile ? (
                                        <img src='/images/about-us/human-safety.png' alt='human-safety' />
                                    ) : (
                                        <img src='/images/about-us/human-safety-mb.png' alt='human-safety' />
                                    )}

                                    <h2>A movement of people helping people</h2>
                                </div>
                                <p className={styles.helping_description}>When people come together, they carry the power to create meaningful change.We’re building a global movement that brings people and organizations together to support those who need it most. By connecting hearts and efforts across Europe, Asia, and South America, we aim to unlock the potential of individuals and communities facing vulnerability. We welcome collaboration with those who share our commitment to creating equal opportunities and making a lasting, positive impact on society.</p>
                                <div className={styles.helping_contribute}>
                                    <img src='/images/about-us/families.png' alt='families' />
                                    <div className={styles.helping_subtitle}>
                                        <h5>For Families</h5>
                                        <p>We aim to support parents during the most important early years of their child’s life.</p>
                                    </div>
                                </div>
                                <div className={styles.helping_contribute}>
                                    <img src='/images/about-us/families.png' alt='families' />
                                    <div className={styles.helping_subtitle}>
                                        <h5>Contributing to Early Childhood Development (ECD)</h5>
                                        <p>Through THSN for Families, we offer parenting support and resources that help children grow and families thrive.</p>
                                    </div>
                                </div>
                                <div className={styles.helping_contribute}>
                                    <img src='/images/about-us/families.png' alt='families' />
                                    <div className={styles.helping_subtitle}>
                                        <h5>For Refugees</h5>
                                        <p>We help refugees launch businesses and rebuild their lives in supportive new communities.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" xs="12">
                            <div className={styles.all_families}>
                                {!isMobile ? (
                                    <img src='/images/about-us/all-families.png' alt='all-families' />
                                ) : (
                                    <img src='/images/about-us/all-families-mb.png' alt='all-families' />
                                )}

                            </div>
                        </Col>
                    </Row>
                    <div className={styles.learn_more_link}>
                        <a href="/life-insurance-made-simple/life-insurance" className="whiteBtn redborder">Learn More</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HelpingPeople