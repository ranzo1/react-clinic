import React from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import OurServices from './components/ourServices/OurServices'
import About from './components/about/About'
import OurDoctors from './components/ourDoctors/OurDoctors'
import BookNow from './components/bookNow/BookNow'
import ClientsReview from './components/clientsReview/ClientsReview'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <OurServices />
      <About />
      <OurDoctors />
      <BookNow />
      <ClientsReview />
      <Footer />
    </div>
  )
}

export default App
