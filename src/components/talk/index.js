import classNames from 'class-names';
import Img from 'gatsby-image';
import moment from 'moment';
import React from "react";

import download from './download.png';
import * as styles from './talk.module.scss';
import video from './video.png';
// import speakerMale from './speaker-male.png';

export default (props) => {
  const {frontmatter: talk} = props.talk;
  const start = moment(talk.date).format('hh:mma');
  const end = moment(talk.date)
    .add(talk.duration, 'minutes')
    .format('hh:mma');
  const className = `col-sm-12 ${talk.single ? '' : props.singleClassName}`
  if (talk.type === 'empty') {
    return <div className={classNames(className, 'd-xs-none')}></div>
  }
  return <div className={className}>
    <div className="media">
      {talk.photos.length && talk.photos.map((photo, index) => (
        <Img key={index} fluid={photo.childImageSharp.fluid}
          alt={talk.authors[index]}
          className={classNames(
            styles.speaker,
            index !== 0 ? 'd-none d-sm-block' : ''
          )}
          style={{zIndex: talk.photos.length - index}} />
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
          {talk.presentation &&
            <a href={talk.presentation} target="_blank"
              rel="noopener noreferrer">
              <img src={download} alt="Download Presentation file"
                className={styles.downloadButton}/>
            </a>
          }
          {talk.video &&
            <a href={talk.video} target="_blank"
              rel="noopener noreferrer">
              <img src={video} alt="Watch the video"
                className={styles.downloadButton}/>
            </a>
          }
        </h5>
        {talk.type === 'panel' &&
          <p><b>Moderator: {talk.moderator}</b></p>
        }
        <p>{talk.authors.join(', ')}</p>
      </div>
    </div>
  </div>
}
