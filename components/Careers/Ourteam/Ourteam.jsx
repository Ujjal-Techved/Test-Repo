import React, { useState } from 'react';
import styles from './Ourteam.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import { Rating } from "react-simple-star-rating";
import Slider from 'react-slick';

const Ourteam = ({ teamMembers }) => {

    // ✅ Prevents rendering if `teamMembers` data is unavailable
    if (!teamMembers) {
        return null;
    }

    // ✅ Destructure API response data for better readability
    const { Title, Description, ReviewCards } = teamMembers?.ReviewSection;

    // ✅ Slider settings for team member reviews
    const settings = {
        dots: false,           // No navigation dots
        infinite: true,        // Enables infinite looping
        speed: 500,           // Transition speed
        slidesToShow: 3.2,    // Number of slides visible at a time
        slidesToScroll: 1,    // Number of slides to scroll per transition
        autoplay: false,      // Disables autoplay
        autoplaySpeed: 3000,  // Auto transition speed (if enabled)
        centerMode: true,     // Ensures the first slide is properly aligned
        centerPadding: "30px", // Adds padding around center slide for better visibility
        responsive: [         // ✅ Responsive settings for different screen sizes
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.5,
                    centerPadding: "20px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3.2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.5,
                    centerPadding: "8px",
                },
            },
        ],
    };

    return (
        <div>
            <Container>
                {/* ✅ Page Title and Subtitle */}
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />

                {/* ✅ Team Member Review Section */}
                <div className={styles.team_member_wrapper}>
                    <Slider {...settings}>
                        {ReviewCards?.map((member) => (
                            <div key={member.id} className={styles.team_slider}>
                                
                                {/* ✅ Team member image */}
                                <img 
                                    src={process.env.NEXT_PUBLIC_APP_API + member?.Image?.url} 
                                    alt={member?.Image?.alternativeText} 
                                />

                                {/* ✅ Review Text */}
                                <p className={styles.team_feedback}>{member?.Review}</p>

                                {/* ✅ Member Name and Star Rating */}
                                <div className={styles.member_name}>
                                    <label>{member?.Name}</label>
                                    <p className="date">
                                        <Rating
                                            initialValue={member?.Rating} // Pre-set rating value
                                            iconsCount={5}                // 5-star rating system
                                            readonly                      // Makes it non-editable
                                            size={16}                      // Star size
                                            allowFraction                  // Allows half stars
                                            fillColor={"rgba(255, 195, 41, 1)"} // Star fill color
                                            emptyColor={"#FFF"}           // Empty star color
                                            SVGstrokeColor={"rgba(255, 195, 41, 1)"} // Star stroke color
                                            SVGstorkeWidth={"2"}          // Star stroke width
                                        />
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default Ourteam;
