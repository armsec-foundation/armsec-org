import React from "react"

import speaker1 from '../talk/speaker-1.png';

export default () => (
  <div className="col-md-4 col-sm-6 feature">
    <img src={speaker1} alt="Anton Lopanitsyn" className="speaker-img-none" />
    <h3>Anton Lopanitsyn</h3>
    <p>Anton is a security researcher, whitehat, bug bounty practicant, blogger, noob, script kiddie.<br /><br /></p>
    <ul className="speaker-social">
      <li>
        <a href="https://twitter.com/i_bo0om">
          <span className="ti-twitter-alt"></span>
        </a>
      </li>
      <li>
        <a href="https://github.com/Bo0oM">
          <span className="ti-github"></span>
        </a>
      </li>
      <li>
        <a href="https://bo0om.ru">
          <span className="ti-world"></span>
        </a>
      </li>
    </ul>
  </div>
);
