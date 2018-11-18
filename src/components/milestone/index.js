import React from "react";
import moment from 'moment';

import burger from './burger.png';
import coffee from './coffee.png';
import reg from './reg.png';

const ICONS = {
  burger,
  coffee,
  reg,
};

export default (props) => {
  const {frontmatter: milestone} = props.milestone;
  const start = moment(milestone.date).format('hh:mma');
  const end = moment(milestone.date)
    .add(milestone.duration, 'minutes')
    .format('hh:mma');
  return <div className="milestone col-md-12">
    <div className="media">
      <img className="mr-3"
        alt={milestone.title} src={ICONS[milestone.icon]} />
      <div className="media-body">
        <h4 className="mt-0">{start} to {end}</h4>
        <h5>{milestone.title}</h5>
      </div>
    </div>
  </div>
}
