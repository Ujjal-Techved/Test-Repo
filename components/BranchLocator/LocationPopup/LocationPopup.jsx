import React from 'react'
import styles from './LocationPopup.module.css'

const LocationPopup = (props) => {
    return (
        <div className={styles.location_popup_wrapper}>
                <img src='/images/branch-locator/location.png'/>
                <div className={styles.location_popup_main}>
                    <span>Enable Location</span>
                    <p>Allow location access to find nearby branches quicker</p>
                    <div className={styles.btn_popups}>
                        <button className='whiteBtn redborder' onClick={props.toggle}>No, Don’t Allow</button>
                        <button className='redBtn trasborder'>Allow Access</button>
                    </div>
                </div>
        </div>
    )
}

export default LocationPopup