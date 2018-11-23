import React from "react"

import Organizer from './organizer';

import armsec from './armsec.svg';
import owasp from './owasp.png';
import illuria from './illuria.png';
import smartgate from './smartgate.jpg';
import aua from './aua.png';

export default () => (
  <div className="row me-row content-ct green">
    <div className="col-md-12 content-ct">
      <h2 className="row-title">Organizers</h2>
      <div className="row clearfix">
        <Organizer logo={armsec} name="ArmSec Foundation"
          url="https://www.facebook.com/ArmSecFoundation"
          description="ArmSec Foundation organizes IT, information and cyber security related development projects, such as courses, seminars, scientific conferences, etc.."/>
        <Organizer logo={owasp} name="OWASP Armenia"
          url="https://www.owasp.org/index.php/Armenia"
          description="OWASP Armenia is a professional association of global members and is open to anyone interested in learning more about software security"/>
        <Organizer logo={illuria} name="Illuria security"
          url="https://illuriasecurity.com"
          description="Illuria security is specialized in developing information security automation technologies and providing cyber risk discovery and naturalization services."/>
        <Organizer logo={smartgate} name="smartgate.vc"
          url="https://www.smartgate.vc"
          description="Backed by Tim Draper and seasoned tech entrepreneurs, smartgate.vc is a venture capital firm targeting companies in Artificial Intelligence, Security and Internet of Things."/>
        <Organizer logo={aua} name="Armenian University of Armenia"
          url="https://aua.am"
          description="The American University of Armenia (AUA) is a private institution of higher learning, offering a global education in Armenia."/>
      </div>
    </div>
  </div>
);
