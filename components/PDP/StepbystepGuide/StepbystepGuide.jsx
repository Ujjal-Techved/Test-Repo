import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from './StepbystepGuide.module.css'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const StepbystepGuide = () => {
    return (
        <div className='pd-t'>
            <Container>
                <TitleSubtitle
                    title={"Step-by-step guide to secure your future"}
                    subtitle={"See how our plan works for you"}
                />
                <Row className={styles.stepRow}>
                    <Col lg="3" className={styles.stepCol1}>
                        <div className={styles.card1}>POLICY STARTS</div>
                        <div className={styles.card2}>
                            <p>YOU PAY</p>
                            <p>₹ 1,00,000 /Annum</p>
                        </div>
                    </Col>
                    <Col lg="3" className={styles.stepCol2}>
                        <div className={styles.card3}>
                            <img src='/images/product-detail/stepGuide1.png' />
                            <p>30-40 YEARS</p>
                        </div>
                    </Col>
                    <Col lg="3" className={styles.stepCol3}>
                        <div className={styles.card4}>
                            PAY THE PREMIUM REGULARLY
                        </div>
                    </Col>
                    <Col lg="3" className={styles.stepCol4}>
                        <div className={styles.card5}>
                            <img src='/images/product-detail/stepGuide2.png' />
                            <p>50-60 YEARS</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StepbystepGuide