import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import React, { useState } from 'react'

const BranchLocator = () => {
    const [breacrumbValues] = useState([
        { name: "Home", url: "/" },
        { name: "Branch Locator", url: "/branch-locator", active: true },
    ]);
    return (
        <div>
            <Breadcrumbs values={breacrumbValues}/>
            BranchLocator
        </div>
    )
}

export default BranchLocator