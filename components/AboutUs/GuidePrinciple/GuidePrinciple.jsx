import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import styles from './GuidePrinciple.module.css'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'

const GuidePrinciple = () => {

    // Array of GuidePrinciple data

    const PrincipleCardData = [
        {
            "id": 1,
            "Category": "Our Vision",
            "Title": "Our vision is to actively protect and enhance people's lives.",
            "PrincipleList": [
                {
                    "id": "",
                    "Title": "Actively",
                    "Description": "Vision We play a proactive and leading role in improving people's lives through insurance.",
                    "Image": {
                        "id": 101,
                        "documentId": "",
                        "url": "images/about-us/Actively.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "name": ""
                    }
                },
                {
                    "id": "",
                    "Title": "Protect",
                    "Description": "We are dedicated towards managing and mitigating risks of individuals and institutions.",
                    "Image": {
                        "id": 101,
                        "documentId": "",
                        "url": "images/about-us/Protect.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "name": ""
                    }
                },
                {
                    "id": "",
                    "Title": "Enhance",
                    "Description": "Future Generali is also committed to creating value.",
                    "Image": {
                        "id": 101,
                        "documentId": "",
                        "url": "images/about-us/Enhance.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "name": ""
                    }
                },
                {
                    "id": "",
                    "Title": "People",
                    "Description": "We deeply care about our customer and our employee lives and their future.",
                    "Image": {
                        "id": 101,
                        "documentId": "",
                        "url": "images/about-us/People.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "name": ""
                    }
                },
                {
                    "id": "",
                    "Title": "Lives",
                    "Description": "Ultimately, we have an impact on the quality of people's lives - wealth, safety, advice and service are instrumental in improving a person's chosen way of life in the long term.",
                    "Image": {
                        "id": 101,
                        "documentId": "",
                        "url": "images/about-us/Lives.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "name": ""
                    }
                },
            ]
        },
        {
            "id": 2,
            "Category": "Our Mission",
            "Title": "Our Mission is to actively protect and enhance people's lives.",
            "PrincipleList": [
                {
                    "id": "",
                    "Title": "Actively",
                    "Description": "Mission We play a proactive and leading role in improving people's lives through insurance.",
                    "Image": {
                        "id": 101,
                        "documentId": "",
                        "url": "images/about-us/Actively.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "name": ""
                    }
                },
                {
                    "id": "",
                    "Title": "Protect",
                    "Description": "We are dedicated towards managing and mitigating risks of individuals and institutions.",
                    "Image": {
                        "id": 101,
                        "documentId": "",
                        "url": "images/about-us/Protect.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "name": ""
                    }
                },
                {
                    "id": "",
                    "Title": "Enhance",
                    "Description": "Future Generali is also committed to creating value.",
                    "Image": {
                        "id": 101,
                        "documentId": "",
                        "url": "images/about-us/Enhance.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "name": ""
                    }
                },
                {
                    "id": "",
                    "Title": "People",
                    "Description": "We deeply care about our customer and our employee lives and their future.",
                    "Image": {
                        "id": 101,
                        "documentId": "",
                        "url": "images/about-us/People.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "name": ""
                    }
                },
                {
                    "id": "",
                    "Title": "Lives",
                    "Description": "Ultimately, we have an impact on the quality of people's lives - wealth, safety, advice and service are instrumental in improving a person's chosen way of life in the long term.",
                    "Image": {
                        "id": 101,
                        "documentId": "",
                        "url": "images/about-us/Lives.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "name": ""
                    }
                },
            ]
        },
        {
            "id": 19,
            "Category": "Our Value",
            "Title": "Our Value is to actively protect and enhance people's lives.",
            "PrincipleList": [
                {
                    "id": "",
                    "Title": "Actively",
                    "Description": "Value We play a proactive and leading role in improving people's lives through insurance.",
                    "Image": {
                        "id": 101,
                        "documentId": "",
                        "url": "images/about-us/Actively.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "name": ""
                    }
                },
                {
                    "id": "",
                    "Title": "Protect",
                    "Description": "We are dedicated towards managing and mitigating risks of individuals and institutions.",
                    "Image": {
                        "id": 101,
                        "documentId": "",
                        "url": "images/about-us/Protect.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "name": ""
                    }
                },
                {
                    "id": "",
                    "Title": "Enhance",
                    "Description": "Future Generali is also committed to creating value.",
                    "Image": {
                        "id": 101,
                        "documentId": "",
                        "url": "images/about-us/Enhance.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "name": ""
                    }
                },
                {
                    "id": "",
                    "Title": "People",
                    "Description": "We deeply care about our customer and our employee lives and their future.",
                    "Image": {
                        "id": 101,
                        "documentId": "",
                        "url": "images/about-us/People.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "name": ""
                    }
                },
                {
                    "id": "",
                    "Title": "Lives",
                    "Description": "Ultimately, we have an impact on the quality of people's lives - wealth, safety, advice and service are instrumental in improving a person's chosen way of life in the long term.",
                    "Image": {
                        "id": 101,
                        "documentId": "",
                        "url": "images/about-us/Lives.jpg",
                        "alternativeText": null,
                        "caption": null,
                        "name": ""
                    }
                },
            ]
        }
    ]

    const [principleactiveTab, setPrincipleActiveTab] = useState(PrincipleCardData[0].Category);
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

    const uniqueCategories = [...new Set(PrincipleCardData.map(item => item.Category))];

    return (
        <div className={styles.guide_wrapper + ' pd-t pd-b'}>
            <Container>
                <TitleSubtitle
                    title={"Guiding Principles That Define Us"}
                    subtitle={"The Foundation of All Our Activities"}
                />

                <div className='common-tabs-wrapper'>
                    {/* for desktop view tabs */}
                    {!isMobile ? (
                        <Nav tabs>
                            {uniqueCategories.map((Category, index) => (
                                <NavItem key={index} className={principleactiveTab === Category ? "active" : ""} onClick={() => setPrincipleActiveTab(Category)}>
                                    <NavLink>{Category}</NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    ) : (
                        <Dropdown className='common-dropdown' isOpen={dropdownOpen} toggle={toggleDropdown}>
                            <DropdownToggle caret>
                                {uniqueCategories.find(cat => cat === principleactiveTab) || "Select"}
                            </DropdownToggle>
                            <DropdownMenu>
                                {uniqueCategories.map((Category, index) => (
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
                        {PrincipleCardData.filter((principle) => (principle.Category.toLowerCase() == principleactiveTab.toLowerCase())).map((principle, index) => (
                            <div className={styles.insure_wrapper}>
                                <Row className={styles.insure_main}>
                                    <Col lg="5" className={styles.insure_description}>
                                        <div className={styles.guide_title_main}>
                                            <h2>{principle.Title}</h2>
                                        </div>
                                    </Col>
                                    <Col lg="7" >
                                        <div className={styles.insure_card}>
                                            <Row className={styles.guide_card_row}>
                                                {principle.PrincipleList.map((item, i, arr) => (
                                                    <Col
                                                        key={item.id}
                                                        lg={i === arr.length - 1 ? "12" : "6"}
                                                        md={i === arr.length - 1 ? "12" : "6"}
                                                        sm="12"
                                                        className={styles.guide_card_col}
                                                    >
                                                        <div className={styles.guide_card}>

                                                            <h4><img src={item.Image.url} alt={item.Title} className={styles.principle_image} />{item.Title}</h4>
                                                            <p>{item.Description}</p>
                                                        </div>
                                                    </Col>
                                                ))}
                                            </Row>
                                            {/* <Row className={styles.guide_card_row}>
                                                <Col lg="6" className={styles.guide_card_col}>
                                                    <div className={styles.guide_card}>
                                                        <h4><img src='' alt='Enhance'></img> Enhance</h4>
                                                        <p>Future Generali is also committed to creating value.</p>
                                                    </div>
                                                </Col>
                                                <Col lg="6" className={styles.guide_card_col}>
                                                    <div className={styles.guide_card}>
                                                        <h4><img src='' alt='People'></img> People</h4>
                                                        <p>We deeply care about our customer and our employee lives and their future.</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className={styles.guide_card_row}>
                                                <Col lg="12" className={styles.guide_card_col}>
                                                    <div className={styles.guide_card}>
                                                        <h4><img src='' alt='Lives'></img> Lives</h4>
                                                        <p>Ultimately, we have an impact on the quality of people's lives - wealth, safety, advice and service are instrumental in improving a person's chosen way of life in the long term.</p>
                                                    </div>
                                                </Col>
                                            </Row> */}
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

export default GuidePrinciple