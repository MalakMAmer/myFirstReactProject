import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Nav from './Nav'
import Header from './Header'
import CardsContainer from './CardsContainer'
import Footer from './Footer'

function App() {

  return (
    <>
      <Nav />
      <Header />
      <CardsContainer />
      <Footer />
    </>
  )
}

export default App
