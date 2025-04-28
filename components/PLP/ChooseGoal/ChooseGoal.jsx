import React from 'react';
import styles from './ChooseGoal.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import Slider from 'react-slick';

const ChooseGoal = ({ choosegoalData }) => {

    // Prevent rendering if `choosegoalData` is missing
    if (!choosegoalData?.ChooseGoal) {
        return null;
    }

    // Destructure API response data for cleaner code
    const { Title, Description, CardList } = choosegoalData?.ChooseGoal;

    // Slider settings for stageOptions (commented out for now)
    // const sliderSettings = {
    //     dots: false,
    //     arrow: false,
    //     infinite: false,
    //     autoplay: false,
    //     speed: 500,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: "unslick"
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: "unslick"
    //         }
    //     ]
    // };

    return (
        <div className={styles.best_stageoption_parent + ' pd-t pd-b'}>
            <Container>
                {/* Title and Subtitle component */}
                <TitleSubtitle
                    title={Title}
                    subtitle={Description}
                />
                {/* Wrapper for the card list */}
                <div className='best-stageoption-wrapper'>
                    <div className={styles.stageOption_centermode}>
                        {/* Map through the CardList and render each card */}
                        {CardList?.map((option) => (
                            <div key={option.id} className={styles.best_stageoption_section}>
                                <div className={styles.best_stageoption_card}>
                                    {/* Image for the card */}
                                    <img
                                        className={styles.charct_img}
                                        src={process.env.NEXT_PUBLIC_APP_API + option?.Image?.url}
                                        alt={option?.Image?.alternativeText}
                                    />
                                    {/* Main content of the card */}
                                    <div className={styles.best_stageoption_main}>
                                        {/* Link with text and arrow icon */}
                                        <a href={option.linkhref} className={styles.protect_plan_linktext}>
                                            <span>{option?.Text}</span>
                                            <img src="/images/reach-us/arrow-right.svg" alt="arrow" />
                                        </a>
                                        {/* Description text */}
                                        <p>{option?.Description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ChooseGoal;