import React from 'react'
import styles from './ProtectPlan.module.css'
import { Col, Container, Row } from 'reactstrap'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const ProtectPlan = ({protectplanData}) => {

    return (
        <div className='pd-t pd-b'>
            <Container>
                <TitleSubtitle
                    title={"Start Protecting What Matters Most in Your Life"}
                    subtitle={"We help you build a worry free future with easy processes and expert guidance at every step"}
                />
                <Row className={styles.protect_plan_row + ' pb-0'}>
                    {protectplanData.map((item, index) => (
                        <Col lg="4" md="12" className={styles.protect_plan_col}>
                            <div className={styles.protect_plan_Card}>
                                <span>{item.title}</span>
                                <p>{item.subtitle}</p>
                                <img className={styles.plan_img} src={item.imgSrc} alt={item.text} />
                                <a href={item.Link} className={styles.protect_plan_linktext}>
                                    {item.LinkText}
                                    <img className={styles.protect_plan_arrow} src={'/images/reach-us/arrow-right.svg'} />
                                </a>

                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProtectPlan