import React, { Component } from 'react';
import './templates/home.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';



class Home extends Component {
  render() {
    return (
      <section className="homepage">
        <div className='heading'>
        <Carousel>
      <Carousel.Item>
        <img
          className="picture w-100"
          src="https://lyfepyle.com/wp-content/uploads/2021/05/Cincinnati-Cover-Photos.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Welcome to Cincinnati</h2>
          <p>Learn about places to go, things to do, and see in this historic American city!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="picture w-100"
          src="https://datenightcincinnati.com/wp-content/uploads/sites/52/2019/02/DmMpOrhWsAEdT4c.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>Welcome to Cincinnati</h2>
          <p>Learn about places to go, things to do, and see in this historic American city!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="picture w-100"
          src="https://i.ytimg.com/vi/BZFWeuF2O4c/maxresdefault.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>Welcome to Cincinnati</h2>
          <p>
          Learn about places to go, things to do, and see in this historic American city!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
     
      <div className="history">
        <h2 className='hist-title' id="history-text">History</h2>
        </div>
        <div className='hist-text'>
        <p>Cincinnati (/ˌsɪnsɪˈnæti/ SIN-si-NAT-ee) is a city in the U.S. state of Ohio and the county seat of Hamilton County. Settled in 1788, the city is located at the northern side of the confluence of the Licking and Ohio rivers, the latter of which marks the state line with Kentucky. The city is the economic and cultural hub of the Cincinnati metropolitan area. With an estimated population of 2,256,884, it is Ohio's largest metropolitan area and the nation's 30th-largest, and with a city population of 309,317, Cincinnati is the third-largest city in Ohio and 64th in the United States. Throughout much of the 19th century, it was among the top 10 U.S. cities by population, surpassed only by New Orleans and the older, established settlements of the United States eastern seaboard, as well as being the sixth-most populous city from 1840 until 1860. </p>
        <p>
        Cincinnati is home to three major sports teams: the Cincinnati Reds of Major League Baseball; the Cincinnati Bengals of the National Football League; and FC Cincinnati of Major League Soccer; it is also home to the Cincinnati Cyclones, a minor league ice hockey team. The city's largest institution of higher education, the University of Cincinnati, was founded in 1819 as a municipal college and is now ranked as one of the 50 largest in the United States. Cincinnati is home to historic architecture with many structures in the urban core having remained intact for 200 years. In the late 1800s, Cincinnati was commonly referred to as the "Paris of America", due mainly to such ambitious architectural projects as the Music Hall, Cincinnatian Hotel, and Shillito Department Store. Cincinnati is the birthplace of William Howard Taft, the 27th President and former Chief Justice of the United States.
        </p>
        <p >To see more, go to <a href="https://en.wikipedia.org/wiki/Cincinnati">Wikipedia </a></p>
        </div>

       
        <div className="weather">
          <h1 className="forcast">Forcast</h1>
          <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/20/e6/03/20e60377fb5710a7335be9bec1884877.gif" />
        <Card.Body>
          <Card.Title>Monday</Card.Title>
          <Card.Text>
            Partually sunny with ah high of 43 and a low of 31
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://media.tenor.com/438H6u87JfsAAAAM/sky-clouds.gif" />
        <Card.Body>
          <Card.Title>Tuesday</Card.Title>
          <Card.Text>
           Cloudy day with a high of 46 and a low of 27{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://cdn.dribbble.com/users/199340/screenshots/2146877/rainy-800x600.gif" />
        <Card.Body>
          <Card.Title>Wednesday</Card.Title>
          <Card.Text>
            100% chance of rain with a high of 48 and a low of 38
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://cdn.dribbble.com/users/199340/screenshots/2146877/rainy-800x600.gif" />
        <Card.Body>
          <Card.Title>Thursday</Card.Title>
          <Card.Text>
            50% chance of rain with a high of 37 amd a low of 30 longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://media.tenor.com/438H6u87JfsAAAAM/sky-clouds.gif" />
        <Card.Body>
          <Card.Title>Friday</Card.Title>
          <Card.Text>
            Cloudy day with a high of 38 and a low of 29{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://media.tenor.com/438H6u87JfsAAAAM/sky-clouds.gif" />
        <Card.Body>
          <Card.Title>Saturday</Card.Title>
          <Card.Text>
            Cloudy day with a high of 33 and a low of 25
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  
    
        </div>
        <div className="famous">
         
          {/* <ul className="names">
            <li>
              <a href="https://en.wikipedia.org/wiki/Russell_Wilson">
                <span className="name"> Russell Wilson</span>
              </a>
              <span className="age">34</span>
              <span className="occupation">Football</span>
              <span className="logo">
                <i class="fa-solid fa-football"></i>
              </span>
            </li>
            <li>
              {" "}
              <a href="https://en.wikipedia.org/wiki/Nick_Lachey">
                <span className="name">Nick Lachey</span>
              </a>
              <span className="age">49</span>
              <span className="occupation">Actor/singer</span>
              <span className="logo">
                <i class="fa-solid fa-football"></i>
              </span>
            </li>
            <li>
              {" "}
              <a href="https://en.wikipedia.org/wiki/Travis_Kelce">
                <span className="name">Travis Kelce</span>
              </a>
              <span className="age">33</span>
              <span className="occupation">Football</span>
              <span className="logo">
                <i class="fa-solid fa-football"></i>
              </span>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Carmen_Electra">
                <span className="name">Carmen Electra</span>
              </a>
              <span className="age">50</span>
              <span className="occupation">Actress</span>
              <span className="logo">
                <i class="fa-solid fa-football"></i>
              </span>
            </li>
            <li>
              {" "}
              <a href="https://en.wikipedia.org/wiki/William_Howard_Taft">
                <span className="name">William Howard Taft</span>
              </a>
              <span className="age">72</span>
              <span className="occupation">President</span>
              <span className="logo">
                <i class="fa-solid fa-football"></i>
              </span>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Luke_Kuechly">
                <span className="name">Luke Kuechly</span>
              </a>
              <span className="age">31</span>
              <span className="occupation">Football</span>
              <span className="logo">
                <i class="fa-solid fa-football"></i>
              </span>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Pete_Rose">
                <span className="name">Pete Rose</span>
              </a>
              <span className="age">81</span>
              <span className="occupation">Baseball</span>
              <span className="logo">
                <i class="fa-solid fa-football"></i>
              </span>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Sam_Hubbard">
                <span className="name">Sam Hubbard</span>
              </a>
              <span className="age">27</span>
              <span className="occupation">Football</span>
              <span className="logo">
                <i class="fa-solid fa-football"></i>
              </span>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Ken_Griffey_Jr.">
                <span className="name">Ken Griffey Jr.</span>
              </a>
              <span className="age">53</span>
              <span className="occupation">Baseball</span>
              <span className="logo">
                <i class="fa-solid fa-football"></i>
              </span>
            </li>
          </ul> */}
        </div>
        <div className="news">
          <h1 className="news-head">News</h1>
        </div>
        <div className="news-cards">
          {/* <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                yooooo
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row> */}
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="https://local12.com/resources/media/4a2a883e-d700-4d50-9f3e-789b6284c85b-medium16x9_Eatery.PNG?1670560001613"
              />
              <Card.Body>
                <Card.Title>Good Plates Eatery</Card.Title>
                <Card.Text>
                  Good Plates Eatery is offfering free meals to those in need
                  during the holiday season.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href="https://local12.com/news/local/good-plates-eatery-offers-free-meals-during-the-holiday-season-to-those-in-need-andrew-schlanser-chef-thanksgiving-christmas-kids-home-mcmillan-street-restaurant-generous-donors-food-supplies-act-goodness-cuf-cincinnati-ohio" target="_blank">
                  <button> More Info</button>
                </a>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://local12.com/resources/media2/original/full/1306/center/80/2922f89b-4d2e-4d47-a098-2f52d9cd8e71-Lights.PNG"
              />
              <Card.Body>
                <Card.Title>Hamilton Lights</Card.Title>
                <Card.Text>
                  Hamilton is featuring lights this year for the holiday season.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                    <a href="https://local12.com/news/local/illuminate-hamilton-features-light-displays-for-the-holidays-laser-shows-show-several-buildings-visitors-holiday-shopping-winter-luminaries-line-streets-ohio">
                  <button>More Info</button>
                  </a>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://local12.com/resources/media/ef31c986-fcfc-454e-a0ed-de528202f350-largeScale_f4eb5d26e1eb4d2da4b09b00b95dabcc318452238_1561212671062585_1033827059381705423_n.jpg?1670602434287"
              />
              <Card.Body>
                <Card.Title>First gym opens for kids with autism </Card.Title>
                <Card.Text>
                  Near by gym opens up for kids with autism so that they could
                  have the same fun and activness with safty as well.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
 
                    <a href="https://local12.com/news/local/gym-catering-children-kids-autism-autistic-open-first-branch-northern-kentucky-cincinnati-erlanger-rock-rock-spectrum-zipline-trampoline-swing-becky-stenger">
                <button>More Info</button>
                </a>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
        <div className="news-cards">

{/* ======= */}
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="https://local12.com/resources/media/a8779b3c-9a88-4e8e-a12f-c055e6b6a7b0-medium16x9_6e60b04167974001ba4e1f0595dee334UCCOACHSCOTTSATTERFIELD12.05.22_frame_89507.jpeg?1670596438958"
              />
              <Card.Body>
                <Card.Title>New coach in town</Card.Title>
                <Card.Text>
                  New Bearcat, coach Satterfield is the new head coach for UC
                  and at a cheaper price.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
{/* >>>>>>> c5244c3437cc889f26c4c29f57f4b471bfae3c27 */}

                   <a href="https://local12.com/sports/uc-bearcats/cincinnati-bearcats-football-coach-satterfield-pay-salary-less-than-fickell-wisconsin-badgers-contract#">
                  
                <button>More Info</button>
                </a>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://local12.com/resources/media/8872192a-58ee-4e29-946b-1793458f688a-medium16x9_Capture.JPG?1670554134599"
              />
              <Card.Body>
                <Card.Title>Ohio State beats Rutgers</Card.Title>
                <Card.Text>
                  Tanner Holden makes buzzer beater 3 to win the game. Final
                  score 67-66.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>

                    <a href="https://local12.com/sports/osu-buckeyes/holden-beats-buzzer-with-3-no-25-ohio-state-edges-rutgers">
                  
               
                <button>More Info</button>
                </a>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="http://s.espncdn.com/stitcher/sports/football/nfl/events/401437914.png?templateId=espn.com.share.1"
              />
              <Card.Body>
                <Card.Title>Bengal Sunday</Card.Title>
                <Card.Text>
                  Bengals beat the browns this past sunday with a final score of 23-10, Burrow and the Bengals will face off agaist Brady and Tampa Bay to hopefully continue their streak
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                    <a href="https://www.espn.com/nfl/game/_/gameId/401437914">
        
                    <button>More Info</button>
                    </a>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>

        <div className="practice">
          <h2 className="text-center">Talent from Cincinnati</h2>
          <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="picture w-100"
          src="https://cdn.vox-cdn.com/thumbor/MklJpzO0aNlqdBwguvG2tpseerU=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23299158/RussellWilsonBroncos_Getty_Ringer.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Russell Wilson</h3>
          <p>Starting QB for the Denver Broncos he's in season 10 and has won a superbowl back in.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="picture w-100"
          src="https://www.billboard.com/wp-content/uploads/media/nick-lachey-2019-portrait-billboard-1548.jpg?w=1024"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Nick Lachey</h3>
          <p>Nick is a  singer, actor, television personality, and host. He rose to fame as the lead singer of the multi-platinum-selling boyband 98 Degrees, and later starred in some reality series.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="picture w-100"
          src="http://del.h-cdn.co/assets/17/30/1024x512/landscape-1500921835-delish-carmen-electra.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Camen Electra</h3>
          <p>
          Carmen is an American actress, model, singer, and media personality.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="picture w-100"
          src="https://cdn.vox-cdn.com/thumbor/GPTWQV1c3YfPLX-RnMe8eYlAIy0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19602941/Luke_Kuechly.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Luke Kuechly</h3>
          <p>Former Linebacker for the panthers Luke Kuechly was a 2012 defensive rookie of the year but later retired in 2021 because of health reasons.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="picture w-100"
          src="https://mlb.nbcsports.com/wp-content/uploads/sites/7/2020/03/GettyImages-515218066-e1584710260329.jpg"
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h3>Pete Rose</h3>
          <p>Pete Rose aka American former professional baseball player and manager. He won three World Series, three batting titles, one Most Valuable Player Award, two Gold Gloves, and the Rookie of the Year Award.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="picture w-100"
          src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDgwNzkzNDE3MDMz/william_howard_taft.jpg"
          alt="Sixth slide"
        />

        <Carousel.Caption>
          <h3>William Howard Taft</h3>
          <p>
          William was the 27th president back in 1909 and became the 10th chief justice of the U.S.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
       </Carousel>
        </div>
      </section>
    );
  }
}
export default Home;