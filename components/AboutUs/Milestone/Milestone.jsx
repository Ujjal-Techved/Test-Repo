import React, { useRef, useState } from 'react';
import Styles from './Milestone.module.css';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import { Col, Container, Row } from 'reactstrap';
import Slider from 'react-slick';

const Milestone = ({ milestoneList }) => {

    // Prevent rendering if `milestoneList` is missing
    if (!milestoneList?.Milestone) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description, MilestoneList } = milestoneList?.Milestone;

    // State and refs for controlling both sliders
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const mainSliderRef = useRef(null);
    const thumbSliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0); // Track the currently active slide

    // Main Slider Settings
    const mainSliderSettings = {
        asNavFor: nav2, // Link with the thumbnail slider
        ref: (slider) => {
            setNav1(slider);
            mainSliderRef.current = slider; // Store reference
        },
        dots: false, // Hide navigation dots
        infinite: false, // Disable infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Move one slide per scroll
        autoplay: false, // Disable autoplay
        beforeChange: (oldIndex, newIndex) => {
            setActiveIndex(newIndex); // Update active index when slide changes
        },
    };

    // Thumbnail Slider Settings
    const thumbSliderSettings = {
        asNavFor: nav1, // Link with the main slider
        ref: (slider) => {
            setNav2(slider);
            thumbSliderRef.current = slider; // Store reference
        },
        slidesToShow: 6, // Show six thumbnails at a time
        draggable: false, // Disable drag scrolling
        focusOnSelect: true, // Allow clicking a thumbnail to navigate
        dots: false, // Hide navigation dots
        arrows: false, // Hide navigation arrows
        infinite: false, // Disable infinite scrolling
        responsive: [
            {
                breakpoint: 992, // Below 992px
                settings: {
                    slidesToShow: 3, // Show 3 thumbnails instead of 6
                },
            },
        ],
    };

    return (
        <div className='social-res-wrapper pd-t pd-b'>
            <Container>
                {/* Title and subtitle section */}
                <TitleSubtitle
                    title={Title}
                    titleTag='h3'
                    subtitle={Description}
                />

                {/* Main milestone slider */}
                <Slider {...mainSliderSettings}>
                    {MilestoneList?.map((milestone, index) => (
                        <div key={index}>
                            <div className={Styles.mainRow}>
                                {/* Display milestone year */}
                                <div className={Styles.year}>{milestone?.Year}</div>

                                {/* Display milestone image */}
                                {milestone?.Image?.url && (
                                    <img 
                                        src={process.env.NEXT_PUBLIC_APP_API + milestone.Image.url} 
                                        alt={milestone.Image.alternativeText || 'Milestone Image'} 
                                        className={Styles.picture} 
                                    />
                                )}

                                {/* Display milestone description */}
                                <div className={Styles.description}>{milestone?.Description}</div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container>

            {/* Thumbnail slider (Timeline) */}
            <div>
                <Slider {...thumbSliderSettings}>
                    {MilestoneList?.map((milestone, index) => (
                        <div 
                            className={`${Styles.timeline}  
                                        ${activeIndex === index ? Styles.active : ""} 
                                        ${activeIndex > index ? Styles.complete : ""}`} 
                            key={index}
                        >
                            {/* Display year in timeline */}
                            <div className={Styles.timelineYear}>{milestone?.Year}</div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Milestone;
