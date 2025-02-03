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
import Ourteam from '@/components/Careers/Ourteam/Ourteam'
import CoverageOption from '@/components/CoverageOption/CoverageOption'

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

// Our Teammember array data

const teamMembers = [
  {
      id: 1,
      name: "Harshvardhan Upadhaya",
      image: "/images/careers/person.png",
      feedback: "The team at FGILI took the time to carefully explain the options available to me and helped me make informed decisions.",
      rating: 2.5
  },
  {
      id: 2,
      name: "Ananya Sharma",
      image: "/images/careers/person.png",
      feedback: "Working at FGILI has been a great experience. The support and opportunities for growth are fantastic!",
      rating: 4.5
  },
  {
      id: 3,
      name: "Rohan Mehta",
      image: "/images/careers/person.png",
      feedback: "Future Generali provides an amazing work culture that fosters innovation and collaboration.",
      rating: 5
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
      <Ourteam teamMembers={teamMembers}/>

      {/* Home page extra */}
      <CoverageOption/>
    </LandingLayout>
  )
}

export default career