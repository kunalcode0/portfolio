import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/portfolio1.png'
import img2 from '../../assets/portfolio2.png'
import img3 from '../../assets/portfolio3.png'
import img4 from '../../assets/weather-app.png'
import img5 from '../../assets/ecommerce.png'
import img6 from '../../assets/gymapp.png'

function Portfolio() {
  return (
   <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
        <article className='portfolio__item'>
            <div className="portfolio__image">
                <img src={img1} alt="" />
            </div>
            <h3>Responsive Portfolio Website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/kunalcode0/kunal-portfolio.com"  target="_blank"   rel="noreferrer" className="btn">Github</a>
            <a href="https://kunalcode0.github.io/kunal-portfolio.com/" className="btn btn-primary" target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__image">
                <img src={img2} alt="" />
            </div>
            <h3>Responsive Coffee Website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/kunalcode0/coffee-website"  target="_blank"   rel="noreferrer" className="btn">Github</a>
            <a href="https://kunalcode0.github.io/coffee-website/" className="btn btn-primary"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__image">
                <img src={img3} alt="" />
            </div>
            <h3>Responsive Resturant Website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/kunalcode0/resturant-website" className="btn"  target="_blank"   rel="noreferrer">Github</a>
            <a href="https://kunalcode0.github.io/resturant-website/" className="btn btn-primary"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__image">
                <img src={img4} alt="" />
            </div>
            <h3>Weather App</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/kunalcode0/weather-app" className="btn"  target="_blank"   rel="noreferrer">Github</a>
            <a href="https://kunalcode0.github.io/weather-app/" className="btn btn-primary"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__image">
                <img src={img6} alt="" />
            </div>
            <h3>Gym website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/kunalcode0/gym-app" className="btn"  target="_blank"   rel="noreferrer">Github</a>
            <a href="https://kunalcode0.github.io/gym-app/" className="btn btn-primary"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__image">
                <img src={img5} alt="" />
            </div>
            <h3>Ecommerce</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/kunalcode0/trend-zone" className="btn"  target="_blank"   rel="noreferrer">Github</a>
            <a href="https://kunalcode0.github.io/trend-zone/" className="btn btn-primary"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>
    </div>
   </section>
  )
}

export default Portfolio
