import React from 'react';
import styles from './TitleSubtitle.module.css';

const TitleSubtitle = ({ title, subtitle, titleTag = 'h1', leftAligned }) => {
    return (
        <div className={`${styles.titleContainer} ${leftAligned && styles.leftAligned} `}>
            {React.createElement(titleTag, { className: styles.maintitle }, title)}
            <p className={styles.subtitle} dangerouslySetInnerHTML={{__html:subtitle}}></p>
        </div>
    );
};

export default TitleSubtitle;
