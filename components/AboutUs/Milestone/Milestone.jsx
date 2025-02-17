import React, { useRef, useState } from 'react';
import Styles from './Milestone.module.css';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import { Col, Container, Row } from 'reactstrap';
import Slider from 'react-slick';

const Milestone = ({ milestoneList }) => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const mainSliderRef = useRef(null);
    const thumbSliderRef = useRef(null);


    // Main Slider Settings
    const mainSliderSettings = {
        asNavFor: nav2,
        ref: (slider) => {
            setNav1(slider);
            mainSliderRef.current = slider;
        },
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };

    // Thumbnail Slider Settings
    const thumbSliderSettings = {
        asNavFor: nav1,
        ref: (slider) => {
            setNav2(slider);
            thumbSliderRef.current = slider;
        },
        slidesToShow: 5,
        swipeToSlide: true,
        focusOnSelect: true,
        dots: false,
        arrows: false,
        infinite: false,
    };

    return (
        <div className='social-res-wrapper pb-4'>
            <Container>
                <TitleSubtitle
                    title={"Our Journey, One Milestone at a Time"}
                    titleTag='h3'
                    subtitle={'Key achievements that define our growth and success'}
                />
                <Slider {...mainSliderSettings}>
                    {
                        milestoneList?.map((milestone, index) => (
                            <div key={index}>
                                <Row className={Styles.mainRow}>
                                    <Col lg={3} className={Styles.year}>{milestone?.Year}</Col>
                                    <Col lg={3}>
                                        <img src={process.env.NEXT_PUBLIC_APP_API + milestone?.Image?.url} className={Styles.picture} />
                                    </Col>
                                    <Col lg={4}>
                                        <div className={Styles.description}>{milestone?.Description}</div>
                                    </Col>
                                </Row>
                            </div>
                        ))
                    }
                </Slider>

            </Container>
            <Container fluid>
                <Slider {...thumbSliderSettings}>
                    {
                        milestoneList?.map((milestone,index) => (
                            <div className={Styles.timeline} key={index}>
                                <div className={Styles.timelineYear}>{milestone?.Year}</div>
                            </div>
                        ))
                    }
                </Slider>
            </Container>
        </div>
    )
}

export default Milestone