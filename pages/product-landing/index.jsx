import LandingLayout from '@/components/Layouts/LandingLayout';
import React from 'react';
import Styles from './ProductLanding.module.css'
import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs';
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

            </div>
        </LandingLayout>
    )
}

export default index