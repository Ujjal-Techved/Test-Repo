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
import SocialResponsibility from '@/components/AboutUs/SocialResponsibility/SocialResponsibility'
import Leaders from '@/components/AboutUs/Leaders/Leaders'
import Milestone from '@/components/AboutUs/Milestone/Milestone'

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

    const milestoneList = [
        {
            id: 22,
            Year: "1990",
            Description: "We value our people, encourage diversity and invest in continuous learning and growth by creating a transparent, cohesive and accessible working environment. Developing our people will ensure our Company's long-term future.",
            Image: {
                id: 122,
                documentId: "shdulre53t948u9544ixc14d",
                url: "/uploads/Image_9910c7b9a9.png",
                alternativeText: null,
                caption: null,
                name: "Image.png"
            }
        },
        {
            id: 23,
            Year: "1995",
            Description: "We value our people, encourage diversity and invest in continuous learning and growth by creating a transparent, cohesive and accessible working environment. Developing our people will ensure our Company's long-term future.",
            Image: {
                id: 122,
                documentId: "shdulre53t948u9544ixc14d",
                url: "/uploads/Image_9910c7b9a9.png",
                alternativeText: null,
                caption: null,
                name: "Image.png"
            }
        },
        {
            id: 24,
            Year: "2000",
            Description: "We value our people, encourage diversity and invest in continuous learning and growth by creating a transparent, cohesive and accessible working environment. Developing our people will ensure our Company's long-term future.",
            Image: {
                id: 122,
                documentId: "shdulre53t948u9544ixc14d",
                url: "/uploads/Image_9910c7b9a9.png",
                alternativeText: null,
                caption: null,
                name: "Image.png"
            }
        },
        {
            id: 25,
            Year: "2005",
            Description: "We value our people, encourage diversity and invest in continuous learning and growth by creating a transparent, cohesive and accessible working environment. Developing our people will ensure our Company's long-term future.",
            Image: {
                id: 122,
                documentId: "shdulre53t948u9544ixc14d",
                url: "/uploads/Image_9910c7b9a9.png",
                alternativeText: null,
                caption: null,
                name: "Image.png"
            }
        },
        {
            id: 26,
            Year: "2010",
            Description: "We value our people, encourage diversity and invest in continuous learning and growth by creating a transparent, cohesive and accessible working environment. Developing our people will ensure our Company's long-term future.",
            Image: {
                id: 122,
                documentId: "shdulre53t948u9544ixc14d",
                url: "/uploads/Image_9910c7b9a9.png",
                alternativeText: null,
                caption: null,
                name: "Image.png"
            }
        },
        {
            id: 27,
            Year: "2015",
            Description: "We value our people, encourage diversity and invest in continuous learning and growth by creating a transparent, cohesive and accessible working environment. Developing our people will ensure our Company's long-term future.",
            Image: {
                id: 122,
                documentId: "shdulre53t948u9544ixc14d",
                url: "/uploads/Image_9910c7b9a9.png",
                alternativeText: null,
                caption: null,
                name: "Image.png"
            }
        },
        {
            id: 28,
            Year: "2020",
            Description: "We value our people, encourage diversity and invest in continuous learning and growth by creating a transparent, cohesive and accessible working environment. Developing our people will ensure our Company's long-term future.",
            Image: {
                id: 122,
                documentId: "shdulre53t948u9544ixc14d",
                url: "/uploads/Image_9910c7b9a9.png",
                alternativeText: null,
                caption: null,
                name: "Image.png"
            }
        },
        {
            id: 29,
            Year: "2025",
            Description: "We value our people, encourage diversity and invest in continuous learning and growth by creating a transparent, cohesive and accessible working environment. Developing our people will ensure our Company's long-term future.",
            Image: {
                id: 122,
                documentId: "shdulre53t948u9544ixc14d",
                url: "/uploads/Image_9910c7b9a9.png",
                alternativeText: null,
                caption: null,
                name: "Image.png"
            }
        },
        {
            id: 30,
            Year: "2030",
            Description: "We value our people, encourage diversity and invest in continuous learning and growth by creating a transparent, cohesive and accessible working environment. Developing our people will ensure our Company's long-term future.",
            Image: {
                id: 122,
                documentId: "shdulre53t948u9544ixc14d",
                url: "/uploads/Image_9910c7b9a9.png",
                alternativeText: null,
                caption: null,
                name: "Image.png"
            }
        }
    ]

    return (
        <LandingLayout>
            <div className={styles.contactWrapper}>
                <Container>
                    <Breadcrumbs values={breadcrumbs} />
                </Container>
                <LegacyTrust />
                <OurJourney insuranceData={insuranceData} />
                <PartnerFuturegroup />
                <Leaders />
                <ReportsDiscloser reportsData={reportsData} />
                <Awards awardData={awardData} />
                <Milestone milestoneList={milestoneList} />
                <MediaCenter mediacenterData={mediacenterData} />
                <SocialResponsibility />
            </div>
        </LandingLayout>
    )
}

export default Aboutus