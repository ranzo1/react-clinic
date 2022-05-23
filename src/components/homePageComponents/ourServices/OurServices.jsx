import React from 'react'
import './ourServices.css'

const OurServices = () => {
  return (
    <div>
      <section className="services" id="services">
        <h1 className="heading">
          our <span>services</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-notes-medical"></i>
            <h3>Book checkups</h3>
            <p>Book your checkups with best medical experts fast and easy.</p>
          </div>

          <div className="box">
            <i className="fas fa-ambulance"></i>
            <h3>24/7 ambulance</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-user-md"></i>
            <h3>expert doctors</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-pills"></i>
            <h3>medicines</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-procedures"></i>
            <h3>bed facility</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-heartbeat"></i>
            <h3>total care</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurServices
