import React from 'react'
import Navbar from '../Common/Navbar/Navbar'
import Footer from '../Common/Footer/Footer'

const LandingLayout = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
            {/* <Footer /> */}
        </>
    )
}

export default LandingLayout