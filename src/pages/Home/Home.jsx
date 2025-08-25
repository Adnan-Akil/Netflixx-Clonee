import React from 'react'
import './Home.css'  
import Navbar from '../../components/Navbar/Navbar.jsx'
import hero_img from '../../assets/hero_banner.png'
import hero_title from '../../assets/hero_title.png'
import play_button from '../../assets/play_icon.png'
import info_button from '../../assets/info_icon.png'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_img} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Drivers, managers and team owners live life in the fast lane — both on and off the track — during each cutthroat season of Formula 1 racing.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_button} alt=""/>Watch Now</button>
            <button className='btn dark-btn'><img src={info_button} alt=""/>More Info</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
