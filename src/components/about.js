import React, {useState} from 'react'
import image1 from './photos/7-8-22.jpg'
import image2 from './photos/IMG_0269.jpg'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import { relative } from 'path';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const About = () => {
  // const {key, setKey} = useState('home');
  return (
    <div className="container dev-profile">
      <form method="">
      <div className="row">
        <div className="col-lg-3">
        <img src={image1} className="rounded float-start img-fluid" alt="Jason Hunter"  />
        <div className="about-work"><span style={{fontSize: '15px', fontWeight: 'bold'}}>
              <a href="https://www.linkedin.com/in/jasonethunter/" target="">
                {" "}
                LinkedIn
              </a><br />
              <a href="https://github.com/jayhun0521" target="">
                {" "}
                Github
              </a><br />
              </span>
            </div>  
        </div>
        <div className="col-lg-9">
            <h1>Jason Hunter</h1>
            <h2>Web Developer, Back-end Specialist</h2>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="aboutme" title="About Me">
              <p>Jason is a US Army veteran and recent MBA graduate with 7+ years
                of professional experience in HR recruitment and IT Staffing
                currently pursuing Web Development certifications at Kable
                Academy; graduating in December 2022 and seeking a front-end
                developer position with a dynamic and well-regarded
                organization. Personal achievements include military service in
                the US Army and recognition on multiple levels on tour during
                Operation Iraqi Freedom and Operation Enduring Freedom.{" "}
              </p>    
            </Tab>
       <Tab eventKey="technologies" title="Technologies">
         <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Bootstrap</li>
          <li>Node.js</li>
          <li>MongoDB/NoSQL</li>
         </ul>
      </Tab>
     </Tabs>
        </div>
    </div>
    <FontAwesomeIcon icon={faEnvelope} />
    <hr />
        <div className="row">          
        </div>
      </form>

      <div className="row">
        <div className="col-lg-3">
        <img src={image2} className="rounded float-start img-fluid" alt="Darius Martin" />
        <div className="about-work">
            <span style={{fontSize: '15px', fontWeight: 'bold'}}>
              <a href="http://www.linkedin.com/in/darius-martin-924b52215" target="">
                {" "}
                LinkedIn
              </a><br />
              <a href="https://github.com/Martyahmood32" target="">
                {" "}
                Github
              </a><br />
            </span>
            </div>
        </div>
        <div className="col-lg-9">
            <h1>Darius Martin</h1>
            <h2>Web Developer, Front-end Specialist</h2>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="about" title="About">
              <p>Hey I’m Darius I am 18 and was born and raised here in Cincinnati, Ohio. I am currently a student a Kable Academy where I am learning Web Development and business skills. Before Kable academy I was working at Larosas call center(which is a company built here in Cincinnati) for 2 years where I was a supervisor and was working with a team of other supervisors fixing order problems and helping stores with their issues. I plan on using my team working skills and computer knowledge to open more opportunities for myself and to better the company of my future job to the best of my ability.{" "}</p> </Tab>
              <Tab eventKey="technologies" title="Technologies">
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Bootstrap</li>
                    <li>Node.js</li>
                    <li>MongoDB/NoSQL</li>
                  </ul> </Tab>
              </Tabs>
        </div>
    </div>
    <FontAwesomeIcon icon={faEnvelope} />
    </div>
    
  );
}

export default About