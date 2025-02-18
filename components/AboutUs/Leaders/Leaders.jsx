import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'
import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import styles from './Leaders.module.css'

const Leaders = ({leadersListData}) => {

    const [leadersactiveTab, setLeadersActiveTab] = useState(leadersListData[0].Category);
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

    const uniqueCategories = [...new Set(leadersListData.map(item => item.Category))];


    return (
        <div className={styles.leader_wrapper + ' pd-t pd-b'}>
            <Container>
                <TitleSubtitle
                    title={"Meet the Leaders Behind Our Success"}
                    subtitle={"Our dedicated team drives innovation and delivers on our promise of protection and trust."}
                />

                <div className='common-tabs-wrapper pb-0 pt-lg-0 pt-3'>
                    {/* for desktop view tabs */}
                    {!isMobile ? (
                        <Nav tabs>
                            {uniqueCategories.map((Category, index) => (
                                <NavItem key={index} className={leadersactiveTab === Category ? "active" : ""} onClick={() => setLeadersActiveTab(Category)}>
                                    <NavLink>{Category}</NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    ) : (
                        <Dropdown className='common-dropdown' isOpen={dropdownOpen} toggle={toggleDropdown}>
                            <DropdownToggle caret>
                                {uniqueCategories.find(cat => cat === leadersactiveTab) || "Select"}
                            </DropdownToggle>
                            <DropdownMenu>
                                {uniqueCategories.map((Category, index) => (
                                    <DropdownItem key={index} onClick={() => { setLeadersActiveTab(Category); toggleDropdown(); }}>
                                        {Category}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    )}


                    <TabContent activeTab={"1"} className='pb-0'>
                        {/* leadersListData Tabcontent */}
                        <TabPane tabId="1">
                            <div className={styles.tab_content_wrapper}>
                                <Row className={styles.leader_card_row}>
                                    {leadersListData.filter((lead) => (lead.Category.toLowerCase() == leadersactiveTab.toLowerCase())).map((lead, index) => (
                                        <Col lg="3" xs="6" key={index}>
                                            <div className={styles.leader_card}>
                                                <div class={styles.leader_card_inner}>
                                                    <div class={styles.leader_card_front}>
                                                        <img src={lead.Image.url} alt={lead.Image.alternativeText}></img>
                                                        <div>
                                                            <label>{lead.Title}</label>
                                                            <h5>{lead.Description}</h5>
                                                        </div>
                                                    </div>
                                                    <div class={styles.leader_card_back}>
                                                        <p>Generali is an Independent, Italian Group, with a strong international presence. Established in 1831, it is amoung the world's leading insurers and it is present in over 60 countries with total premium income exceeding 70 billion in 2016.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <div className={styles.terms_and_condition}>
                                    <a href='/' >T & C of Appointment of Independent Directors</a>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>

                </div>

            </Container>
        </div>
    )
}

export default Leaders