import React from 'react'
import styles from './careers.module.css'
import LandingLayout from '@/components/Layouts/LandingLayout'
import { Container } from 'reactstrap'
import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'
import Benefits from '@/components/Careers/Benefits/Benefits'
import CareerBanner from '@/components/Careers/CareerBanner/CareerBanner'
import Promises from '@/components/Careers/Promises/Promises'
import SendApplication from '@/components/Careers/SendApplication/SendApplication'
import Joinculture from '@/components/Careers/Joinculture/Joinculture'

const career = () => {

  // Create the breadcrumbs array based on state and city
  const breadcrumbs = [
    { name: "Careers", url: "/careers", active: true },
  ]

  // array for promises Data
  const promisesData = [
    {
        title: "Deliver On the Promise",
        imgSrc: "/images/careers/promise1.png",
        description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
        points: [
            "We commit with discipline and integrity",
            "We seek simple solutions",
            "We forge long term relationships"
        ]
    },
    {
        title: "Value Our People",
        imgSrc: "/images/careers/promise2.png",
        description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
        points: [
            "We encourage diversity",
            "We invest in their learning and growth",
            "We share successes with the team"
        ]
    },
    {
        title: "Live the Community",
        imgSrc: "/images/careers/promise3.png",
        description: "A life insurance plan that helps you reach financial goals with life cover and guaranteed growth.",
        points: [
            "We belong to a global group",
            "We build sustainable and long lasting",
            "We work together- for us, Future Generali’s"
        ]
    }
];



  return (
    <LandingLayout>
      <Container>
        <Breadcrumbs values={breadcrumbs} />
      </Container>
      <CareerBanner/>
      <Joinculture/>
      <Promises promisesData={promisesData}/>
      <SendApplication/>
      <Benefits/>
    </LandingLayout>
  )
}

export default career