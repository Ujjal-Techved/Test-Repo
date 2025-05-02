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
import Head from 'next/head';

const BranchLocator = (props) => {
    const router = useRouter();  // Initialize Next.js router for page navigation

    //location popup
    const [locationPopup, setLocationPopup] = useState(false);
    const toggleLocationPopup = () => { setLocationPopup(!locationPopup) }
    // State for selected city and state (from props or default values)
    const [selectedCity, setSelectedCity] = useState(props.city ? { value: props.city, label: props.city } : "");
    const [selectedState, setSelectedState] = useState(props.state ? { value: props.state, label: props.state } : "");
    const [selectedPincode, setSelectedPincode] = useState(props.pincode ? { value: props.pincode, label: props.pincode } : "");

    const [cityList, setCityList] = useState([]);

    // Handle the "Search" button click, redirecting to the selected city/state page
    const handleSubmit = () => {
        // Convert selected values to lowercase and replace spaces with hyphens
        const cityValue = selectedCity?.value?.toLowerCase().replace(/\s+/g, "-");
        const stateValue = selectedState?.value?.toLowerCase().replace(/\s+/g, "-");
        const pincodeValue = selectedPincode?.value;
        // Redirect to the branch locator page for the selected city and state
        if (pincodeValue) {
            window.location.href = `/branch-locator/${pincodeValue}`;
        }
        else {
            window.location.href = `/branch-locator/${stateValue}/${cityValue}`;
        }

    };

    useEffect(() => {
        if ((!props.state || !props.city) && !props.pincode) {
            toggleLocationPopup();
        }
        return () => {
            toggleLocationPopup();
        }
    }, [])

    const fetchCityList = async (state) => {
        const branchList = await apiClient(`/api/branch-lists?filters[State][$eqi]=${state}&fields[0]=City`);
        const seenCity = new Set();
        const cityData = branchList.data.filter(item => {
            if (seenCity.has(item.City)) {
                return false;
            } else {
                seenCity.add(item.City);
                return true;
            }
        }).map(data => ({ value: data.City, label: data.City }));
        setCityList(cityData);
    }

    useEffect(() => {
        if (props.state) {
            fetchCityList(props.state);
        }
    }, [])


    return (
        <>
            <Head>
                <title>{props?.pageData?.SeoSection?.TitleTag}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <meta name="keywords" content={props?.pageData?.SeoSection?.MetaKeyword} />
                <meta name="description" content={props?.pageData?.SeoSection?.MetaDescription} />
                <link rel="canonical" href={props?.pageData?.SeoSection?.CanonicalTag} key="canonical" />
                {props?.pageData?.SeoSection?.SchemaTag?.map(
                    (schemas, index) => {
                        return (
                            <script
                                key={index}
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: schemas.Text,
                                }}
                            />
                        );
                    }
                )}
            </Head>
            <LandingLayout>
                <div className={styles.branch_background}>
                    <Container>
                        {/* Breadcrumb navigation */}
                        <Breadcrumbs values={props?.breadcrumbs} />

                        <TitleSubtitle
                            title={props?.pageData?.Title}
                            subtitle={props?.pageData?.SubTitle}
                            extraClass="pageTitle"
                        />

                        {/* Branch search filter section */}
                        <div className={`${styles.listContainer} ${(props.city && props.state) || props.pincode ? styles.active : ""}`}>
                            <div className={styles.filterComponent}>
                                <Row className={styles.row}>
                                    <div className={styles.col + ' dropdown-arrow'}>
                                        <label className='common-label'>Select State</label>
                                        <Select
                                            options={props.stateList}
                                            value={selectedState}
                                            onChange={(option) => {
                                                setSelectedState(option);
                                                fetchCityList(option.value);
                                                setSelectedPincode("");
                                            }}
                                            onInputChange={(inputValue, { action }) => {
                                                if (action === "input-change") {
                                                    // Allow only alphabetic characters and spaces, with a max length of 50
                                                    const sanitizedInput = inputValue.replace(/[^a-zA-Z\s]/g, "").slice(0, 50);
                                                    return sanitizedInput;
                                                }
                                            }}
                                            placeholder="Select Your State"
                                            className="react-select-container"
                                            classNamePrefix="react-select"
                                            // isSearchable={false}
                                            // menuIsOpen={false}
                                            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} // Removes the arrow and separator
                                        />
                                    </div>
                                    <div className={styles.col + ' dropdown-arrow'}>
                                        <label className='common-label'>Select City</label>
                                        <Select
                                            options={cityList}
                                            value={selectedCity}
                                            onChange={(option) => {
                                                setSelectedCity(option);  // Update selected city
                                                // setSelectedState({ value: option.state, label: option.state }); // Automatically set state
                                                setSelectedPincode("");
                                            }}
                                            onInputChange={(inputValue, { action }) => {
                                                if (action === "input-change") {
                                                    // Allow only alphabetic characters and spaces, with a max length of 50
                                                    const sanitizedInput = inputValue.replace(/[^a-zA-Z\s]/g, "").slice(0, 50);
                                                    return sanitizedInput;
                                                }
                                            }}
                                            isSearchable={selectedState?.value ? true : false}
                                            isDisabled={selectedState?.value ? false : true}
                                            placeholder="Select Your City"
                                            className="react-select-container"
                                            classNamePrefix="react-select"
                                            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} // Remove arrow and separator
                                        />
                                    </div>
                                    <div className={styles.col}>
                                        <label className='common-label'>Enter Pin Code</label>
                                        <Select
                                            options={props.pincodeList}
                                            value={selectedPincode}
                                            onChange={(option) => {
                                                setSelectedPincode(option);
                                                setSelectedCity("");  // Update selected city
                                                setSelectedState("");
                                            }}
                                            onInputChange={(inputValue, { action }) => {
                                                if (action === "input-change") {
                                                    setSelectedCity("");  // Update selected city
                                                    setSelectedState("");
                                                    // Allow only alphabetic characters and spaces, with a max length of 50
                                                    const sanitizedInput = inputValue.replace(/[^0-9]/g, "").slice(0, 6);
                                                    return sanitizedInput;
                                                }
                                            }}
                                            placeholder="Enter Valid Pin Code"
                                            className="react-select-container"
                                            classNamePrefix="react-select"
                                            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} // Removes the arrow and separator
                                        />
                                    </div>
                                    <div className={styles.colbtn}>
                                        <button className="redBtn w-100" onClick={handleSubmit}
                                            disabled={!selectedCity?.value && !selectedPincode?.value}>
                                            Search
                                        </button>
                                    </div>
                                </Row>
                            </div>

                            {/* Conditionally render the Branch List or an image if no city/state */}
                            {
                                (props.city && props.state) || props.pincode ? (
                                    <BranchList list={props.branchList} />  // Display the list of branches
                                ) : (
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <img className={styles.branch_img} src='/images/branch-locator/branch.webp' alt='branch' />
                                    </div>
                                )
                            }
                        </div>

                        {/* Display additional contact options */}
                        {props?.pageData?.InfoCards ? (<InfoCard infoCardDetails={props?.pageData?.InfoCards} />) : null}

                        {/* Digital Contact Section */}
                        {props?.pageData?.ReachUsCards ? (
                            <ReachUsDigitalContact
                                title={props?.pageData?.ReachUsTitle}
                                subtitle={props?.pageData?.ReachUsSubTitle}
                                reachUsCard={props?.pageData?.ReachUsCards}
                            />
                        ) : null}

                        {/* Invest Plan section */}
                        {props?.pageData?.BottomBanner ? (<InvestPlan investPlanData={props?.pageData?.BottomBanner} />) : null}

                    </Container>
                </div>
                <CommonPopup isOpen={locationPopup} toggle={toggleLocationPopup}>
                    <LocationPopup toggle={toggleLocationPopup} pageUrl="/branch-locator/" />
                </CommonPopup>
            </LandingLayout>
        </>
    );

};

