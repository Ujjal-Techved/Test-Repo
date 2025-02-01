import React from 'react';
import styles from './Breadcrumbs.module.css';

/**
 * Breadcrumbs Component
 * 
 * This component renders a breadcrumb navigation bar, displaying the navigation path.
 * It dynamically generates breadcrumb links based on the `props.values` array.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.values - The array of breadcrumb items, each containing:
 *        - {string} name - The display name of the breadcrumb.
 *        - {string} url - The link for navigation.
 *        - {boolean} active - Whether the breadcrumb is currently active.
 * @returns {JSX.Element} - The rendered breadcrumb navigation.
 */
const Breadcrumbs = ((props) => {
  return (
    <div className={styles.breadcrumbs_wrapper}>
      {/* Home Link */}
      <a className={styles.txt} href="/">
        <img src='/images/breadcrumb/home.svg' className={styles.homeIcon} alt='home' />
        <span>&#10095;</span> {/* Arrow separator */}
      </a>

      {/* Loop through breadcrumb values to create navigation links */}
      {
        props?.values?.map((data, index) => {
          return (
            <div key={index}>
              <a 
                className={`${styles.txt} ${data.active ? styles.active : ''}`} 
                href={data.url}
              >
                {data.name} 
                {/* Add a separator (›) unless it's the last item */}
                {props.values.length !== index + 1 ? (
                  <span>&#10095;</span>
                ) : null}
              </a>
            </div>
          );
        })
      }
    </div>
  );
});

export default Breadcrumbs;
