import LandingLayout from '@/components/Layouts/LandingLayout';
import React from 'react';
import Styles from './ProductLanding.module.css'
import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs';
import { Container } from 'reactstrap';
import ComparePlan from '@/components/PLP/ComparePlan/ComparePlan';
const index = () => {

    // Create the breadcrumbs array
    const breadcrumbs = [
        { name: "Product Landing", url: "/product-landing", active: true },
    ]

    return (
        <LandingLayout>
            <div>
                <Container>
                    <Breadcrumbs values={breadcrumbs} />
                </Container>
                <ComparePlan/>

            </div>
        </LandingLayout>
    )
}

export default index