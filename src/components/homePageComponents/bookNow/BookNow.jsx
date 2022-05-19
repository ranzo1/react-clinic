import React from 'react'
import './bookNow.css'
import { ReactComponent as BookImg } from '../../../assets/book-img.svg'

const BookNow = () => {
  return (
    <div>
      <section class="book" id="book">
        <div class="row">
          <div class="image">
            <BookImg />
          </div>
          <form action="">
            <h3>Check available appointments</h3>
            <input type="text" placeholder="Doctor" class="box" />
            <input type="number" placeholder="Priority" class="box" />
            <input type="datetime-local" class="box" />
            <input type="datetime-local" class="box" />
            <input type="submit" value="book now" class="btn" />
          </form>
        </div>
      </section>
    </div>
  )
}

export default BookNow