// **Server-side Props for SEO**
export async function getServerSideProps(context) {
    const { location } = context.params;
    let firstParam = location?.[0] ?? "";
    let state = "";
    let city = location?.[1] ?? "";
    let pincode = "";

    // Check if first value is a number (pincode)
    if (!isNaN(firstParam) && firstParam !== "") {
        pincode = firstParam;
    } else {
        state = firstParam;
    }

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
        pincode ? { name: pincode, url: `/branch-locator/${pincode}`, active: true } : null,
    ].filter(Boolean); // Remove null values


    try {
        // Fetch the list of branches (cities and states)
        const branchList = await apiClient('/api/branch-lists?fields[0]=State&fields[1]=Pincode');

        // Fetch the filtered branch list based on state and city
        const filterBranchList = await apiClient(
            `/api/branch-lists?` + (pincode ? `filters[Pincode][$eqi]=${pincode}` : `filters[State][$eqi]=${normalizedState}&filters[City][$eqi]=${normalizedCity}`)
        );

        console.log(filterBranchList)

        // unique array
        const seenStates = new Set();
        const seenPincodes = new Set();

        // Create dropdown options for cities and states
        const stateList = branchList.data.filter(item => {
            if (seenStates.has(item.State)) {
                return false;
            } else {
                seenStates.add(item.State);
                return true;
            }
        }).map(data => ({ value: data.State, label: data.State }));

        const pincodeList = branchList.data.filter(item => {
            if (seenPincodes.has(item.Pincode)) {
                return false;
            } else {
                seenPincodes.add(item.Pincode);
                return true;
            }
        }).map(data => ({ value: data.Pincode, label: data.Pincode }));

        const pageData = await apiClient('/api/branch-list-banners');

        return {
            props: {
                state: normalizedState,
                city: normalizedCity,
                pincode,
                stateUrl: state, // Keep original state for URL
                cityUrl: city,   // Keep original city for URL 
                breadcrumbs: breadcrumbs,
                branchList: filterBranchList?.data ?? [], // Default value if no branches found
                stateList, pincodeList,
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
