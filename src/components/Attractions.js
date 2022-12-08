import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Attraction = (props) => {
  return (
    <div className="allAttractions justify-content-lg-center">

<Card style={{ width: '18rem', border: '2px solid' }}>
      <Card.Img variant="top" src={props.attraction.imageURL} style={{border: '2px solid'}} />
      <Card.Body>
        <Card.Title>{props.attraction.name}</Card.Title>
        <Card.Text>
        <Link className='link-details' link to={'/attractions/' + props.attraction._id}><Button variant="dark" size="md" >Details</Button></Link>
        </Card.Text>
        <Button variant="dark" size="md" font-color='white'><a
                className="link-site"
                href={props.attraction.website}
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a></Button>
      </Card.Body>
    </Card>

        {/* {/* <div className="attractionsCard">
          <div className="cardImage">
            <img
              className="attractionImage"
              src={props.attraction.imageURL}
              alt="attraction picture"
            />
          </div>
          <div className="text">
            <div className="text-name" >{props.attraction.name}</div>
            <div className='text-link'>
                      <Link className='link-details' Link to={'/viewattractions'}>Details</Link>
                  </div>
            <div className="website">
              <a
                className="link-site"
                href={props.attraction.website}
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
            </div>
          </div> */}
        {/* </div> */} 
       

    </div>
  );
};

export default class Attractions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attractions: []
    
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/attractions/")
      .then((response) => {
        this.setState({
          attractions: response.data
          
        });
        console.log("this is the list of attractions");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  attractionsList() {
    return this.state.attractions.map((currentAttraction) => {
      return (
        <Attraction
          attraction={currentAttraction}
          key={currentAttraction._id}
        />
      );
    });
  }

  render() {
    return (

        <div className="attractionsContainer">
          <h2 className="attractionsHeader text-center">Attractions</h2>
          <div className="attractionsInnerContainer">
            {this.attractionsList()}
          </div>
        </div>

    );
  }
}
