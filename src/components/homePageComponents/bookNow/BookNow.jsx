import React from 'react'
import './bookNow.css'
import { ReactComponent as BookImg } from '../../../assets/book-img.svg'

const BookNow = () => {
  return (
    <div>
      <section className="book" id="book">
        <div className="row">
          <div className="image">
            <BookImg />
          </div>
          <form action="">
            <h3>Check available appointments</h3>
            <input type="text" placeholder="Doctor" className="box" />
            <input type="number" placeholder="Priority" className="box" />
            <input type="datetime-local" className="box" />
            <input type="datetime-local" className="box" />
            <input type="submit" value="book now" className="btn" />
          </form>
        </div>
      </section>
    </div>
  )
}

export default BookNow
