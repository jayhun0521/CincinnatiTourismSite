import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AddAttractions from './components/AddAttractions';
// import Museums from './components/Museums'
// import Sport from './components/Sport'
// import Food from './components/Food'
// import Entertainment from '.components/Entertainment'
// import Attractions from './components/Attractions'
import Footer from './components/Footer';



function App() {
  return (
    <Router>
     <div className="container">
      <Navbar />
      <br/>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/> 
        <Route path='/addattractions' component={AddAttractions} />
        {/* <Route path='/viewattractions' component={Attractions} /> */}
        {/* <Route path='/Museums' component={Museums} /> */}
        {/* <Route path='/Sports' component={Sports} /> */}
        {/* <Route path='/Food' component={Food} /> */}
        {/* <Route path='/Entertainment' component={Entertainment} /> */}
      <Footer />
      </div>
    </Router>
  );
}


export default App;
