import React from "react"
import Coming from '../coming';

export default (props) => (
  <div className="row me-row schedule">
    <div className="col-12">
      <h2 className="row-title content-ct">Event Schedule</h2>
      <br />
      {props.coming && <Coming />}
      {!props.coming &&
        <div>
          <h3 className="text-center">Manoogian Hall</h3>
          {props.children}
        </div>
      }
    </div>
  </div>
);

