import LandingLayout from '@/components/Layouts/LandingLayout';
import React from 'react';
import styles from './Contact.module.css';
import Faqs from '@/components/Common/Faqs/Faqs';

const ContactUs = () => {
  return (
    <LandingLayout>
      Contact US

      <Faqs/>
    </LandingLayout>
  )
}

export default ContactUs