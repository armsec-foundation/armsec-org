import React from "react"

export default (props) => (
  <div className="col-lg-3 col-md-6 organizer">
    <img src={props.logo} alt={props.name} />
    <h3>{props.name}</h3>
    <p>{props.description}</p>
  </div>
);
