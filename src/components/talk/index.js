import React from "react";
import moment from 'moment';
import Img from 'gatsby-image';
import classNames from 'class-names';

import styles from './talk.module.css';
// import speakerMale from './speaker-male.png';

export default (props) => {
  const {frontmatter: talk} = props.talk;
  const start = moment(talk.date).format('hh:mma');
  const end = moment(talk.date)
    .add(talk.duration, 'minutes')
    .format('hh:mma');
  return <div className={'col-sm-12' + (talk.single ? '': ' col-lg-4')}>
    <div className="media">
      {talk.photos.length && talk.photos.map((photo, i) => (
        <Img fluid={photo.childImageSharp.fluid}
          alt={talk.authors[i]} className={styles.speaker}
          style={{zIndex: talk.photos.length - i}}/>
      ))}
      <div className={classNames('media-body', styles.body)}>
        <h4 className="mt-0">
          {start} to {end}
          <span
            className={classNames('d-lg-none', 'd-xs-inline', styles.location)}>
            &nbsp; ({talk.location})
          </span>
        </h4>
        <h5>
          {talk.type === 'panel' && 'Panel Discussion: '}
          {talk.title}
        </h5>
        {talk.type === 'panel' &&
          <p><b>Moderator: {talk.moderator}</b></p>
        }
        <p>{talk.authors.join(', ')}</p>
      </div>
    </div>
  </div>
}
