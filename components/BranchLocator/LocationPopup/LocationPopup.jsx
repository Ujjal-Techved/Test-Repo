import React, { useState } from 'react'
import styles from './LocationPopup.module.css'
import { useRouter } from 'next/router'
import axios from 'axios';

const LocationPopup = (props) => {

    const router = useRouter();
    const [location, setLocation] = useState(null);

    const requestLocation = () => {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
    
              // Make a request to the Nominatim API to get city name
              const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&zoom=10&addressdetails=1`;
    
              const response = await axios.get(apiUrl);
              const resCity = response.data.address.city || response.data.address.village;
              const resState = response.data.address.state;
              // console.log(response,"response==>");
              if (resCity !== null || resCity !== "null" || resCity !== undefined || resCity !== "undefined" || resCity !== "") {
                  window.location.href=props.pageUrl + resState.replace(/\s+/g, '-').toLowerCase() + "/" + resCity.replace(/\s+/g, '-').toLowerCase();
              }
              props.toggle();
            },
            (error) => {
              console.error('Error getting geolocation:', error);
              props.toggle();
            }
          );
        }
      };

    return (
        <div className={styles.location_popup_wrapper}>
                <img src='/images/branch-locator/location.png'/>
                <div className={styles.location_popup_main}>
                    <span>Enable Location</span>
                    <p>Allow location access to find nearby branches quicker</p>
                    <div className={styles.btn_popups}>
                        <button className='whiteBtn redborder' onClick={props.toggle}>No, Don’t Allow</button>
                        <button className='redBtn trasborder' onClick={requestLocation}>Allow Access</button>
                    </div>
                </div>
        </div>
    )
}

export default LocationPopup