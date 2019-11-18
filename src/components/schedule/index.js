import React from "react"
import Coming from '../coming';

const renderCols = (cols) => {
  const colWidth = 12 / cols.length;
  return cols.map((col) => {
    return (
      <h3 className={`text-center d-lg-block d-none col-md-${colWidth}`}>
        {col}
      </h3>
    )
  })
}

export default (props) => (
  <div className="row me-row schedule">
    <div className="col-12">
      <h2 className="row-title content-ct">Event Schedule</h2>
      <br />
      {props.coming && <Coming />}
      {!props.coming &&
        <div>
          <div className="row">
            {renderCols(props.cols)}
          </div>
          <div className="row">
            {props.children}
          </div>
        </div>
      }
    </div>
  </div>
);

