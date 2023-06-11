import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Masonry from 'react-responsive-masonry';

const Story = () => (
  <div className="page">
    <div className="alternating-content">
      <Fade duration={2000}>
        <img src="/images/arrow-1.png" alt="Arrow 1" />
      </Fade>
      <Fade duration={2000}>
        <div className="alternating-row odd-row">
          <div className="left-align">
            <h1>It began in snowy upstate New York... (sort of)</h1>
            <p>Chuck and Hannah like to think fate first tried to get them together at Cornell when they both joined the class of 2016. The very first night of freshman year, they unknowingly went to the same memorable party, where the porch collapsed under the weight of hundreds of college students. Then throughout the years, they both found themselves at Reis Tennis Center, where Hannah practiced with the club team and Chuck taught lessons to local kids. During junior year, they even ended up at the same Slope Day party, where Hannah witnessed Chuck performing a very mean but impressively written rap about a mutual friend of theirs. Despite crossing paths about a hundred times, however, they never actually met at Cornell.</p>
          </div>
          <div>
            <Masonry>
              <img src="/images/snowy-ithaca.jpg" alt="Snowy Ithaca" className="story-img" />
              <img src="/images/winter-jacket.jpg" alt="Winter Coat" className="story-img" />
              <img src="/images/cornell-hockey.jpg" alt="Cornell Hockey" className="story-img" />
              <img src="/images/cornell-hockey-2.jpg" alt="Cornell Hockey" className="story-img" />
              <img src="/images/club-tennis.jpeg" alt="Cornell Club Tennis" className="story-img" />
              <img src="/images/teaching-tennis.jpg" alt="Ithaca Tennis Lesson" className="story-img" />
              <img src="/images/clocktower.jpg" alt="Clocktower" className="story-img" />
              <img src="/images/cornell-party.jpg" alt="Cornell Party" className="story-img" />
            </Masonry>
          </div>
        </div>
      </Fade>
      <Fade duration={2000}>
        <img src="/images/arrow-2.png" alt="Arrow 2" />
      </Fade>
      <Fade duration={2000}>
        <div className="alternating-row even-row">
          <div>
            <Masonry>
              <img src="/images/food-bank.jpg" alt="Food Bank" className="story-img" />
              <img src="/images/rodeo.jpg" alt="Rodeo" className="story-img" />
              <img src="/images/speakeasy.jpg" alt="Speakeasy" className="story-img" />
              <img src="/images/bucees.jpg" alt="Bucee's" className="story-img" />
              <img src="/images/barton-springs.jpg" alt="Barton Springs" className="story-img" />
              <img src="/images/proposal.jpg" alt="Proposal" className="story-img" />
              <img src="/images/schlitterbahn.jpg" alt="Schlitterbahn" className="story-img" />
              <img src="/images/chuck-and-noodle.jpg" alt="Chuck and Noodle" className="story-img" />
            </Masonry>
          </div>
          <div className="right-align">
            <h1>It <i>really</i> began in Austin, Texas... (eventually)</h1>
            <p>Fate didn't give up after just the ol' college try. Instead, it found a way to ensure both Chuck and Hannah ended up in Austin after graduating. Chuck moved for the UT Austin PhD program, and Hannah moved for a job. They <i>finally</i> met (hooray!) at a Cornell alumni event, volunteering at the food bank. They exchanged phone numbers and made plans to play tennis together. Hannah was dating someone else at the time, and by the time that relationship ended, Chuck had started dating someone. So they spent two long years growing their friendship until they were finally both single. When that happened, Hannah wasted no time asking Chuck out on a two-stepping date (shamelessly confirming over text "this is a date" to make certain he understood). The rest is history!</p>
          </div>
        </div>
      </Fade>
      <Fade duration={2000}>
        <img src="/images/arrow-3.png" alt="Arrow 3" />
      </Fade>
      <Fade duration={2000}>
        <div className="alternating-row odd-row">
          <div className="right-align">
            <h1>It <b>formally</b> begins in Washington, D.C.</h1>
            <p>After defending his thesis and carrying out an elaborate scavneger hunt proposal, Chuck accepted a job in the nation's capital, and the couple packed up and moved across the country to what will hopefully be their forever home. The two are enjoying being closer to family, living in a bustling walkable neighborhood, and learning how to make new friends as adults. They can't wait to celebrate their wedding with everyone near and dear to them, in beautiful northern Virginia. See y'all in October!</p>
          </div>
          <div>
            <Masonry>
              <img src="/images/suitcases.jpg" alt="Suitcases" className="story-img" />
              <img src="/images/trail-of-lights.jpeg" alt="Trail of Lights" className="story-img" />
              <img src="/images/chucks-parents.jpg" alt="Burton Parents" className="story-img" />
              <img src="/images/monument.jpg" alt="Washington Monument" className="story-img" />
              <img src="/images/cherry-blossoms.jpg" alt="Cherry Blossoms" className="story-img" />
              <img src="/images/bike-party.jpg" alt="DC Bike Party" className="story-img" />
            </Masonry>
          </div>
        </div>
      </Fade>
    </div>
  </div>
);

export default Story;
