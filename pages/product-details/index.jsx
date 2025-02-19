import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs'
import LandingLayout from '@/components/Layouts/LandingLayout'
import React from 'react'
import { Container } from 'reactstrap'
import styles from './ProductDetails.module.css'
import PdpBanner from '@/components/PDP/PdpBanner/PdpBanner'

const index = () => {

    // Create the breadcrumbs array
    const breadcrumbs = [
        { name: "Long Term Income Plan", url: "/product-details", active: true },
    ]

    return (
        <LandingLayout>
            <div>
                <Container>
                    <Breadcrumbs values={breadcrumbs} />
                </Container>
                <PdpBanner/>
            </div>
        </LandingLayout>
    )
}

export default index