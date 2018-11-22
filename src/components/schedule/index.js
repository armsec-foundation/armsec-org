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
          <div className="row">
            <h3 className="text-center d-lg-block d-none col-md-4">
              Manoogian Hall
            </h3>
            <h3 className="text-center d-lg-block d-none col-md-4">
              Room 113W
            </h3>
            <h3 className="text-center d-lg-block d-none col-md-4">
              Room 114W
            </h3>
          </div>
          <div className="row">
            {props.children}
          </div>
        </div>
      }
    </div>
  </div>
);

