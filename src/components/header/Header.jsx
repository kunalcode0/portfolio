import React from 'react'
import './Header.css'
import Social from './Social'
import CTA from './CTA';
import ME from '../../assets/ME.png'


function Header() {
  return (
  <>
  <header>
    <div className="container header__container">
        <h5>Hii I'm</h5>
        <h1>Kunal</h1>
        <h5 className="text-light">
            Frontend Devloper
        </h5>
     
        <CTA/>
        <Social/>

        <div className="header__img">
           <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__name">scroll down</a>

    </div>
   
   
  </header>
  </>
  )
}

export default Header
