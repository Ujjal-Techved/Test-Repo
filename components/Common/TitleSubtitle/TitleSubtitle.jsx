import React from 'react';
import styles from './TitleSubtitle.module.css';

const TitleSubtitle = ({ title, subtitle, titleTag = 'h1', extraClass }) => {

    // Split the passed `extraClass` prop into an array and map to corresponding `styles` keys
    const extraClasses = extraClass
        ?.split(' ')
        .map((className) => styles[className] || className) // Use `styles.className` if it exists, else fallback to the original
        .join(' ');

    return (
        <div className={`${styles.titleContainer} ${extraClasses}`}>
            {React.createElement(titleTag, { className: styles.maintitle }, title)}
            <p className={styles.subtitle} dangerouslySetInnerHTML={{ __html: subtitle }}></p>
        </div>
    );
};

export default TitleSubtitle;
