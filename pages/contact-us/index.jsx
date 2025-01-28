import LandingLayout from '@/components/Layouts/LandingLayout';
import React from 'react';
import styles from './Contact.module.css';
import Faqs from '@/components/Common/Faqs/Faqs';

const ContactUs = () => {

  const faqData = [
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'What is Reactstrap?', answer: 'Reactstrap is a library for using Bootstrap components in React.' },
    { question: 'How does state work in React?', answer: 'State in React is an object that determines how a component renders and behaves.' },
  ];


  return (
    <LandingLayout>
      Contact US

      <Faqs faqItems={faqData} />
    </LandingLayout>
  )
}

export default ContactUs