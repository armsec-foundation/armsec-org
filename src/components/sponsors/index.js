import classNames from 'class-names';
import Img from 'gatsby-image';
import React from "react";

import * as styles from './sponsors.module.css';

const renderGeneralSponsors = (sponsors) => {
  return sponsors.map(({
    id, node: {frontmatter: sponsor}
  }, index) => {
    return (
      <div key={index} className="col-md-2">
        <a href={sponsor.url}>
          <Img fluid={sponsor.logo.childImageSharp.fluid}
            alt={sponsor.name}
            imgStyle={{objectFit: 'contain'}}
            className={styles.generalSponsor}/>
        </a>
      </div>
    )
  })
}

const renderSponsors = (size, sponsors) => {
  return sponsors.map(({
    id, node: {frontmatter: sponsor}
  }, index) => {
    return (
      <div key={index} className={`col-xl-${size || 2} col-2 align-self-center`}>
        <a href={sponsor.url}>
          <Img fluid={sponsor.logo.childImageSharp.fluid}
            alt={sponsor.name}
            imgStyle={{objectFit: 'contain'}}
            className={styles.sponsor}/>
        </a>
      </div>
    )
  })
}

export default (props) => (
  <div className={`row me-row content-ct ${props.color ? 'green' : ''}`}>
    <div className="col-md-12">
      <h2 className="row-title">{props.title}</h2>
      {props.generalSponsors &&
        <div className="row justify-content-center">
          {renderGeneralSponsors(props.generalSponsors)}
        </div>
      }
      <div className={classNames(
        'row', 'justify-content-center', styles.sponsors)
      }>
        {renderSponsors(props.size, props.sponsors)}
      </div>
    </div>
  </div>
)
