import React from "react";
import moment from 'moment';

import speakerMale from './speaker-male.png';

export default (props) => {
  const {frontmatter: talk} = props.talk;
  const start = moment(talk.date).format('hh:mma');
  const end = moment(talk.date)
    .add(talk.duration, 'minutes')
    .format('hh:mma');
  return <div className="col-md-6">
    <div className="media">
      <img className="mr-3"
        alt={talk.author} src={talk.photo || speakerMale} />
      <div className="media-body">
        <h4 className="mt-0">{start} to {end}</h4>
        <h5>{talk.title}</h5>
        <p>{props.talk.excerpt}</p>
      </div>
    </div>
  </div>
}
