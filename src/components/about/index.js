import React from "react";

export default (props) => (
  <div className={`row me-row about ${props.color ? props.color : 'green'}`}>
    <div className="col-md-12">
      <h2 className="row-title content-ct">About</h2>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <p className="lead">
            ArmSec conference is an annual international cybersecurity conference aiming at strengthening the cybersecurity community in Armenia and discussing the latest cybersecurity problems. Participants of the conference will be both Armenian and foreign leading specialists. Series of round-table discussions with focus on cybersec problems of Armenia will be held during the conference.
            <br />
            The main topics of the conference are:
          </p>
          <div className="lead">
            <ul className="list">
              <li>Armenian cybersecurity community's involvement in the digital transformation of the private sector and e-gov/gov-tech</li>
              <li>Armenia’s critical infrastructures’ protection from cyber attacks</li>
              <li>Public awareness of information security issues</li>
              <li>Cybersecurity inclusion in the educational system</li>
              <li>Public sharing of information about cyber attacks</li>
              <li>Ransomware type of attacks on Armenian corporations: possible protection solutions and influences</li>
              <li>APT type of attacks on Armenian governmental and private organizations</li>
              <li>Cybersecurity risks and cryptography in blockchain systems.</li>
            </ul>
          </div>
          <p className="lead">
            <br />
            Looking forward to meeting you all on <strong>{props.date}</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
);
