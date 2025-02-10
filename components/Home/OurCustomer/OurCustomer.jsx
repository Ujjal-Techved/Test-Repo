import React, { useEffect, useState } from 'react'
import styles from './OurCustomer.module.css'
import { Col, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import Slider from 'react-slick';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'
import { Rating } from 'react-simple-star-rating';

const OurCustomer = ({ teamMemberstabs, teamMemberData }) => {

        const [teamactiveTab, setTeamActiveTab] = useState(teamMemberstabs[0].tabtitle);
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

    // Ourteam member slider settings
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.2, // Changed from 3.2 to 3
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: true,  // Ensures the first slide is properly aligned
        centerPadding: "30px", // Adds padding on the left and right for visibility
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.5,
                    centerPadding: "20px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3.2,

                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.5,
                    centerPadding: "8px",
                },
            },
        ],
    };

    return (
        <div>
            <Container>
                <TitleSubtitle
                    title={"What Our Customers Are Saying"}
                    subtitle={"Discover how Future Generali has secured peace of mind for families across the nation"}
                />
                <div className={styles.CoverageOption_section}>
                    {/* Tabs Section */}
                    <div className='common-tabs-wrapper'>
                        {/* for desktop view tabs */}
                        {!isMobile ? (
                            <Nav tabs>
                                {teamMemberstabs.map(({ id, tabtitle }) => (
                                    <NavItem key={id} className={teamactiveTab === tabtitle ? "active" : ""} onClick={() => setTeamActiveTab(tabtitle)}>
                                        <NavLink>{tabtitle}</NavLink>
                                    </NavItem>
                                ))}
                            </Nav>
                        ) : (
                            // for mobile view tabs in dropdown
                            <Dropdown className='common-dropdown' isOpen={dropdownOpen} toggle={toggleDropdown}>
                                <DropdownToggle caret>
                                    {teamMemberstabs.find(tab => tab.tabtitle === teamactiveTab)?.tabtitle || "Select"}
                                </DropdownToggle>
                                <DropdownMenu>
                                    {teamMemberstabs.map(({ id, tabtitle }) => (
                                        <DropdownItem key={id} onClick={() => { setTeamActiveTab(tabtitle); toggleDropdown(); }}>
                                            {tabtitle}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        )}
                        <TabContent activeTab={"1"} className='py-0'>
                            {/* Featured Tabcontent */}
                            <TabPane tabId="1">
                                <div className={styles.team_member_wrapper}>
                                    <Slider {...sliderSettings}>
                                    {teamMemberData.filter((member)=>(member.category.toLowerCase() == teamactiveTab.toLowerCase())).map((member, id) => (
                                            <div key={member.id} className={styles.team_slider}>
                                                <img src={member.image} alt={member.name} />
                                                <p className={styles.team_feedback}>{member.feedback}</p>
                                                <div className={styles.member_name}>
                                                    <label>{member.name}</label>
                                                    <p className="date">
                                                        <Rating
                                                            initialValue={member.rating}
                                                            iconsCount={5}
                                                            readonly
                                                            size={16}
                                                            allowFraction
                                                            fillColor={"rgba(255, 195, 41, 1)"}
                                                            emptyColor={"#FFF"}
                                                            SVGstrokeColor={"rgba(255, 195, 41, 1)"}
                                                            SVGstorkeWidth={"2"}
                                                        />
                                                    </p>
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
    )
}

export default OurCustomer