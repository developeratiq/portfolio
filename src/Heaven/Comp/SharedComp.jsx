import React from 'react'
import Nav from './Nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'

function SharedComp() {
  return (
    <>
      <Nav/>
      <div className="outlet">
      <Outlet/>
      </div>
      <Footer/>


    </>
  )
}

export default SharedComp