import React from 'react';

import '../styles/main.scss';
import Header from '../components/header';
import Advantages from '../components/advantages';
import Talk from '../components/talk';
import Schedule from '../components/schedule';
import About from '../components/about';
import Speaker from '../components/speaker';
import Speakers from '../components/speakers';
import Sponsors from '../components/sponsors';
import Footer from '../components/footer';

export default () => {
  return <div className="container-fluid">
    <Header></Header>
    <Advantages></Advantages>
    <Schedule>
      <div className="row">
        <Talk linkToSpeaker="#speaker-samvel-martirosyan"
          fullName="Samvel Martirosyan"
          timeSlot="10am to 10:30am"
          title="Keynote"
          excerpt="Annual 3W review: what, when, who in Armenia. And a lot of about near future."
          />
        <Talk linkToSpeaker="#speaker-samvel-martirosyan"
          fullName="Samvel Martirosyan"
          timeSlot="10am to 10:30am"
          title="Keynote"
          excerpt="Annual 3W review: what, when, who in Armenia. And a lot of about near future."
          />
      </div>
    </Schedule>
    <About></About>
    <Speakers>
      <Speaker />
      <Speaker />
    </Speakers>
    <Sponsors />
    <Footer />
  </div>
}
