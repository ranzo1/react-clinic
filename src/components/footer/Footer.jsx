import React from 'react'
import './Footer'
import './footer.css'

const Footer = () => {
  return (
    <div>
      <section class="footer">
        <div class="box-container">
          <div class="box">
            <h3>quick links</h3>
            <a href="#">
              <i class="fas fa-chevron-right"></i> home
            </a>
            <a href="#">
              <i class="fas fa-chevron-right"></i> services
            </a>
            <a href="#">
              <i class="fas fa-chevron-right"></i> about
            </a>
            <a href="#">
              <i class="fas fa-chevron-right"></i> doctors
            </a>
            <a href="#">
              <i class="fas fa-chevron-right"></i> book
            </a>
            <a href="#">
              <i class="fas fa-chevron-right"></i> review
            </a>
          </div>

          <div class="box">
            <h3>our services</h3>
            <a href="#">
              <i class="fas fa-chevron-right"></i> dental care
            </a>
            <a href="#">
              <i class="fas fa-chevron-right"></i> message therapy
            </a>
            <a href="#">
              <i class="fas fa-chevron-right"></i> cardioloty
            </a>
            <a href="#">
              <i class="fas fa-chevron-right"></i> diagnosis
            </a>
            <a href="#">
              <i class="fas fa-chevron-right"></i> ambulance service
            </a>
          </div>

          <div class="box">
            <h3>contact info</h3>
            <a href="#">
              <i class="fas fa-phone"></i> +381-011-456-789
            </a>
            <a href="#">
              <i class="fas fa-phone"></i> +381-64-542-32-32
            </a>
            <a href="#">
              <i class="fas fa-envelope"></i> greencare.support@gmail.com
            </a>
            <a href="#">
              <i class="fas fa-map-marker-alt"></i> Novi Sad, Serbia - 21101
            </a>
          </div>

          <div class="box">
            <h3>follow us</h3>
            <a href="#">
              <i class="fab fa-facebook-f"></i> facebook
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i> twitter
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i> twitter
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i> instagram
            </a>
            <a href="#">
              <i class="fab fa-linkedin"></i> linkedin
            </a>
            <a href="#">
              <i class="fab fa-pinterest"></i> pinterest
            </a>
          </div>
        </div>

        <div class="credit">
          created by <span>Greencare</span> | all rights reserved
        </div>
      </section>
    </div>
  )
}

export default Footer
