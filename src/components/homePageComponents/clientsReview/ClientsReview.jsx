import React from 'react'
import './clientsReview.css'
import placeholderImg from '../../../assets/user-placeholder.png'

const ClientsReview = () => {
  return (
    <div>
      <section class="review" id="review">
        <h1 class="heading">
          client's <span>review</span>
        </h1>

        <div class="box-container">
          <div class="box">
            <img src={placeholderImg} alt="" />
            <h3>john deo</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid
              perspiciatis libero nobis rem numquam nesciunt alias sapiente
              minus voluptatem, reiciendis consequuntur optio dolorem!
            </p>
          </div>

          <div class="box">
            <img src={placeholderImg} alt="" />
            <h3>john deo</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid
              perspiciatis libero nobis rem numquam nesciunt alias sapiente
              minus voluptatem, reiciendis consequuntur optio dolorem!
            </p>
          </div>

          <div class="box">
            <img src={placeholderImg} alt="" />
            <h3>john deo</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <p class="text">
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
