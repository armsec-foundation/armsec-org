import React from "react"
import Img from 'gatsby-image';

export default (props) => (
  <div className="col-md-6 organizer">
    <a href={props.url}>
      <Img fluid={props.fluid}
        alt={props.name}
        imgStyle={{objectFit: 'contain'}} />
      <h3>{props.name}</h3>
    </a>
    <p>{props.description}</p>
  </div>
);
