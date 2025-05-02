import React, { useEffect, useState } from 'react';
import styles from './BenefitPlan.module.css';
import { Col, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import SurvivalbenefitPlan from './SurvivalbenefitPlan/SurvivalbenefitPlan';
import MaturitybenefitPlan from './MaturitybenefitPlan/MaturitybenefitPlan';
import DeathbenefitPlan from './DeathbenefitPlan/DeathbenefitPlan';

const BenefitPlan = () => {
    const teamMemberstabs = [
        { id: "1", tabtitle: "Survival Benefit" },
        { id: "2", tabtitle: "Maturity Benefit" },
        { id: "3", tabtitle: "Death Benefit" },
    ];

    const [teamactiveTab, setTeamActiveTab] = useState(teamMemberstabs[0].id);
    const [isMobile, setIsMobile] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className='pd-t pd-b'>
            <Container>
                <TitleSubtitle
                    title="What Our Happy Customers Are Saying"
                    subtitle="Real stories, real people - hear from those who’ve taken the step towards securing their future with us."
                />

                <div className={styles.CoverageOption_section}>
                    <div className='common-tabs-wrapper'>
                        {/* {!isMobile ? (
                            <Nav tabs>
                                {teamMemberstabs.map(({ id, tabtitle }) => (
                                    <NavItem key={id} className={teamactiveTab === id ? "active" : ""}>
                                        <NavLink onClick={() => setTeamActiveTab(id)}>{tabtitle}</NavLink>
                                    </NavItem>
                                ))}
                            </Nav>
                        ) : (
                            <Dropdown className='common-dropdown' isOpen={dropdownOpen} toggle={toggleDropdown}>
                                <DropdownToggle caret>
                                    {teamMemberstabs.find(tab => tab.id === teamactiveTab)?.tabtitle || "Select"}
                                </DropdownToggle>
                                <DropdownMenu>
                                    {teamMemberstabs.map(({ id, tabtitle }) => (
                                        <DropdownItem key={id} onClick={() => { setTeamActiveTab(id); toggleDropdown(); }}>
                                            {tabtitle}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        )} */}

                        <Nav tabs>
                            {teamMemberstabs.map(({ id, tabtitle }) => (
                                <NavItem key={id} className={teamactiveTab === id ? "active" : ""}>
                                    <NavLink onClick={() => setTeamActiveTab(id)}>{tabtitle}</NavLink>
                                </NavItem>
                            ))}
                        </Nav>

                        <TabContent activeTab={teamactiveTab} className='py-0'>
                            <TabPane tabId="1">
                                <SurvivalbenefitPlan />
                            </TabPane>
                            <TabPane tabId="2">
                                <MaturitybenefitPlan />
                            </TabPane>
                            <TabPane tabId="3">
                                <DeathbenefitPlan />
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BenefitPlan;
