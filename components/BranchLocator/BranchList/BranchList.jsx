import React from 'react';
import styles from './BranchList.module.css';

const BranchList = ({ list }) => {
    return (
        <div className={`${styles.BranchListMain} ${list.length < 1 ? styles.overflow_y : ''}`}>
            <p className={styles.listCount}>{list.length} Branches Found</p>

            {list.length > 0 ? (
                list.map((data, index) => (
                    <>
                        <div className={styles.BranchList_section} key={index}>
                            <div className={styles.BranchList_wrap}>
                                <p>{data.branchName}</p>
                                <span>{data.branchAddress}</span>
                            </div>
                            <div className={styles.BranchList_phone}>
                                <img src='/images/branch-locator/call-icon.svg' alt='call' /> {data.phone}
                            </div>
                        </div>
                    </>
                ))
            ) : (
                <div className='d-flex align-items-center justify-content-center'>
                    <img src='/images/branch-locator/no-location.webp' alt='no location' />
                </div>
            )}
        </div>
    );
};

export default BranchList;
