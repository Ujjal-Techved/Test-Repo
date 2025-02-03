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

    const [activeTab, setActiveTab] = useState("1");
    const [isMobile, setIsMobile] = useState(false);  // To manage mobile screen state

    const toggleTab = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    // Array of tabs data
    const tabs = [
        { id: "1", title: "Featured" },
        { id: "2", title: "Term" },
        { id: "3", title: "Saving" },
        { id: "4", title: "ULIP" },
        { id: "5", title: "Group" },
        { id: "6", title: "Retirement" },
    ];

    // Plan data
    const plansData = [
        {
            id: 1,
            title: "Long Term Income Plan",
            subtitle: "Future Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/long-term-income-plan"
        },
        {
            id: 2,
            title: "Money Back Super Plan",
            subtitle: "Future Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "Most Popular",
            knowMore: "https:/money-back-super-plan"
        },
        {
            id: 3,
            title: "New Assured Wealth Plan",
            subtitle: "Future Generali",
            description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
            benefits: [
                "Regular payouts with Guaranteed Money Back",
                "Guaranteed Additions",
                "Regular payouts with Guaranteed Money Back",
                "Tax Benefits under section 80C and 10(10D)"
            ],
            popularity: "",
            knowMore: "https:/new-assured-wealth-plan"
        }
    ];

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
                                {tabs.map(({ id, title }) => (
                                    <NavItem key={id} className={activeTab === id ? "active" : ""} onClick={() => toggleTab(id)}>
                                        <NavLink>{title}</NavLink>
                                    </NavItem>
                                ))}
                            </Nav>
                        ) : (
                            // for mobile view tabs in dropdown
                            <Dropdown className='common-dropdown' isOpen={dropdownOpen} toggle={toggleDropdown}>
                                <DropdownToggle caret>
                                    {tabs.find(tab => tab.id === activeTab)?.title}
                                </DropdownToggle>
                                <DropdownMenu>
                                    {tabs.map(({ id, title }) => (
                                        <DropdownItem key={id} onClick={() => { setActiveTab(id); toggleDropdown(); }}>
                                            {title}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        )}
                        <TabContent activeTab={activeTab}>
                            {/* Featured Tabcontent */}
                            <TabPane tabId="1">
                                <div className={styles.tab_content_wrapper}>
                                    <Slider {...sliderSettings}>
                                        {plansData.map((plan, index) => (
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

                            <TabPane tabId="2">
                                Term Content
                            </TabPane>
                            <TabPane tabId="3">
                                Saving Content
                            </TabPane>
                            <TabPane tabId="4">
                                ULIP Content
                            </TabPane>
                            <TabPane tabId="5">
                                Group Content
                            </TabPane>
                            <TabPane tabId="6">
                                Retirement Content
                            </TabPane>
                        </TabContent>
                    </div>


                </div>
            </Container>
        </div>
    );
};

export default CoverageOption;
