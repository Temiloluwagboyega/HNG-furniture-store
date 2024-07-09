import React from 'react'
import './Hero.css'
import HeroImg from '../assets/hero-img.png'
export const Hero = () => {
  return (
    <>
        <div className="hero">
            <div className="hero-content">
                <h1>Comfort and <span>style</span> for your  <br/> <span>Sleep</span> Sanctuary </h1>
                <p>Discover the perfect blend of softness and durability with our exquisite collection of bed sheets.</p><br/><br /> <br />
                <button className='hero-btn'>Get Started</button>
            </div>
            <div className="hero-img">
                <img src={HeroImg} alt=""/>
            </div>
        </div>
    </>
  )
}

export default Hero
