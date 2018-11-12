import React from "react"

import speaker1 from './speaker-1.png';

export default (props) => (
  <div className="col-md-6">
    <div className="media">
      <img className="mr-3"
        alt={props.fullName} src={props.photo || speaker1} />
      <div className="media-body">
        <h4 className="mt-0">{props.timeSlot}</h4>
        <h5>{props.title}</h5>
        <p>{props.excerpt}</p>
      </div>
    </div>
  </div>
);