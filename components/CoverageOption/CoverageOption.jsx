import React, { useState } from 'react'
import styles from './CoverageOption.module.css'
import { Container, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

const CoverageOption = () => {

    const [activeTab, setActiveTab] = useState("1");

    const toggleTab = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div>
            <Container>
                <div className={styles.CoverageOption_section}>
                    {/* Tabs Section */}
                    <div className='common-tabs-wrapper'>
                        <Nav tabs>
                            <NavItem className={activeTab === "1" ? "active" : ""}
                                onClick={() => toggleTab("1")}>
                                <NavLink>
                                    Featured
                                </NavLink>
                            </NavItem>
                            <NavItem className={activeTab === "2" ? "active" : ""}
                                onClick={() => toggleTab("2")}>
                                <NavLink>
                                    Term
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                asasasasas
                            </TabPane>
                            <TabPane tabId="2">
                                1231231231
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CoverageOption