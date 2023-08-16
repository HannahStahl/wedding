import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Logistics = () => (
  <div className="page">
    <div className="alternating-content">
      <Fade duration={2000} triggerOnce={true}>
        <div className="alternating-row odd-row">
          <div className="left-aligned">
            <h1 className="logistics-header">Country Dancing (Weather Permitting)</h1>
            <p>
              <b>Date and Time:</b><br />
              Friday, October 6, 2023<br />
              8:00pm - 10:00pm<br />
              <i>
                Join us for some two-stepping if you're around!
                <br />
                We'll give a lesson from 8:00 - 8:15.
              </i>
            </p>
            <p>
              <b>Location:</b><br />
              <a href="https://goo.gl/maps/jnvJR4oKV8LQrsdKA" target="_blank" rel="noopener noreferrer">Algonkian Riverfront Cottages</a><br />
              46434 Park Chalet Pl, Sterling, VA 20165
            </p>
            <p>
              <b>Attire:</b><br />
              Casual (cowboy boots if you have 'em!)
            </p>
          </div>
          <div>
            <img src="/images/dancing.jpg" alt="Texas Two-Step" className="logistics-img" />
          </div>
        </div>
      </Fade>
      <Fade duration={2000} triggerOnce={true}>
        <div className="alternating-row even-row">
          <div>
            <img src="/images/woodlands.jpeg" alt="The Woodlands at Algonkian" className="logistics-img" />
          </div>
          <div className="right-aligned">
            <h1 className="logistics-header">Wedding Ceremony and Reception</h1>
            <p>
              <b>Date and Time:</b><br />
              Saturday, October 7, 2023<br />
              5:00pm - 11:00pm<br />
              <i>Please arrive early and enjoy the beautiful park!</i>
            </p>
            <p>
              <b>Location:</b><br />
              <a href="https://goo.gl/maps/Ti1b3rurmahmEWkw7" target="_blank" rel="noopener noreferrer">The Woodlands at Algonkian</a><br />
              47001 Fairway Dr, Sterling, VA 20165
            </p>
            <p>
              <b>Attire:</b><br />
              Semi-formal
            </p>
          </div>
        </div>
      </Fade>
      <Fade duration={2000} triggerOnce={true}>
        <div className="alternating-row odd-row">
          <div className="left-aligned">
            <h1 className="logistics-header">Brunch</h1>
            <p>
              <b>Date and Time:</b><br />
              Sunday, October 8, 2023<br />
              9:30am - 12:00pm<br />
            </p>
            <p>
              <b>Location:</b><br />
              <a href="https://goo.gl/maps/vVnfE1Z2h1Yz52kW6" target="_blank" rel="noopener noreferrer">Algonkian Picnic Shelter #1</a><br />
              Fairway Dr, Sterling, VA 20165
            </p>
            <p>
              <b>Attire:</b><br />
              Casual
            </p>
          </div>
          <div>
            <img src="/images/pavilion.jpeg" alt="Picnic Shelter" className="logistics-img" />
          </div>
        </div>
      </Fade>
      <Fade duration={2000} triggerOnce={true}>
        <div className="alternating-row even-row">
          <div>
            <img src="/images/dulles.jpeg" alt="Dulles Airport" className="logistics-img" />
          </div>
          <div className="right-aligned">
            <h1 className="logistics-header">Nearby Airports</h1>
            <p>
              <b>Dulles International Airport (IAD):</b><br />
              ~20 minutes from wedding venue
            </p>
            <p>
              <b>Washington National Airport (DCA):</b><br />
              ~45 minutes from wedding venue
            </p>
          </div>
        </div>
      </Fade>
      <Fade duration={2000} triggerOnce={true}>
        <div className="alternating-row odd-row">
          <div className="left-aligned">
            <h1 className="logistics-header">Accommodations</h1>
            <p>
              <b>Hampton Inn Dulles/Cascades:</b><br />
              The block is full, but you can use <a href="https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=WASSLHX&arrivalDate=2023-10-07&departureDate=2023-10-08&room1NumAdults=2" target="_blank" rel="noopener noreferrer">this link</a> to check for rooms at the regular rate.
            </p>
            <p>
              <b>Hyatt Place Sterling/Dulles Airport-North:</b><br />
              Use <a href="https://www.hyatt.com/en-US/group-booking/IADZN/G-BSWB" target="_blank" rel="noopener noreferrer">this link</a> for discounted rates. If no rooms show up, please <a href="mailto:hannahstahl14@gmail.com">let us know</a> so we can try adding more to the block.
            </p>
          </div>
          <div>
            <img src="/images/hampton.jpeg" alt="Hampton Inn" className="logistics-img" />
          </div>
        </div>
      </Fade>
    </div>
  </div>
);

export default Logistics;
