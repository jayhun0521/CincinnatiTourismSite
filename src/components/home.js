import React, { Component } from 'react'
import './templates/home.css'


class Home extends Component {
  render() {
    return (
      <section className='homepage'>

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

        </li>
        <li> <a href="https://en.wikipedia.org/wiki/Travis_Kelce">
          <span className="name">Travis Kelce</span></a>
          <span className="age">33</span>
          <span className="occupation">Football</span>
          <span className="logo"><i class="fa-solid fa-football"></i></span>
          
        </li>
        <li><a href="https://en.wikipedia.org/wiki/Carmen_Electra">
          <span className="name">Carmen Electra</span></a>
          <span className="age">50</span>
          <span className="occupation">Actress</span>
          <span className="logo"><i class="fa-solid fa-football"></i></span>
          
        </li>
        <li> <a href="https://en.wikipedia.org/wiki/William_Howard_Taft">
          <span className="name">William Howard Taft</span></a>
          <span className="age">72</span>
          <span className="occupation">President</span>
          <span className="logo"><i class="fa-solid fa-football"></i></span>
        </li>
        <li><a href="https://en.wikipedia.org/wiki/Luke_Kuechly">
          <span className="name">Luke Kuechly</span></a>
          <span className="age">31</span>
          <span className="occupation">Football</span>
          <span className="logo"><i class="fa-solid fa-football"></i></span>
        </li>
        <li><a href="https://en.wikipedia.org/wiki/Pete_Rose">
          <span className="name">Pete Rose</span></a>
          <span className="age">81</span>
          <span className="occupation">Baseball</span>
          <span className="logo"><i class="fa-solid fa-football"></i></span>
        </li>
        <li><a href="https://en.wikipedia.org/wiki/Sam_Hubbard">
          <span className="name">Sam Hubbard</span></a>
          <span className="age">27</span>
          <span className="occupation">Football</span>
          <span className="logo"><i class="fa-solid fa-football"></i></span>
        </li>
        <li><a href="https://en.wikipedia.org/wiki/Ken_Griffey_Jr.">
          <span className="name">Ken Griffey Jr.</span></a>
          <span className="age">53</span>
          <span className="occupation">Baseball</span>
          <span className="logo"><i class="fa-solid fa-football"></i></span>
        </li>
          {/* <li>Russell Wilson</li>
          <li>Nick Lachey</li>
          <li>Travis Kelce</li>
          <li>Carmen Electra</li>
          <li>William Howard Taft</li>
          <li>Luke Kuechly</li>
          <li>Pete Tose</li>
          <li>Sam Hubbard</li>
          <li>Ken Griffey Jr.</li> */}
        </ul>
      </div>

      </section>
     
    )
  }
}
export default Home;