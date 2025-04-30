// Importing necessary modules and components
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'
import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import styles from './Leaders.module.css'

const Leaders = ({ leadersListData }) => {

    // Prevent rendering if `leadersListData` is missing
    if (!leadersListData?.LeadersSection) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description, LinkUrl, LeadersList, Note } = leadersListData?.LeadersSection || {};

    // Ensure LeadersList exists before accessing its first element
    const [leadersactiveTab, setLeadersActiveTab] = useState(LeadersList?.length ? LeadersList[0].Category : "");

    // To manage mobile screen state
    const [isMobile, setIsMobile] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    // Detect if the screen width is below 992px
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        handleResize();  // Check the screen size on initial render
        window.addEventListener("resize", handleResize); // Add event listener for resizing

        return () => {
            window.removeEventListener("resize", handleResize); // Cleanup on component unmount
        };
    }, []);

    // Get unique categories from LeadersList
    const uniqueCategories = [...new Set(LeadersList?.map(item => item?.Category) || [])];

    return (
        <div className={styles.leader_wrapper + ' pd-t pd-b'}>
            <Container>
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />

                <div className='common-tabs-wrapper pb-0 pt-lg-0 pt-3'>
                    {/* Tabs for desktop */}
                    {!isMobile ? (
                        <Nav tabs>
                            {uniqueCategories?.map((Category, index) => (
                                <NavItem key={index} className={leadersactiveTab === Category ? "active" : ""} onClick={() => setLeadersActiveTab(Category)}>
                                    <NavLink>{Category}</NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    ) : (
                        // Dropdown for mobile
                        <Dropdown className='common-dropdown' isOpen={dropdownOpen} toggle={toggleDropdown}>
                            <DropdownToggle caret>
                                {uniqueCategories?.find(cat => cat === leadersactiveTab) || "Select"}
                            </DropdownToggle>
                            <DropdownMenu>
                                {uniqueCategories?.map((Category, index) => (
                                    <DropdownItem key={index} onClick={() => { setLeadersActiveTab(Category); toggleDropdown(); }}>
                                        {Category}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    )}

                    <TabContent activeTab={"1"} className='pb-0'>
                        {/* Leaders List Tab Content */}
                        <TabPane tabId="1">
                            <div className={styles.tab_content_wrapper}>
                                <Row className={styles.leader_card_row}>
                                    {LeadersList?.filter((lead) => (lead?.Category.toLowerCase() === leadersactiveTab.toLowerCase())).map((lead, index) => (
                                        <Col lg="3" xs="6" key={index}>
                                            <div className={styles.leader_card}>
                                                <div className={styles.leader_card_inner}>
                                                    <div className={styles.leader_card_front}>
                                                        <img src={process.env.NEXT_PUBLIC_APP_API + lead?.Image.url} alt={lead.Image.alternativeText} />
                                                        <div>
                                                            <label>{lead?.Title}</label>
                                                            <h5>{lead?.Description}</h5>
                                                        </div>
                                                    </div>
                                                    <div className={styles.leader_card_back}>
                                                        <p>{lead?.FullDescription}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                {/* Terms and conditions link */}
                                {LinkUrl && (
                                    <div className={styles.terms_and_condition}>
                                        <a href={LinkUrl}>{Note}</a>
                                    </div>
                                )}
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </Container>
        </div>
    );
};

export default Leaders;
