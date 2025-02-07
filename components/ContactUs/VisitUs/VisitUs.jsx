import React from 'react'
import style from './VisitUs.module.css'
import { Col, Container, Row } from 'reactstrap'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const VisitUs = ({ visitUsCard }) => {
    return (

        <div className={style.visitUs_wrapper}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg="6">
                        <TitleSubtitle
                            title={visitUsCard?.Title}
                            subtitle={visitUsCard?.Description}
                            extraClass="leftAligned "
                        />
                        <a href={visitUsCard?.LinkUrl} className='redArrowBtn w-sm-100'>{visitUsCard?.LinkText}<span>&#10095;</span></a>
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