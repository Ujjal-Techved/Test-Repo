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
    const [activeIndex, setActiveIndex] = useState(0); // Track active slide


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
        beforeChange: (oldIndex, newIndex) => {
            setActiveIndex(newIndex);
        },
    };

    // Thumbnail Slider Settings
    const thumbSliderSettings = {
        asNavFor: nav1,
        ref: (slider) => {
            setNav2(slider);
            thumbSliderRef.current = slider;
        },
        slidesToShow: 6,
        draggable:false,
        focusOnSelect: true,
        dots: false,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 992, // Below 992px
                settings: {
                    slidesToShow: 3, // Show 3 slides instead of 6
                },
            },
        ],
    };

    return (
        <div className='social-res-wrapper pd-t pd-b'>
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
                                <div className={Styles.mainRow}>
                                    <div className={Styles.year}>{milestone?.Year}</div>
                                    <img src={process.env.NEXT_PUBLIC_APP_API + milestone?.Image?.url} className={Styles.picture} />
                                    <div className={Styles.description}>{milestone?.Description}</div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>

            </Container>
            <div>
                <Slider {...thumbSliderSettings}>
                    {
                        milestoneList?.map((milestone, index) => (
                            <div className={`${Styles.timeline}  ${activeIndex === index ? Styles.active : ""} ${activeIndex > index ? Styles.complete : ""}`} key={index}>
                                <div className={Styles.timelineYear}>{milestone?.Year}</div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Milestone