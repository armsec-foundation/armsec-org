import React from "react";
import Img from 'gatsby-image';

import speakerMale from '../talk/speaker-male.png';
import speakerFemale from '../talk/speaker-female.png';

const DEFAULT_FACES = {
  male: speakerMale,
  female: speakerFemale,
};

export default (props) => {
  const {frontmatter: speaker} = props.speaker;
  return <div className="col-md-4 col-sm-6 feature">
    {speaker.photo &&
      <Img fluid={speaker.photo.childImageSharp.fluid}
        alt={speaker.author} className="speaker-img" />
    }
    {!speaker.photo &&
      <div className="speaker-img">
        <img src={DEFAULT_FACES[speaker.gender]}
          alt={speaker.author} className="img-fluid"/>
      </div>
    }
    <h3>{speaker.author}</h3>
    <p>{speaker.about}</p>
    <ul className="speaker-social">
      {speaker.twitter &&
      <li>
        <a href={speaker.twitter}>
          <span className="ti-twitter-alt"></span>
        </a>
      </li>
      }
      {speaker.github &&
      <li>
        <a href={speaker.github}>
          <span className="ti-github"></span>
        </a>
      </li>
      }
      {speaker.website &&
      <li>
        <a href={speaker.website}>
          <span className="ti-world"></span>
        </a>
      </li>
      }
    </ul>
  </div>
}
