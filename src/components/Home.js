import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Home = () => (
  <div className="page">
    <Fade duration={2000}>
      <img src="/images/engagement.jpg" alt="Chuck and Hannah" className="home-img" />
    </Fade>
    <div className="home">
      <Fade duration={2000}>
        <div className="home-header-wrapper">
          <h1 className="home-header">We can't wait to celebrate with you!</h1>
        </div>
        <h1>October 7, 2023 at 5:00pm</h1>
        <p>
          The Woodlands at Algonkian<br />
          47001 Fairway Dr, Sterling, VA 20165<br />
          Sterling, VA
        </p>
        <Link to="/logistics">
          <div className="more-details-link">
            More details <BsArrowRight />
          </div>
        </Link>
      </Fade>
    </div>
  </div>
);

export default Home;
