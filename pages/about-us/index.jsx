import React from 'react'
import styles from './Aboutus.module.css'
import LandingLayout from '@/components/Layouts/LandingLayout'
import { Container } from 'reactstrap'
import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs'
import LegacyTrust from '@/components/AboutUs/LegacyTrust/LegacyTrust'
import OurJourney from '@/components/AboutUs/OurJourney/OurJourney'
import PartnerFuturegroup from '@/components/AboutUs/PartnerFuturegroup/PartnerFuturegroup'
import MediaCenter from '@/components/AboutUs/MediaCenter/MediaCenter'
import ReportsDiscloser from '@/components/AboutUs/ReportsDisclousures/ReportsDiscloser'
import Awards from '@/components/AboutUs/Awards/Awards'

const Aboutus = () => {


    // Create the breadcrumbs array based on state and city
    const breadcrumbs = [
        { name: "About Us", url: "/about-us", active: true },
    ]

    // Array for FGLI life Insurance
    const insuranceData = [
        {
            imgSrc: 'images/home/branches.png',
            value: '1366',
            text: 'Self & Partner Branches',
        },
        {
            imgSrc: 'images/home/livecovered.png',
            value: '1.6 Mn+',
            text: 'Lives Covered Since Inception',
        },
        {
            imgSrc: 'images/home/asset.png',
            value: '₹79.58 Bn',
            text: 'Worth of Asset Under Management',
        },
        {
            imgSrc: 'images/home/claims.png',
            value: '96.08%',
            text: 'Claims Settlement Ratio',
        }
    ];

    // Array of Reports and Disclosure Data

    const reportsData = [
        { 
            title: "Annual Reports", 
            image: "/images/about-us/img1.png",
            link: "/" 
        },
        { 
            title: "Bonus Declaration", 
            image: "/images/about-us/img2.png",
            link: "/"  
        },
        { 
            title: "Whistle Blowing Channels", 
            image: "/images/about-us/img3.png",
            link: "/"  
        },
        { 
            title: "Whistle Blower Policy", 
            image: "/images/about-us/img4.png" 
        },
        { 
            title: "Public Disclosures", 
            image: "/images/about-us/img5.png",
            link: "/"  
        },
        { 
            title: "Anti Fraud Policy", 
            image: "/images/about-us/img6.png",
            link: "/"  
        },
        { 
            title: "Stewardship Policy", 
            image: "/images/about-us/img7.png",
            link: "/"  
        },
        { 
            title: "New Group Fund Interest Rate", 
            image: "/images/about-us/img8.png",
            link: "/"  
        },
        { 
            title: "Extra-ordinary General Meeting Notice", 
            image: "/images/about-us/img9.png",
            link: "/"  
        },
        { 
            title: "Annual General Meeting Notice", 
            image: "/images/about-us/img10.png",
            link: "/"  
        }
    ];

     // Array Types of Award and Recognisation

     const awardData = [
        {
            title: "Awarded the Fastest Growing Insurance Company of 2024 by ASSOCHAM",
            description: "Future Generali India Life Insurance has been awarded the Fastest Growing Insurance Company of 2024 at the 6th edition of ASSOCHAM Insurance Leaders Meet 2024 & Excellence Awards.",
            image: "images/about-us/award.png",
        },
        {
            title: "Awarded the Fastest Growing Insurance Company of 2024 by ASSOCHAM",
            description: "Future Generali India Life Insurance has been awarded the Fastest Growing Insurance Company of 2024 at the 6th edition of ASSOCHAM Insurance Leaders Meet 2024 & Excellence Awards.",
            image: "images/about-us/award.png",
        },
        {
            title: "Awarded the Fastest Growing Insurance Company of 2024 by ASSOCHAM",
            description: "Future Generali India Life Insurance has been awarded the Fastest Growing Insurance Company of 2024 at the 6th edition of ASSOCHAM Insurance Leaders Meet 2024 & Excellence Awards.",
            image: "images/about-us/award.png",
        },
        {
            title: "Awarded the Fastest Growing Insurance Company of 2024 by ASSOCHAM",
            description: "Future Generali India Life Insurance has been awarded the Fastest Growing Insurance Company of 2024 at the 6th edition of ASSOCHAM Insurance Leaders Meet 2024 & Excellence Awards.",
            image: "images/about-us/award.png",
        },
    ];

      // Array of Media Center data
      const mediacenterData = [
        {
            title: 'Press Releases',
            subtitle: 'For Our Latest Press Releases',
            imgSrc: 'images/home/exploreplans.png',
            LinkText: 'Know More',
            Link: '/',

        },
        {
            title: 'Press Coverage',
            subtitle: 'For Our Latest Press Coverage',
            imgSrc: 'images/home/ConsultanAdvisor.png',
            LinkText: 'Know More',
            Link: '/',

        }

    ];


    return (
        <LandingLayout>
            <div className={styles.contactWrapper}>
                <Container>
                    <Breadcrumbs values={breadcrumbs} />
                </Container>
                <LegacyTrust/>
                <OurJourney insuranceData={insuranceData}/>
                <PartnerFuturegroup/>
                <ReportsDiscloser reportsData={reportsData}/>
                <Awards awardData={awardData}/>
                <MediaCenter mediacenterData={mediacenterData}/>
            </div>
        </LandingLayout>
    )
}

export default Aboutus