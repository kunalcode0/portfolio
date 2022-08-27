import React from 'react'
import './Footer.css'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
        <a href="#" className="footer__logo">Kunal</a>

        <ul className="links">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#achivement">Achivement</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__social">
            <a href="https://www.facebook.com/thakur.kunal.71868/" target='_blank' ><FaFacebookF/></a>
            <a href="https://www.instagram.com/_.ikunal/" target='_blank'><FaInstagram/></a>
            <a href="https://twitter.com/ikunal_pvt" target='_blank'><FaTwitter/></a>
        </div>
        <div className="footer__copy">
            <small>&copy; Kunalcode0. All Right Reserved</small>
        </div>
    </footer>
  )
}

export default Footer
