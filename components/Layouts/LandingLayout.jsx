import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const LandingLayout = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}

export default LandingLayout