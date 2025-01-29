import React from 'react';
import styles from './Joinculture.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';

const joincultureData = [
    {
        icon: '/images/careers/inclusion.webp',
        title: 'Inclusion',
        description: 'Everyone feels welcome and valued'
    },
    {
        icon: '/images/careers/encouragement.webp',
        title: 'Encouragement',
        description: 'Grow your skills and career'
    },
    {
        icon: '/images/careers/flexibility.webp',
        title: 'Flexibility',
        description: 'Explore roles beyond your expertise'
    },
    {
        icon: '/images/careers/work-life-balance.webp',
        title: 'Work-life Balance',
        description: 'Collaboration and support come naturally'
    },
    {
        icon: '/images/careers/flexibility.webp',
        title: 'Fostering Teamwork',
        description: 'Balance professional and personal priorities'
    }
];

const Joinculture = () => {
    return (
        <div>
            <Container>
                <TitleSubtitle
                    title={"Join a Culture of Growth"}
                    subtitle={"Empowering Your Growth, Well-Being, and Success Every Step of the Way"}
                />
                {/* Joinculture card data map */}
                <div className={styles.joinculture_wrapper}>
                    {joincultureData.map((item, index) => (
                        <div key={index} className={styles.joinculture_cards}>
                            <span>
                                <img src={item.icon} alt={item.title} /> {item.title}
                            </span>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
                {/* joinculture slick slider data */}
                
            </Container>
        </div>
    );
};

export default Joinculture;
