import React from "react";
import classNames from 'class-names';

import qualis from './logos/qualis.png';
import uate from './logos/uate.svg';
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
          <a href="https://www.qualys.com">
            <img src={qualis} alt="Qualis" className={styles.generalSponsor}/>
          </a>
        </div>
      </div>
      <div className={classNames(
        'row', 'justify-content-center', styles.sponsors)
      }>
        <div className="col-md-2 align-self-center">
          <a href="http://uate.org">
            <img src={uate} alt="UATE" className="img-fluid"/>
          </a>
        </div>
        <div className="col-md-2 align-self-center">
          <a href="https://1gsecurity.com">
            <img src={oneguard} alt="1guard security" className="img-fluid"/>
          </a>
        </div>
        <div className="col-md-2 align-self-center">
          <a href="http://skycryptor.com">
            <img src={skycryptor} alt="Skycryptor" className="img-fluid"/>
          </a>
        </div>
        <div className="col-md-2 align-self-center">
          <a href="http://astgeek.com">
            <img src={astgeek} alt="AstGeek" className="img-fluid"/>
          </a>
        </div>
        <div className="col-md-2 align-self-center">
          <a href="http://www.macadamian.com">
            <img src={macadamian} alt="macadamian" className="img-fluid"/>
          </a>
        </div>
      </div>
    </div>
  </div>
);
