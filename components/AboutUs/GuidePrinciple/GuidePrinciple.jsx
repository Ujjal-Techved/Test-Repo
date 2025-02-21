import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import styles from './GuidePrinciple.module.css'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const GuidePrinciple = ({ guidePrincipleData }) => {

    // Prevent rendering if `guidePrincipleData` is missing
    if (!guidePrincipleData) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description, PrincipleCard } = guidePrincipleData?.Principles;

    const [principleactiveTab, setPrincipleActiveTab] = useState(PrincipleCard[0].Category);
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

    const uniqueCategories = [...new Set(PrincipleCard?.map(item => item.Category))];

    return (
        <div className={styles.guide_wrapper + ' pd-t pd-b'}>
            <Container>
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />

                <div className='common-tabs-wrapper'>
                    {/* for desktop view tabs */}
                    {!isMobile ? (
                        <Nav tabs>
                            {uniqueCategories?.map((Category, index) => (
                                <NavItem key={index} className={principleactiveTab === Category ? "active" : ""} onClick={() => setPrincipleActiveTab(Category)}>
                                    <NavLink>{Category}</NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    ) : (
                        <Dropdown className='common-dropdown' isOpen={dropdownOpen} toggle={toggleDropdown}>
                            <DropdownToggle caret>
                                {uniqueCategories?.find(cat => cat === principleactiveTab) || "Select"}
                            </DropdownToggle>
                            <DropdownMenu>
                                {uniqueCategories?.map((Category, index) => (
                                    <DropdownItem key={index} onClick={() => { setPrincipleActiveTab(Category); toggleDropdown(); }}>
                                        {Category}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    )}

                    <TabContent activeTab={"1"} className='pb-0'>
                        {/* PrincipleCardData Tabcontent */}
                        <TabPane tabId="1"></TabPane>
                        {PrincipleCard?.filter((principle) => (principle?.Category.toLowerCase() == principleactiveTab.toLowerCase())).map((principle, index) => (
                            <div className={styles.insure_wrapper} key={index}>
                                <Row className={styles.insure_main}>
                                    <Col lg="5" className={styles.insure_description}>
                                        <div className={styles.guide_title_main}>
                                            <h2>{principle?.Title}</h2>
                                        </div>
                                    </Col>
                                    <Col lg="7">
                                        <div className={styles.insure_card}>
                                            <Row className={styles.guide_card_row}>
                                                {principle?.PrincipleList.slice(0,5).map((item, i, arr) => (
                                                    <Col
                                                        key={item.id}
                                                        lg={i === 4 ? "12" : "6"}
                                                        md={i === 4 ? "12" : "6"}
                                                        sm="12"
                                                        className={styles.guide_card_col}
                                                    >
                                                        <div className={styles.guide_card}>
                                                            <h4><img src={process.env.NEXT_PUBLIC_APP_API + item?.Image.url} alt={item.Image.alternativeText} className={styles.principle_image} />{item?.Title}</h4>
                                                            <p>{item?.Description}</p>
                                                        </div>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </TabContent>
                </div>
            </Container>
        </div>
    )
}

export default GuidePrinciple;