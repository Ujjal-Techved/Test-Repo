import React from 'react';
import styles from './BranchList.module.css';

const BranchList = ({ list }) => {
    return (
        <div className={styles.BranchListMain}>
            <p className={styles.listCount}>{list.length} Branches Found</p>
            {
                list.map((data, index) => (
                    <div key={index}>
                        <div>{data.branchName}</div>
                        <div>{data.branchAddress}</div>
                        <div><img src='/images/branch-locator/call-icon.svg' alt='call' /> {data.phone}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default BranchList