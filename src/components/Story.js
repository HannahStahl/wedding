import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import { Fade } from 'react-awesome-reveal';
import Masonry from 'react-responsive-masonry';

const content = [
  {
    header: <>It began in snowy upstate New York... (sort of)</>,
    text: <>Chuck and Hannah like to think fate first tried to get them together at Cornell when they both joined the class of 2016. The first night of freshman year, they unknowingly went to the same memorable party, where the porch collapsed under the weight of hundreds of college students. Then throughout the years, they both found themselves at Reis Tennis Center, where Hannah practiced with the club team and Chuck taught lessons to local kids. During junior year, they even ended up at the same Slope Day party, where Hannah witnessed Chuck performing a very mean but impressively written rap about a mutual friend of theirs. Despite crossing paths about a hundred times, however, they never actually met at Cornell...</>,
    images: [
      { filename: 'snowy-ithaca.jpg', alt: 'Snowy Ithaca', carouselOrder: 1 },
      { filename: 'winter-jacket.jpg', alt: 'Winter Coat', carouselOrder: 2 },
      { filename: 'cornell-hockey.jpg', alt: 'Cornell Hockey', carouselOrder: 3 },
      { filename: 'cornell-hockey-2.jpg', alt: 'Cornell Hockey', carouselOrder: 4 },
      { filename: 'club-tennis.jpg', alt: 'Cornell Club Tennis', carouselOrder: 5 },
      { filename: 'teaching-tennis.jpg', alt: 'Ithaca Tennis Lesson', carouselOrder: 6 },
      { filename: 'clocktower.jpg', alt: 'Clocktower', carouselOrder: 8 },
      { filename: 'cornell-party.jpg', alt: 'Cornell Party', carouselOrder: 7 },
    ],
  },
  {
    header: <>It <i>really</i> began in Austin, Texas... (eventually)</>,
    text: <>Fate didn't give up after the ol' college try. Instead, it found a way to ensure both Chuck and Hannah ended up in Austin after graduating. Chuck moved for the UT Austin PhD program, and Hannah moved for a job. They <i>finally</i> met (hooray!) at an alumni event, volunteering at the food bank. They exchanged phone numbers and made plans to play tennis together. Hannah was dating someone else at the time, and by the time that relationship ended, Chuck had started dating someone. So they spent two long years growing their friendship until they were finally both single. When that happened, Hannah wasted no time asking Chuck out on a two-stepping date (shamelessly confirming over text "I am thinking of this as a date" to make certain he understood). That turned into the most amazing relationship filled with laughter, tacos, COVID, water parks, bike rides, a snowpocalypse, and everything in between.</>,
    images: [
      { filename: 'food-bank.jpg', alt: 'Food Bank', carouselOrder: 1 },
      { filename: 'rodeo.jpg', alt: 'Rodeo', carouselOrder: 2 },
      { filename: 'speakeasy.jpg', alt: 'Speakeasy', carouselOrder: 3 },
      { filename: 'bucees.jpg', alt: 'Bucees', carouselOrder: 4 },
      { filename: 'barton-springs.jpg', alt: 'Barton Springs', carouselOrder: 5 },
      { filename: 'proposal.jpg', alt: 'Proposal', carouselOrder: 8 },
      { filename: 'schlitterbahn.jpg', alt: 'Schlitterbahn', carouselOrder: 6 },
      { filename: 'chuck-and-noodle.jpg', alt: 'Chuck and Noodle', carouselOrder: 7 },
    ],
  },
  {
    header: <>It <b>formally</b> begins in Washington, D.C.</>,
    text: <>After defending his thesis and crafting an elaborate scavenger hunt proposal, Chuck accepted a job in the nation's capital, and the couple packed up and moved across the country to what will hopefully be their forever home. The two are enjoying being closer to family, living in a bustling walkable neighborhood, and learning how to make new friends as adults. They can't wait to celebrate their wedding in beautiful northern Virginia with everyone near and dear to them. See y'all in October!</>,
    images: [
      { filename: 'suitcases.jpg', alt: 'Suitcases', carouselOrder: 1 },
      { filename: 'bike-party.jpg', alt: 'DC Bike Party', carouselOrder: 5 },
      { filename: 'chucks-parents.jpg', alt: 'Burton Parents', carouselOrder: 3 },
      { filename: 'monument.jpg', alt: 'Washington Monument', carouselOrder: 6 },
      { filename: 'trail-of-lights.jpg', alt: 'Trail of Lights', carouselOrder: 2 },
      { filename: 'cherry-blossoms.jpg', alt: 'Cherry Blossoms', carouselOrder: 4 },
    ],
  }
];

const ImageCollage = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div>
      <Masonry>
        {images.map(({ filename, alt }, i) => (
          <img key={filename} src={`/images/${filename}`} alt={alt} className="story-img thumbnail" onClick={() => setSelectedIndex(i)} />
        ))}
      </Masonry>
      <Modal centered show={selectedIndex >= 0} onHide={() => setSelectedIndex(-1)}>
        <img src={`/images/${images[selectedIndex]?.filename}`} alt={images[selectedIndex]?.alt} className="story-img" onClick={() => setSelectedIndex(-1)} />
      </Modal>
    </div>
  );
};

const ImageCarousel = ({ images }) => (
  <Carousel interval={null} indicators={false} variant="dark">
    {[...images].sort((a, b) => a.carouselOrder - b.carouselOrder).map(({ filename, alt }) => (
      <Carousel.Item key={filename}>
        <img src={`/images/${filename}`} alt={alt} className="story-carousel-img" />
      </Carousel.Item>
    ))}
  </Carousel>
);

const Story = () => {
  const showThumbnailCollage = window.screen.width >= 1100;
  return (
    <div className="story page">
      <div className="alternating-content">
        {content.map(({ header, text, images }, i) => {
          const imagesOnRight = i % 2 === 0;
          return (
            <div key={i}>
              <span className="arrow">
                <Fade duration={2000}>
                  <img src={`/images/arrow-${i + 1}.png`} alt="Arrow" />
                </Fade>
              </span>
              <Fade duration={2000}>
                <div className={`alternating-row ${imagesOnRight ? 'odd-row' : 'even-row'}`}>
                  {!imagesOnRight && (
                    showThumbnailCollage ? <ImageCollage images={images} /> : <ImageCarousel images={images} />
                  )}
                  <div className={imagesOnRight ? 'left-align' : 'right-align'}>
                    <h1>{header}</h1>
                    <p>{text}</p>
                  </div>
                  {imagesOnRight && (
                    showThumbnailCollage ? <ImageCollage images={images} /> : <ImageCarousel images={images} />
                  )}
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Story;
