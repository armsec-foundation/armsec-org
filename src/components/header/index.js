import React from "react"

import title from './title.png';
import logo from './logo.png';

export default (props) => (
  <div className="row hero-header" id="home">
    <div className="col-md-7">
      <img src={title} className="logo"
        alt="ArmSec Security Conference" />
      <h1>Attend the Armenia’s premier security event</h1>
      <h3>OWASP Security Conference</h3>
      <h4>24 November, 2018</h4>
      <a className="btn btn-lg btn-green" target="blank"
        href={props.ticket}>
        Register Now <span className="ti-arrow-right"></span>
      </a>
    </div>
    <div className="col-md-5 d-none d-md-block">
      <img src={logo} className="large-logo"
        alt="ArmSec Security Conference" />
    </div>
  </div>
);

