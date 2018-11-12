import React from "react"

export default () => {
  const year = (new Date()).getFullYear();
  return <div className="row footer">
    <div className="col-md-6 col-sm-6">
      <p>&copy; {year}, <a href="http://www.armsec.org">ArmSec</a> | All rights reserved.</p>
    </div>
  </div>
}
