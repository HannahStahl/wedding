import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Home = () => (
  <div className="page">
    <Fade duration={2000}>
      <img src="/images/engagement.jpg" alt="Chuck and Hannah" className="home-img" />
    </Fade>
    <div className="our-story">
      <Fade duration={2000}>
        <img src="/images/arrow-1.png" alt="Arrow 1" />
      </Fade>
      <Fade duration={2000}>
        <div className="story-row">
          <div className="left-align">
            <h1>It began in snowy upstate New York... (sort of)</h1>
            <p>Chuck and Hannah like to think fate first tried to get them together at Cornell when they both joined the class of 2016. The very first night of freshman year, they unknowingly went to the same memorable party, where the porch collapsed under the weight of hundreds of college students. Then throughout the years, they both found themselves at Reis Tennis Center, where Hannah practiced with the club team and Chuck taught lessons to local kids. During junior year, they even ended up at the same Slope Day party, where Hannah witnessed Chuck performing a very mean but impressively written rap about a mutual friend of theirs named Ian. Despite crossing paths about a hundred times, however, they never actually met at Cornell.</p>
          </div>
          <div>
            <img src="/images/snowy-ithaca.jpg" alt="Snowy Ithaca" className="story-img" />
            <img src="/images/cornell-hockey.jpg" alt="Cornell Hockey" className="story-img" />
            <img src="/images/clocktower.jpg" alt="Clocktower" className="story-img" />
          </div>
        </div>
      </Fade>
    </div>
  </div>
);

export default Home;
