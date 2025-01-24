import React from 'react';
import styles from './TitleSubtitle.module.css';

const TitleSubtitle = ({ title, subtitle, titleTag = 'h1' }) => {
    return (
        <div className={styles.titleContainer}>
            {React.createElement(titleTag, { className: styles.maintitle }, title)}
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    );
};

export default TitleSubtitle;
