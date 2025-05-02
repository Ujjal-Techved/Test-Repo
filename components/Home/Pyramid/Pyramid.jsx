import React from 'react';
import styles from './Pyramid.module.css';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';

const pyramidData = [
    {
        title: "Derivatives, F&O, Swaps.",
        label: "Speculation - The Peak",
        description: "This level is for the bold! At the peak, speculative investments bring high risk and reward—perfect for seasoned investors maximizing returns.",
        position: "right",
    },
    {
        title: "Real Estate, Venture Capital, Diamonds, Art, and Antiques.",
        label: "High Growth",
        description: "Here’s where you aim big. This stage focuses on financial planning for long-term wealth creation through high-return investments with higher risks.",
        position: "left",
    },
    {
        title: "Mutual Funds, ULIPs, Equities, and Commodities like Gold.",
        label: "Growth with Risk",
        description: "Now you're ready to take calculated risks for higher rewards. This stage balances financial planning and stability while growing your wealth with life insurance support.",
        position: "right",
    },
    {
        title: "Fixed Deposits, Bonds, PPF, Endowment Policies, and Postal Savings.",
        label: "Risk-Free Growth",
        description: "Once your financial planning foundation is solid, grow your savings with low-risk life insurance plans which provide steady and reliable, and are built for guaranteed growth.",
        position: "left",
    },
    {
        title: "Life Insurance, Critical Illness, and Disability Coverage.",
        label: "Protection: The Foundation",
        description: "The first step in financial planning is protection, and a life insurance company in India provides the foundation to secure your loved ones.",
        position: "right",
    },
];

const Pyramid = () => {
    return (
        <div className={styles.pyramid_wrapper + ' pd-t pd-b'}>
            <div className='container'>
                <TitleSubtitle
                    title="Build A Solid Financial Future"
                    subtitle="Financial planning is like a pyramid—start with protection, grow with investments, and let one of the best life insurance company in India secure your wealth and legacy."
                />
                <div className={styles.pyramidWrapper}>
                    {pyramidData.map((layer, index) => (
                        <div key={index} className={`${styles.pyramidRow} ${styles[`pyramidRow${index + 1}`]}`}>
                            <div className={`${styles.trapezoid} ${styles[`trapezoid${index + 1}`]}`} >
                                <p>{layer.title}</p>
                                {/* <div className={styles.Pyramid_bottom_line}></div> */}
                            </div>

                            <div className={`${styles.labelBox} ${styles[layer.position]}`}>
                                {/* <div className={layer.position === 'left' ? styles.arrowLeft : styles.arrowRight}></div> */}
                                <div className={styles.connector}>
                                    <div className={styles.line}></div>
                                    <div className={styles.arrowhead}></div>
                                </div>
                                <div className={styles.pyramid_side_content}>
                                    <span>{layer.label}:</span>
                                    <p>{layer.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pyramid;
