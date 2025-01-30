import React, { useState } from 'react';
import styles from './Ourteam.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import { Rating } from "react-simple-star-rating";
import Slider from 'react-slick';

const Ourteam = ({ teamMembers }) => {

    // Team member slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.2, // Changed from 3.2 to 3
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: true,  // Ensures the first slide is properly aligned
        centerPadding: "30px", // Adds padding on the left and right for visibility
        responsive: [
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
                <TitleSubtitle
                    title={"What Our Team Says"}
                    subtitle={"Real stories from our team, sharing how Future Generali fosters growth, innovation, and support"}
                />
                <div className={styles.team_member_wrapper}>
                    <Slider {...settings}>
                        {teamMembers.map((member) => (
                            <div key={member.id} className={styles.team_slider}>
                                <img src={member.image} alt={member.name} />
                                <p className={styles.team_feedback}>{member.feedback}</p>
                                <div className={styles.member_name}>
                                    <label>{member.name}</label>
                                    <p className="date">
                                        <Rating
                                            initialValue={member.rating}
                                            iconsCount={5}
                                            readonly
                                            size={16}
                                            allowFraction
                                            fillColor={"rgba(255, 195, 41, 1)"}
                                            emptyColor={"#FFF"}
                                            SVGstrokeColor={"rgba(255, 195, 41, 1)"}
                                            SVGstorkeWidth={"2"}
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
