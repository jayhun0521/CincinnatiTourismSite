import axios from 'axios'
import React, { Component } from 'react'

class SingleAttraction extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
  }

  componentDidMount(){
    axios.get(localhost:5000/attractions/ + (this.props.match.params.id)
    .then((response) => {
      this.setState({
        name: response.data.name
      })
    })
  }
  render() {
    return (
      <div>
        {this.state.name}
      </div>
    )
  }
}
export default SingleAttraction;



