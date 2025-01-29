import React from 'react'
import styles from './careers.module.css'
import LandingLayout from '@/components/Layouts/LandingLayout'
import { Container } from 'reactstrap'
import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs'
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle'
import Benefits from '@/components/Careers/Benefits/Benefits'
import CareerBanner from '@/components/Careers/CareerBanner/CareerBanner'

const career = () => {

  // Create the breadcrumbs array based on state and city
  const breadcrumbs = [
    { name: "Careers", url: "/careers", active: true },
  ]

  return (
    <LandingLayout>
      <Container>
        <Breadcrumbs values={breadcrumbs} />
      </Container>
      <CareerBanner/>
      <Benefits/>
    </LandingLayout>
  )
}

export default career