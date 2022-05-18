import React from 'react'
import './ourServices.css'

const OurServices = () => {
  return (
    <div>
      <section class="services" id="services">
        <h1 class="heading">
          {' '}
          our <span>services</span>{' '}
        </h1>

        <div class="box-container">
          <div class="box">
            <i class="fas fa-notes-medical"></i>
            <h3>Book checkups</h3>
            <p>Book your checkups with best medical experts fast and easy.</p>
          </div>

          <div class="box">
            <i class="fas fa-ambulance"></i>
            <h3>24/7 ambulance</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
          </div>

          <div class="box">
            <i class="fas fa-user-md"></i>
            <h3>expert doctors</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
          </div>

          <div class="box">
            <i class="fas fa-pills"></i>
            <h3>medicines</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
          </div>

          <div class="box">
            <i class="fas fa-procedures"></i>
            <h3>bed facility</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
          </div>

          <div class="box">
            <i class="fas fa-heartbeat"></i>
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
