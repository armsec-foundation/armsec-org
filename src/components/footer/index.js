import React from "react"

export default () => {
  const year = (new Date()).getFullYear();
  return <div className="row footer">
    <div className="col-md-6 col-sm-6">
      <p>&copy; {year},
      &nbsp;
      <a className="link" href="http://www.armsec.org">ArmSec</a>
      &nbsp;
      | All rights reserved.</p>
    </div>
  </div>
}
