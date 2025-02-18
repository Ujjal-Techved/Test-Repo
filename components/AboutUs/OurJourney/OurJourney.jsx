import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from './OurJourney.module.css'

const OurJourney = ({insuranceData}) => {
  return (
    <div className='pd-t pd-b'>
            <Container>
                <TitleSubtitle
                    title={"Our Journey in Numbers"}
                    subtitle={"Proven Credentials, Consistent Performance, Pedigree Investors"}
                />
                <Row className={styles.life_insure_row}>
                    {insuranceData.map((item, index) => (
                        <Col key={index} lg="3" xs="6" className={styles.life_insure_col}>
                            <div className={styles.life_insure_Card}>
                                <img src={item.imgSrc} alt={item.text} />
                                <span>{item.value}</span>
                                <p>{item.text}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
  )
}

export default OurJourney