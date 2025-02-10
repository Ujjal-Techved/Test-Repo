import React, { useState, useEffect } from 'react';
import styles from './CoverageOption.module.css';
import { Col, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import Slider from 'react-slick';
import TitleSubtitle from '../../Common/TitleSubtitle/TitleSubtitle';

const CoverageOption = ({coveragetabs,coverageplansData}) => {

    // Create the breadcrumbs array based on state and city
    const breadcrumbs = [
        { name: "Contact Us", url: "/contact-us", active: true },
    ]

    const [coverageactiveTab, setCoverageActiveTab] = useState(coveragetabs[0].tabtitle);
    // To manage mobile screen state
    const [isMobile, setIsMobile] = useState(false);  
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    // Detect if the screen width is below 992px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize();  // Check the screen size on initial render
        window.addEventListener("resize", handleResize); // Add event listener for resizing

        return () => {
            window.removeEventListener("resize", handleResize); // Cleanup on component unmount
        };
    }, []);


    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div>
            <Container>
                <TitleSubtitle
                    title={"Our Awesome Coverage Options"}
                  
                />
                <div className={styles.CoverageOption_section}>
                    {/* Tabs Section */}
                    <div className='common-tabs-wrapper'>
                        {/* for desktop view tabs */}
                        {!isMobile ? (
                            <Nav tabs>
                                {coveragetabs.map(({ id, tabtitle }) => (
                                    <NavItem key={id} className={coverageactiveTab === tabtitle ? "active" : ""} onClick={() => setCoverageActiveTab(tabtitle)}>
                                        <NavLink>{tabtitle}</NavLink>
                                    </NavItem>
                                ))}
                            </Nav>
                        ) : (
                            // for mobile view tabs in dropdown
                            <Dropdown className='common-dropdown' isOpen={dropdownOpen} toggle={toggleDropdown}>
                                <DropdownToggle caret>
                                {coveragetabs.find(tab => tab.tabtitle  === coverageactiveTab)?.tabtitle || "Select"}
                                </DropdownToggle>
                                <DropdownMenu>
                                    {coveragetabs.map(({ id, tabtitle }) => (
                                        <DropdownItem key={id} onClick={() => { setCoverageActiveTab(tabtitle); toggleDropdown(); }}>
                                            {tabtitle}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        )}
                        <TabContent activeTab={"1"}>
                            {/* Featured Tabcontent */}
                            <TabPane tabId="1">
                                <div className={styles.tab_content_wrapper}>
                                    <Slider {...sliderSettings}>
                                        {coverageplansData.filter((plan)=>(plan.category.toLowerCase() == coverageactiveTab.toLowerCase())).map((plan, index) => (
                                            <div key={index} className={styles.tab_main_cards}>
                                                <div className={styles.tab_content_cards}>
                                                    <div className={styles.fgli_plans_title}>
                                                        <p className={styles.most_popular}>
                                                            {plan.subtitle}
                                                            {plan.popularity && <span>{plan.popularity}</span>}
                                                        </p>
                                                        <h4>{plan.title}</h4>
                                                        <h5>{plan.description}</h5>
                                                    </div>
                                                    <div className={`${styles.promise_text} cms-data`}>
                                                        <ul>
                                                            {plan.benefits.map((benefit, idx) => (
                                                                <li key={idx}>{benefit}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className={styles.btn_popups}>
                                                        <a href={plan.knowMore} target="_blank" className='redhref mob-redhref'>Know More</a>
                                                        <button className='redArrowBtn mob-redArrowBtn' >Talk to Advisor <span>&#10095;</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </TabPane>

                            {/* <TabPane tabId="2">
                                Term Content
                            </TabPane>
                            <TabPane tabId="3">
                                Saving Content
                            </TabPane> */}
                        </TabContent>
                    </div>


                </div>
            </Container>
        </div>
    );
};

export default CoverageOption;
