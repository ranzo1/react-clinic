import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CheckUps from './pages/checkUps/CheckUps'
import HomePage from './pages/homePage/HomePage'
import Registration from './pages/registration/Registration'
import Header from './components/homePageComponents/header/Header'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/checkups" element={<CheckUps />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
