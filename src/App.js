import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/about';
// import Contact from './components/contact';
// import AddAttraction from './components/AddAttraction'
// import Museums from './components/Museums'
// import Sport from './components/Sport'
// import Food from './components/Food'
// import Entertainment from '.components/Entertainment'
import Attractions from './components/Attractions'



function App() {
  return (
    <Router>
     <div className="container">
      {/* <Navbar /> */}
      <br/>
      <Route exact path='/' component={Home}/>
        {/* <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/> */}
        {/* <Route path='/Addattraction' component={AddAttraction} /> */}
        <Route path='/viewattractions' component={Attractions} />
        {/* <Route path='/Museums' component={Museums} />
        <Route path='/Sports' component={Sports} />
        <Route path='/Food' component={Food} />
        <Route path='/Entertainment' component={Entertainment} /> */}
      </div>
    </Router>
  );
}


export default App;
