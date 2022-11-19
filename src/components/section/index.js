import classNames from 'class-names';
import React from "react";
import * as styles from './section.module.scss';

export default (props) => (
  <div className={classNames('row', 'me-row', props.color ? props.color : '', styles.customSection)}>
    <div className="col-md-12">
      <h1 className="row-title content-ct">{props.title}</h1>
      <div className="row justify-content-center">
        <div className={classNames('col-md-8', styles.lead, 'lead')}
            dangerouslySetInnerHTML={{ __html: props.children }}>
        </div>
      </div>
    </div>
  </div>
);
