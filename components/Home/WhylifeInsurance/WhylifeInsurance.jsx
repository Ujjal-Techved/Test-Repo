import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from './WhylifeInsurance.module.css'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const WhylifeInsurance = () => {
    return (
        <div>
            <Container>
                <div className={styles.insure_wrapper}>
                    <Row className={styles.insure_main}>
                        <Col lg="6" className={styles.insure_description}>
                            <TitleSubtitle
                                title={"Why Life Insurance Matters"}
                                subtitle={"Life insurance provides financial security for your loved ones, helps you plan for future goals, and ensures peace of mind during uncertain times. It’s a vital step in protecting your family and building a secure financial foundation."}
                                extraClass={"leftAligned"}
                            />
                            <div className={styles.insure_btn}>
                                <a className='redBtn redborder trasborder'>Explore Plans</a>
                                <a className='whiteBtn redborder'>Learn More</a>
                            </div>
                        </Col>
                        <Col lg="5" className={styles.insure_imgsrc}>
                            <img src='images/home/lifeinsurance.png' alt='life-insurance' />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default WhylifeInsurance