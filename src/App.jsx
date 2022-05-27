import React from 'react'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import CheckUps from './pages/checkUps/CheckUps'
import HomePage from './pages/homePage/HomePage'
import Registration from './pages/registration/Registration'
import WithoutHeader from './components/WithoutHeader'
import WithHeader from './components/WithHeader'
import Header from './components/homePageComponents/header/Header'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<WithoutHeader />}>
            <Route path="/registration" element={<Registration />} />
          </Route>
          <Route element={<WithHeader />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkups" element={<CheckUps />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
