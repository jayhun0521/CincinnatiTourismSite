import React from 'react'

const about = () => {
  return (
    <div className='container dev-profile'>
      <form method="">
        <div className="row">
          <div className="col-md-4">
            <img src="7-8-22.jpg" alt="" />
          </div>

          <div className="col-md-6">
            <div className="profile-head">
              <h3>Jason Hunter</h3>
              <h4>Web Developer</h4>
              <p className='profile-description'>About Me</p>

               <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="about-tab" data-toggle="tab" href="#about" role="tab">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" id="proficiency-tab" data-toggle="tab" href="#profile" role="tab">Technologies</a>
                </li>
               </ul>
            </div>
          </div>
          
          <div className="col-md-2">
            <input type="submit" className='profile-edit-btn' name='btn' value='Edit Profile'/>
          </div>
        </div>

      </form>
    </div>
  )
}

export default about