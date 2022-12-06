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

      </section>
     
    )
  }
}
export default Home;