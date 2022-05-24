import React from 'react'
import './ourDoctors.css'
import placeholder from '../../../assets/user-placeholder.png'
import doctor1 from '../../../assets/doc-1.jpg'
import doctor2 from '../../../assets/doc-2.jpg'
import doctor3 from '../../../assets/doc-3.jpg'
import doctor4 from '../../../assets/doc-4.jpg'
import doctor5 from '../../../assets/doc-5.jpg'
import doctor6 from '../../../assets/doc-6.jpg'

const OurDoctors = () => {
  return (
    <div>
      <section className="doctors" id="doctors">
        <h1 className="heading">
          our <span>doctors</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={doctor1} alt="" />
            <h3>Nada Macura</h3>
            <span className="expertise-span">Specialist doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>

          <div className="box">
            <img src={doctor2} alt="" placeholder={placeholder} />
            <h3>Branimir Nestorovic</h3>
            <span className="expertise-span">Generalist doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>

          <div className="box">
            <img src={doctor3} alt="" />
            <h3>Zeljko Mitrovic</h3>
            <span className="expertise-span">Generalist doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>

          <div className="box">
            <img src={doctor4} alt="" />
            <h3>John Deo</h3>
            <span className="expertise-span">Specialist doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>

          <div className="box">
            <img src={doctor5} alt="" />
            <h3>Ryan Target</h3>
            <span className="expertise-span">Generalist doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>

          <div className="box">
            <img src={doctor6} alt="" />
            <h3>Thomas Muller</h3>
            <span className="expertise-span">Generalist doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurDoctors
