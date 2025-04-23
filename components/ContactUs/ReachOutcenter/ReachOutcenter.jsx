// import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
// import React, { useEffect, useState } from 'react'
// import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
// import styles from './ReachOutcenter.module.css'

// const ReachOutcenter = ({ reachOuttabs, MediaCard }) => {


//     // State to track active tab
//     const [reachactiveTab, setReachActiveTab] = useState(reachOuttabs[0].tabtitle);

//     // State to manage mobile screen detection
//     const [isMobile, setIsMobile] = useState(false);

//     // State to manage dropdown for mobile view
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const toggleDropdown = () => setDropdownOpen(!dropdownOpen);


//     // Detect if the screen width is below 992px
//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth < 992) {
//                 setIsMobile(true);
//             } else {
//                 setIsMobile(false);
//             }
//         };

//         handleResize(); // Initial check
//         window.addEventListener("resize", handleResize); // Add event listener for resize detection

//         return () => {
//             window.removeEventListener("resize", handleResize); // Cleanup event listener on component unmount
//         };
//     }, []);

//     return (
//         <div className='pd-t pd-b'>
//             <Container>
//                 {/* Title and subtitle section */}
//                 <TitleSubtitle
//                     title="Reach out for other things"
//                     subtitle="The Foundation of All Our Activities"
//                 />


//                 <div className={styles.CoverageOption_section}>
//                     {/* Tabs Section */}
//                     <div className='common-tabs-wrapper'>

//                         {/* Tabs for desktop view */}
//                         {!isMobile ? (
//                             <Nav tabs>
//                                 {reachOuttabs.map(({ id, tabtitle }) => (
//                                     <NavItem
//                                         key={id}
//                                         className={reachactiveTab === tabtitle ? "active" : ""}
//                                         onClick={() => setReachActiveTab(tabtitle)}
//                                     >
//                                         <NavLink>{tabtitle}</NavLink>
//                                     </NavItem>
//                                 ))}
//                             </Nav>
//                         ) : (
//                             // Dropdown for mobile view
//                             <Dropdown className='common-dropdown' isOpen={dropdownOpen} toggle={toggleDropdown}>
//                                 <DropdownToggle caret>
//                                     {reachOuttabs.find(tab => tab.tabtitle === reachactiveTab)?.tabtitle || "Select"}
//                                 </DropdownToggle>
//                                 <DropdownMenu>
//                                     {reachOuttabs.map(({ id, tabtitle }) => (
//                                         <DropdownItem
//                                             key={id}
//                                             onClick={() => { setReachActiveTab(tabtitle); toggleDropdown(); }}
//                                         >
//                                             {tabtitle}
//                                         </DropdownItem>
//                                     ))}
//                                 </DropdownMenu>
//                             </Dropdown>
//                         )}

//                         {/* Tab content section */}
//                         <TabContent activeTab={"1"} className='py-0'>
//                             <TabPane tabId="1">
//                                 <Row className={styles.protect_plan_row}>
//                                     {MediaCard?.filter((member) =>
//                                         member?.Category?.toLowerCase() === reachactiveTab?.toLowerCase()
//                                     ).map((item, index) => (
//                                         <Col lg="4" md="12" className={styles.protect_plan_col} key={index}>
//                                             <div className={styles.protect_plan_Card}>
//                                                 <span>{item?.Title}</span>
//                                                 <p>{item?.Description}</p>
//                                                 <img className={styles.plan_img} src={process.env.NEXT_PUBLIC_APP_API + item?.Image.url} alt={item.Image.alternativeText} />
//                                                 <a href={item?.LinkUrl} className={styles.protect_plan_linktext} target="_blank"
//                                                     rel="noopener noreferrer">
//                                                     Know More
//                                                     <img className={styles.protect_plan_arrow} src={'/images/reach-us/arrow-right.svg'} alt="arrow" />
//                                                 </a>
//                                             </div>
//                                         </Col>
//                                     ))}
//                                 </Row>
//                             </TabPane>

//                             {/* <TabPane tabId="2">
//                         Term Content
//                     </TabPane>
//                     <TabPane tabId="3">
//                         Saving Content
//                     </TabPane> */}
//                         </TabContent>
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     )
// }

// export default ReachOutcenter


import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import styles from './ReachOutcenter.module.css'

