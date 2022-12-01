import React, {Fragment} from 'react'
import './templates/contact.css'


const Contact = () => {
  return (
    <Fragment>

    <section className='contact'>

      <div className="contact-heading">
        <h2>Contact Us</h2>
      </div>

      <div className="container">
        <div className="row">

           <div className="column">
          <div className="contact-widget">

            <div className="contact-widget-item">
              <div className="icon">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h5>Address</h5>
                <p>1837 W Benard Street, Cincinnati, OH 45836, United States</p>
              </div>
            </div>

            <div className="contact-widget-item">
              <div className="icon">
              <i class="fa fa-mobile" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h5>Contact Us</h5>
                <p>513-777-2232 | 513-888-2232</p>
              </div>
            </div>

            <div className="contact-widget-item">
              <div className="icon">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h5>Mail</h5>
                <p>Howareyou.support@gmail.com</p>
              </div>
            </div>

          </div>
          </div>

          <div className="column">
            <div className="contact-form">
              <form action="#">
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <textarea placeholder='Comment'></textarea>
                <button type='submit' className='site-btn'>Send message</button>
              </form>
            </div>
          </div>

        </div>

        <div className="row">
          <div className="map-column">
            <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396118.90158498724!2d-84.82058396968877!3d39.13653732054923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884051b1de3821f9%3A0x69fb7e8be4c09317!2sCincinnati%2C%20OH!5e0!3m2!1sen!2sus!4v1669913371092!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style={{border: 0}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"> 
            </iframe>
            </div>
          </div>
        </div>
      </div>
 </section>

    </Fragment>
  )
}

export default Contact



