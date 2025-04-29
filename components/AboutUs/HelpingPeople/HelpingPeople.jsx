import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from './HelpingPeople.module.css';

const HelpingPeople = ({ helpingPeopleData }) => {
    const [isMobile, setIsMobile] = useState(false);

    // Return nothing if data is not provided to avoid rendering errors
    if (!helpingPeopleData) {
        return null;
    }

    // Destructure the incoming API response for cleaner access
    const {
        Title,
        Description,
        CornerImage,
        Image1,
        Image2,
        Image3,
        FeatureList
    } = helpingPeopleData?.HelpingPeople;

    useEffect(() => {
        // Set `isMobile` based on current screen size
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        // Initial check
        handleResize();
        // Attach listener to update on window resize
        window.addEventListener("resize", handleResize);

        // Cleanup listener on component unmount
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
                                {/* Section title with corner image */}
                                <div className={styles.helping_title}>
                                    <img
                                        src={process.env.NEXT_PUBLIC_APP_API + CornerImage?.url}
                                        alt={CornerImage?.alternativeText}
                                    />
                                    <h2>{Title}</h2>
                                </div>

                                {/* Description paragraph */}
                                <p className={styles.helping_description}>{Description}</p>

                                {/* Feature list items (assumes 3 items) */}
                                {FeatureList?.slice(0, 3).map((item, index) => (
                                    <div className={styles.helping_contribute} key={index}>
                                        <img
                                            src={process.env.NEXT_PUBLIC_APP_API + item?.Image?.url}
                                            alt={item?.Image?.alternativeText}
                                        />
                                        <div className={styles.helping_subtitle}>
                                            <h5>{item?.Title}</h5>
                                            <p>{item?.Description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>

                        <Col lg="6" xs="12">
                            <div className={styles.all_families}>
                                {/* Supporting right-side image */}
                                <img
                                    src={process.env.NEXT_PUBLIC_APP_API + Image1?.url}
                                    alt={Image1?.alternativeText}
                                />
                            </div>
                        </Col>
                    </Row>

                    {/* CTA Link to Learn More */}
                    <div className={styles.learn_more_link}>
                        <a href="/life-insurance-made-simple/life-insurance" className="whiteBtn redborder">
                            Learn More
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HelpingPeople;
