import React, { useState, useEffect } from 'react';
import styles from './CoverageOption.module.css';
import { Col, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import Slider from 'react-slick';
import TitleSubtitle from '../../Common/TitleSubtitle/TitleSubtitle';
import { useRouter } from 'next/router';

const CoverageOption = ({ coveragetabs, CoverageBenefits, coverageplansData }) => {
    const router = useRouter()

    // Breadcrumbs for navigation (currently hardcoded)
    const breadcrumbs = [
        { name: "Contact Us", url: "/contact-us", active: true },
    ];

    // Prevent rendering if `coverageplansData` is missing
    // if (!coverageplansData?.CoverageOptions) {
    //     return null;
    // }

    // Destructure API response data for cleaner code
    // const { Title, CoverageCard } = coverageplansData?.CoverageOptions;

    // State to manage the active tab
    const [coverageactiveTab, setCoverageActiveTab] = useState(coveragetabs[0].tabtitle);

    // State to manage mobile view
    const [isMobile, setIsMobile] = useState(false);

    // State to manage dropdown open/close
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    // See Benefits section Toggle Function
    const [isBenefitsVisible, setIsBenefitsVisible] = useState(false);

    const toggleBenefits = () => {
        setIsBenefitsVisible((prev) => !prev);
    };

    // Effect to detect screen width and set mobile state
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize();  // Check screen size on initial render
        window.addEventListener("resize", handleResize); // Add event listener for resizing

        return () => {
            window.removeEventListener("resize", handleResize); // Cleanup on component unmount
        };
    }, []);


    // Slider settings for the coverage cards
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
        <div className='pd-t pd-b'>
            <Container>
                {/* Title and Subtitle component */}
                <TitleSubtitle
                    title={"Our Awesome Coverage Options"}
                />

                {/* Coverage Option Section */}
                <div className={styles.CoverageOption_section}>
                    {/* Tabs Section */}
                    <div className='common-tabs-wrapper'>
                        {/* Render tabs for desktop view */}
                        {!isMobile ? (
                            <Nav tabs>
                                {coveragetabs.map(({ id, tabtitle }) => (
                                    <NavItem key={id} className={coverageactiveTab === tabtitle ? "active" : ""} onClick={() => {setCoverageActiveTab(tabtitle);setIsBenefitsVisible(false)}}>
                                        <NavLink>{tabtitle}</NavLink>
                                    </NavItem>
                                ))}
                            </Nav>
                        ) : (
                            // Render dropdown for mobile view
                            <Dropdown className='common-dropdown' isOpen={dropdownOpen} toggle={toggleDropdown}>
                                <DropdownToggle caret>
                                    {coveragetabs.find(tab => tab.tabtitle === coverageactiveTab)?.tabtitle || "Select"}
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

                        {/* Tab Content Section */}
                        <TabContent activeTab={"1"} className='pb-0'>
                            <TabPane tabId="1">
                                <div className={styles.tab_content_wrapper}>
                                    {CoverageBenefits?.filter((plan) => (plan?.Category.toLowerCase() === coverageactiveTab?.toLowerCase())).map((plan, index) => (
                                        <div key={index} className={styles.seebenfits_section}>
                                            <p>{plan.Description}</p>
                                            <div className={`${styles.seebenfits_wrapper} ${isBenefitsVisible ? styles.show : ""}`}>
                                                <button className={styles.seebenefit_btn} onClick={toggleBenefits}>See Benefits</button>
                                                <div className={styles.seebenefits_main}>
                                                    {plan.BenefitsList.map((benefitlist, index) => (
                                                        <div key={index} className={styles.seebenefits_card}>
                                                            <img src={benefitlist.Image.url}></img>
                                                            <p>{benefitlist.Description}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Slider for coverage cards */}
                                    <Slider {...sliderSettings}>
                                        {coverageplansData?.filter((plan) => (plan?.Category.toLowerCase() === coverageactiveTab?.toLowerCase())).map((plan, index) => (
                                            <div key={index} className={styles.tab_main_cards}>
                                                <div className={styles.tab_content_cards}>
                                                    {/* Plan Title and Brand */}
                                                    <div className={styles.fgli_plans_title}>
                                                        <p className={styles.most_popular}>
                                                            {plan?.Brand}
                                                            {plan?.MostPopular && <span>Most Popular</span>}
                                                        </p>
                                                        <h4>{plan?.Title}</h4>
                                                        <h5>{plan?.Description}</h5>
                                                    </div>

                                                    {/* Plan Benefits */}
                                                    <div className={`${styles.promise_text} cms-data`}>
                                                        <ul>
                                                            {plan?.Pointers?.[0]?.children?.map((benefit, idx) => (
                                                                <li key={idx}>{benefit?.children?.map((item) => item.text).join(" ")}</li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Buttons for Know More and Talk to Advisor */}
                                                    <div className={styles.btn_popups}>
                                                        <a href={plan?.KnowMoreLink} target="_blank" className='redhref mob-redhref'>Know More</a>
                                                        <button onClick={() => router.push(plan?.TalkToAdvisorLink)} className='redArrowBtn mob-redArrowBtn'>Talk to Advisor <span>&#10095;</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CoverageOption;