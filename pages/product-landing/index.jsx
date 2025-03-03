import LandingLayout from '@/components/Layouts/LandingLayout';
import React from 'react';
import Styles from './ProductLanding.module.css'
import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs';
import { Container } from 'reactstrap';
import PlpBanner from '@/components/PLP/PlpBanner/PlpBanner';
const index = () => {

    // Create the breadcrumbs array
    const breadcrumbs = [
        { name: "Life Insurance", url: "/product-landing", active: true },
    ]

    return (
        <LandingLayout>
            <div>
                <Container>
                    <Breadcrumbs values={breadcrumbs} />
                </Container>
                <PlpBanner/>
            </div>
        </LandingLayout>
    )
}

export default index