const ReachOutcenter = () => {

    // Static tabs
    const reachOuttabs = [
        { id: 1, tabtitle: "Careers" },
        { id: 2, tabtitle: "Claims" },
        { id: 3, tabtitle: "Media" }
    ];

    const [reachactiveTab, setReachActiveTab] = useState("Careers");
    const [isMobile, setIsMobile] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className='pd-t pd-b'>
            <Container>
                <TitleSubtitle
                    title="Reach out for other things"
                    subtitle="The Foundation of All Our Activities"
                />

                <div className={styles.CoverageOption_section}>
                    <div className='common-tabs-wrapper'>
                        {!isMobile ? (
                            <Nav tabs>
                                {reachOuttabs.map(({ id, tabtitle }) => (
                                    <NavItem
                                        key={id}
                                        className={reachactiveTab === tabtitle ? "active" : ""}
                                        onClick={() => setReachActiveTab(tabtitle)}
                                    >
                                        <NavLink>{tabtitle}</NavLink>
                                    </NavItem>
                                ))}
                            </Nav>
                        ) : (
                            <Dropdown className='common-dropdown' isOpen={dropdownOpen} toggle={toggleDropdown}>
                                <DropdownToggle caret>
                                    {reachactiveTab}
                                </DropdownToggle>
                                <DropdownMenu>
                                    {reachOuttabs.map(({ id, tabtitle }) => (
                                        <DropdownItem
                                            key={id}
                                            onClick={() => { setReachActiveTab(tabtitle); toggleDropdown(); }}
                                        >
                                            {tabtitle}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        )}

                        <TabContent activeTab={reachactiveTab} className='py-0'>
                            <TabPane tabId="Careers">
                                <Row className={styles.protect_plan_row}>
                                    <Col lg="5" md="12" className={styles.protect_plan_col}>
                                        <div className={`${styles.protect_plan_Card} ${styles.career_plan_Card}`}>
                                            <div className={styles.career_content_section}>
                                                <span>Non-Campus Hiring</span>
                                                <p>We welcome talented professionals seeking new challenges and career growth explore our lateral hiring opportunities.</p>
                                                <button className='redBtn'>Explore</button>
                                            </div>
                                            <div className={styles.capmus_section}>
                                                <img src='/images/contact-us/non-campus.png'/>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg="5" md="12" className={styles.protect_plan_col}>
                                        <div className={`${styles.protect_plan_Card} ${styles.career_plan_Card}`}>
                                            <div className={styles.career_content_section}>
                                                <span>Campus Hiring</span>
                                                <p>We engage with campuses to nurture young talent, offering structured career paths for students</p>
                                                <button className='redBtn'>Explore</button>
                                            </div>
                                            <div className={styles.capmus_section}>
                                                <img src='/images/contact-us/campus.png'/>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="Claims">
                                <Row className={styles.protect_plan_row}>
                                    <Col className="d-flex" xs="12" lg="4">
                                       
                                            <div className={styles.reach_cards}>
                                                <div className={styles.reach_us_text}>
                                                    <h3 className={styles.reach_us_title}>
                                                    Customer Care Number
                                                        <img
                                                            className={styles.reach_us_img}
                                                            src="/images/reach-us/support-icon.png"
                                                            alt="Support"
                                                        />
                                                    </h3>
                                                    <p className={styles.reach_us_desc}>
                                                        Available 24*7 at
                                                        <span className={styles.reach_us_contact}>1800 102 2355</span>
                                                    </p>
                                                </div>
                                                <div className={styles.reach_us_link}>
                                                    <a href="#" className={styles.reach_us_linktext}>
                                                        <span>Call Us</span>
                                                        <img
                                                            className={styles.reach_us_arrow}
                                                            src="/images/reach-us/arrow-right.svg"
                                                            alt="Arrow"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                      

                                    </Col>
                                    <Col className="d-flex" xs="12" lg="4">
                                     
                                            <div className={styles.reach_cards}>
                                                <div className={styles.reach_us_text}>
                                                    <h3 className={styles.reach_us_title}>
                                                        Email Us At
                                                        <img
                                                            className={styles.reach_us_img}
                                                            src="/images/reach-us/support-icon.png"
                                                            alt="Support"
                                                        />
                                                    </h3>
                                                    <p className={styles.reach_us_desc}>
                                                        
                                                        <span className={styles.reach_us_contact}>claims.support@futuregenrali.in</span>
                                                    </p>
                                                </div>
                                                <div className={styles.reach_us_link}>
                                                    <a href="#" className={styles.reach_us_linktext}>
                                                        <span>Email Us</span>
                                                        <img
                                                            className={styles.reach_us_arrow}
                                                            src="/images/reach-us/arrow-right.svg"
                                                            alt="Arrow"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                 

                                    </Col>
                                    <Col className="d-flex" xs="12" lg="4">
                                       
                                            <div className={styles.reach_cards}>
                                                <div className={styles.reach_us_text}>
                                                    <h3 className={styles.reach_us_title}>
                                                    Give Us Written Intimation
                                                        <img
                                                            className={styles.reach_us_img}
                                                            src="/images/reach-us/support-icon.png"
                                                            alt="Support"
                                                        />
                                                    </h3>
                                                    <p className={styles.reach_us_desc}>
                                                    Find a branch near you easily.
                                                        <span className={styles.reach_us_contact}></span>
                                                    </p>
                                                </div>
                                                <div className={styles.reach_us_link}>
                                                    <a href="#" className={styles.reach_us_linktext}>
                                                        <span>Locate Nows</span>
                                                        <img
                                                            className={styles.reach_us_arrow}
                                                            src="/images/reach-us/arrow-right.svg"
                                                            alt="Arrow"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        

                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="Media">
                                <Row className={styles.protect_plan_row}>
                                    <Col lg="4" md="12" className={styles.protect_plan_col}>
                                        <div className={styles.protect_plan_Card}>
                                            <span>Press Releases</span>
                                            <p>For Our Latest Press Releases</p>
                                            <img className={styles.plan_img} src='./images/home/consultanadvisor.png' alt="consultanadvisor" />
                                            <a href="" className={styles.protect_plan_linktext} target="_blank"
                                                rel="noopener noreferrer">
                                                Know More
                                                <img className={styles.protect_plan_arrow} src={'/images/reach-us/arrow-right.svg'} alt="arrow" />
                                            </a>
                                        </div>
                                    </Col>
                                    <Col lg="4" md="12" className={styles.protect_plan_col}>
                                        <div className={styles.protect_plan_Card}>
                                            <span>Press Releases</span>
                                            <p>For Our Latest Press Releases</p>
                                            <img className={styles.plan_img} src='./images/home/consultanadvisor.png' alt="consultanadvisor" />
                                            <a href="" className={styles.protect_plan_linktext} target="_blank"
                                                rel="noopener noreferrer">
                                                Know More
                                                <img className={styles.protect_plan_arrow} src={'/images/reach-us/arrow-right.svg'} alt="arrow" />
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ReachOutcenter;

