import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Logistics = () => (
  <div className="page">
    <div className="alternating-content odd-row">
      <Fade duration={2000}>
        <div className="alternating-row">
          <div className="left-align">
            <h1 className="logistics-header">Wedding Day Details</h1>
            <p>
              <b>Date and Time:</b><br />
              <span className="logistics-subheader">October 7, 2023 at 5:00pm</span><br />
              Please arrive early and enjoy the beautiful park!
            </p>
            <p>
              <b>Location:</b><br />
              <span className="logistics-subheader">The Woodlands at Algonkian</span><br />
              47001 Fairway Dr, Sterling, VA 20165
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
      <Fade duration={2000}>
        <div className="alternating-row even-row">
          <div>
            <img src="/images/hampton.jpeg" alt="Hampton Inn" className="logistics-img" />
          </div>
          <div className="right-align">
            <h1 className="logistics-header">Accommodations</h1>
            <p>
              <b>Hampton Inn Dulles/Cascades:</b><br />
              <span className="logistics-subheader">Use <a href="http://l.h4.hilton.com/rts/go2.aspx?h=2620167&tp=i-16D9-Ak-a7L-DcqNmR-24-13qKQm-1c-l8f7Zf3UW8-bw91S&x=www.my-event.hilton.com/wasslhx-hcw-f281d9dc-f5eb-4baf-badc-1965309a4260/" target="_blank" rel="noopener noreferrer">this link</a> for discounted rate of $139-149/night</span>
            </p>
            <p>
              <b>Hyatt Place Sterling/Dulles Airport-North:</b><br />
              <span className="logistics-subheader">Use <a href="https://www.hyatt.com/en-US/group-booking/IADZN/G-BSWB" target="_blank" rel="noopener noreferrer">this link</a> for discounted rate of $139/night</span>
            </p>
            <i>If you do not see rooms available at the expected rate, please <a href="mailto:hannahstahl14@gmail.com">let us know</a> so we can add more to the block.</i>
          </div>
        </div>
      </Fade>
    </div>
  </div>
);

export default Logistics;
