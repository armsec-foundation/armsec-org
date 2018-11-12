import React from 'react';

import Feature from './feature';

export default () => (
  <div className="row me-row content-ct" style={{
    backgroundColor: '#2f6b25',
    color: '#000'
  }}>
    <div className="col-md-12">
      <h2 className="row-title">
        Why This Event Is Super Cool?
      </h2>
      <div className="row justify-content-center">
        <Feature icon="ti-microphone"
          title="Expert Speakers"
          content="Best in class expert speakers who have extensive knowledge of the topic. All speakers are curated by the panel of experts."
          />
        <Feature icon="ti-world"
          title="People around the globe!"
          content="Meet the people attending this event around the globe. This will be the best opportunity to meet and greet people from your industry."
          />
      </div>
    </div>
  </div>
);
