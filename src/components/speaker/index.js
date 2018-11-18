import React from "react"

import speaker1 from '../talk/speaker-1.png';

export default (props) => {
  const {frontmatter: speaker} = props.speaker;
  return <div className="col-md-4 col-sm-6 feature">
    <img src={speaker1} alt={speaker.author} className="speaker-img-none" />
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
