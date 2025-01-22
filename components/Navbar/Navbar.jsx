import React from 'react'
import styles from './Navbar.module.css'
import { Button, Container } from 'reactstrap'

const Navbar = () => {
  return (
    <div>
      {/* Header for dekstop view */}
      <Container className={styles.mainContainer}>
        <div className={styles.main_header}>

          <Button className= {styles.user_btn}>
            <img src='../../images/header/toggler.svg' alt='Menu'></img>
          </Button>
         
            <a href='/' className='logo'>
              <img src='../../images/header/fgli-logo.svg' alt='FGLI'></img>
            </a>
     
          <div className={styles.header_menu}>
              <a>Term Insurance</a>
              <a>Investment Plans</a>
              <a>Learn</a>
              <a>Support</a>
          </div>
          <div className={styles.header_userdetail}>
                <a className={styles.commonlink_btn}>Pay Premium</a>
                <Button className= {styles.user_btn}>
                  <img src='../../images/header/user-icon.svg' alt='User'></img>
                </Button>
          </div>
        </div>
      </Container>

      {/* Header for Mobile view */}
    </div>
  )
}

export default Navbar