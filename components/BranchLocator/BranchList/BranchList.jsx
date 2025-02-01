import React from 'react';
import styles from './BranchList.module.css';

/**
 * BranchList Component
 * 
 * This component displays a list of branches, including their names, addresses, and phone numbers.
 * If no branches are found, it shows a "no location" image.
 *
 * @param {Array} list - The array of branch data objects.
 * @returns {JSX.Element} - The rendered component.
 */
const BranchList = ({ list }) => {
    return (
        <div className={`${styles.BranchListMain} ${list.length < 1 ? styles.overflow_y : ''}`}>
            {/* Display the number of branches found */}
            <p className={styles.listCount}>{list.length} Branches Found</p>

            {/* Check if there are branches in the list */}
            {list.length > 0 ? (
                list.map((data, index) => (
                    <div className={styles.BranchList_section} key={index}>
                        {/* Branch Name and Address */}
                        <div className={styles.BranchList_wrap}>
                            <p>{data?.Branch_Name}</p>
                            <span>{data?.Branch_Address}</span>
                        </div>

                        {/* Phone Number with Call Icon */}
                        <div className={styles.BranchList_phone}>
                            <img src='/images/branch-locator/call-icon.svg' alt='call' /> 
                            {data?.Phone_Number}
                        </div>
                    </div>
                ))
            ) : (
                // Display a "No Location Found" image if the list is empty
                <div className='d-flex align-items-center justify-content-center'>
                    <img src='/images/branch-locator/no-location.webp' alt='no location' />
                </div>
            )}
        </div>
    );
};

export default BranchList;
