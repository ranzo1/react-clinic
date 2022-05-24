import React from 'react'
import './clientsReview.css'
import placeholderImg from '../../../assets/user-placeholder.png'

const ClientsReview = () => {
  return (
    <div>
      <section className="review" id="review">
        <h1 className="heading">
          client's <span>review</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={placeholderImg} alt="" />
            <h3>John Deo</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid
              perspiciatis libero nobis rem numquam nesciunt alias sapiente
              minus voluptatem, reiciendis consequuntur optio dolorem!
            </p>
          </div>

          <div className="box">
            <img src={placeholderImg} alt="" />
            <h3>John Deo</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid
              perspiciatis libero nobis rem numquam nesciunt alias sapiente
              minus voluptatem, reiciendis consequuntur optio dolorem!
            </p>
          </div>

          <div className="box">
            <img src={placeholderImg} alt="" />
            <h3>John Deo</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid
              perspiciatis libero nobis rem numquam nesciunt alias sapiente
              minus voluptatem, reiciendis consequuntur optio dolorem!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClientsReview
