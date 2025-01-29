import React from 'react'
import style from './VisitUs.module.css'
import { Col, Container, Row } from 'reactstrap'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const VisitUs = () => {
    return (

        <div className={style.visitUs_wrapper}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg="6">
                        <TitleSubtitle
                            title={"Visit Us Anytime"}
                            subtitle={"Locate the nearest Future Generali branch with ease and get personalized assistance for all your insurance needs."}
                            extraClass="leftAligned "
                        />
                        <button className='redArrowBtn w-sm-100'>Locate Now <span>&#10095;</span></button>
                    </Col>
                    <Col lg="6">
                        <img className='w-100 mt-md-0 mt-3' src='/images/contact-us/locator.png'></img>
                    </Col>
                </Row>
            </Container>
        </div>


    )
}

export default VisitUs