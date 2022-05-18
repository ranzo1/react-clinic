import React from 'react'
import './home.css'
import { ReactComponent as HomeImgSvg } from '../../assets/home-img.svg'

const Home = () => {
  return (
    <div>
      <section class="home" id="home">
        <div class="image">
          <HomeImgSvg />
        </div>

        <div class="content">
          <h3>stay safe, stay healthy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed
            autem vero? Magnam, est laboriosam!
          </p>
          <a href="#" class="btn">
            contact us <span class="fas fa-chevron-right"></span>
          </a>
        </div>
      </section>
      <section class="icons-container">
        <div class="icons">
          <i class="fas fa-user-md"></i>
          <h3>140+</h3>
          <p>doctors at work</p>
        </div>

        <div class="icons">
          <i class="fas fa-users"></i>
          <h3>1040+</h3>
          <p>satisfied patients</p>
        </div>

        <div class="icons">
          <i class="fas fa-procedures"></i>
          <h3>500+</h3>
          <p>bed facility</p>
        </div>

        <div class="icons">
          <i class="fas fa-hospital"></i>
          <h3>80+</h3>
          <p>available hospitals</p>
        </div>
      </section>
    </div>
  )
}

export default Home
