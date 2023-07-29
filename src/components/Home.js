import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Home = () => (
  <div className="page">
    <Fade duration={2000} triggerOnce={true}>
      <img src="/images/engagement.jpg" alt="Chuck and Hannah" className="home-img" />
    </Fade>
    <div className="home">
      <Fade duration={2000} triggerOnce={true}>
        <div className="home-header-wrapper">
          <h1 className="home-header">We can't wait to celebrate with you!</h1>
        </div>
        <h1 className="home-subheader">Saturday, October 7, 2023 at 5:00pm</h1>
        <p>
          The Woodlands at Algonkian<br />
          47001 Fairway Dr<br />
          Sterling, VA 20165
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
