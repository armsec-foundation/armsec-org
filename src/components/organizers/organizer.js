import React from "react"

export default (props) => (
  <div className="col-md-6 organizer">
    <a href={props.url}>
      <img src={props.logo} alt={props.name} />
      <h3>{props.name}</h3>
    </a>
    <p>{props.description}</p>
  </div>
);
