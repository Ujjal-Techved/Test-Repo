import React from 'react'
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ((props) => {
  return (
    <div className={styles.breadcrumbs_wrapper}>
      {
        props.values.map((data, index) => {
          return (
            <div key={index}>
              <a className={`${styles.txt} ${data.active ? styles.active : ''}`} href={data.url}>
                {data.name} {props.values.length !== index + 1 ? (
                  <span className='mx-2'>&#10095;</span>
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