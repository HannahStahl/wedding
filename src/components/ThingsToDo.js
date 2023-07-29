import React from 'react';
import { Fade } from 'react-awesome-reveal';

const ThingsToDo = () => (
  <div className="page">
    <div className="things-to-do left-aligned">
      <Fade duration={2000} triggerOnce={true}>
        <div>
          <p>
            There is a nearly endless set of activities to do and sights to see in and around the DMV (that’s DC, Maryland, Virginia for you out-of-towners). Whether you’re turning the trip into a long weekend or just need something to do on Saturday morning, we hope this list provides a good starting point for your exploration of our home city.
          </p>
        </div>
      </Fade>
      <Fade duration={2000} triggerOnce={true}>
        <div>
          <h1>DC</h1>
          <p>
            Downtown is about a 45-minute drive from the venue and hotels (longer if traffic is bad). For getting into town from Sterling, an alternate and/or easier method is to take Metro. The Silver Line runs every 12 minutes and costs $2/ride on weekends (a little more on weekdays). You can pay on your phone (instructions <a href="https://www.wmata.com/fares/mobilepay/" target="_blank" rel="noopener noreferrer">here</a>) or using the fare machines in the station. If you plan to park and ride, the Wiehle-Reston East station, located at 11389 Reston Station Blvd, offers free parking on weekends and is probably your best bet. For downtown activities, Smithsonian Station is a good place to disembark.
          </p>
          <ul>
            <li>
              The Smithsonian Institution runs a truly iconic set of museums. All have free entry. The full list can be found <a href="https://www.si.edu/visit/hours" target="_blank" rel="noopener noreferrer">here</a>, but a few personal favorites include the <a href="https://airandspace.si.edu/" target="_blank" rel="noopener noreferrer">National Air and Space Museum</a> (requires passes), <a href="https://naturalhistory.si.edu/" target="_blank" rel="noopener noreferrer">National Museum of Natural History</a>, and <a href="https://americanart.si.edu/" target="_blank" rel="noopener noreferrer">The Smithsonian American Art Museum</a>.
            </li>
            <li>
              <a href="https://nationalzoo.si.edu/" target="_blank" rel="noopener noreferrer">The National Zoo</a> (requires passes). Pandas!
            </li>
            <li>
              There are a number of memorials clustered around the National Mall, all roughly within walking distance of each other: Washington Monument, Lincoln Memorial, Jefferson Memorial, FDR Memorial, Vietnam Veterans Memorial, MLK Jr. Memorial, Korean War Veterans Memorial, World War II Memorial.
            </li>
            <li>
              <a href="https://www.arlingtoncemetery.mil/Explore/Monuments-and-Memorials/Tomb-of-the-Unknown-Soldier" target="_blank" rel="noopener noreferrer">Arlington National Cemetery</a> welcomes visitors to tour its hallowed grounds. The Changing of the Guard Ceremony at the Tomb of the Unknown Soldier takes place every half hour. (This is just across the Potomac River in VA.)
            </li>
            <li>
              Tours of the <a href="https://www.visitthecapitol.gov/" target="_blank" rel="noopener noreferrer">Capitol</a> are free and run throughout the morning and afternoon. Advanced reservations recommended.
            </li>
          </ul>
        </div>
      </Fade>
      <Fade duration={2000} triggerOnce={true}>
        <div>
          <h1>Northern Virginia</h1>
          <ul>
            <li>
              Great Falls National Park offers beautiful scenery and a number of great hiking trails at a variety of difficulty levels. Approximately 20-minute drive from venue/hotels.
            </li>
            <li>
              The <a href="https://www.si.edu/museums/air-and-space-museum-udvar-hazy-center" target="_blank" rel="noopener noreferrer">National Air and Space Museum - Steven F. Udvar-Hazy Center</a>. This is separate from the main location, and is basically a large airplane hangar with the space shuttle Discovery, a retired Concorde, the Enola Gay B-29, and much more! Approximately 15-minute drive from venue/hotels.
            </li>
          </ul>
        </div>
      </Fade>
      <Fade duration={2000} triggerOnce={true}>
        <div>
          <h1>Algonkian Regional Park</h1>
          <ul>
            <li>
              Hiking trails.
            </li>
            <li>
              <a href="https://www.novaparks.com/golf/algonkian-golf-course" target="_blank" rel="noopener noreferrer">Algonkian Golf Course</a>. Tee times may be made online, or by calling the park at 703-450-4655.
            </li>
            <li>
              Playground.
            </li>
            <li>
              Launch ramp for boats, kayaks, and paddle boards if you have one. (There are no boats available for rental.) Swimming/wading in the Potomac River is prohibited due to dangerous currents.
            </li>
            <li>
              Fishing in the Potomac River requires a Virginia or Maryland fishing license for persons aged 16 or over. Licenses are available at local sporting goods stores.
            </li>
            <li>
              The park maintains a list of activities in and around the park, which you can find <a href="https://www.novaparks.com/things-to-do" target="_blank" rel="noopener noreferrer">here</a>.
            </li>
          </ul>
        </div>
      </Fade>
    </div>
  </div>
);

export default ThingsToDo;
