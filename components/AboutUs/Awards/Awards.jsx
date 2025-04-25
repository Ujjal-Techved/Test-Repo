import React from 'react';
import styles from './Awards.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import Slider from 'react-slick'; // React Slick dependency
import 'slick-carousel/slick/slick.css'; // Missing dependency for styling
import 'slick-carousel/slick/slick-theme.css'; // Required for proper styling

const Awards = ({ awardData }) => {

    // Prevent rendering if `awardData` is missing
    if (!awardData?.Awards) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description, ShowMoreLink, AwardsList } = awardData?.Awards;

    // Function to truncate long titles
    const truncateTitle = (text, maxLength = 43) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    // Function to truncate long descriptions
    const truncateDesciption = (text, maxLength = 95) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    // Slick slider settings for responsiveness
    const sliderSettings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        // centerMode: true,  // Ensures the first slide is properly aligned
        // centerPadding: "30px", // Adds padding on the left and right for visibility
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1.1,
                }
            }
        ]
    };

    return (
        <div className={styles.insurance_wrapper + ' types-insurance-wrapper awards pd-t pd-b'}>
            <Container>
                {/* Title and subtitle component */}
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />

                {/* Awards list displayed as a carousel */}
                <Slider {...sliderSettings} className={styles.slider}>
                    {AwardsList?.map((type, index) => (
                        <div key={index} className={styles.types_insurance_cards}>
                            <div className={styles.types_insurance_imgsrc}>
                                <img
                                    src={process.env.NEXT_PUBLIC_APP_API + type?.Image.url}
                                    alt={type.Image.alternativeText} // Ensure alternative text is present for accessibility
                                />
                            </div>
                            <span>{truncateTitle(type?.Title)}</span>
                            <p>{truncateDesciption(type?.Description)}</p>
                        </div>
                    ))}
                </Slider>

                {/* "Show More" link for additional awards */}
                <div className={styles.show_more_tag}>
                    <a href={ShowMoreLink} className='common-right-arrow'>Show More</a>
                </div>
            </Container>
        </div>
    );
};

export default Awards;
