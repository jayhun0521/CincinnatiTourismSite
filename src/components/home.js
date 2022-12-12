import React, { Component } from 'react';
import './templates/home.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <section className="homepage">
        <div className="heading">
          <h1 className="title">Welcome to Cincinnati</h1>
        </div>
        <div className="cincinnati-img">
          <img
            src="https://media0.giphy.com/media/KK04ChrBCXakUq7y1I/giphy.gif?cid=6c09b952dd72d3ea1147a77892e5e1fd81db2cfb60bc7afe&rid=giphy.gif&ct=g"
            alt=""
          />
        </div>
        <div className="history">
          <h1 className="hist-title">History</h1>
          <p className="hist-text">
            Cincinnati was founded in 1788 by Mathias Denman. Colonel Robert,
            and Israel Ludlow. The name Cincinnati was named by romen soldiers
            back in the 5th century. Since then Cincinnati has grow lots and
            lots to now have a population of 308,935. Since then Cincinnati has
            grown a reputation to be known for out Chili, Beer, and now sports
            team.{" "}
          </p>
        </div>
        <div className="weather">
          <h1 className="forcast">Forcast</h1>
        </div>
        <div className="famous">
          <h1 className="talent">Talent that came from Cincinnati</h1>
          <ul className="names">
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
          </ul>
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

<<<<<<< HEAD
      <div className='heading'>
        <h1 className='title'>Welcome to Cincinnati Tours</h1>
        <br/>
        <h3><blockquote>Learn about places to go, things to do, and see in this historic American city! </blockquote></h3>
        <br />
      </div>
      <div className="cincinnati-img">
        <img src="https://media0.giphy.com/media/KK04ChrBCXakUq7y1I/giphy.gif?cid=6c09b952dd72d3ea1147a77892e5e1fd81db2cfb60bc7afe&rid=giphy.gif&ct=g" alt="" />
      </div>
      <div className="history">
        <h2 className='hist-title'>History</h2>
        <div className='hist-text'>
        <p>Cincinnati (/ˌsɪnsɪˈnæti/ SIN-si-NAT-ee) is a city in the U.S. state of Ohio and the county seat of Hamilton County. Settled in 1788, the city is located at the northern side of the confluence of the Licking and Ohio rivers, the latter of which marks the state line with Kentucky. The city is the economic and cultural hub of the Cincinnati metropolitan area. With an estimated population of 2,256,884, it is Ohio's largest metropolitan area and the nation's 30th-largest, and with a city population of 309,317, Cincinnati is the third-largest city in Ohio and 64th in the United States. Throughout much of the 19th century, it was among the top 10 U.S. cities by population, surpassed only by New Orleans and the older, established settlements of the United States eastern seaboard, as well as being the sixth-most populous city from 1840 until 1860. </p>
        <p>
        Cincinnati is home to three major sports teams: the Cincinnati Reds of Major League Baseball; the Cincinnati Bengals of the National Football League; and FC Cincinnati of Major League Soccer; it is also home to the Cincinnati Cyclones, a minor league ice hockey team. The city's largest institution of higher education, the University of Cincinnati, was founded in 1819 as a municipal college and is now ranked as one of the 50 largest in the United States. Cincinnati is home to historic architecture with many structures in the urban core having remained intact for 200 years. In the late 1800s, Cincinnati was commonly referred to as the "Paris of America", due mainly to such ambitious architectural projects as the Music Hall, Cincinnatian Hotel, and Shillito Department Store. Cincinnati is the birthplace of William Howard Taft, the 27th President and former Chief Justice of the United States.
        </p>
        <p >To see more, go to <a href="https://en.wikipedia.org/wiki/Cincinnati">Wikipedia </a></p>
        </div>
      </div>
      <div className="weather">
        <h2 className='forcast'>Forecast</h2>
      </div>
      <div className="famous">
      <h2 className='talent'>Famous Cincinnati Natives</h2>
        <ul className='names'>
        <li><a href="https://en.wikipedia.org/wiki/Russell_Wilson">
          <span className="name"> Russell Wilson</span></a>
          <span className="age">34</span>
          <span className="occupation">Football</span>
          <span className="logo"><i class="fa-solid fa-football"></i></span>
          
        </li>
        <li> <a href="https://en.wikipedia.org/wiki/Nick_Lachey">
          <span className="name">Nick Lachey</span></a>
          <span className="age">49</span>
          <span className="occupation">Actor/singer</span>
          <span className="logo"><i class="fa-solid fa-football"></i></span>
=======
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
>>>>>>> c5244c3437cc889f26c4c29f57f4b471bfae3c27

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
                src="https://e7n9s5t9.stackpathcdn.com/articles/wp-content/uploads/2019/07/browns-vs-bengals.jpg"
              />
              <Card.Body>
                <Card.Title>Bengal Sunday</Card.Title>
                <Card.Text>
                  This Sunday the bengals face off agaist the Desean Watson and
                  the browns to hopefully get Joe Burrow's first win in his
                  carrer agaist them.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
    
                    <a href="https://local12.com/sports/bengals/cincinnati-bengals-sam-hubbard-teammates-try-end-5-game-skid-against-cleveland-browns-we-kind-of-owe-these-guys-nfl-pro-football-joe-mixon-burrow-deshaun-watson-myles-garrett-battle-ohio">
        
                    <button>More Info</button>
                    </a>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </section>
    );
  }
}
export default Home;