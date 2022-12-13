import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Attraction = (props) => {
  return (
    <div className="allAttractions justify-content-lg-center">
      <Card style={{ width: "18rem", border: "2px solid" }}>
        <Card.Img
          variant="top"
          src={props.attraction.imageURL}
          style={{ border: "2px solid" }}
        />
        <Card.Body>
          <Card.Title>{props.attraction.name}</Card.Title>
          <Card.Text>
            <Link
              className="link-details"
              link
              to={"/attractions/" + props.attraction._id}
            >
              <Button
                variant="dark"
                size="md"
                data-toggle="button"
                aria-pressed="false"
                autocomplete="off"
              >
                Details
              </Button>
            </Link>
          </Card.Text>
          <Button variant="dark" size="md">
            <a
              className="link-site"
              href={props.attraction.website}
              target="_blank"
              rel="noreferrer"
              style={{ color: "white" }}
              data-toggle="button"
              aria-pressed="false"
              autocomplete="off"
            >
              Website
            </a>
          </Button>
        </Card.Body>
      </Card>
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
          <h3 className="attractionsSubHeader text-center"> Must-see locations that make Cincinnati unique</h3>    
          <br/>
          <h4 className="attractionsSelect text-center">Please select your point of interest</h4>
          <div className="attractionsInnerContainer">
            {this.attractionsList()}
          </div>
        </div>

    );
  }
}
