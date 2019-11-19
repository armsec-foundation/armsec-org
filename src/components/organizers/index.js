import React from "react"

import Organizer from './organizer';

export default (props) => (
  <div className="row me-row content-ct green">
    <div className="col-md-12 content-ct">
      <h2 className="row-title">Organizers</h2>
      <div className="row clearfix organizers">
        {props.data && props.data.map(({node: {id, frontmatter: item}}) => {
          return <Organizer key={id}
            fluid={item.logo.childImageSharp.fluid}
            name={item.name}
            url={item.url}
            description={item.description} />
        })}
      </div>
    </div>
  </div>
);
