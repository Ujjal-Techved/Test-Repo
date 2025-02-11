import React from 'react'
import styles from './ChooseGoal.module.css'
import { Container } from 'reactstrap'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'
import Slider from 'react-slick'

const ChooseGoal = ({ choosegoalData }) => {


    // Slider settings for stageOptions

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
        <div className={styles.best_stageoption_parent}>
            <Container>
                <TitleSubtitle
                    title={"Choose your goal and calculate your path"}
                    subtitle={"Choose your goal and calculate your path"}
                />
                <div className='best-stageoption-wrapper no-slickinit'>
                        {choosegoalData.map((option) => (
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
                
                </div>
            </Container>
        </div>
    )
}

export default ChooseGoal