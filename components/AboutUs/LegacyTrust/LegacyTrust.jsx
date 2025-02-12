import React from 'react'
import styles from './LegacyTrust.module.css'
import { Col, Container, Row } from 'reactstrap'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const LegacyTrust = () => {
    return (
        <div>
            <Container>
                <div className={styles.insure_wrapper}>
                    <Row className={styles.insure_main}>
                        <Col lg="6" className={styles.insure_description}>
                            <p className={styles.insure_title}>Future Generali India Life Insurance</p>
                            <TitleSubtitle
                                title={"Legacy of Trust and Security"}
                                subtitle={"Future Generali India Life Insurance Company Ltd. is headquartered in Mumbai and was established in 2006. The company has a presence in 1300+ owned and partnered locations in India and offers total insurance solutions across both, the individual and group front."}
                                extraClass={"leftAligned text-start"}
                            />

                        </Col>
                        <Col lg="5" className={styles.insure_imgsrc}>
                            <img src='images/about-us/fgli.png' alt='fgli' />
                        </Col>

                        <Col lg="12">
                            <div className={styles.genrali_wrapper}>
                                <img src='images/home/fgli-logo.png'></img>
                                
                                <p>As of today, Generali is the largest shareholder in Future Generali India Life Insurance with a stake of 73.99% in the Company. Generali brings in 190+ years of insurance expertise as well as its global network’s best practices, capabilities, and resources, driving sustainable and profitable growth for communities, clients, employees, and shareholders. Established in 1831, Generali is present in over 50 countries in the world, with 82 thousand employees serving 68 million customers globally.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default LegacyTrust