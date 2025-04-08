// import React, { useState } from 'react'
// import ReactDom from "react-dom/client"
// import {BrowserRouter, Routes, Route, Link} from "react-router"
// import Home from './Home'
// import BMI from './BMI'
// import Product from './product'
// import Influence from './influence'
// import BioAge from './Bioage'
// import HeartAgeCalculator from './HeartAge'

// function App() {

//   return (
//     <>
//     <BrowserRouter>
//     <nav className='nav'>
//       <h1>Fitness.</h1>
//       <div className='nav-link'>
//       <Link to = "/" className='link'>Home</Link>
//       <Link to = "/BMI" className='link'>BMI</Link>
//       <Link to = "/Product" className='link'>Products</Link>
//       <Link to = "/Influence" className='link'>Influence</Link>
//       <Link to = "/BioAge" className='link'>BioAge</Link>
//       <Link to = "/HeartAge" className='link'>HeartAge</Link>
//       </div>
//     </nav>
    
//     <Routes>
//       <Route path='/' element = {<Home/>}></Route>
//       <Route path='/BMI' element = {<BMI/>}></Route>
//       <Route path='/BioAge' element = {<BioAge/>}></Route>
//       <Route path='/Product' element = {<Product/>}></Route>
//       <Route path='/Influence' element = {<Influence/>}></Route>
//       <Route path='/HeartAge' element = {<HeartAgeCalculator/>}></Route>
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App


import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from './Home';
import BMI from './BMI';
import Product from './product';
import Influence from './influence';
import BioAge from './Bioage';
import HeartAgeCalculator from './HeartAge';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <BrowserRouter>
        <nav className='nav'>
          <div className="nav-header">
            <h1>Fitness.</h1>
            <button className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={`nav-link ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" className='link' onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/Product" className='link' onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link to="/Influence" className='link' onClick={() => setIsMenuOpen(false)}>Influence</Link>
            <Link to="/BMI" className='link' onClick={() => setIsMenuOpen(false)}>BMI</Link>
            <Link to="/BioAge" className='link' onClick={() => setIsMenuOpen(false)}>BioAge</Link>
            <Link to="/HeartAge" className='link' onClick={() => setIsMenuOpen(false)}>HeartAge</Link>
          </div>
        </nav>
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/BMI' element={<BMI/>}></Route>
          <Route path='/BioAge' element={<BioAge/>}></Route>
          <Route path='/Product' element={<Product/>}></Route>
          <Route path='/Influence' element={<Influence/>}></Route>
          <Route path='/HeartAge' element={<HeartAgeCalculator/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;