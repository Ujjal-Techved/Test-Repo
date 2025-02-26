import React, { useState, useEffect } from 'react';
import styles from './CareerBanner.module.css';
import { Col, Container, Row } from 'reactstrap';
import Select from 'react-select';

const CareerBanner = ({ bannerData }) => {
    // State for selected job role from dropdown
    const [selectedOption, setSelectedOption] = useState(null);

    // State for job roles fetched from API
    const [jobRoles, setJobRoles] = useState([]);

    // State for banner statistics fetched from API
    const [bannerStats, setBannerStats] = useState([]);

    
    // Prevent rendering if `bannerData` is missing
    if (!bannerData) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { PageTitle, PageDesc,  } = bannerData;

    // Effect to update states when bannerData changes
    useEffect(() => {
        if (bannerData) {
            // Extract job roles and map them into the format required by react-select
            if (bannerData?.JobRoleList) {
                setJobRoles(
                    bannerData.JobRoleList.map(role => ({
                        label: role.Role, // Display text in dropdown
                        value: role.Role  // Value stored in state
                    }))
                );
            }

            // Extract banner statistics data
            if (bannerData?.BannerStats) {
                setBannerStats(bannerData.BannerStats);
            }
        }
    }, [bannerData]);

    // Function to handle "View Openings" button click
    const handleSubmit = () => {
        // If a job role is selected, append it to the URL
        if (selectedOption) {
            const jobRole = encodeURIComponent(selectedOption.value); // Encode for URL safety
            const url = `https://careers.fglife.in/search/?createNewAlert=false&q=&locationsearch=&optionsFacetsDD_title=${jobRole}&optionsFacetsDD_dept=&optionsFacetsDD_location=&optionsFacetsDD_city=&optionsFacetsDD_state=`;
            window.location.href = url; // Redirect to the constructed URL
        } else {
            // Redirect to the general job listing page if no job role is selected
            window.location.href = "https://careers.fglife.in/search/?createNewAlert=false&q=&locationsearch=&optionsFacetsDD_title=&optionsFacetsDD_dept=&optionsFacetsDD_location=&optionsFacetsDD_city=&optionsFacetsDD_state=";
        }
    };

    return (
        <div className={styles.bannerMain}>
            <Container>
                <Row>
                    {/* Left Section: Banner Content and Job Filter */}
                    <Col lg="6">
                        <p className={styles.bannerDesc}>{PageDesc}</p>
                        <h1 className={styles.bannerTitle}>{PageTitle}</h1>
                        <p className={styles.bannerDesc2}>
                            An Individual, Non-Linked, Non-Participating (without profits), Savings, Life Insurance Plan.
                        </p>

                        {/* Job Role Dropdown and Button */}
                        <div className={styles.filterComponent}>
                            <Row className={styles.row}>
                                {/* Dropdown for Selecting Job Role */}
                                <Col lg="7" className={styles.col + ' dropdown-arrow'}>
                                    <Select
                                        options={jobRoles} // List of job roles
                                        value={selectedOption} // Selected job role
                                        onChange={setSelectedOption} // Update selected job role
                                        placeholder="Choose Job Role"
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} // Remove default dropdown arrow
                                    />
                                </Col>

                                {/* "View Openings" Button */}
                                <Col lg="5" className={styles.col}>
                                    <button className="redBtn w-100" onClick={handleSubmit}>
                                        View Openings
                                    </button>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    {/* Right Section: Banner Image and Stats */}
                    <Col lg="6">
                        <div className={styles.statsContainer}>
                            {/* Background Banner Image */}
                            <img src='/images/career/banner-fg.png' alt='banner' className={styles.bannerImg} />

                            {/* Banner Statistics (Dynamic Data) */}
                            {bannerStats?.map((data, index) => (
                                <div key={index} className={styles.statsItem}>
                                    <img 
                                        src={process.env.NEXT_PUBLIC_APP_API + data.Image.url} 
                                        alt="Banner Image" 
                                    />
                                    <p>{data.Title}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CareerBanner;
