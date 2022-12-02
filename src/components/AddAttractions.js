import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class AddAttractions extends Component {
  constructor(props) {
    super(props);

    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        location:'',
        description:'',
        locations: []
    }       
}

componentDidMount() {
    axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
    .then(response => {
         this.setState({
            location: response.data.location,
            description: response.data.description,
            
         })
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response =>{
        if(response.data.length > 0) {
         this.setState({
            location: response.data.map(user => user.location)
         })
        }
      })

}

onChangeLocation(e) {
    this.setState({
        location: e.target.value
    });

}
onChangeDescription(e) {
    this.setState({
        description: e.target.value
    });
}

onSubmit(e) {
    e.preventDefault();

    const attraction = {
        location: this.state.username,
        description: this.state.description
    }

    console.log(attraction);

    axios.post('http://localhost:5000/attractions/update/'+this.props.match.params.id, attraction)
          .then(res => console.log(res.data));

    // window.location = '/';
}

render() {
    return (
        <div>
            <h3>Add Attraction</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <label>Location: </label>
                <select ref="locationInput"
                    required
                    className="form-control"
                    value={this.state.location}
                    onChange={this.onChangeLocation}>
                    {
                        this.state.locations.map(function(location) {
                            return <option
                            key={location}
                            value={location}>{location}
                            </option>;
                        })
                    }
                </select>
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input type="text" 
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                    />    
                </div>
      
                <div className="form-group">
                    <input type="submit" value="Add Attraction" className='btn btn-primary' />
                </div>
            </form>
        </div>
       
    )
}
}

export default withRouter(AddAttractions)