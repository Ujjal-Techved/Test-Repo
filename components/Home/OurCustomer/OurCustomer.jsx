import React, { useEffect, useState } from 'react'
import styles from './OurCustomer.module.css'
import { Col, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import Slider from 'react-slick';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'
import { Rating } from 'react-simple-star-rating';

const OurCustomer = ({ teamMemberstabs, teamMemberData }) => {

    // State to track active tab
    const [teamactiveTab, setTeamActiveTab] = useState(teamMemberstabs[0].tabtitle);

    // State to manage mobile screen detection
    // const [isMobile, setIsMobile] = useState(false);

    // State to manage dropdown for mobile view
    // const [dropdownOpen, setDropdownOpen] = useState(false);
    // const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    // Prevent rendering if `teamMemberData` is missing
    if (!teamMemberData?.ReviewSection) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description, ReviewCards } = teamMemberData?.ReviewSection;


    // Detect if the screen width is below 992px
    // useEffect(() => {
    //     const handleResize = () => {
    //         if (window.innerWidth < 992) {
    //             setIsMobile(true);
    //         } else {
    //             setIsMobile(false);
    //         }
    //     };

    //     handleResize(); // Initial check
    //     window.addEventListener("resize", handleResize); // Add event listener for resize detection

    //     return () => {
    //         window.removeEventListener("resize", handleResize); // Cleanup event listener on component unmount
    //     };
    // }, []);

    // Slider settings for team member reviews
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3.14,
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
                    slidesToShow: 1.3,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='pd-t pd-b'>
            <Container fluid className={styles.plan_containerfluid + ' plan-container-fluid'}>
                {/* Title and subtitle section */}
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />

                <div className={styles.CoverageOption_section}>
                    {/* Tabs Section */}
                    <div className='common-tabs-wrapper'>

                        {/* Tabs for desktop view */}
                        {/* {!isMobile ? (
                            <Nav tabs>
                                {teamMemberstabs.map(({ id, tabtitle }) => (
                                    <NavItem
                                        key={id}
                                        className={teamactiveTab === tabtitle ? "active" : ""}
                                        onClick={() => setTeamActiveTab(tabtitle)}
                                    >
                                        <NavLink>{tabtitle}</NavLink>
                                    </NavItem>
                                ))}
                            </Nav>
                        ) : (
                            // Dropdown for mobile view
                            <Dropdown className='common-dropdown' isOpen={dropdownOpen} toggle={toggleDropdown}>
                                <DropdownToggle caret>
                                    {teamMemberstabs.find(tab => tab.tabtitle === teamactiveTab)?.tabtitle || "Select"}
                                </DropdownToggle>
                                <DropdownMenu>
                                    {teamMemberstabs.map(({ id, tabtitle }) => (
                                        <DropdownItem
                                            key={id}
                                            onClick={() => { setTeamActiveTab(tabtitle); toggleDropdown(); }}
                                        >
                                            {tabtitle}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        )} */}

                        <Nav tabs>
                            {teamMemberstabs.map(({ id, tabtitle }) => (
                                <NavItem
                                    key={id}
                                    className={teamactiveTab === tabtitle ? "active" : ""}
                                    onClick={() => setTeamActiveTab(tabtitle)}
                                >
                                    <NavLink>{tabtitle}</NavLink>
                                </NavItem>
                            ))}
                        </Nav>

                        {/* Tab content section */}
                        <TabContent activeTab={"1"} className='py-0'>
                            <TabPane tabId="1">
                                <div className={styles.team_member_wrapper}>
                                    {ReviewCards?.filter((member) =>
                                        member?.Category?.toLowerCase() === teamactiveTab?.toLowerCase()
                                    ).length > 0 ? (
                                        <Slider {...sliderSettings}
                                            className={
                                                ReviewCards?.filter((member) =>
                                                    member?.Category?.toLowerCase() === teamactiveTab?.toLowerCase()
                                                ).length === 1 ? 'single-slide' : ''
                                            }
                                        >
                                            {/* Filtering reviews based on active tab category */}
                                            {ReviewCards?.filter((member) =>
                                                member?.Category?.toLowerCase() === teamactiveTab?.toLowerCase()
                                            ).map((eachmember, index) => (
                                                <div key={index} className={styles.team_slider_parent}>
                                                    <div className={styles.team_slider}>
                                                        {/* Reviewer's Image */}
                                                        <img
                                                            src={process.env.NEXT_PUBLIC_APP_API + eachmember?.Image?.url}
                                                            alt={eachmember?.Image?.alternativeText || 'Review Image'}
                                                        />

                                                        {/* Review content */}
                                                        <p className={styles.team_feedback}>{eachmember?.Review}</p>

                                                        {/* Reviewer's name and rating */}
                                                        <div className={styles.member_name}>
                                                            <label>{eachmember?.Name}</label>
                                                            <p className="date">
                                                                <Rating
                                                                    initialValue={eachmember?.Rating}
                                                                    iconsCount={5}
                                                                    readonly
                                                                    size={16}
                                                                    allowFraction
                                                                    fillColor={"rgba(255, 195, 41, 1)"}
                                                                    emptyColor={"#FFF"}
                                                                    SVGstrokeColor={"rgba(255, 195, 41, 1)"}
                                                                    SVGstrokeWidth={"2"}
                                                                />
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    ) : (
                                        <div className={styles.no_reviews + ' text-center pt-4'}>
                                            <p>No reviews available for this category.</p>
                                        </div>
                                    )}
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
    )
}

export default OurCustomer;
