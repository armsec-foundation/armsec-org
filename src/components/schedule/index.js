import React from "react"

export default (props) => (
  <div className="row me-row schedule">
    <div className="col-12">
      <h2 className="row-title content-ct">Event Schedule</h2>
      <br />
      <h3 className="text-center">Manoogian Hall</h3>
      {props.children}
    </div>
  </div>
);

