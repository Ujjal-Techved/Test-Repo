import React, { useState, useEffect } from 'react';
import styles from './CoverageOption.module.css';
import { Col, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import Slider from 'react-slick';
import TitleSubtitle from '../../Common/TitleSubtitle/TitleSubtitle';

const CoverageOption = () => {

    // Create the breadcrumbs array based on state and city
    const breadcrumbs = [
        { name: "Contact Us", url: "/contact-us", active: true },
    ]

    // Array of coverage tabs data
    const coveragetabs = [
        { id: "1", tabtitle: "Featured" },
        { id: "2", tabtitle: "Term" },
        { id: "3", tabtitle: "Saving" },
    ];

    const [coverageactiveTab, setCoverageActiveTab] = useState(coveragetabs[0].tabtitle);
    const [isMobile, setIsMobile] = useState(false);  // To manage mobile screen state

    const toggleTab = (coveragetab) => {
        if (coverageactiveTab !== coveragetab) setCoverageActiveTab(coveragetab);
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    

    // Array of coverage Plan data 
    const coverageplansData = [
        {
            id: 1,
            title: "Long Term Income Plan",
            subtitle: "Featured Future Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/long-term-income-plan",
            category: "Featured"
        },
        {
            id: 2,
            title: "Money Back Super Plan",
            subtitle: "Featured Future Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "Most Popular",
            knowMore: "https:/money-back-super-plan",
            category: "Featured"
        },
        {
            id: 3,
            title: "New Assured Wealth Plan",
            subtitle: "Featured Future Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/new-assured-wealth-plan",
            category: "Featured"
        },
        {
            id: 4,
            title: "Long Term Income Plan",
            subtitle: "Term Future Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/long-term-income-plan",
            category: "Term"
        },
        {
            id:5,
            title: "Money Back Super Plan",
            subtitle: "Term Future Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "Most Popular",
            knowMore: "https:/money-back-super-plan",
            category: "Term"
        },
        {
            id: 6,
            title: "New Assured Wealth Plan",
            subtitle: "Term Future Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/new-assured-wealth-plan",
            category: "Term"
        },
        {
            id: 7,
            title: "Long Term Income Plan",
            subtitle: "Saving Future Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/long-term-income-plan",
            category: "Saving"
        },
        {
            id:8,
            title: "Money Back Super Plan",
            subtitle: "Saving Future Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "Most Popular",
            knowMore: "https:/money-back-super-plan",
            category: "Saving"
        },
        {
            id: 9,
            title: "New Assured Wealth Plan",
            subtitle: "Saving Future Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/new-assured-wealth-plan",
            category: "Saving"
        }
    ];

    // const filteredPlans = coverageplansData.filter(plan => {
    //     const activeTabCategory = coveragetabs.find(tab => tab.category === coverageactiveTab)?.tabtitle;
    //     return plan.category === activeTabCategory;
    // });

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

console.log(coverageplansData.filter((plan)=>(plan.category == coverageactiveTab)))

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
                                {coveragetabs.find(tab => tab.id === coverageactiveTab)?.tabtitle || "Select"}
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
                        <TabContent activeTab={coverageactiveTab}>
                            {/* Featured Tabcontent */}
                            <TabPane tabId="1">
                                <div className={styles.tab_content_wrapper}>
                                    <Slider {...sliderSettings}>
                                        {coverageplansData.filter((plan)=>(plan.category == coverageactiveTab)).map((plan, index) => (
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
