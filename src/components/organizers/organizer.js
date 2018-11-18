import React from "react"

export default (props) => (
  <div className="col-md-3 organizer">
    <img src={props.logo} alt={props.name} />
    <h3>{props.name}</h3>
    <p>{props.description}</p>
  </div>
);
