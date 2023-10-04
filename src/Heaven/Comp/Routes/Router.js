import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import About from '../MainBody/About'
import Nav from '../Nav/Nav'
import Footer from '../footer/Footer'
import Body from '../MainBody/Body'
import SharedComp from '../SharedComp'
import Classes from '../MainBody/Classes'
import Portfolio from '../MainBody/Portfolio'
import Gallery from '../MainBody/Gallery'
import Login from '../MainBody/Login'

function Router() {
  return (
<BrowserRouter>
{/* <Nav/> */}
  <Routes>
      <Route path='' element={<SharedComp></SharedComp>}>

      <Route path='/' element={<Body></Body>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
      <Route path='/class' element={<Classes></Classes>}></Route>
      <Route path='/gallery' element={<Gallery></Gallery>}></Route>

      </Route>
      <Route path='/login' element={<Login></Login>}></Route>
      
  </Routes>
  {/* <Footer/> */}
</BrowserRouter>
  )
}

export default Router