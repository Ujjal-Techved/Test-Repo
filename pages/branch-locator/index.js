import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import LandingLayout from '@/components/Layouts/LandingLayout';
import TitleSubtitle from '@/components/TitleSubtitle/TitleSubtitle';
import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Select from 'react-select';
import styles from './Branch.module.css';

const BranchLocator = () => {
    const [breacrumbValues] = useState([
        { name: "Test Data", url: "/branch-locator", active: false },
        { name: "Branch Locator", url: "/branch-locator", active: true },
    ]);

    const branchList = [
        {
            state: "Maharashtra",
            city: "Mumbai",
            branchName: "Mumbai Branch",
            branchAddress: "MG Road, Opposite CST Station, Mumbai, Maharashtra, 400001",
            phone: "+912212345678"
        },
        {
            state: "Delhi",
            city: "Delhi",
            branchName: "Delhi Branch",
            branchAddress: "Connaught Place, Near Metro Station, Central Delhi, 110001",
            phone: "+911123456789"
        },
        {
            state: "Karnataka",
            city: "Bengaluru",
            branchName: "Bengaluru Branch",
            branchAddress: "MG Road, Landmark Near Brigade Road, Bengaluru, Karnataka, 560001",
            phone: "+918034567890"
        },
        {
            state: "Telangana",
            city: "Hyderabad",
            branchName: "Hyderabad Branch",
            branchAddress: "Banjara Hills, Opposite KBR Park, Hyderabad, Telangana, 500034",
            phone: "+914045678901"
        },
        {
            state: "Tamil Nadu",
            city: "Chennai",
            branchName: "Chennai Branch",
            branchAddress: "Nungambakkam, Near US Consulate, Chennai, Tamil Nadu, 600034",
            phone: "+914456789012"
        },
        {
            state: "West Bengal",
            city: "Kolkata",
            branchName: "Kolkata Branch",
            branchAddress: "Park Street, Near New Market, Kolkata, West Bengal, 700017",
            phone: "+913367890123"
        },
        {
            state: "Maharashtra",
            city: "Pune",
            branchName: "Pune Branch",
            branchAddress: "FC Road, Opposite Fergusson College, Pune, Maharashtra, 411004",
            phone: "+912078901234"
        },
        {
            state: "Rajasthan",
            city: "Jaipur",
            branchName: "Jaipur Branch",
            branchAddress: "MI Road, Near Ajmeri Gate, Jaipur, Rajasthan, 302001",
            phone: "+9114189012345"
        },
        {
            state: "Gujarat",
            city: "Ahmedabad",
            branchName: "Ahmedabad Branch",
            branchAddress: "CG Road, Near Law Garden, Ahmedabad, Gujarat, 380009",
            phone: "+917990123456"
        },
        {
            state: "Uttar Pradesh",
            city: "Lucknow",
            branchName: "Lucknow Branch",
            branchAddress: "Hazratganj, Near Tundla Crossing, Lucknow, Uttar Pradesh, 226001",
            phone: "+9152212345678"
        }
    ];

    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedState, setSelectedState] = useState(null);

    return (
        <LandingLayout>
            <Container>
                <Breadcrumbs values={breacrumbValues} />
                <TitleSubtitle
                    title={"Locate Near Branches"}
                    subtitle={"Easy and hassle-free way to locate our branches in PAN India!"}
                />

                <div className={styles.listContainer}>
                    <div className={styles.filterComponent}>
                        <Row>
                            <Col lg="5">
                                <Select
                                    options={branchList.map((data) => ({ value: data.city, label: data.city }))}
                                    value={selectedCity}
                                    onChange={(option) => { setSelectedCity(option.city) }}
                                    placeholder="Select a city"
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    components={{ IndicatorSeparator: () => null }} // Removes the arrow and separator
                                />
                            </Col>
                            <Col lg="4">
                                <Select
                                    options={branchList.map((data) => ({ value: data.state, label: data.state }))}
                                    value={selectedState}
                                    onChange={(option) => { setSelectedState(option.state) }}
                                    placeholder="Select State Name"
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    isSearchable={false}
                                    components={{ IndicatorSeparator: () => null }} // Removes the arrow and separator
                                />
                            </Col>
                            <Col lg="3">
                                <button className="redBtn">
                                    Search
                                </button>
                            </Col>
                        </Row>
                    </div>
                </div>

                <TitleSubtitle
                    title={"Reach Us Digitally"}
                    subtitle={"We help you build a worry free future with easy processes and expert guidance at every step"}
                    titleTag="h3"
                />
            </Container>
        </LandingLayout>
    );
};

export default BranchLocator;
