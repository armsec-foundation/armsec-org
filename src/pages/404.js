import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';
import Section from '../components/section';
import SEO from '../components/seo';
import '../styles/main.scss';


const IndexPage = () => {
  return <div className="container-fluid">
    <SEO />
    <Header date="18 December" year="2022"
      subtitle="Cybersecurity Conference">
    </Header>
    <Section title="Page Not Found" color="green"></Section>
    <Footer />
  </div>
}

export default IndexPage;
