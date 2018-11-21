import React from "react";
import classNames from 'class-names';

import qualis from './logos/qualis.png';
import uate from './logos/uate.png';
import oneguard from './logos/1g.png';
import skycryptor from './logos/skycryptor.png';
import astgeek from './logos/astgeek.png';
import macadamian from './logos/macadamian.png';

import styles from './sponsors.module.css';

export default () => (
  <div className="row me-row content-ct">
    <div className="col-md-12">
      <h2 className="row-title">Sponsors and Partners</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img src={qualis} alt="Qualis" className={styles.generalSponsor}/>
        </div>
      </div>
      <div className={classNames(
        'row', 'justify-content-center', styles.sponsors)
      }>
        <div className="col-md-2 align-self-center">
          <img src={uate} alt="UATE" className="img-fluid"/>
        </div>
        <div className="col-md-2 align-self-center">
          <img src={oneguard} alt="1guard security" className="img-fluid"/>
        </div>
        <div className="col-md-2 align-self-center">
          <img src={skycryptor} alt="Skycryptor" className="img-fluid"/>
        </div>
        <div className="col-md-2 align-self-center">
          <img src={astgeek} alt="AstGeek" className="img-fluid"/>
        </div>
        <div className="col-md-2 align-self-center">
          <img src={macadamian} alt="macadamian" className="img-fluid"/>
        </div>
      </div>
    </div>
  </div>
);
