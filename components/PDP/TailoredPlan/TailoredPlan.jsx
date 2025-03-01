import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from './TailoredPlan.module.css';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import SlickSlider from 'react-slick';
import { Slider } from 'rsuite';

const TailoredPlan = () => {

    // Array for planDetail data

    const planDetailData = [
        {
            img: '/images/product-detail/MaturityAge.png',
            title: 'Maturity Age',
            description: '30-100 years',
        },
        {
            img: '/images/product-detail/PremiumPaymentTerm.png',
            title: 'Premium Payment Term (PPT)',
            description: '8 or 10 years',
        },
        {
            img: '/images/product-detail/PolicyTerm.png',
            title: 'Policy Term',
            description: '30 or 40 or 50 years',
        },
        {
            img: '/images/product-detail/PremiumPaymentType.png',
            title: 'Premium Payment Type',
            description: 'Limited Pay',
        },
        {
            img: '/images/product-detail/SumAssured.png',
            title: 'Sum Assured',
            description: '₹ 2,00,000 - No Limit (As per Board Approved Underwriting Policy)',
        },
        {
            img: '/images/product-detail/PremiumPaymentFrequency.png',
            title: 'Premium Payment Frequency',
            description: 'Yearly, Half Yearly, Quarterly and Monthly',
        }
    ];

    // State to track slider Growth Plan value uo to 50 years
    const [growthplanupto50yeasrvalue, setGrowthplanupto50yeasrvalue] = useState(0); // Initial value

    // State to track slider value uo to 65 years
    const [upto65yeasrvalue, setUpto65yeasrvalue] = useState(0); // Initial value

    // State to track slider Cover Plan value uo to 50 years
    const [coverplanupto50yeasrvalue, setCoverplanupto50yeasrvalue] = useState(0); // Initial value

    // State to track mobile view
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        // Function to handle screen resizing
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 992);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Slider settings for responsive display  
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.03,
        slidesToScroll: 1,
        arrows: false,
    };

    // Plan cards component  
    const planCards = (
        <>
            {/* Growth Plan card */}
            <div className={styles.growth_plan_main}>
                <div className={styles.growth_plan_card}>

                    <div className={styles.growth_plan_quote}>
                        <img src="/images/product-detail/gplan.png" alt="growth-plan" />
                        <div>
                            <h5>Growth Plan</h5>
                            <p>Middle-aged individuals planning long-term wealth generation and life protection.</p>
                        </div>
                    </div>
                    <div className={styles.detail_box_wrapper}>
                        <div className={`${styles.detail_box} entry`}>
                            <span>Entry Age</span>
                            <p>Min: 0 days (Death Benefit Multiple of 10)<br />Max: 65 years (Death Benefit Multiple of 5, 7, or 10)</p>
                        </div>
                        <div className={`${styles.detail_box} maturity`}>
                            <span>Maturity Age</span>
                            <p>30-100 years</p>
                        </div>
                        <div className={`${styles.detail_box} premium`}>
                            <span>Premium Amount</span>
                            <p>Minimum:</p>
                            {/* Rsuit slider main section */}
                            <div className="rsuit-main-wrapper">
                                <div className='ages-and-value'>
                                    <p>Age: 0 days-50 years</p>
                                    <span>₹ <p>{growthplanupto50yeasrvalue.toLocaleString()}</p></span>
                                </div>
                                <div className='pre-amount-slider'>
                                    <Slider
                                        className='rs-silder'
                                        defaultValue={0}
                                        min={0}
                                        step={10000}
                                        max={30000}
                                        graduated
                                        progress
                                        onChange={(newValue) => setGrowthplanupto50yeasrvalue(newValue)}
                                    />
                                    <div className='rs-months'>
                                        <span>Monthly</span>
                                        <span>Quarterly</span>
                                        <span>Half Year</span>
                                        <span>Yearly</span>
                                    </div>
                                </div>
                            </div>

                            {/* Rsuit slider main section */}
                            <div className="rsuit-main-wrapper pt-3">
                                <div className='ages-and-value'>
                                    <p>Age: 51-65 years</p>
                                    <span>₹ <p>{upto65yeasrvalue.toLocaleString()}</p></span>
                                </div>
                                <div className='pre-amount-slider'>
                                    <Slider
                                        className='rs-silder'
                                        defaultValue={0}
                                        min={0}
                                        step={10000}
                                        max={30000}
                                        graduated
                                        progress
                                        onChange={(newValue) => setUpto65yeasrvalue(newValue)}
                                    />
                                    <div className='rs-months'>
                                        <span>Monthly</span>
                                        <span>Quarterly</span>
                                        <span>Half Year</span>
                                        <span>Yearly</span>
                                    </div>
                                </div>
                            </div>
                            <p>Maximum: No Limit <small>(As per Board Approved Underwriting Policy)</small></p>
                        </div>
                    </div>
                    <div className={styles.quote_btn_div}>
                        <a href="/" className={`${styles.get_quote_btn} whiteBtn redborder`}>Get A Quote</a>
                    </div>
                </div>
            </div>

            {/* Comprehensive Coverage Plan card */}
            <div className={styles.growth_plan_main}>
                <div className={styles.growth_plan_card}>
                    <div className={styles.growth_plan_quote}>
                        <img src="/images/product-detail/cplan.png" alt="coverage-plan" />
                        <div>
                            <h5>Comprehensive Coverage Plan</h5>
                            <p>Long-term, flexible plan offering extensive coverage and premium customization for lifelong security.</p>
                        </div>
                    </div>

                    <div className={styles.detail_box_wrapper}>
                        <div className={`${styles.detail_box} entry`}>
                            <span>Entry Age</span>
                            <p>30 - 100 years</p>
                        </div>
                        <div className={`${styles.detail_box} maturity`}>
                            <span>Maturity Age</span>
                            <p>30-100 years</p>
                        </div>
                        <div className={`${styles.detail_box} premium`}>
                            <span>Premium Amount</span>
                            <p>Minimum:</p>
                            {/* Rsuit slider main section */}
                            <div className="rsuit-main-wrapper">
                                <div className='ages-and-value'>
                                    <p>Age: 0 days-50 years</p>
                                    <span>₹ <p>{coverplanupto50yeasrvalue.toLocaleString()}</p></span>
                                </div>
                                <div className='pre-amount-slider'>
                                    <Slider
                                        className='rs-silder'
                                        defaultValue={0}
                                        min={0}
                                        step={10000}
                                        max={30000}
                                        graduated
                                        progress
                                        onChange={(newValue) => setCoverplanupto50yeasrvalue(newValue)}
                                    />
                                    <div className='rs-months'>
                                        <span>Monthly</span>
                                        <span>Quarterly</span>
                                        <span>Half Year</span>
                                        <span>Yearly</span>
                                    </div>
                                </div>
                            </div>
                            <p>Maximum: No Limit <small>(As per Board Approved Underwriting Policy)</small></p>
                        </div>
                    </div>
                    <div className={styles.quote_btn_div}>
                        <a href="/" className={`${styles.get_quote_btn} whiteBtn redborder`}>Get A Quote</a>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <div className='tailored-plan-wrapper pd-t pd-b'>
            <Container>
                <TitleSubtitle
                    title={"Tailored plans to secure your future"}
                    subtitle={"Choose the plan that fits your life"}
                />
                {/* Growth plan and Coverage plan Section */}
                <div className={styles.fgli_plan_section}>
                    {isMobileView ? (
                        <SlickSlider {...sliderSettings}>{planCards.props.children}</SlickSlider>
                    ) : (
                        planCards
                    )}
                </div>
                {/* Common Points Section */}
                <div className={styles.common_point_wrapper}>
                    <p>
                        <img src='/images/product-detail/down-arrow.png' alt='pointer' /> Some common points
                    </p>
                    <Row className={styles.common_point_row}>
                        {planDetailData.map((plan, index) => (
                            <Col lg="4" key={index}>
                                <div className={styles.common_point_card}>
                                    <img src={plan.img} alt={plan.title} />
                                    <div className={styles.point_description}>
                                        <span>{plan.title}</span>
                                        <p>{plan.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

                <div>
                </div>
            </Container>
        </div>
    );
};

export default TailoredPlan;
