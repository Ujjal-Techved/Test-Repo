import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs';
import LandingLayout from '@/components/Layouts/LandingLayout';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import InfoCard from "@/components/BranchLocator/InfoCard/InfoCard";
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Select from 'react-select';
import styles from './Branch.module.css';
import ReachUsDigital from '@/components/BranchLocator/ReachUsDigital/ReachUsDigital';
import BranchList from '@/components/BranchLocator/BranchList/BranchList';

const BranchLocator = (props) => {

    const [selectedCity, setSelectedCity] = useState(props.city ? { value: props.city, label: props.city, state: props.state } : "");
    const [selectedState, setSelectedState] = useState(props.state ? { value: props.state, label: props.state } : "");

    const handleSubmit = () => {
        if (!selectedCity) {
            alert("Please select a city!"); // City is required
            return;
        }

        const cityValue = selectedCity.value.toLowerCase().replace(/\s+/g, "-");
        const stateValue = selectedState.value.toLowerCase().replace(/\s+/g, "-");

        // Redirect to the branch locator
        window.location.href = `/branch-locator/${stateValue}/${cityValue}`;
    };

     // Reach us or contact us card data
     const reachUsCard = [
        {
            title: 'WhatsApp Support',
            desc: 'Message us anytime at your convenience.',
            contact: '',
            linktext: 'Chat with Us',
            link: '/',
            arrow: '/images/reach-us/arrow-right.svg',
            img: '/images/reach-us/whatsapp.svg',
        },
        {
            title: 'Customer Support',
            desc: 'Available 24*7 at',
            contact: ' 1800 102 2355',
            linktext: 'Call Us',
            link: '/',
            arrow: '/images/reach-us/arrow-right.svg',
            img: '/images/reach-us/headphone.svg',
        },
        {
            title: 'Drop Us an Email',
            desc: 'Send your queries to: ',
            contact: 'care@futuregenerali.in',
            linktext: 'Email Us',
            link: 'care@futuregenerali.in',
            arrow: '/images/reach-us/arrow-right.svg',
            img: '/images/reach-us/email.svg',
        },
        // {
        //     title: 'Visit Us',
        //     desc: 'Monday to Friday 9:30 am to 5:30 pm',
        //     contact: '',
        //     linktext:'Locate Us',
        //     link: '/',
        //     arrow: '/images/reach-us/arrow-right.svg',
  
        // },
  
    ];

    return (
        <LandingLayout>
            <Container>
                <Breadcrumbs values={props?.breadcrumbs} />
                <TitleSubtitle
                    title={"Locate Near Branches"}
                    subtitle={"Easy and hassle-free way to locate our branches in PAN India!"}
                     extraClass="pageTitle"
                />

                <div className={`${styles.listContainer} ${props.city && props.state ? (styles.active) : ""}`}>
                    <div className={styles.filterComponent}>
                        <Row className={styles.row}>
                            <Col lg="5" className={styles.col + ' dropdown-arrow'}>
                                <Select
                                    options={props.cityList}
                                    value={selectedCity}
                                    onChange={(option) => {
                                        setSelectedCity(option);
                                        setSelectedState({ value: option.state, label: option.state });
                                    }}
                                    placeholder="Select a City"
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} // Removes the arrow and separator
                                />
                            </Col>
                            <Col lg="4" className={styles.col + ' dropdown-arrow'}>
                                <Select
                                    options={props.stateList}
                                    value={selectedState}
                                    onChange={(option) => { setSelectedState(option); setSelectedCity("") }}
                                    placeholder="Select State Name"
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    isSearchable={false}
                                    components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} // Removes the arrow and separator
                                />
                            </Col>
                            <Col lg="3" className={styles.col}>
                                <button className="redBtn w-100" onClick={handleSubmit} disabled={!selectedCity?.value}>
                                    Search
                                </button>
                            </Col>
                        </Row>
                    </div>
                    {
                        props.city && props.state ? (
                            <BranchList list={props.branchList} />
                        ) : (
                            <div className='d-flex align-items-center justify-content-center'>
                                <img className={styles.branch_img} src='/images/branch-locator/branch.webp' alt='branch' />
                            </div>
                        )
                    }
                </div>
                <InfoCard />
                <TitleSubtitle
                    title={"Reach Us Digitally"}
                    subtitle={"We help you build a worry free future with easy processes and expert guidance at every step"}
                    titleTag="h3"
                   
                />
                <ReachUsDigital reachUsCard={reachUsCard}/>
            </Container>
        </LandingLayout>
    );
};

export async function getServerSideProps(context) {
    const { location } = context.params;

    // Initialize state and city as empty strings if not provided
    let state = "";
    let city = "";

    if (location) {
        // Assign state and city from the location array, if available
        state = location[0] || "";  // Default to empty string if state is not provided
        city = location[1] || "";   // Default to empty string if city is not provided
    }

    // Convert state and city back to normal form, if they exist
    const toNormalForm = (str) => {
        if (!str) return ""; // Return an empty string if there's no value
        return str
            .split("-") // Split by hyphen
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
            .join(" "); // Join with a space
    };

    const normalizedState = toNormalForm(state);
    const normalizedCity = toNormalForm(city);

    const branchList = [
        // {
        //     state: "Maharashtra",
        //     city: "Mumbai",
        //     branchName: "Mumbai Branch",
        //     branchAddress: "MG Road, Opposite CST Station, Mumbai, Maharashtra, 400001",
        //     phone: "+912212345678"
        // },
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

    // Filter branchList based on normalizedState and normalizedCity
    const filteredBranchList = branchList.filter((branch) => {
        const matchesState = normalizedState ? branch.state === normalizedState : true;
        const matchesCity = normalizedCity ? branch.city === normalizedCity : true;
        return matchesState && matchesCity;
    });

    const cityList = [...branchList.map((data) => ({ value: data.city, label: data.city, state: data.state }))];
    const stateList = [...branchList.map((data) => ({ value: data.state, label: data.state }))];

    // Create the breadcrumbs array based on state and city
    const breadcrumbs = [
        { name: "Branch Locator", url: "/branch-locator", active: true },
        state ? { name: normalizedState, url: `/branch-locator/${state}`, active: true } : null,
        city ? { name: normalizedCity, url: `/branch-locator/${state}/${city}`, active: true } : null,
    ].filter(Boolean); // Filter out null values (for missing state or city)

    return {
        props: {
            state: normalizedState,
            city: normalizedCity,
            stateUrl: state, // Keep original state for URL
            cityUrl: city,   // Keep original city for URL
            breadcrumbs: breadcrumbs,
            branchList: filteredBranchList, // Include filtered branch list in props
            cityList: cityList, // filtered cities
            stateList: stateList, // filtered states
        },
    };
}


export default BranchLocator;
