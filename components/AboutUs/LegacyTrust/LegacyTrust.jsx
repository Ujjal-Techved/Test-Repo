import React from 'react'
import styles from './LegacyTrust.module.css'
import { Col, Container, Row } from 'reactstrap'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const LegacyTrust = ({legacyTrustrData}) => {

    // Prevent rendering if `legacyTrustrData` is missing
    if (!legacyTrustrData) {
        return null;
    }
    // Destructure API response data for cleaner code
    const { PageTitle, PageDesc,SecondaryDescription,InfoStrip } = legacyTrustrData;
    return (
        <div >
            <Container>
                <div className={styles.insure_wrapper + ' pd-b'}>
                    <Row className={styles.insure_main}>
                        <Col lg="6" className={styles.insure_description}>
                            <p className={styles.insure_title}>{PageDesc}</p>
                            <TitleSubtitle
                                title={PageTitle}
                                subtitle={SecondaryDescription}
                                extraClass={"pageTitle leftAligned text-start"}
                            />

                        </Col>
                        <Col lg="5" className={styles.insure_imgsrc}>
                            <img src='images/about-us/fgili.jpg' alt='fgli' />
                        </Col>

                        <Col lg="12">
                            <div className={styles.genrali_wrapper}>
                                <img src='images/about-us/fgli-logo.png'></img>
                                
                                <p>{InfoStrip?.Description}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default LegacyTrust
