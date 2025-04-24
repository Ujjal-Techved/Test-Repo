import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs';
import LandingLayout from '@/components/Layouts/LandingLayout';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import InfoCard from "@/components/BranchLocator/InfoCard/InfoCard";
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Select from 'react-select';
import styles from './Branch.module.css';
import ReachUsDigital from '@/components/BranchLocator/ReachUsDigital/ReachUsDigital';
import BranchList from '@/components/BranchLocator/BranchList/BranchList';
import { apiClient } from '../../utils/apiClient';  // Ensure correct path
import { useRouter } from 'next/router';
import LocationPopup from '@/components/BranchLocator/LocationPopup/LocationPopup';
import CommonPopup from '@/components/Common/CommonPopup/CommonPopup';
import InvestPlan from '@/components/ContactUs/InvestPlan/InvestPlan';
import ReachUsDigitalContact from '@/components/BranchLocator/ReachUsDigital/ReachUsDigitalContact';

const BranchLocator = (props) => {
    const router = useRouter();  // Initialize Next.js router for page navigation

    //location popup
    const [locationPopup, setLocationPopup] = useState(false);
    const toggleLocationPopup = () => { setLocationPopup(!locationPopup) }
    // State for selected city and state (from props or default values)
    const [selectedCity, setSelectedCity] = useState(props.city ? { value: props.city, label: props.city, state: props.state } : "");
    const [selectedState, setSelectedState] = useState(props.state ? { value: props.state, label: props.state } : "");

    // Handle the "Search" button click, redirecting to the selected city/state page
    const handleSubmit = () => {
        // Convert selected values to lowercase and replace spaces with hyphens
        const cityValue = selectedCity?.value?.toLowerCase().replace(/\s+/g, "-");
        const stateValue = selectedState?.value?.toLowerCase().replace(/\s+/g, "-");

        // Redirect to the branch locator page for the selected city and state
        window.location.href = `/branch-locator/${stateValue}/${cityValue}`;

    };

    useEffect(() => {
        if (!props.city || !props.state) {
            toggleLocationPopup();
        }
        return () => {
            toggleLocationPopup();
        }
    }, [])

    return (
        <LandingLayout>
            <Container>
                {/* Breadcrumb navigation */}
                <Breadcrumbs values={props?.breadcrumbs} />

                <TitleSubtitle
                    title={props?.pageData?.Title}
                    subtitle={props?.pageData?.SubTitle}
                    extraClass="pageTitle"
                />

                {/* Branch search filter section */}
                <div className={`${styles.listContainer} ${props.city && props.state ? styles.active : ""}`}>
                    <div className={styles.filterComponent}>
                        <Row className={styles.row}>
                            <Col lg="5" className={styles.col + ' dropdown-arrow'}>
                                <Select
                                    options={props.cityList}
                                    value={selectedCity}
                                    onChange={(option) => {
                                        setSelectedCity(option);  // Update selected city
                                        setSelectedState({ value: option.state, label: option.state }); // Automatically set state
                                    }}
                                    onInputChange={(inputValue, { action }) => {
                                        if (action === "input-change") {
                                            // Allow only alphabetic characters and spaces, with a max length of 50
                                            const sanitizedInput = inputValue.replace(/[^a-zA-Z\s]/g, "").slice(0, 50);
                                            return sanitizedInput;
                                        }
                                    }}
                                    placeholder="Select a City"
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} // Remove arrow and separator
                                />
                            </Col>
                            <Col lg="4" className={styles.col}>
                                <Select
                                    options={props.stateList}
                                    value={selectedState}
                                    // onChange={(option) => { setSelectedState(option); setSelectedCity("") }}
                                    placeholder="State Name"
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    isSearchable={false}
                                    menuIsOpen={false}
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

                    {/* Conditionally render the Branch List or an image if no city/state */}
                    {
                        props.city && props.state ? (
                            <BranchList list={props.branchList} />  // Display the list of branches
                        ) : (
                            <div className='d-flex align-items-center justify-content-center'>
                                <img className={styles.branch_img} src='/images/branch-locator/branch.webp' alt='branch' />
                            </div>
                        )
                    }
                </div>

                {/* Display additional contact options */}
                <InfoCard infoCardDetails={props?.pageData?.InfoCards} />
                
                {/* <TitleSubtitle
                    title={props?.pageData?.ReachUsTitle}
                    subtitle={props?.pageData?.ReachUsSubTitle}
                    titleTag="h3"
                /> */}

                {/* Digital Contact Section OLD */}
                {/* <ReachUsDigital reachUsCard={props?.pageData?.ReachUsCards} /> */}

                {/* Digital Contact Section */}
                <ReachUsDigitalContact reachUsCard={props?.pageData?.Contact_Details_Cards} AIcontactUs />

                {/* Invest Plan section */}
                <InvestPlan investPlanData={props?.pageData?.AppLink} />

            </Container>
            <CommonPopup isOpen={locationPopup} toggle={toggleLocationPopup}>
                <LocationPopup toggle={toggleLocationPopup} pageUrl="/branch-locator/" />
            </CommonPopup>
        </LandingLayout>

    );

};

// **Server-side Props for SEO**
export async function getServerSideProps(context) {
    const { location } = context.params;
    let state = location?.[0] || "";
    let city = location?.[1] || "";

    // Convert state and city to proper format (capitalize first letters)
    const toNormalForm = (str) => str
        ? str.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        : "";

    const normalizedState = toNormalForm(state);
    const normalizedCity = toNormalForm(city);

    // Generate breadcrumbs dynamically based on state and city
    const breadcrumbs = [
        { name: "Branch Locator", url: "/branch-locator", active: true },
        state ? { name: normalizedState, url: `/branch-locator/${state}/${city}`, active: true } : null,
        city ? { name: normalizedCity, url: `/branch-locator/${state}/${city}`, active: true } : null,
    ].filter(Boolean); // Remove null values


    try {
        // Fetch the list of branches (cities and states)
        const branchList = await apiClient('/api/branch-lists?fields[0]=State&fields[1]=City');

        // Fetch the filtered branch list based on state and city
        const filterBranchList = await apiClient(
            `/api/branch-lists?filters[State][$eqi]=${normalizedState}&filters[City][$eqi]=${normalizedCity}`
        );

        // Create dropdown options for cities and states
        const cityList = branchList.data.map(data => ({ value: data.City, label: data.City, state: data.State }));
        const stateList = branchList.data.map(data => ({ value: data.State, label: data.State }));

        const pageData = await apiClient('/api/branch-list-banners');

        return {
            props: {
                state: normalizedState,
                city: normalizedCity,
                stateUrl: state, // Keep original state for URL
                cityUrl: city,   // Keep original city for URL 
                breadcrumbs: breadcrumbs,
                branchList: filterBranchList?.data ?? [], // Default value if no branches found
                cityList, stateList,
                pageData: pageData?.data[0],
            }
        };
    } catch (error) {
        console.error("Error fetching branch data:", error);
        return {
            props: {
                state: normalizedState,
                city: normalizedCity,
                stateUrl: state, // Keep original state for URL
                cityUrl: city,   // Keep original city for URL 
                breadcrumbs: breadcrumbs,
                branchList: [],
                pageData: {}
            }
        };
    }
}

export default BranchLocator;
