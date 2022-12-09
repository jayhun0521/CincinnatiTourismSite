import React, { Component } from 'react'
import './templates/home.css'


class Home extends Component {
  render() {
    return (
      <section className='homepage'>

      <div className='heading'>
        <h1 className='title'>Welcome to Cincinnati</h1>
      </div>
      <div className="cincinnati-img">
        <img src="https://media0.giphy.com/media/KK04ChrBCXakUq7y1I/giphy.gif?cid=6c09b952dd72d3ea1147a77892e5e1fd81db2cfb60bc7afe&rid=giphy.gif&ct=g" alt="" />
      </div>
      <div className="history">
        <h1 className='hist-title'>History</h1>
        <p className='hist-text'>Cincinnati was founded in 1788 by Mathias Denman. Colonel Robert, and Israel Ludlow. The name Cincinnati was named by romen soldiers back in the 5th century. Since then Cincinnati has grow lots and lots to now have a population of 308,935. Since then Cincinnati has grown a reputation to be known for out Chili, Beer, and now sports team. </p>
      </div>
      <div className="weather">
        <h1 className='forcast'>Forcast</h1>
      </div>
      <div className="famous">
      <h1 className='talent'>Talent that came from Cincinnati</h1>
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