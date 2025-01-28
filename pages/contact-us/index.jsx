import LandingLayout from '@/components/Layouts/LandingLayout';
import React from 'react';
import styles from './Contact.module.css';
import { Container } from 'reactstrap';
import TitleSubtitle from '@/components/Common/TitleSubtitle/TitleSubtitle';
import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs';
import ReachUsDigital from '@/components/BranchLocator/ReachUsDigital/ReachUsDigital';
import CustomerService from '@/components/ContactUs/CustomerService/CustomerService';
import Faqs from '@/components/Common/Faqs/Faqs';

const ContactUs = (props) => {

  // Create the breadcrumbs array based on state and city
  const breadcrumbs = [
    { name: "Contact Us", url: "/contact-us", active: true },
  ]

  // Reach us or contact us card data
  const reachUsCard = [
    {
      title: 'WhatsApp Support',
      desc: 'Message us anytime at your convenience.',
      contact: '',
      linktext: 'Chat with Us',
      link: '/',
      arrow: '/images/reach-us/arrow-right.svg',
      img: '/images/reach-us/whatsapp.svg',
    },
    {
      title: 'Customer Support',
      desc: 'Available 24*7 at',
      contact: ' 1800 102 2355',
      linktext: 'Call Us',
      link: '/',
      arrow: '/images/reach-us/arrow-right.svg',
      img: '/images/reach-us/headphone.svg',
    },
    {
      title: 'Drop Us an Email',
      desc: 'Send your queries to: ',
      contact: 'care@futuregenerali.in',
      linktext: 'Email Us',
      link: 'care@futuregenerali.in',
      arrow: '/images/reach-us/arrow-right.svg',
      img: '/images/reach-us/email.svg',
    },
    // {
    //     title: 'Visit Us',
    //     desc: 'Monday to Friday 9:30 am to 5:30 pm',
    //     contact: '',
    //     linktext:'Locate Us',
    //     link: '/',
    //     arrow: '/images/reach-us/arrow-right.svg',

    // },

  ];

  const faqData = [
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'What is Reactstrap?', answer: 'Reactstrap is a library for using Bootstrap components in React.' },
    { question: 'How does state work in React?', answer: 'State in React is an object that determines how a component renders and behaves.' },
  ];


  return (
    <LandingLayout>
      <Container>
       <Breadcrumbs values={breadcrumbs} />
        <TitleSubtitle
          title={"Need Assistance?"}
          subtitle={"Reach out through the channel that suits you best—we’re just a chat, call, or email away!"}
        />
          <ReachUsDigital reachUsCard={reachUsCard} AIcontactUs/>
          <CustomerService/>
      </Container>
      <Faqs faqItems={faqData} />
    </LandingLayout>
  )
}

export default ContactUs