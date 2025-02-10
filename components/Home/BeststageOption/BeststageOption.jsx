import React from 'react';
import Slider from 'react-slick';
import styles from './BeststageOption.module.css';
import { Container } from 'reactstrap';


// Array for Stageoption data
const stageOptionsData = [

    {
        id: 1,
        name: 'Young Professional',
        imgSrc: 'images/home/youngprofessional.png',
        description: 'Just starting their career and exploring financial independence',
        linkhref: '/'
    },
    {
        id: 2,
        name: 'Expert Professional',
        imgSrc: 'images/home/expertprofessional.png',
        description: 'Just starting their career and exploring financial independence',
        linkhref: '/'
    },
    {
        id: 3,
        name: 'Young Parent',
        imgSrc: 'images/home/youngparent.png',
        description: 'Just starting their career and exploring financial independence',
        linkhref: '/'
    },
    {
        id: 4,
        name: 'Teen Parent',
        imgSrc: 'images/home/teenparent.png',
        description: 'Just starting their career and exploring financial independence',
        linkhref: '/'
    },
    {
        id: 5,
        name: 'Retirement',
        imgSrc: 'images/home/retirementold.png',
        description: 'Just starting their career and exploring financial independence',
        linkhref: '/'
    },
    {
        id: 6,
        name: 'Help Me Choose',
        imgSrc: 'images/home/helpmechoose.png',
        description: 'Just starting their career and exploring financial independence',
        linkhref: '/'
    }
];

// Slider settings for stageOptions

const sliderSettings = {
    dots: false,
    arrow: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false 
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false 
            }
        }
    ]
};

const BeststageOption = () => {
    return (
        <div>
            <Container>
                <div className='best-stageoption-wrapper'>
                    <Slider {...sliderSettings}>
                        {stageOptionsData.map((option) => (
                            <div key={option.id} className={styles.best_stageoption_section}>
                                <div className={styles.best_stageoption_card}>
                                    <img className={styles.charct_img} src={option.imgSrc} alt={option.name} />
                                    <div className={styles.best_stageoption_main}>
                                        <a href={option.linkhref} className={styles.protect_plan_linktext}>
                                            <span>{option.name}</span>
                                            <img src="/images/reach-us/arrow-right.svg" alt="arrow" />
                                        </a>
                                        <p>{option.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default BeststageOption;
