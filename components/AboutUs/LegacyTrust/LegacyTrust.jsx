import React from 'react';
import styles from './LegacyTrust.module.css';
import { Col, Container, Row } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';

const LegacyTrust = ({ legacyTrustrData }) => {
    // Return nothing if data is missing to avoid runtime errors
    if (!legacyTrustrData) {
        return null;
    }

    // Destructure response data for clarity
    const {
        PageTitle,
        PageDesc,
        SecondaryDescription,
        InfoStrip
    } = legacyTrustrData;

    return (
        <div>
            <Container>
                <div className={`${styles.insure_wrapper} pd-b`}>
                    <Row className={styles.insure_main}>
                        {/* Left column: Page Title and Description */}
                        <Col lg="6" className={styles.insure_description}>
                            <p className={styles.insure_title}>{PageTitle}</p>
                            <TitleSubtitle
                                title={PageDesc}
                                subtitle={SecondaryDescription}
                                extraClass="pageTitle leftAligned text-start"
                            />
                        </Col>

                        {/* Right column: Static image */}
                        <Col lg="5" className={styles.insure_imgsrc}>
                            <img src="/images/about-us/fgili.jpg" alt="fgli" />
                        </Col>

                        {/* Full-width bottom section with logo and additional text */}
                        <Col lg="12">
                            <div className={styles.genrali_wrapper}>
                                <img src="/images/about-us/fgli-logo.png" alt="fgli logo" />
                                <p>{InfoStrip?.Description}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default LegacyTrust;
