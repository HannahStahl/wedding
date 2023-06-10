import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Logistics = () => (
  <div className="page">
    <div className="alternating-content">
      <Fade duration={2000}>
        <div className="alternating-row">
          <div className="left-align">
            <h1 className="logistics-header">Wedding Day Details</h1>
            <p>
              <b>Date and Time:</b><br />
              <span className="logistics-subheader">October 7, 2023</span><br />
              The ceremony will be held at 5:00pm,<br />
              followed by dinner and dancing.<br />
              <i>Please arrive early and enjoy the beautiful park!</i>
            </p>
            <p>
              <b>Location:</b><br />
              <span className="logistics-subheader">The Woodlands at Algonkian</span><br />
              47001 Fairway Dr<br />
              Sterling, VA 20165
            </p>
            <p>
              <b>Attire:</b><br />
              <span className="logistics-subheader">Semi-formal</span><br />
            </p>
          </div>
          <div>
            <img src="/images/woodlands.jpeg" alt="The Woodlands at Algonkian" className="logistics-img" />
          </div>
        </div>
      </Fade>
    </div>
  </div>
);

export default Logistics;
