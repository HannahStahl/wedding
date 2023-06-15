import React, { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useLocation } from 'react-router-dom';

const Logistics = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="page">
      <div className="alternating-content odd-row">
        <Fade duration={2000}>
          <div className="alternating-row">
            <div className="left-align">
              <h1 className="logistics-header">Ceremony and Reception</h1>
              <p>
                <b>Date and Time:</b><br />
                <span className="logistics-subheader">October 7, 2023, 5:00pm - 11:00pm</span><br />
                Please arrive early and enjoy the beautiful park!
              </p>
              <p>
                <b>Location:</b><br />
                <span className="logistics-subheader">
                  <a href="https://goo.gl/maps/Ti1b3rurmahmEWkw7" target="_blank" rel="noopener noreferrer">The Woodlands at Algonkian</a>
                </span><br />
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
              <img src="/images/pavilion.jpeg" alt="Picnic Shelter" className="logistics-img" />
            </div>
            <div className="right-align">
              <h1 className="logistics-header">Goodbye Brunch</h1>
              <p>
                <b>Date and Time:</b><br />
                <span className="logistics-subheader">October 8, 2023, 9:30am - 12:00pm</span><br />
              </p>
              <p>
                <b>Location:</b><br />
                <span className="logistics-subheader">
                  <a href="https://goo.gl/maps/vVnfE1Z2h1Yz52kW6" target="_blank" rel="noopener noreferrer">Algonkian Picnic Shelter #1</a>
                </span><br />
                47001 Fairway Dr, Sterling, VA 20165
              </p>
              <p>
                <b>Attire:</b><br />
                <span className="logistics-subheader">Casual</span><br />
              </p>
            </div>
          </div>
        </Fade>
        <Fade duration={2000}>
          <div className="alternating-row odd-row">
            <div className="left-align">
              <h1 className="logistics-header">Nearby Airports</h1>
              <p>
                <b>Dulles International Airport (IAD):</b><br />
                <span className="logistics-subheader">~20 minutes from wedding venue</span>
              </p>
              <p>
                <b>Washington National Airport (DCA):</b><br />
                <span className="logistics-subheader">~45 minutes from wedding venue</span>
              </p>
            </div>
            <div>
              <img src="/images/dulles.jpeg" alt="Dulles Airport" className="logistics-img" />
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
};

export default Logistics;
