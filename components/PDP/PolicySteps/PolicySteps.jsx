import React, { useRef, useState } from 'react';
import styles from './PolicySteps.module.css';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import { Col, Container, Row } from 'reactstrap';
import Slider from 'react-slick';

const PolicySteps = ({ stepsData }) => {

    const [activeIndex, setActiveIndex] = useState(0); // Track active slide

    const sliderRef = useRef(null);

    const goToSlide = (index) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
            setActiveIndex(index);
        }
    };

    // Main Slider Settings
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        beforeChange: (oldIndex, newIndex) => {
            setActiveIndex(newIndex);
        },
        responsive: [
            {
              breakpoint: 992, // Below 992px
              settings: {
                slidesToShow: 1.1, // Show 3 slides instead of 6
                arrows:false,
              },
            },
          ],
    };

    return (
        <div className='social-res-wrapper policy-steps pd-t pd-b'>
            <Container>
                <TitleSubtitle
                    title={"Step-by-Step Guide to Secure Your Future"}
                    subtitle={"Follow these easy process to get started with your policy today!"}
                    titleTag='h3'
                />

                <Row className={styles.stepRow}>
                    {
                        stepsData?.map((step, index) => (
                            <Col xs="2" key={index} className={styles.stepCol}>
                                <div onClick={() => goToSlide(index)} className={`${styles.stepCard}  ${activeIndex >= index ? styles.active : ""}`}>
                                    <div className={styles.stepNo}>
                                        {index + 1}
                                        <p>Step</p>
                                    </div>
                                    <div className={styles.stepTitle}>
                                        {step.Title}
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>

                <div className={styles.stepSlider}>
                    <Slider {...settings} ref={sliderRef}>
                        {
                            stepsData?.map((step, index) => (
                                <div key={index} className={styles.stepSlide}>
                                    <img src={step.Image} alt='img' />
                                    <div className={styles.stepDetails}>
                                        <p className={styles.mobTitle}>{step.Title}</p>
                                        {
                                            step.DescTop ? (
                                                <p className={styles.stepDesc}>{step.DescTop}</p>
                                            ) : null
                                        }
                                        <Row>
                                            {
                                                step.StepDetailList.map((stepDetail, index) => (
                                                    <Col lg={step.SplitCols ? "6" : "12"} key={index}>
                                                        <div className={styles.stepDetailCard}>
                                                            <p className={styles.stepHead}>{stepDetail.Title}</p>
                                                            <p className={styles.stepDesc}>{stepDetail.Desc}</p>
                                                        </div>
                                                    </Col>
                                                ))
                                            }
                                        </Row>
                                        {
                                            step.DescBottom ? (
                                                <p className={styles.stepDesc}>{step.DescBottom}</p>
                                            ) : null
                                        }
                                    </div>
                                </div>
                            )
                            )}
                    </Slider>
                </div>
                <div className={styles.bottomPanel}>
                    <a href='/' className='redBtn'>Get Started</a>
                </div>
            </Container>
        </div>
    )
}

export default PolicySteps