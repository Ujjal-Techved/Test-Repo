// Import required dependencies
import React from 'react';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'; // Import TitleSubtitle component for section title
import { Container } from 'reactstrap'; // Import Bootstrap Container for layout
import Slider from 'react-slick'; // Import React Slick for carousel functionality
import styles from './TypesofInsurance.module.css'; // Import CSS module for styling
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; // Import Slick carousel styles

// Functional component to display different types of insurance
const TypesofInsurance = ({ insurancetypesData }) => {

    // Prevent rendering if `insurancetypesData` is missing to avoid errors
    if (!insurancetypesData) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description, CardList } = insurancetypesData?.TypeInsurance;
    
    // Slider settings for the carousel
    const sliderSettings = {
        arrows: false, // Hide navigation arrows for a cleaner UI
        dots: false,   // Hide pagination dots
        infinite: false, // Prevent infinite looping for better UX
        speed: 500,  // Set slide transition speed to 500ms
        slidesToShow: 4.2, // Display 4.2 slides at a time on large screens
        slidesToScroll: 1, // Scroll 1 slide at a time
        autoplay: false, // Disable autoplay to avoid distraction
        autoplaySpeed: 3000, // Set autoplay interval (only if enabled)
        responsive: [
            {
                breakpoint: 992, // Medium screens (below 992px)
                settings: {
                    slidesToShow: 2, // Show 2 slides
                }
            },
            {
                breakpoint: 768, // Small screens (below 768px)
                settings: {
                    slidesToShow: 2, // Show 2 slides
                }
            },
            {
                breakpoint: 520, // Mobile screens (below 520px)
                settings: {
                    slidesToShow: 1.2, // Show 1.2 slides
                }
            }
        ]
    };

    return (
        <div className="types-insurance-wrapper pd-t pd-b"> {/* Wrapper div for styling */}
            <Container> {/* Bootstrap container for responsive layout */}
                
                {/* Render section title and description using TitleSubtitle component */}
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />

                {/* Slider component to display insurance types in a carousel */}
                <Slider {...sliderSettings} className={styles.slider}>
                    
                    {/* Map through `CardList` and render each insurance type as a slide */}
                    {CardList?.map((type, index) => (
                        <div key={index} className={styles.types_insurance_cards}>
                            
                            {/* Display the text and description of the insurance type */}
                            <span>{type?.Text}</span>
                            <p>{type?.Description}</p>
                            
                            {/* Container for insurance type image and link */}
                            <div className={styles.types_insurance_imgsrc}>
                                
                                {/* Display insurance type image */}
                                <img 
                                    src={process.env.NEXT_PUBLIC_APP_API + type?.Image?.url} 
                                    alt={type?.Image?.alternativeText || "Insurance Type Image"} 
                                />

                                {/* Link to view plans for the insurance type */}
                                <a href={type?.Url}>View Plans</a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    );
};

export default TypesofInsurance; // Export the component for use in other parts of the application
