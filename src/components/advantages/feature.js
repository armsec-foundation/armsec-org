import React from "react"

export default (props) => (
  <div className="col-md-4 feature">
    <span className={props.icon}></span>
    <h3>{props.title}</h3>
    <p>{props.content}</p>
  </div>
);
