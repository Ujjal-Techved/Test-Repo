import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from './MediaCenter.module.css'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const MediaCenter = ({mediacenterData}) => {
    return (
        <div className='pd-t pd-b'>
            <Container>
                <TitleSubtitle
                    title={"Media Centre"}
                    subtitle={"Your go-to hub for news, updates, and insights"}
                />
                <Row className={styles.protect_plan_row}>
                    {mediacenterData.map((item, index) => (
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

export default MediaCenter