import React from "react"

import Image from "../image"

export default (props) => (
  <div className="row hero-header" id="home">
    <div className="col-md-7">
      <div className="row">
        <div className="col-md-12">
          <Image src={`${props.year}/images/title.png`} className="logo"
            alt="ArmSec Security Conference" />
          <h1>Armenia’s premier security event</h1>
          <h3>OWASP Security Conference</h3>
          <h4>{props.date}, {props.year}</h4>
          {props.ticket &&
            <a className="btn btn-lg btn-green" target="blank"
              href={props.ticket}>
              Register Now <span className="ti-arrow-right"></span>
            </a>
          }
        </div>
      </div>
      <div className="row social">
        <div className="col-md-12">
          <a href="https://twitter.com/armsec" target="_blank"
            rel="noopener noreferrer">
            <span className="ti-twitter-alt"></span>
          </a>
          <a href="https://www.facebook.com/events/1139665189534357/"
            target="_blank" rel="noopener noreferrer">
            <span className="ti-facebook"></span>
          </a>
        </div>
      </div>
    </div>
    <div className="col-md-5 d-none d-md-block">
      <Image src={`${props.year}/images/logo.png`} className="large-logo"
        alt="ArmSec Security Conference" />
    </div>
  </div>
);
