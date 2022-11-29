import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AddAttraction from './pages/AddAttraction'
import Museums from './pages/Museums'
import Sport from './pages/Sport'
import Food from './pages/Food'
import Entertainment from './pages/Entertainment'
import Attractions from './pages/Attractions'



function App() {
  return (
    <Router>
     <div className="container">
      <Navbar />
      <br/>
      <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/Addattraction' component={AddAttraction} />
        <Route path='/viewattractions' component={Attractions} />
        <Route path='/Museums' component={Art} />
        <Route path='/Sport' component={Sport} />
        <Route path='/Food' component={Food} />
        <Route path='/Entertainment' component={Entertainment} />
      </div>
    </Router>
  );
}


export default App;
