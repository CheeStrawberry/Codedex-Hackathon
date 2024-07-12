import { Routes, Route } from "react-router-dom";
import { useContext, useState } from 'react'

import './css/LandingPage.css'

import LandingPage from "./components/LandingPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Add other routes here */}
    </Routes>
  )
}

export default App
