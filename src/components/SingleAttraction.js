import axios from 'axios'
import React, { Component } from 'react'
import './singleAttraction.css'

class SingleAttraction extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        description: '',
        website: '',
        imageURL: '',
        location: {
            address: '',
            city: '',
            state: '',
            zipcode: '',
        },
        indoors: false,
        childFriendly: false
    }
}
componentDidMount() {
    axios.get('http://localhost:5000/attractions/' + this.props.match.params.id)
    .then((response) => {
        this.setState({
            name: response.data.name,
            description: response.data.description,
            website: response.data.website,
            imageURL: response.data.imageURL,
            location: {
                address: response.data.location.address,
                city: response.data.location.city,
                state: response.data.location.state,
                zipcode: response.data.location.zipcode
            },
            indoors: response.data.indoors.toString(),
            childFriendly: response.data.childFriendly.toString()
        })
    })
    .catch((error) => {
        console.log(error)
    })
    console.log(this.state)
}
  render() {
    return (
      <div className='singleHeaderContainer'>
        <h1>{this.state.name}</h1>
        <div>
          <div className='singleContainer'>
              <div className="singleHeaderContainer">
                  <div className="singleHeaderInfo">
                      <div className='singleName'>
                          {this.state.name}
                      </div>
                      <div className='singleAddress'>
                      <div className='text-single-address'>
                          {this.state.location.address}
                          <br />
                          {this.state.location.city}, {this.state.location.state}, {this.state.location.zipcode}
                      </div>
                  </div>
                  </div>
                  <div className="singleHeaderImage">
                      <img className='singleImage' src={this.state.imageURL} alt='' />
                  </div>
                  <div className="singleDescriptionContainer">
                      <div className='singleDescription'>
                          {this.state.description}
                      </div>
                      <div className="singleBooleans">
                          <div id="singleIndoors"><span>Indoors?</span> <br/> {this.state.indoors}</div>
                          <div id="singleFamily"><span>Family Friendly?</span> <br/> {this.state.childFriendly}</div>
                      </div>
                      <div className='singleAttractionButton'>
                      <button className=''>
                      <a href={this.state.website} className='attractionLink' target="_blank" rel="noreferrer">Visit Website</a>
                      </button>
                      </div>
                   </div>
              </div>
          </div>
      </div>
    </div>  
    )
  }
}
export default SingleAttraction;



