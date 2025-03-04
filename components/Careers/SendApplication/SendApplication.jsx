import React from 'react';
import styles from './SendApplication.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';

const SendApplication = ({ sendApplicationData }) => {

    // Prevent rendering if `sendApplicationData` is missing or undefined
    if (!sendApplicationData?.SendApplication) {
        return null;
    }

    // Destructure API response data for cleaner code and easier access
    const { Title, Description, LinkText, LinkUrl } = sendApplicationData?.SendApplication;

    // Function to handle button click and redirect to LinkUrl
    const handleRedirect = () => {
        if (LinkUrl) {
            window.location.href = LinkUrl; // Redirect to the provided URL
        }
    };

    return (
        <div>
            <Container>
                <div className={styles.application_wrapper}>
                    
                    {/* Section Title and Subtitle */}
                    <TitleSubtitle
                        title={Title}
                        subtitle={Description}
                        extraClass="whiteColor"
                    />

                    {/* Button to redirect to LinkUrl */}
                    <button className="whiteBtn w-sm-100" onClick={handleRedirect}>
                        {LinkText}
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default SendApplication;
