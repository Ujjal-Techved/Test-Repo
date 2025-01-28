import React from 'react'
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ((props) => {
  return (
    <div className={styles.breadcrumbs_wrapper}>
      <a className={styles.txt} href="/">
        <img src='/images/breadcrumb/home.svg' className={styles.homeIcon} alt='home' />
        <span>&#10095;</span>
      </a>
      {
        props.values.map((data, index) => {
          return (
            <div key={index}>
              <a className={`${styles.txt} ${data.active ? styles.active : ''}`} href={data.url}>
                {data.name} {props.values.length !== index + 1 ? (
                  <span>&#10095;</span>
                ) : null}
              </a>
            </div>
          )
        })
      }
    </div>
  )
})

export default Breadcrumbs